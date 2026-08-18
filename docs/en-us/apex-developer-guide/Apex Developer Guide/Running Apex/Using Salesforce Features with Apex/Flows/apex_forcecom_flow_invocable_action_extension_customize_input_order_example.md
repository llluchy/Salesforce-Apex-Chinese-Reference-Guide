---
doc_id: "apex_forcecom_flow_invocable_action_extension_customize_input_order_example"
---

# Extend Invocable Action Configuration in Flow Builder

Simplify the configuration of Apex invocable actions in Flow Builder by using the InvocableActionExtension metadata file. Create partial custom property editors for one or more input parameters that don't require updates when you introduce new versions of your action. Define dynamic or static picklists for input parameters and control input parameter display order and grouping. You can also add a custom header to your property editor.

## Example: Sorting Booking Request Inputs

An Apex class for a travel application, `BookingAction`, uses a custom input type, `BookingRequest`, to manage two required dates: `startDate` and `endDate`. By default, the flow shows inputs alphabetically. Use the InvocableActionExtension metadata file to define the logical order and group the fields under a relevant section header to improve the user experience.

## Create the Apex Invocable Action

This section shows the Apex class structure required for the invocable action that exposes configurable input parameters to a flow.

This Apex class creates an invocable action, `BookingAction`, designed to send a booking request to an external system. Note that the method accepts a `List` input to support bulk processing, a best practice for Apex development.

:::tip Note
Users who invoke the action from a flow must have the appropriate Apex class access
    set in their profile or permission
    set.
:::

