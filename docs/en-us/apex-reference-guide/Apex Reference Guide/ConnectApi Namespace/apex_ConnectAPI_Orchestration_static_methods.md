---
doc_id: "apex_ConnectAPI_Orchestration_static_methods"
---

# Orchestration Class

Get orchestration instances.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Orchestration Methods

These methods are for `Orchestration`. All methods are static.

## See Also

- [getOrchestrationInstance(instanceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstance_1)
- [getOrchestrationInstanceCollection(relatedRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstanceCollection_1)
- [getOrchestrationInstanceCollection(relatedRecordId, relatedOrchestrationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstanceCollection_2)

### getOrchestrationInstance(instanceId)

Get an orchestration instance associated with an orchestration instance ID.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.OrchestrationInstance getOrchestrationInstance(String instanceId)`

#### Parameters

instanceId

Type: String

The ID of orchestration instance to get details for.

#### Return Value

Type: `ConnectApi.OrchestrationInstance`

### getOrchestrationInstanceCollection(relatedRecordId)

Get orchestration instances associated with a Salesforce record that’s configured as a context record for orchestration interactive steps.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.OrchestrationInstanceCollection getOrchestrationInstanceCollection(String relatedRecordId)`

#### Parameters

relatedRecordId

Type: String

The ID of a record configured as a context record for orchestration interactive steps.

#### Return Value

Type: `ConnectApi.OrchestrationInstanceCollection`

### getOrchestrationInstanceCollection(relatedRecordId, relatedOrchestrationId)

Get orchestration instances associated with either a Salesforce record or an orchestration that’s configured as context for orchestration interactive steps.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.OrchestrationInstanceCollection getOrchestrationInstanceCollection(String relatedRecordId, String relatedOrchestrationId)`

#### Parameters

relatedRecordId

Type: String

The ID of a record configured as a context record for orchestration interactive steps. You must specify either relatedRecordId or relatedOrchestrationId.

relatedOrchestrationId

Type: String

The ID of an orchestration configured as context for orchestration interactive steps. You must specify either relatedRecordId or relatedOrchestrationId.

#### Return Value

Type: `ConnectApi.OrchestrationInstanceCollection`
