---
doc_id: "apex_connectapi_output_activation_target_collection"
---

# ConnectApi.ActivationTargetCollection

Represents a collection of activation targets.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `activationTargets` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ActivationTarget`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm "Represents an activation target.")\> | List of activation targets. | 60.0 |
| `batchSize` | Integer | Number of results returned. Values are from `1` through `200`. | 60.0 |
| `offset` | Integer | Start offset of the next batch of results. | 60.0 |
| `orderByExpression` | String | Expression that determines the order of the results. | 60.0 |

## See Also

- [getActivationTargets()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargets_1)

-   [getActivationTargetsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargetsPaginated_2 "Get a paginated list of activation targets.")