public class BookingAction { @InvocableMethod( label='Booking Request' description='Sends a booking reservation request to booking system' category='Booking Integrations' callout=true // Indicates this action makes an external callout ) public static List<BookingResult> invoke(List<BookingRequest> request) { // Apex business logic goes here to process the booking requests. // This process must be designed to handle multiple requests (bulkified). // Example mock logic: List<BookingResult> results = new List<BookingResult>(); for (BookingRequest req : request) { BookingResult result = new BookingResult(); result.status = 'Booking request received for dates: ' + req.startDate + ' to ' + req.endDate; results.add(result); } return results; } public class BookingRequest { @InvocableVariable( label='Requested Start Date' description='The start date for the booking.' required=true ) public Date startDate; @InvocableVariable( label='Requested End Date' description='The end date for the booking.' required=true ) public Date endDate; } public class BookingResult { @InvocableVariable( label='Status Message' ) public String status; // Include other output variables as needed. } }

The `invoke` method uses the `@InvocableMethod` annotation to be callable from a flow. Input and output are defined by the inner classes, `BookingRequest` and `BookingResult`, ensuring data integrity. The individual input variables within `BookingRequest` use the `@InvocableVariable` annotation, which allows them to be exposed as configurable fields in Flow Builder.

![The invocable action’s default order of inputs in Flow Builder](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fapex%2Fimages%2Fforcecome_flow_invocable_action_extension_customize_input_standard.png&folder=apexcode)

## Define Input Order with Invocable Action Extension

Use the InvocableActionExtension metadata file to specify the sort order of input fields. You can also organize them into collapsible groups for improved usability in Flow Builder.

The file must have the suffix .invocableactionextension-meta.xml and the filename corresponds to the Apex class name, for example, BookingAction.invocableactionextension-meta.xml. Add the metadata file to the invocableactionextensions directory.

This metadata file targets each input parameter and uses the `<key>Order</key>` attribute so the start date appears before the end date. It also uses the `<key>Group</key>` attribute to organize both inputs under a single collapsible section named Booking Dates.

:::tip Important
To sort the order of input fields, define
                an `Order` for all input parameters for the action.
                If you define an `Order` for at least one parameter,
                you must define an `Order` for all parameters within
                the action to avoid unexpected behavior.
:::

```xml
version="1.0" encoding="UTF-8"?>
 xmlns="http://soap.sforce.com/2006/04/metadata">
    >
        >ActionParameter>
        >BookingAction.BookingRequest.startDate>
        >
            >Order>
            >Integer>
            >1> >
        >
            >Group>
            >String>
            >Booking Dates> >
    >

    >
        >ActionParameter>
        >BookingAction.BookingRequest.endDate>
        >
            >Order>
            >Integer>
            >2> >
        >
            >Group>
            >String>
            >Booking Dates> >
    >
>
```

The `<targets>` elements identify the specific input parameters to be customized. The `<key>Order</key>` attribute explicitly controls the vertical display sequence of the input parameters in Flow Builder. The `<key>Group</key>` attribute is used to create the collapsible Booking Dates section, improving the organization and scannability of the action's inputs.

![The invocable action’s custom order of inputs in Flow Builder](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fapex%2Fimages%2Fforcecome_flow_invocable_action_extension_customize_input_order.png&folder=apexcode)

## Define Static Picklist Values for Input Parameters

Use the `ProvidedValuesList` standard additional attribute to provide picklist options for input parameters. Users select from predefined values, which reduces configuration errors. Each input parameter supports up to 500 total picklist values.

For a fixed set of values, use a comma-separated list. Optionally include display labels for one or more values by using a pipe delimiter.

First, add a new input parameter to the `BookingRequest` class:

@InvocableVariable( label='Booking Type' description='The type of booking to create.' required=true ) public String bookingType;

Then define the static picklist values in the InvocableActionExtension metadata file:

```xml
>
    >BookingAction.BookingRequest.bookingType>
    >
        >ProvidedValuesList>
        >hotel|Hotel Reservation, flight|Flight Booking, car|Car Rental>
    >
>
```

In this example, the values `hotel`, `flight`, and `car` are stored in the flow. The labels `Hotel Reservation`, `Flight Booking`, and `Car Rental` appear to users in Flow Builder.

## Define Dynamic Picklist Values for Input Parameters

For picklist values that change based on org data or business logic, create an Apex class that extends `VisualEditor.DynamicPicklist`. The class's `getValues()` method defines the picklist logic and returns the values.

public class BookingTypeDynamicPicklist extends VisualEditor.DynamicPicklist { public override VisualEditor.DataRow getDefaultValue() { VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('hotel', 'Hotel Reservation'); return defaultValue; } public override VisualEditor.DynamicPicklistRows getValues() { VisualEditor.DynamicPicklistRows picklistValues = new VisualEditor.DynamicPicklistRows(); // Query available booking types from custom metadata or other source List<BookingType\_\_mdt> types = \[SELECT Value\_\_c, Label\_\_c FROM BookingType\_\_mdt\]; for (BookingType\_\_mdt type : types) { VisualEditor.DataRow row = new VisualEditor.DataRow(type.Value\_\_c, type.Label\_\_c); picklistValues.addRow(row); } return picklistValues; } }

Reference the Apex class in the InvocableActionExtension metadata file by using the `apex://` URI format:

```xml
>
    >BookingAction.BookingRequest.bookingType>
    >
        >ProvidedValuesList>
        >apex://BookingTypeDynamicPicklist>
    >
>
```

 

:::tip Important
Dynamic picklist logic runs when users configure the action in Flow Builder.
                    Efficient logic prevents timeouts during action configuration.
:::

## Add a Custom Header to an Action

Use the `CustomHeaderLwcName` standard additional attribute to add a custom header to your Apex action's standard property editor. The header appears at the top of the property panel in Flow Builder. It provides context, instructions, or additional information to improve the configuration experience.

First, create a Lightning web component that shows the header content. A Lightning web component consists of a JavaScript file and an HTML template file.

Create the JavaScript controller file:

```js
// bookingActionHeader.js
import { LightningElement } from 'lwc';

export default class BookingActionHeader extends LightningElement {}
```

Create the HTML template file that defines the header's content and appearance:

```xml
otherprops="xml">
>
     class="slds-box slds-theme_info slds-m-bottom_small">
         class="slds-text-heading_small">Booking Action Configuration>
        >Configure the booking request parameters below. Ensure you have enabled external callouts before using this action.>
    >
>
>
```

Then reference the Lightning web component in the InvocableActionExtension metadata file. Use `ActionDefinition` as the target type to apply the header to the entire action:

```xml
>
    >ActionDefinition>
    >BookingAction>
    >
        >CustomHeaderLwcName>
        >c:bookingActionHeader>
    >
>
```

When users configure the action in Flow Builder, the custom header appears at the top of the property panel before the input parameters.

## Create Partial Custom Property Editors for Input Parameters

Use partial custom property editors (CPEs) to create custom configuration interfaces for one or more related input parameters. Full custom property editors replace the entire action configuration interface. Partial CPEs customize specific parameters while other parameters use the standard property editor.

With partial CPEs, you can add new input parameters to your action without updating the CPE code. The new parameters automatically use the standard property editor. Full CPEs require code updates whenever you modify the action's parameters. This flexibility makes partial CPEs easier to maintain as your action evolves.

First, add related input parameters to the `BookingRequest` class that benefit from coordinated configuration:

@InvocableVariable( label='Assignee Type' description='The type of assignee for this booking.' required=true ) public String assigneeType; @InvocableVariable( label='Assignee' description='The user or queue to assign this booking to.' required=true ) public String assignee;

Create a Lightning web component that serves as the partial CPE. The component can control how both parameters are configured together.

Create the JavaScript controller file:

```js
// bookingAssigneeCpe.js
import { LightningElement, api } from 'lwc';

export default class BookingAssigneeCpe extends LightningElement {
    @api inputVariables;
    @api genericTypeMappings;
    
    // Logic to handle assigneeType and assignee coordination
    handleAssigneeTypeChange(event) {
        // Update available assignee options based on selected type
    }
}
```

Create the HTML template file:

```xml
>
    
        label="Assignee Type"
        value={assigneeType}
        options={assigneeTypeOptions}
        onchange={handleAssigneeTypeChange}>
    >
    
    
        label="Assignee"
        value={assignee}
        options={assigneeOptions}>
    >
>
```

Configure the partial CPE in the InvocableActionExtension metadata file. First, assign the CPE to the primary parameter by using the `CpeName` attribute:

```xml
>
    >ActionParameter>
    >BookingAction.BookingRequest.assigneeType>
    >
        >CpeName>
        >c:bookingAssigneeCpe>
    >
>
```

Then link the related parameter to the same CPE using the `ConfiguredBy` attribute:

```xml
>
    >ActionParameter>
    >BookingAction.BookingRequest.assignee>
    >
        >ConfiguredBy>
        >assigneeType>
    >
>
```

When users configure the action in Flow Builder, the partial CPE manages both the `assigneeType` and `assignee` parameters. Other input parameters in the action continue to use the standard property editor. Each parameter can belong to only one partial CPE. When a CPE controls multiple input parameters, the primary parameter's `Order` attribute determines where the CPE appears in the property panel.

## See Also

- [InvocableMethod Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)

-   [InvocableVariable Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.")
    
-   [*Metadata API Developer Guide*: InvocableActionExtension](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_invocableactionextension.htm "Metadata API Developer Guide: InvocableActionExtension - HTML (New Window)")
    
-   [*Apex Reference Guide*: DynamicPicklist Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_VisualEditor_DynamicPicklist.htm "Apex Reference Guide: DynamicPicklist Class - HTML (New Window)")
