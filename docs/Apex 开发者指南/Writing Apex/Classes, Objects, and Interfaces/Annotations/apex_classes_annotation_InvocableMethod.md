---
doc_id: "apex_classes_annotation_InvocableMethod"
---

# InvocableMethod Annotation

Use the `InvocableMethod` annotation to identify methods that can be run as invocable actions.

:::tip Note
If a flow invokes Apex, the running user must have the corresponding Apex class security
        set in their user profile or permission set.
:::

Invocable methods are called natively from REST, Apex, flows, Agentforce agents or AI bots that interact with the external API source. Invocable methods have dynamic input and output values and support `describe` calls.

This code sample shows an invocable method with primitive data types.

```apex
public with sharing class AccountQueryAction {
  @InvocableMethod(
    label='Get Account Names'
    description='Returns the list of account names corresponding to the specified account IDs.'
    category='Account'
  )
  public static ListString> getAccountNames(ListID> ids) {
    List accounts = [
      SELECT Name
      FROM Account
      WHERE Id IN :ids
      WITH USER_MODE
    ];
    MapID, String> idToName = new MapID, String>();
    for (Account account : accounts) {
      idToName.put(account.Id, account.Name);
    }
    // put each name in the output at the same position as the id in the input
    ListString> accountNames = new ListString>();
    for (String id : ids) {
      accountNames.add(idToName.get(id));
    }
    return accountNames;
  }
}
```

This code sample shows an invocable method with a specific sObject data type.

```apex
public with sharing class AccountInsertAction {
  @InvocableMethod(
    label='Insert Accounts'
    description='Inserts the accounts specified and returns the IDs of the new accounts or null if account is failed to create.'
    category='Account'
  )
  public static ListID> insertAccounts(List accounts) {
    Database.SaveResult[] results = Database.insert(
      accounts,
      false,
      AccessLevel.USER_MODE
    );
    ListID> accountIds = new ListID>();

    for (Database.SaveResult result : results) {
      if (result.isSuccess()) {
        accountIds.add(result.getId());
      } else {
        accountIds.add(null);
      }
    }

    return accountIds;
  }
}
```

This code sample shows an invocable method with the generic sObject data type.

```apex
public with sharing class GetFirstFromCollection {
  @InvocableMethod
  public static List execute(List requestList) {
    List results = new List();
    for (Requests request : requestList) {
      List inputCollection = request.inputCollection;
      SObject outputMember = inputCollection[0];

      //Create a Results object to hold the return values
      Results result = new Results();

      //Add the return values to the Results object
      result.outputMember = outputMember;

      //Add Result to the results List at the same position as the request is in the requests List
      results.add(result);
    }
    return results;
  }

  public with sharing class Requests {
    @InvocableVariable(
      label='Records for Input'
      description='yourDescription'
      required=true
    )
    public List inputCollection;
  }

  public with sharing class Results {
    @InvocableVariable(
      label='Records for Output'
      description='yourDescription'
      required=true
    )
    public SObject outputMember;
  }
}
```

This code sample shows an invocable method with a custom icon from an SVG file.

```apex
global with sharing class CustomSvgIcon { 
  @InvocableMethod(label='myIcon' iconName='resource:myPackageNamespace__google:top')
  global static ListInteger> myMethod(ListInteger> request) {
    ListInteger> results = new ListInteger>();
    for(Integer reqInt : request) { 
       results.add(reqInt);
    }
    return results;
  }
}
```

This code sample shows an invocable method with a custom icon from the Salesforce Lightning Design System (SLDS).

```apex
public with sharing class CustomSldsIcon { 
  
  @InvocableMethod(iconName='slds:standard:choice') 
  public static void run() {} 
  
  }
```

To handle exceptions within an invocable method, wrap the results in an Apex object that reports failures. The execution of the invocable method must run and return the same number of results as inputs received even if errors occur.

For example, this code sample adjusts positive values by taking their square root and multiplying by pi, setting a success flag to `true`. For negative values, it sets the success flag to `false`.

