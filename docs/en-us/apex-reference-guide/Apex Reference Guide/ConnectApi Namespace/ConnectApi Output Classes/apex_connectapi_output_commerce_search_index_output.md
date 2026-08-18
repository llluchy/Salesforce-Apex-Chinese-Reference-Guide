---
doc_id: "apex_connectapi_output_commerce_search_index_output"
---

# ConnectApi.CommerceSearchIndex

Index information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `completionDate` | Datetime | Completion date and time of the index. | 52.0 |
| `createdDate` | Datetime | Creation date of the index. | 52.0 |
| `creationType` | [`ConnectApi.​CommerceSearch​IndexCreationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexCreationTypeEnum) | Creation type of the index. Values are:
-   `Manual`
-   `Scheduled`

 | 52.0 |
| `id` | String | ID of the index. | 52.0 |
| `indexBuildType` | [`ConnectApi.​CommerceSearch​IndexBuildType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexBuildTypeEnum) | Build type of the index. Values are:

-   `Full`
-   `Incremental`

 | 57.0 |
| `indexStatus` | [`ConnectApi.​CommerceSearch​IndexStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexStatusEnum) | Status of the index. Values are:

-   `Completed`
-   `Failed`
-   `InProgress`

 | 52.0 |
| `indexUsage` | [`ConnectApi.​CommerceSearch​IndexUsage`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexUsageEnum) | Usage of the index. Values are:

-   `Live`
-   `OutOfUse`

 | 52.0 |
| `isIncrementable` | Boolean | Specifies whether the index allows incremental indexing (`true`) or not (`false`). | 57.0 |
| `lastCatalogSnapshotTime` | Datetime | Catalog snapshot time of the index. | 57.0 |
| `message` | String | Detailed message for the index status. | 52.0 |

## See Also

- [ConnectApi.CommerceSearchIndexCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_collection_output.htm)
