---
doc_id: "apex_connectapi_output_activation_collection"
---

# ConnectApi.ActivationCollection

Represents a collection of activations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `activations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ActivationRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")\> | List of activations. | 60.0 |
| `batchSize` | Integer | Number of results returned. If unspecified, the default value is `20`. | 60.0 |
| `offset` | Integer | Number of records to skip for the next request. | 60.0 |
| `orderByExpression` | String | Sort order for the result set. | 60.0 |

## See Also

- [getActivations()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivations_1)

-   [getActivationsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivationsPaginated_1 "Get a paginated list of activations.")
