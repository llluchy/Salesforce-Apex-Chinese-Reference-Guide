---
doc_id: "apex_connectapi_output_commerce_quote_collection"
---

# ConnectApi.CommerceQuoteCollection

Representation of quotes associated to an account.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Number of quotes in the current page. | 66.0 |
| `currentPageToken` | String | Token identifying the current page. | 66.0 |
| `currentPageUrl` | String | URL identifying the current page. | 66.0 |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ErrorResponse`\> | Detailed error message if the retreive quotes operation was unsuccessful. | 66.0 |
| `nextPageToken` | String | Token identifying the next page. | 66.0 |
| `nextPageUrl` | String | URL identifying the next page. | 66.0 |
| `previousPageToken` | String | Token identifying the previous page. | 66.0 |
| `previousPageUrl` | String | URL identifying the previous page. | 66.0 |
| `quotes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CommerceQuoteDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_quote_with_product_detail.htm "Representation for Quote basic details")\> | Collection of quotes associated with an user account. | 66.0 |

## See Also

- [getQuotes(webstoreId, effectiveAccountId, fields, sortParam, pageSize, pageToken, earliestDate, latestDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_getQuotes_1)
