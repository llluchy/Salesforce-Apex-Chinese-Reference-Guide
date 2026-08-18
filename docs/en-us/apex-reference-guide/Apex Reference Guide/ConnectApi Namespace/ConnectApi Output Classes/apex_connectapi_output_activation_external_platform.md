---
doc_id: "apex_connectapi_output_activation_external_platform"
---

# ConnectApi.ActivationExternalPlatform

Represents information about an activation external platform.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributeConfig` | [`ConnectApi.ActivationExternalPlatformAttributeConfig`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_external_platform_attribute_config.htm "Represents the attribute configuration for an activation external platform.") | Attribute configuration for the external platform. | 64.0 |
| `createdBy` | [`ConnectApi.CdpUser`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_user.htm "Represents information about a user.") | User who created the external platform. | 57.0 |
| `createdDate` | String | When the external platform was created. | 57.0 |
| `creationType` | [`ActivationPlatformCreationTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivationPlatformCreationTypeEnum) | Creation type of the external platform.
-   `Json`
-   `Manual`

 | 64.0 |
| `id` | String | The 18-character ID of the external platform. | 57.0 |
| `keyPrefixName` | String | Namespace prefix of the external platform. | 64.0 |
| `label` | String | Label of the external platform. | 57.0 |
| `lastModifiedBy` | [`ConnectApi.CdpUser`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_user.htm "Represents information about a user.") | User who last modified the external platform. | 57.0 |
| `lastModifiedDate` | String | When the external platform was last modified. | 57.0 |
| `name` | String | Name of the external platform. | 57.0 |
| `namespace` | String | Name space of the external platform. | 57.0 |
| `privacyType` | [`ActivationPlatformPrivacyTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivationPlatformPrivacyTypeEnum) | Privacy type of the external platform.

-   `NotApplicable`
-   `ServiceProvider`
-   `ThirdParty`
-   `UpdateFailed`

 | 64.0 |
| `status` | [`ActivationPlatformStatusEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivationPlatformStatusEnum) | Status of the external platform.

-   `Active`
-   `Error`
-   `Inactive`
-   `Processing`

 | 64.0 |
| `type` | [`ActivationPlatformTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivationPlatformTypeEnum) | Platform type of the external platform.

-   `Advertising`
-   `Analytics`
-   `Marketing`
-   `Publishing`
-   `Technology`

 | 64.0 |
| `url` | String | URL of the external platform. | 57.0 |
