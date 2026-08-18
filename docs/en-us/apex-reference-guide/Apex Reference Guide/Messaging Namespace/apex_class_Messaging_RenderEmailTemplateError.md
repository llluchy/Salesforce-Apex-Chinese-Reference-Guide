---
doc_id: "apex_class_Messaging_RenderEmailTemplateError"
---

# RenderEmailTemplateError Class

Represents an error that the `RenderEmailTemplateBodyResult` object can contain.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## See Also

- [RenderEmailTemplateError Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_methods)

## RenderEmailTemplateError Methods

The following are methods for `RenderEmailTemplateError`.

## See Also

- [getFieldName()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getFieldName)
- [getMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getMessage)
- [getOffset()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getOffset)
- [getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_Messaging_RenderEmailTemplateError_getStatusCode)

### getFieldName()

Returns the name of the merge field in the error.

#### Signature

`public String getFieldName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMessage()

Returns a message describing the error.

#### Signature

`public String getMessage()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOffset()

Returns the offset within the supplied body text where the error was discovered. If the offset cannot be determined, -1 is returned.

#### Signature

`public Integer getOffset()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getStatusCode()

Returns a Salesforce API status code.

#### Signature

`public System.StatusCode getStatusCode()`

#### Return Value

Type: System.StatusCode
