---
doc_id: "apex_connectapi_input_activation_target"
---

# ConnectApi.ActivationTargetInput

Input details for the activation target.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `connector` | [`ConnectApi.DataConnectorInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_data_connector.htm "Input details for the data connector.") | Details about the connector for the activation target. | Required | 60.0 |
| `dataSpaceName` | String | Data space name for the activation target. | Required | 60.0 |
| `description` | String | Description of the activation target. | Required | 60.0 |
| `egressProperties` | [`ConnectApi.EgressPropertiesInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_egress_properties.htm "Represents the input details for egress properties of the activation target.") | Egress properties for the activation target, which are applicable only for file-based activation targets. | Optional | 60.0 |
| `isCappingEnabled` | Boolean | Indicates whether communication capping is enabled for the activation target `(true)` or not `(false)`. | Required | 60.0 |
| `name` | String | Name of the activation target. | Required | 60.0 |
| `platformType` | [`DataConnectorTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataConnectorTypeEnum) | Data connector type of the activation target.
-   `AmazonS3`
-   `AzureBlob`
-   `DataCloud`
-   `GoogleCloudStorage`
-   `SalesforceMarketingCloud`
-   `Sftp`

 | Required | 60.0 |

## See Also

- [createActivationTarget(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_createActivationTarget_3)

-   [updateActivationTarget(activationTargetId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_updateActivationTarget_2 "Update an activation target.")
