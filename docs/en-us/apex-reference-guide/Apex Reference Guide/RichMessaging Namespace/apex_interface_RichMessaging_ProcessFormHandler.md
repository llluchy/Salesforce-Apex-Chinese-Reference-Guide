---
doc_id: "apex_interface_RichMessaging_ProcessFormHandler"
---

# ProcessFormHandler Interface

Apex interface that processes the responses to forms submitted in a messaging session.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [ProcessFormHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm#apex_RichMessaging_ProcessFormHandler_methods)

## ProcessFormHandler Methods

The following are methods for `ProcessFormHandler`.

## See Also

- [processFormRequest](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm#apex_RichMessaging_ProcessFormHandler_processFormRequest)

### processFormRequest

Processes the form request and returns the ID of the record created during form processing.

#### Signature

`ID processFormRequest(RichMessaging.ProcessFormResponse formResponse)`

#### Parameters

-   **formResponse**: Type: RichMessaging.ProcessFormResponse The form response.

#### Return Value

-   **ID**: Type: RichMessaging.ProcessFormResponse

#### ProcessFormHandler Example Implementation

The sample `ContactApexFormHandler` Apex class automatically captures the customer's submitted details, creates a Contact record in Salesforce, and returns the Contact record ID.

This is an example implementation of the `RichMessaging.ProcessFormHandler` interface.

```plain
global class ContactApexFormHandler implements Richmessaging.ProcessFormHandler{
    global ID 
    processFormRequest(RichMessaging.ProcessFormResponse formResponse) {
        // Create a new Contact object
            Contact newContact = new Contact(
            Phone = formResponse.formValues.get('Phone'),
            Salutation = formResponse.formValues.get('Salutation'),
            Email = formResponse.formValues.get('Email')
            );
    // Insert the new contact into the database
    insert newContact;
     // Return the ID of the newly created contact
     return newContact.Id;
```

For more information, see "Create a Form Based on an Apex Class" in [this help topic](https://help.salesforce.com/s/articleView?id=service.messaging_components_forms.htm&language=en_US).
