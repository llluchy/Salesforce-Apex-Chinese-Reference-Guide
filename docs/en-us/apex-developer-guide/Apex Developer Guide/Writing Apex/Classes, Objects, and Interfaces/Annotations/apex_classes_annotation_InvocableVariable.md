---
doc_id: "apex_classes_annotation_InvocableVariable"
---

# InvocableVariable Annotation

To identify variables used by invocable methods in custom classes, use the `InvocableVariable` annotation.

The `InvocableVariable` annotation identifies a class variable used as an input or output parameter for an `InvocableMethod` method’s invocable action. If you create your own custom class to use as the input or output to an invocable method, you can annotate individual class member variables to make them available to the method.

This code sample shows an invocable method with invocable variables.

```apex
global class ConvertLeadAction {
  @InvocableMethod(label='Convert Leads')
  global static List convertLeads(List requests) {
    List results = new List();
    for (ConvertLeadActionRequest request : requests) {
      results.add(convertLead(request));
    }
    return results;
  }

  public static ConvertLeadActionResult convertLead(ConvertLeadActionRequest request) {
    Database.LeadConvert lc = new Database.LeadConvert();
    lc.setLeadId(request.leadId);
    lc.setConvertedStatus(request.convertedStatus);

    if (request.accountId != null) {
        lc.setAccountId(request.accountId);
    }

    if (request.contactId != null) {
      lc.setContactId(request.contactId);
    }

    if (request.overWriteLeadSource != null && request.overWriteLeadSource) {
      lc.setOverwriteLeadSource(request.overWriteLeadSource);
    }

    if (request.createOpportunity != null && !request.createOpportunity) {
      lc.setDoNotCreateOpportunity(!request.createOpportunity);
    }

    if (request.opportunityName != null) {
      lc.setOpportunityName(request.opportunityName);
    }

    if (request.ownerId != null) {
      lc.setOwnerId(request.ownerId);
    }

    if (request.sendEmailToOwner != null && request.sendEmailToOwner) {
      lc.setSendNotificationEmail(request.sendEmailToOwner);
    }

    Database.LeadConvertResult lcr = Database.convertLead(lc, true);
    if (lcr.isSuccess()) {
      ConvertLeadActionResult result = new ConvertLeadActionResult();
      result.accountId = lcr.getAccountId();
      result.contactId = lcr.getContactId();
      result.opportunityId = lcr.getOpportunityId();
      return result;
    } else {
      throw new ConvertLeadActionException(lcr.getErrors()[0].getMessage());
    }
  }

  global class ConvertLeadActionRequest {
    @InvocableVariable(required=true)
    global ID leadId;

    @InvocableVariable(required=true)
    global String convertedStatus;

    @InvocableVariable
    global ID accountId;

    @InvocableVariable
    global ID contactId;

    @InvocableVariable
    global Boolean overWriteLeadSource;

    @InvocableVariable
    global Boolean createOpportunity;

    @InvocableVariable
    global String opportunityName;

    @InvocableVariable
    global ID ownerId;

    @InvocableVariable
    global Boolean sendEmailToOwner;
  }

  global class ConvertLeadActionResult {
    @InvocableVariable
    global ID accountId;

    @InvocableVariable
    global ID contactId;

    @InvocableVariable
    global ID opportunityId;
  }

  class ConvertLeadActionException extends Exception {}
}
```

This code sample shows an invocable method with invocable variables that have the generic sObject data type.

```apex
public with sharing class GetFirstFromCollection {
  @InvocableMethod
  public static List  execute (List requestList) {
    List inputCollection = requestList[0].inputCollection;
    SObject outputMember = inputCollection[0];

    //Create a Results object to hold the return values
    Results response = new Results();

    //Add the return values to the Results object
    response.outputMember = outputMember;

    //Wrap the Results object in a List container 
    //(an extra step added to allow this interface to also support bulkification)
    List responseWrapper= new List();
    responseWrapper.add(response);
    return responseWrapper;    
  }

public class Requests {
  @InvocableVariable(label='Records for Input' description='yourDescription' required=true)
  public List inputCollection;
  }

public class Results {
  @InvocableVariable(label='Records for Output' description='yourDescription' required=true)
  public SObject outputMember;
  }
}
```

## Supported Modifiers

All modifiers are optional.

