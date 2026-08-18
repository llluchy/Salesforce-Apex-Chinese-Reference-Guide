---
doc_id: "apex_ConnectAPI_PardotBusinessUnitContext_static_methods"
---

# PardotBusinessUnitContext Class

Get the Pardot business units the context user has access to.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## PardotBusinessUnitContext Methods

These methods are for `PardotBusinessUnitContext`. All methods are static.

## See Also

- [getBusinessUnitContext()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_PardotBusinessUnitContext_static_methods.htm#apex_ConnectAPI_PardotBusinessUnitContext_getBusinessUnitContext_1)
- [getBusinessUnitContextByIsCurrentStatus(isCurrent)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_PardotBusinessUnitContext_static_methods.htm#apex_ConnectAPI_PardotBusinessUnitContext_getBusinessUnitContextByIsCurrentStatus_2)

### getBusinessUnitContext()

Get the Pardot business units the context user has access to.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.PardotBusinessUnitContextOutput getBusinessUnitContext()`

#### Return Value

Type: [`ConnectApi.PardotBusinessUnitContextOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pardot_business_unit_context_output.htm "Pardot business unit context.")

### getBusinessUnitContextByIsCurrentStatus(isCurrent)

Get the Pardot business units the context user has access to by specifying the current status.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.PardotBusinessUnitContextOutput getBusinessUnitContextByIsCurrentStatus(Boolean isCurrent)`

#### Parameters

isCurrent

Type: Boolean

Specifies whether to return only the business unit that’s selected as the context user's current business unit context in the business unit switcher of the Pardot Lightning app (`true`) or to return only the business units that aren’t selected as the context user's current business unit context (`false`).

#### Return Value

Type: [`ConnectApi.PardotBusinessUnitContextOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pardot_business_unit_context_output.htm "Pardot business unit context.")
