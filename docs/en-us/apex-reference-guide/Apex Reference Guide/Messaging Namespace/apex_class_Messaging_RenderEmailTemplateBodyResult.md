---
doc_id: "apex_class_Messaging_RenderEmailTemplateBodyResult"
---

# RenderEmailTemplateBodyResult Class

Contains the results for rendering email templates.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## See Also

- [RenderEmailTemplateBodyResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_methods)

## RenderEmailTemplateBodyResult Methods

The following are methods for `RenderEmailTemplateBodyResult`.

## See Also

- [getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_getErrors)
- [getMergedBody()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_getMergedBody)
- [getSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_getSuccess)

### getErrors()

If an error occurred during the `renderEmailTemplate` method, a `RenderEmailTemplateError` object is returned.

#### Signature

`public List<Messaging.RenderEmailTemplateError> getErrors()`

#### Return Value

Type: List<Messaging.RenderEmailTemplateError>

### getMergedBody()

Returns the rendered body text with merge field references replaced with the corresponding record data.

#### Signature

`public String getMergedBody()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSuccess()

Indicates whether the operation was successful.

#### Signature

`public Boolean getSuccess()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
