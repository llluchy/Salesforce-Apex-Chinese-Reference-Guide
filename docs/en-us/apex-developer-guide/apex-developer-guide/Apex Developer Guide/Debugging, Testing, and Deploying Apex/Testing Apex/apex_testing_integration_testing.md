---
doc_id: "apex_testing_integration_testing"
---

# Apex Integration Tests for Agentforce and Data 360 Services (Developer Preview)

Use Apex integration tests to write end-to-end tests that exercise real interactions between your Salesforce org and services such as Agentforce and Data 360. Unlike standard Apex unit tests, integration tests relax callout restrictions and transaction rollback semantics, so your tests can make real service calls, commit data mid-transaction, and make assertions on expected outcomes. As a developer preview feature, integration tests are available only in scratch orgs. You can’t run them in production orgs or during metadata deployments.

:::tip Note
The Apex Integration Tests feature is available as a developer preview in scratch
                orgs in Summer ’26 (API version 67.0). The feature isn’t generally available unless
                or until Salesforce announces its general availability in documentation or in press
                releases or public statements. All commands, parameters, and other features are
                subject to change or deprecation at any time, with or without notice. Don't
                implement functionality developed with these commands or tools in your production
                package.
:::

## How Integration Tests Compare to Unit Tests

Integration tests complement, rather than replace, existing Apex unit tests. Unit tests remain the right choice for testing isolated business logic, triggers, and flows. Integration tests are for scenarios that require real service interactions across transaction boundaries. Use integration tests used in these ways.

-   Test Agentforce callouts and verify their side effects on org data.
-   Run real SOQL queries against Data 360 data model objects (DMOs) without stub mocks.
-   Test behavior that depends on committed data, such as field history tracking across updates.

This table shows the key differences between standard Apex unit tests(@IsTest) and integration tests (@IntegrationTest).

|  | Unit Tests | Integration Tests |
| --- | --- | --- |
| Agentforce and Data 360 callouts | Blocked; require mocks | Allowed |
| Transaction behavior | Auto-rollback | Data committed. Use `@TearDown` for cleanup |
| Data visibility | Test data silo by default | `SeeAllData=true` by default |
| Code coverage | Counts toward deployment code coverage requirements | Doesn’t count toward deployment code coverage requirements |
| Metadata deployments | Included. Unit tests are xecuted in metadata deployment. | Excluded |
| Execution | Synchronous or asynchronous | Asynchronous only. Allowed only 1 concurrent execution per org. |
| Maximum runtime | Standard limits | 10 minutes |

## Enable Integration Tests in a Scratch Org Definition File

Before you can run Apex integration tests, you must have a scratch org with the `ApexIntegrationTests` feature enabled.

To enable the feature, add `ApexIntegrationTests` to the features array in the `config/project-scratch-def.json` of your Salesforce DX project.

```apex
{
  "orgName": "Company",
  "edition": "Developer",
  "features": ["ApexIntegrationTests"]
}
```

To create a scratch org with this definition, use the `org create scratch` Salesforce CLI command.

For more information about scratch org development, see [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.262.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm) in the *Salesforce DX Developer Guide*.

## Create an Integration Test Class

To create an Apex integration test class, use these annotations and methods.

-   `@IntegrationTest`: This annotation marks a class and its test methods as integration tests. A class annotated with `@IntegrationTest` can only contain integration test methods and `@TearDown` methods. You can’t annotate a class with both `@IntegrationTest` and `@IsTest` annotations. You can’t call integration test methods from non-test contexts or from `@IsTest` test methods. However, integration tests can call methods in `@IsTest` utility classes such as shared test data factories.
-   `@TearDown`: This annotation marks a static cleanup method that runs after the test completes, regardless of whether the test passes or fails. Use this method to clean up committed test data. The teardown transaction auto-commits at the end of the execution.
-   `IntegrationTest.commitTestOnly()`: This method commits data to the database mid-transaction so that it’s visible to other threads and services. It resets the uncommitted work checkpoint, so subsequent callouts don’t fail. The method also resets tracking for mixed DML operations, so you can perform setup sObject and non-setup sObject DML in separate commit windows. The method can only be called from an `@IntegrationTest` method. Calling it from outside an integration test context results in a runtime error: `Test.commitTestOnly() can only be called from integration testMethods`.

