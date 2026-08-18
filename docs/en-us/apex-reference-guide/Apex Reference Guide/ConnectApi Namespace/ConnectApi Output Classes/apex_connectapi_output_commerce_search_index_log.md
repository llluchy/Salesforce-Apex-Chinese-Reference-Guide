---
doc_id: "apex_connectapi_output_commerce_search_index_log"
---

# ConnectApi.CommerceSearchIndexLog

Search index log information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `catalog​SnapshotTime` | Datetime | Catalog snapshot time of the index build. | 57.0 |
| `completionDate` | Datetime | Completion date of the index build. | 57.0 |
| `createdById` | String | ID of the user who initiated the index build. | 57.0 |
| `index​BuildStatus` | [`ConnectApi.​CommerceSearch​IndexStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexStatusEnum) | Status of the index. Values are:
-   `Completed`
-   `Failed`
-   `InProgress`

 | 57.0 |
| `indexBuildType` | [`ConnectApi.​CommerceSearch​IndexBuildType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexBuildTypeEnum) | Build type of the index. Values are:

-   `Full`
-   `Incremental`

 | 57.0 |
| `indexId` | String | ID of the index build. | 57.0 |
| `message` | String | Detailed message for the index build status. | 57.0 |
| `number​OfProducts` | Integer | Number of new or changed products in the index build. | 57.0 |