```apex
global with sharing class AdjustPositiveValuesAction {
  @InvocableMethod(
    label='Adjust Positive Values'
    description='Returns the list of adjusted values. If a number is negative, a failure is reported for that value.'
  )
  public static List doAdjustment(ListDouble> values) {
    List results = new List();

    for (Double value : values) {
      AdjustmentResult result = new AdjustmentResult();

      try {
        // Adjust the value, scale by pi.
        // Note: If the value is negative, this operation throws an exception.
        result.adjustedValue = Math.sqrt(value) * Math.PI;
        result.adjustmentSucceeded = true;
      } catch (Exception e) {
        // If a negative value caused an exception, mark the adjustment as failed, and keep processing other values.
        result.adjustmentSucceeded = false;
      }

      results.add(result);
    }

    return results;
  }

  global with sharing class AdjustmentResult {
    @InvocableVariable(label='True if adjustment succeeded')
    global boolean adjustmentSucceeded;

    @InvocableVariable(
      label='Adjusted value, only valid if adjustment succeeded'
    )
    global Double adjustedValue;
  }
}
```

This test method checks whether the value adjustments were successful and verifies the calculated values for positive inputs.

```apex
// Test class for AdjustPositiveValuesAction
@IsTest
private with sharing class AdjustPositiveValuesActionTest {
  @IsTest
private static void doTest() {
    // Create a list of test values: 4, -1, 1
    ListDouble> values = new ListDouble>();
    values.add(4);
    values.add(-1);
    values.add(1);
  
    Test.startTest();
 
     // Call the doAdjustment method with the test values.
    List results = AdjustPositiveValuesAction.doAdjustment(values);
 
    Test.stopTest();
 
    // Assertions to check if adjustments were successful or not for each input value.
    Assert.isTrue(results[0].adjustmentSucceeded);
    Assert.isFalse(results[1].adjustmentSucceeded);
    Assert.isTrue(results[2].adjustmentSucceeded);
 
    // Assertions to check the calculated adjusted values for positive inputs.
    Assert.areEqual(2 * Math.PI, results[0].adjustedValue);
    Assert.areEqual(Math.PI, results[2].adjustedValue);
  }
}
```

## Supported Modifiers

All modifiers are optional.

-   **label**: The label for the method, which appears as the action name in Flow Builder. The default is the method name, though we recommend that you provide a label.
-   **description**: The description for the method, which appears as the action description in Flow Builder. The default is `Null`.
-   **callout**: The callout modifier identifies whether the method calls to an external system. If the method calls to an external system, add `callout=true`. The default value is `false`.
-   **capabilityType**: The capability that integrates with the method. The valid format is Name://Name, for example: `PromptTemplateType://SalesEmail`
-   **category**: The category for the method, which appears as the action category in Flow Builder. If no category is provided (by default), actions appear under Uncategorized.
-   **configurationEditor**: The custom property editor that is registered with the method and appears in Flow Builder when an admin configures the action. If you don’t specify this modifier, Flow Builder uses the standard property editor.
-   **iconName**: The name of the icon to use as a custom icon for the action in the Flow Builder canvas. You can specify an SVG file that you uploaded as a static resource or a Salesforce Lightning Design System standard icon.

## InvocableMethod Considerations

-   **Implementation Notes**:
    -   The invocable method must be `static` and `public` or `global`, and its class must be an outer class.
    -   Only one method in a class can have the `InvocableMethod` annotation.
    -   The only annotation that can be used with the `InvocableMethod` annotation is `Deprecated`.
-   **Inputs and Outputs**: There can be at most one input parameter and its data type must be one of the following:
    -   A list of a primitive data type or a list of lists of a primitive data type – the generic `Object` type isn’t supported.
    -   A list of an sObject type or a list of lists of an sObject type.
    -   A list of the generic sObject type (`List<sObject>`) or a list of lists of the generic sObject type (`List<List<sObject>>`).
    -   A list of a user-defined type, containing variables of the supported types or user-defined Apex types, with the `InvocableVariable` annotation. To implement your data type, create a custom global or public Apex class. The class must contain at least one member variable with the invocable variable annotation.

