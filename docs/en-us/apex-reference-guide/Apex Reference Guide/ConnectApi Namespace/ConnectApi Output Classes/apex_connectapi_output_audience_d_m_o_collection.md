---
doc_id: "apex_connectapi_output_audience_d_m_o_collection"
---

# ConnectApi.AudienceDMOCollection

Represents a collection of Audience Data Model Object (DMO) records.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `batchSize` | Integer | Batch size | 60.0 |
| `data` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ActivationData`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_data.htm "Represents the activation data for an Audience Data Model Object (DMO).")\> | List of Audience DMO records. | 60.0 |
| `offset` | Integer | Start offset of the next batch. | 60.0 |

## See Also

- [getActivationData(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpAudienceDMO_static_methods.htm#apex_ConnectAPI_CdpAudienceDMO_getActivationData_1)
