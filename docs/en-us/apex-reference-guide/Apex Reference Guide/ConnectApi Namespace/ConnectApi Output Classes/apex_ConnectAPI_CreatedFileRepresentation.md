---
doc_id: "apex_ConnectAPI_CreatedFileRepresentation"
---

# ConnectApi.CreatedFile

Represents a single file created during a FetchOptimizationFiles operation. Contains the ID of the Content Version record created in the org and an indicator of whether the creation succeeded.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `contentVersionId` | String | The id of the content version created in the org for this file. | 66.0 |
| `success` | Boolean | Indicates whether the file was created successfully. Returns true if the Content Version record was created without errors. | 66.0 |
