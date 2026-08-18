---
doc_id: "apex_connectapi_output_activation_target"
---

# ConnectApi.ActivationTarget

Represents an activation target.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `connector` | [`ConnectApi.DataConnector`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_connector.htm "Details about the data connector for an activation target.") | Details about the connector that is used for the activation target. | 60.0 |
| `dataSpace` | String | Data space name for the activation target. | 60.0 |
| `description` | String | Description of the activation target. | 60.0 |
| `egressProperties` | [`ConnectApi.EgressPropertiesRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_egress_properties.htm "Represents the details for egress properties of the activation target.") | Egress properties for the activation target, which are applicable only for file-based activation targets. | 60.0 |
| `historyAudienceDmoApiName` | String | API name for the history audience DMO. | 60.0 |
| `historyAudienceDmoLabel` | String | Name of the history audience DMO. | 60.0 |
| `isCappingEnabled` | Boolean | Indicates whether communication capping is enabled for the activation `(true)` or not `(false)`. | 60.0 |
| `isEnabled` | Boolean | Indicates whether the activation target is enabled `(true)` or not `(false)`. | 60.0 |
| `latestAudienceDmoApiName` | String | API name for the latest audience DMO. | 62.0 |
| `latestAudienceDmoLabel` | String | Name of the latest audience DMO. | 62.0 |
| `organizationId` | String | Organization ID of the activation target. | 60.0 |
| `platformName` | String | Platform name for the activation target. | 60.0 |
| `platformPrivacyType` | String | Platform privacy type for the activation target. Derived from Activation Platform. | 60.0 |
| `platformType` | [`DataConnectorTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DataConnectorTypeEnum) | Data connector type of the activation target.
-   `AmazonS3`
-   `AzureBlob`
-   `DataCloud`
-   `GoogleCloudStorage`
-   `SalesforceMarketingCloud`
-   `Sftp`

 | 60.0 |
| `status` | [`ActivationTargetStatusEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivationTargetStatusEnum) | Status of the activation target.

-   `Active`
-   `Processing`
-   `Error`
-   `Inactive`

 | 60.0 |

## See Also

- [createActivationTarget(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_createActivationTarget_3)

-   [getActivationTarget(activationTargetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTarget_1 "Get an activation target by ID.")
    
-   [updateActivationTarget(activationTargetId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_updateActivationTarget_2 "Update an activation target.")