This basic integration test verifies that the service can insert an account.

```apex
@IntegrationTest
public class MyServiceIntegrationTest {

    @IntegrationTest
    public static void testServiceInteraction() {
        Account a = new Account(Name = 'Integration Test Account');
        insert as user a;
        IntegrationTest.commitTestOnly();

        Account result = [SELECT Id, Name FROM Account WHERE Id = :a.Id WITH USER_MODE];
        Assert.areEqual('Integration Test Account', result.Name);
    }

    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Account WHERE Name = 'Integration Test Account'];
    }
}
```

## Test an Agent Action

An integration test can invoke an agent with an invocable action and assert on the response. The `commitTestOnly()` call before the agent invocation is critical. Without it, the record you created exists only in your pending transaction and is invisible to the Agentforce planner service.

```apex
@IntegrationTest
public with sharing class AgentforceIntegrationTest {

    @IntegrationTest
    public static void testAgentSummarizesAccount() {

        Account a = new Account(Name = 'AgentDemoAccount', AnnualRevenue = 1000000);
        insert as user a;
        IntegrationTest.commitTestOnly();

        Invocable.Action action = Invocable.Action.createCustomAction(
            'generateAiAgentResponse',
            'Demo_Action'
        );
        action.setInvocationParameter('userMessage', 'Summarize my Account ' + a.Id);

        List results = action.invoke();
        String response = results[0].getOutputParameters().get('agentResponse').toString();

        Assert.isNotNull(response, 'Agent should return a response');
        Assert.isTrue(response.contains('AgentDemoAccount'),
            'Response should reference the account name');
    }

    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Account WHERE Name = 'AgentDemoAccount'];
    }
}
```

## Generate a report using the AdvancedInputBindings agent script recipe