:::tip Note
`@InvocableVariable` fields of type `List<List<sObject>>` are not supported in user-defined Apex
                  classes and cause a runtime error. Use `List<List<sObject>>` only as a direct `@InvocableMethod` return type.
:::

If the return type isn’t `Null`, the data type returned by the method must be one of the following:

-   A list of a primitive data type or a list of lists of a primitive data type – the generic `Object` type isn’t supported.
-   A list of an sObject type or a list of lists of an sObject type.
-   A list of the generic sObject type (`List<sObject>`) or a list of lists of the generic sObject type (`List<List<sObject>>`).
-   A list of a user-defined type, containing variables of the supported types or user-defined Apex types, with the `InvocableVariable` annotation. To implement your data type, create a custom global or public Apex class. The class must contain at least one member variable with the invocable variable annotation.

:::tip Note
`@InvocableVariable` fields of type `List<List<sObject>>` are not supported in user-defined Apex
                  classes and cause a runtime error. Use `List<List<sObject>>` only as a direct `@InvocableMethod` return type.
:::

For a correct bulkification implementation, the Inputs and Outputs must match on both the size and the order. For example, the i-th Output entry must correspond to the i-th Input entry. Matching entries are required for data correctness when your action is in bulkified execution, such as when an apex action is used in a record trigger flow.-   **Managed Packages**:
    -   You can use invocable methods in packages, but after you add an invocable method you can’t remove it from later versions of the package.
    -   Public invocable methods can be referred to by flows and processes within the managed package.
    -   Global invocable methods can be referred to anywhere in the subscriber org. Only global invocable methods appear in Flow Builder and Process Builder in the subscriber org. See [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.").

For more information about invocable actions, see [Apex Actions](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_action.meta/api_action/actions_intro.htm "HTML (New Window)") in the *Actions Developer Guide*.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_IntegrationTest.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)

#### See Also

-   [InvocableVariable Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.")
    
-   [*Actions Developer Guide*: Apex Actions](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_action.meta/api_action/actions_obj_apex.htm "Actions Developer Guide: Apex Actions  - HTML (New Window)")
    
-   [*REST API Developer Guide*: Invocable Actions](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_rest.meta/api_rest/resources_actions_invocable.htm "REST API Developer Guide: Invocable Actions  - HTML (New Window)")
    
-   [*Salesforce Help*: Add a Custom Icon to an Apex-Defined Action](https://help.salesforce.com/s/articleView?id=platform.flow_build_extend_apex_type_add_a_custom_icon.htm&type=5&language=en_US "Salesforce Help: Add a Custom Icon to an Apex-Defined
    Action - HTML (New Window)")
    
-   [*Apex Reference Guide*: Action Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Invocable_Action.htm "Apex Reference Guide: Action Class - HTML (New Window)")
    
-   [*Lightning Web Components Developer Guide*: Develop Custom Property Editors for Flow Builder](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_flow_custom_property_editor "Lightning Web Components Developer Guide: Develop Custom
    Property Editors for Flow Builder - HTML (New Window)")
    
-   [*Prompt Builder*: Ground with Apex](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_ground_apex.htm&type=5&language=en_US "Prompt Builder: Ground with Apex - HTML (New Window)")
    
-   [Making Callouts to External Systems from Invocable Actions](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_callout.htm "When you define a method that runs as an invocable action in a screen flow and makes a callout to an external system, use the callout modifier.")
    
-   [Extend Invocable Action Configuration in Flow Builder](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm "Simplify the configuration of Apex invocable actions in Flow Builder by using the InvocableActionExtension metadata file. Create partial custom property editors for one or more input parameters that don't require updates when you introduce new versions of your action. Define dynamic or static picklists for input parameters and control input parameter display order and grouping. You can also add a custom header to your property editor.")