:::tip Tip
Default values, labels, and placeholder text appear in Flow Builder for the
        Action element that corresponds to an invocable method. These modifiers help admins
        understand how to use variables in the flow.
:::

-   **defaultValue**: Provide a value to the action at runtime, if no value is provided then these default values are provided to the action at runtime. Valid invocable variable data types are:
    -   Boolean - fields must have a value of `'true'` or `'false'` and case-insensitive. 

```apex
@InvocableVariable(defaultValue='true')
public Boolean myBoolean;
```

    -   Decimal - fields must have a value of `'validDecimalValue'` where the floating point value can’t have a suffix. 

```apex
@InvocableVariable(defaultValue='123.4')
public Decimal myDecimal;
```

    -   Double - fields must have a value of `'validDoubleValue'` where the d suffix is required and case-insensitive. 

```apex
@InvocableVariable(defaultValue='867.3D')
public Double myDouble;
```

    -   Integer - fields must have a value of `'validIntegerValue'` where the integer value can’t have a suffix. 

```apex
@InvocableVariable(defaultValue='-214')
public Integer myInteger;
```

    -   Long - fields must have a value of `'validLongValue'` where the l suffix is required and case-insensitive. 

```apex
@InvocableVariable(defaultValue='922337L')
public Long myLong;
```

    -   String - fields can use any valid string value including the empty string. 

```apex
@InvocableVariable(defaultValue='hello world!')
public String myString;
```

-   **description**: The description for the variable. The default is `Null`.
-   **label**: The label for the variable. The default is the variable name.
-   **placeholderText**: Provides examples or additional guidance about the invocable variable, such as examples of values that can set the invocable variable. Valid invocable variable data types are:
    -   Double - fields must have a value of `'validDoubleValue'` where the d suffix is required and case-insensitive.
    -   Integer - fields must have a value of `'validIntegerValue'` where the integer value can’t have a suffix.
    -   String - fields can use any valid string value including the empty string.
-   **required**: Specifies whether the variable is required. If not specified, the default is `false`. The value is ignored for output variables.

:::tip Note
The
                `defaultValue` modifier throws an error when
              used with `required`.
:::

## Example

The invocable variable annotation supports the modifiers shown in this example.

```apex
@InvocableVariable(label='yourLabel'
 description='yourDescription' placeholderText='yourPlaceholderText'
 required=(true | false))
```

The invocable variable annotation supports `defaultValue` in this example.

```apex
@InvocableVariable(defaultValue='yourDefaultValue')
        global String createOpportunity;
```

## InvocableVariable Considerations

-   Other annotations can’t be used with the `InvocableVariable` annotation.
-   Only global and public variables can be invocable variables.
-   The invocable variable can’t be any of these:
    -   A non-member variable such as a `static` or `local` variable.
    -   A property.
    -   A `final` variable.
    -   `Protected` or `private`.
-   The data type of the invocable variable must be one of these:
    -   A primitive other than Object
    -   An sObject, either the generic sObject or a specific sObject
    -   A list of primitives, sObjects, or objects created from Apex classes
    -   A list of lists of primitives or objects created from Apex classes
-   The invocable variable name in Apex must match the name in the flow. The name is case-sensitive.
-   For managed packages:
    -   Public invocable variables can be set in flows and processes within the same managed package.
    -   Global invocable variables can be set anywhere in the subscriber org. Only global invocable variables appear in Flow Builder and Process Builder in the subscriber org.
-   Starting in API version 66.0, Apex classes used for invocable action parameters must have a visible no-argument constructor. Use the default constructor or add your own constructor. The constructor must be public for non-packaged classes or global for packaged classes invoked from outside the package. See [Using Constructors](atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm).

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)

#### See Also

-   [*Apex Developer Guide*: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Apex Developer Guide: InvocableMethod Annotation
    - HTML (New Window)")
    
-   [*Apex Reference Guide*: Action Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Invocable_Action.htm)
    
-   [Extend Invocable Action Configuration in Flow Builder](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm "Simplify the configuration of Apex invocable actions in Flow Builder by using the InvocableActionExtension metadata file. Create partial custom property editors for one or more input parameters that don't require updates when you introduce new versions of your action. Define dynamic or static picklists for input parameters and control input parameter display order and grouping. You can also add a custom header to your property editor.")