This example uses the [AdvancedInputBindings](https://developer.salesforce.com/sample-apps/agent-script-recipes/action-configuration/advanced-input-bindings) agent script recipe and generates a sales report for Q2 2026.

```apex
@IntegrationTest
public with sharing class AdvancedInputBindingsIntegrationTest {
    @IntegrationTest
    public static void testAgentUpdate() {
        // Invoke Agentforce service (callout allowed in integration tests)
        Invocable.Action action = Invocable.Action.createCustomAction(
            'generateAiAgentResponse',
            'AdvancedInputBindings'
        );
    
        String prompt = 'Generate a sales report for Q2 2026';
        action.setInvocationParameter('userMessage', prompt);
        List results = action.invoke();

        String response = results[0].getOutputParameters().get('agentResponse').toString();
        Assert.isTrue(response.contains('a0'), 'Expected agent response to create an sobject');
    
        // query and assert the report was created
        List logs = [
            SELECT Id, Report_Type__c, User_ID__c, Format__c
            FROM ASR_Report_Log__c
            WHERE Start_Date__c = 2026-04-01
        ];
        Assert.areEqual(1, logs.size(), 'Report log should be created');
    }

    @tearDown
    public static void destroyTestRecords() {
        List testRecords = [
            SELECT Id, Report_Type__c, User_ID__c, Format__c
            FROM ASR_Report_Log__c
            WHERE Start_Date__c = 2026-04-01
        ];
    
        if (testRecords.size() > 0) {
            delete testRecords;
        }
    }
}
```

## Test a Data 360 SOQL Query

Query Data 360 data model objects (DMOs) directly in integration tests without using `SoqlStubProvider` or `Test.createSoqlStub`. In standard unit tests, SOQL queries against DMO objects require stub mocks. Integration tests bypass this restriction for Data 360 entities.

```apex
@IntegrationTest
public with sharing class DataCloudQueryIntegrationTest {

    @IntegrationTest
    public static void testDMOQuery() {
        List rows = Database.query('SELECT Id FROM Account__dlm WITH USER_MODE LIMIT 1');
        Assert.areEqual(1, rows.size(), 'Data 360 query should return 1 row');
    }
}
```

## Tests as a Specific User

Use `System.runAs()` to run integration test logic as a specific user, including setting up the necessary permission set assignments.

```apex
@IntegrationTest
public with sharing class RunAsIntegrationTest {

    @IntegrationTest
    public static void testAgentResponseAsStandardUser() {
        User u = [SELECT Id FROM User WHERE Alias = 'tstUsr' LIMIT 1];

        System.runAs(u) {
            Account a = new Account(Name = 'AgentDemoAccount');
            insert as user a;
            IntegrationTest.commitTestOnly();

            Invocable.Action action = Invocable.Action.createCustomAction(
                'generateAiAgentResponse',
                'Demo_Action'
            );
            String prompt = 'Summarize my Account ' + a.Id;
            action.setInvocationParameter('userMessage', prompt);
            List results = action.invoke();

            String response = results[0].getOutputParameters()
                .get('agentResponse').toString();
            Assert.isTrue(response.contains('AgentDemoAccount'));
        }
    }

    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Account WHERE Name = 'AgentDemoAccount'];
    }
}
```

## Test External HTTP Callouts

Regular HTTP callouts to external endpoints other than Agentforce and Data 360 still require mocks in integration tests.

```apex
@IntegrationTest
public with sharing class HttpCalloutMockIntegrationTest implements HttpCalloutMock {

    public HTTPResponse respond(HTTPRequest req) {
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('{"status":"success"}');
        res.setStatusCode(200);
        return res;
    }

    @IntegrationTest
    public static void testExternalApiWithMock() {
        Test.setMock(HttpCalloutMock.class, new HttpCalloutMockIntegrationTest());

        Account a = new Account(Name = 'Callout Test Account');
        insert as user a;
        IntegrationTest.commitTestOnly();

        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-api.example.com/api');
        req.setMethod('POST');
        req.setBody('{"accountId":"' + a.Id + '"}');

        HttpResponse res = h.send(req);

        Assert.areEqual(200, res.getStatusCode());
        Assert.isTrue(res.getBody().contains('success'));
    }

    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Account WHERE Name = 'Callout Test Account'];
    }
}
```

## Use Test.startTest() and Test.stopTest() with Asynchronous Apex

Asynchronous Apex operations enqueued in integration tests can be dequeued synchronously using the `Test.startTest()` and `Test.stopTest()` pattern.

```apex
@IntegrationTest
public with sharing class AsyncIntegrationTest {

    public with sharing class AccountProcessorQueueable implements Queueable {
        private Id accountId;

        public AccountProcessorQueueable(Id accountId) {
            this.accountId = accountId;
        }

        public void execute(QueueableContext context) {
            Account a = [SELECT Id, Name FROM Account WHERE Id = :accountId WITH USER_MODE];
            a.Industry = 'Technology';
            update as user a;
        }
    }

    @IntegrationTest
    public static void testQueueableExecution() {
        Account a = new Account(Name = 'Async Test Account');
        insert as user a;
        IntegrationTest.commitTestOnly();

        Test.startTest();
        Id jobId = System.enqueueJob(new AccountProcessorQueueable(a.Id));
        Test.stopTest();

        Account updated = [SELECT Industry FROM Account WHERE Id = :a.Id WITH USER_MODE];
        Assert.areEqual('Technology', updated.Industry,
            'Queueable should have updated the industry');

        AsyncApexJob job = [
            SELECT Status, NumberOfErrors
            FROM AsyncApexJob WHERE Id = :jobId
            WITH USER_MODE
        ];
        Assert.areEqual('Completed', job.Status);
        Assert.areEqual(0, job.NumberOfErrors);
    }   
    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Account WHERE Name = 'Async Test Account'];
    }
}
```

## Create Multiple Commits Within a Transaction

Use `IntegrationTest.commitTestOnly()` multiple times with a test method to commit data progressively, which is useful when later operations depend on previously committed records.

```apex
@IntegrationTest
public with sharing class MultiCommitIntegrationTest {

    @IntegrationTest
    public static void testMultipleCommits() {
        Account a = new Account(Name = 'Commit Test Account');
        insert as user a;
        IntegrationTest.commitTestOnly();

        a.Website = 'example.com';
        update as user a;
        IntegrationTest.commitTestOnly();

        Contact c = new Contact(
            FirstName = 'Test',
            LastName = 'Contact',
            AccountId = a.Id
        );
        insert as user c;
        IntegrationTest.commitTestOnly();

        Assert.areEqual(1,
            [SELECT COUNT() FROM Account WHERE Name = 'Commit Test Account' WITH USER_MODE]);
        Assert.areEqual(1,
            [SELECT COUNT() FROM Contact WHERE AccountId = :a.Id WITH USER_MODE]);
    }

    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Contact WHERE LastName = 'Contact'];
        delete as user [SELECT Id FROM Account WHERE Name = 'Commit Test Account'];
    }
}
```

## Test Field History Tracking

Standard unit tests roll back all data, so field history records are never created. Integration tests commit data, which makes it possible to assert on field history.

```apex
@IntegrationTest
public with sharing class FieldHistoryIntegrationTest {

    @IntegrationTest
    public static void testFieldHistoryIsTracked() {
        Account a = new Account(Name = 'HistoryTestAccount', Website = 'example.com');
        insert as user a;
        IntegrationTest.commitTestOnly();

        a.Website = 'salesforce.com';
        update as user a;
        IntegrationTest.commitTestOnly();

        List history = [
            SELECT Id FROM AccountHistory WHERE AccountId = :a.Id
            WITH USER_MODE
        ];
        Assert.isTrue(history.size() > 0, 'Expected field history to be tracked');
    }

    @TearDown
    public static void tearDown() {
        delete as user [SELECT Id FROM Account WHERE Name = 'HistoryTestAccount'];
    }
}
```

## Run an Integration Test

Both the test method and the teardown method commit their transactions automatically at the end of execution. Data created during the test persists unless explicitly deleted in the teardown.

Integration tests are considered a distinct “IntegrationTest” category that’s separate from Apex unit tests, flow tests, and Agentforce tests. You can discover and run them using the Salesforce CLI or the Tooling API, either a single test class synchronously or multiple test classes asynchronously. Integration tests are excluded from `RunAllTests` during metadata deployments.

## Integration Testing Best Practices

-   Always implement `@TearDown` methods. Because integration tests commit data to the database, test data that is not torn down after the test run can impact subsequent runs. Delete records in the correct order in `@TearDown`. When you create related records, delete child records before parent records to avoid foreign key constraint issues.
-   Use `commitTestOnly()` before callouts to Agentforce and Data 360. These services operate on separate threads that can’t see uncommitted data in your test’s pending transaction.
-   Keep integration tests focused on integration concerns. Test isolated business logic with standard `@IsTest` unit tests. Reserve integration tests for scenarios that require real service interactions.
-   Be aware of concurrency limits. Only one integration test can run per org at a time. Design your test suite accordingly, and prefer shorter, more focused tests over long monolithic ones. Integration tests have access to and can commit data to your org (`seeAllData=true`). Be mindful of other requests that may be trying to write to the same data rows in your org if you use existing data from your org.
-   Create setup data and avoid reusing org data to avoid row lock contention.
-   Plan for the 10-minute runtime limit. If a test involves multiple slow service calls, consider splitting it into separate test methods.
-   Mock external HTTP endpoints. Even in integration tests, regular HTTP callouts to non-Salesforce endpoints require `HttpCalloutMock`. Only Agentforce and Data 360 services are exempt from the mock requirement.

## Integration Testing Limitations and Considerations

-   During developer preview, integration testing can only run in scratch orgs. Integration tests aren’t available in production orgs, sandboxes, or during metadata deployments.
-   Integration tests don’t count toward code coverage requirements.
-   There is no `@TestVisible` access. Unlike `@IsTest` classes, `@IntegrationTest` classes can’t access private members annotated with `@TestVisible` in the test classes.
-   Only asynchronous execution is supported. Only one test runs per org at a time.
-   Asynchronous Apex governor limits (for SOQL, DML, CPU and heap limits) apply to integration testing. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").
-   Integration tests share the same 24-hour limit on asynchronous Apex test runs with flow tests and unit tests.

## See Also

- [https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing.htm)

-   [https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_testing\_stub\_api.htm](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing_stub_api.htm)
    
-   [https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_testing\_unit\_tests.htm](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing_unit_tests.htm)
    
-   [https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm)
    
-   [https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex\_class\_Invocable\_Action.htm](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Invocable_Action.htm)
    
-   [https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_testing\_best\_practices.htm](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing_best_practices.htm)
