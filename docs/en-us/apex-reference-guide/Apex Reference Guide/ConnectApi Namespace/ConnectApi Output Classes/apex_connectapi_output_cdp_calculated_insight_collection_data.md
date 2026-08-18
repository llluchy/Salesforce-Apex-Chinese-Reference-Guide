---
doc_id: "apex_connectapi_output_cdp_calculated_insight_collection_data"
---

# ConnectApi.CdpCalculatedInsightPageData

Calculated insight collection data.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Number of results returned in the page. | 57.0 |
| `currentPageToken` | String | Token identifying the current page. | 57.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 57.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​CdpCalculated​InsightOutput`\> | List of calculated insights. | 57.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 57.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 57.0 |
| `previousPageToken` | String | Token identifying the previous page, or `null` if there isn’t a previous page. | 57.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 57.0 |
| `total` | Integer | Total row count of calculated insights. | 57.0 |

## See Also

- [ConnectApi.CdpCalculatedInsightPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_collection.htm)
