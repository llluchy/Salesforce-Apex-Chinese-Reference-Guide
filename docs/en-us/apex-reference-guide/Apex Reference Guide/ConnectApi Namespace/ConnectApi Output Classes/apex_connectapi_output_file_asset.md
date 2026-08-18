---
doc_id: "apex_connectapi_output_file_asset"
---

# ConnectApi.FileAsset

An asset file.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `baseAssetUrl` | String | Base download URL of the asset. | 45.0 |
| `baseUnauthenticated​AssetUrl` | String | Base download URL of the asset for unauthenticated users if `isVisibleByExternalUsers` is `true`, otherwise `null`. | 45.0 |
| `id` | String | ID of the asset. | 45.0 |
| `isVisibleBy​ExternalUsers` | Boolean | Indicates whether unauthenticated users can see the asset file (`true`) or not (`false`). | 45.0 |
| `masterLabel` | String | Label of the asset. | 45.0 |
| `name` | String | Unique name of the asset. | 45.0 |
| `namespacePrefix` | String | Namespace prefix of the package containing the asset. | 45.0 |
| `type` | String | Type of asset. | 45.0 |

## See Also

- [ConnectApi.Recommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_proposition.htm)

-   [ConnectApi.NBANativeRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_proposition_recommendation.htm "A record the user is recommended to take action on.")
