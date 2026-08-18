---
doc_id: "apex_connectapi_output_data_space_info"
---

# ConnectApi.DataSpaceInfoRepresentation

Represents a data space.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `description` | String | Description of the data space. | 62.0 |
| `prefix` | String | Prefix of the data space. | 62.0 |
| `status` | [`DataSpaceStatusEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataSpaceStatusEnum) | Status of the data space.
-   `Active`—The data space is active.
-   `Error`—The data space has an error.
-   `Processing`—The data space is being processed.

 | 62.0 |

## See Also

- [getDataSpace(idOrName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm#apex_ConnectAPI_CdpDataSpace_getDataSpace_1)
