---
doc_id: "apex_connectapi_output_activation_data"
---

# ConnectApi.ActivationData

Represents the activation data for an Audience Data Model Object (DMO).

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `activatedEntityFqk` | String | Fully Qualified Key (FQK) of the activated entity. | 60.0 |
| `activatedOnId` | String | ActivateOn entity ID, such as the Individual.Id or the Unified Individual.Id. | 60.0 |
| `activationRecord` | String | Activated attributes payload as JSON BLOB. | 60.0 |
| `deltaType` | [`AudienceDMODeltaTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#AudienceDMODeltaTypeEnum) | Delta type of the activation.
-   `A`—ADDED
-   `D`—DELETED
-   `E`—EXISTING
-   `U`—UPDATED

 | 60.0 |
| `publishDate` | String | Date that the activation was published. | 60.0 |
| `segmentId` | String | Unique ID for each segment. | 60.0 |
| `segmentOnId` | String | Key identifier based on the SegmentOn enity. Same as Activated-entity-id when ActivateOn = SegmentOn. | 60.0 |
| `segmentedEntityFqk` | String | Fully Qualified Key (FQK) of the segmented entity. | 60.0 |
