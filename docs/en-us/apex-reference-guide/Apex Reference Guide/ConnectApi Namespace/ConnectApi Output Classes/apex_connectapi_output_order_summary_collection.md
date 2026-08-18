---
doc_id: "apex_connectapi_output_order_summary_collection"
---

# ConnectApi.OrderSummaryCollectionRepresentation

Collection of order summaries.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Total count of order summaries returned on the current page. | 51.0 |
| `currentPageToken` | String | Token identifying the current page. | 51.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 51.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 51.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 51.0 |
| `orderSummaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​OrderSummary​Representation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary.htm "Order summary.")\> | Collection of order summaries. | 51.0 |
| `previousPageToken` | String | Token identifying the previous page, or `null` if there isn’t a previous page. | 51.0 |
| `previousPageUrl` | String | Connect REST API URL identifying the previous page, or `null` if there isn’t a previous page. | 51.0 |
| `sortOrder` | [`ConnectApi.​OrderSummary​SortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummarySortEnum) | Sort order for order summaries. Values are:
-   `CreatedDateAsc`—Sorts by the oldest created date.
-   `CreatedDateDesc`—Sorts by the most recent created date.
-   `OrderedDateAsc`—Sorts by the oldest ordered date.
-   `OrderedDateDesc`—Sorts by the most recent ordered date.

 | 51.0 |
