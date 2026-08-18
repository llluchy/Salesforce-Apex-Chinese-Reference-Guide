---
doc_id: "apex_class_System_IntegrationTest"
---

# IntegrationTest Class (Developer Preview)

Contains the `commitTestOnly()` method that can be called from an `@IntegrationMethod` to commit data mid-transaction so that it’s visible to service threads such as Agentforce and Data 360.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

:::tip Note
The Apex Integration Tests feature is available as a developer preview in scratch orgs
        in Summer ’26 (API version 67.0). The feature isn’t generally available unless or until
        Salesforce announces its general availability in documentation or in press releases or
        public statements. All commands, parameters, and other features are subject to change or
        deprecation at any time, with or without notice. Don't implement functionality developed
        with these commands or tools in your production package.
:::

## See Also

- [IntegrationTest Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_IntegrationTest.htm#apex_System_IntegrationTest_methods)

## IntegrationTest Methods

The following are methods for `IntegrationTest`.

## See Also

- [commitTestOnly()(Developer Preview)](atlas.en-us.apexref.meta/apexref/apex_class_System_IntegrationTest.htm#apex_System_IntegrationTest_commitTestOnly)

### commitTestOnly()(Developer Preview)

Commits data to the database mid-transaction so it’s visible to service threads such as Agentforce and Data 360. It resets the uncommitted work checkpoint and mixed DML tracking for the new transaction boundary. The method can only be called from an `@IntegrationTest` method.

:::tip Note
The Apex Integration Tests feature is available as a developer preview in scratch orgs
        in Summer ’26 (API version 67.0). The feature isn’t generally available unless or until
        Salesforce announces its general availability in documentation or in press releases or
        public statements. All commands, parameters, and other features are subject to change or
        deprecation at any time, with or without notice. Don't implement functionality developed
        with these commands or tools in your production package.
:::

#### Signature

`public static void commitTestOnly()`

#### Return Value

Type: void

## See Also

- [Apex Developer Guide: Apex Integration Tests for Agentforce and Data
              360 Services (Developer Preview)](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_testing_integration_testing.htm)
