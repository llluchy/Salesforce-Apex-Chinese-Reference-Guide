---
doc_id: "apex_connectapi_output_commerce_address_collection"
---

# ConnectApi.CommerceAddressCollection

A collection of Commerce addresses.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Count of addresses. | 54.0 |
| `currentPageToken` | String | Token to the current page of addresses. | 54.0 |
| `currentPageUrl` | String | URL to the current page of addresses. | 54.0 |
| `items` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CommerceAddressOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_output.htm "Address for a Commerce account.")\> | Address Details | 54.0 |
| `nextPageToken` | String | Token to the next page of addresses. | 54.0 |
| `nextPageUrl` | String | URL to the next page of addresses. | 54.0 |
| `pageSize` | Integer | Page size for addresses. | 54.0 |
| `previousPageToken` | String | Token to previous page of addresses. | 54.0 |
| `previousPageUrl` | String | URL to the previous page of addresses. | 54.0 |
| `sortOrder` | [`ConnectApi.CommerceAddressSort`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectCommerceAddressSortOrderEnum) | Sort order for Commerce addresses.
-   `CreatedDateAsc`—Sort in ascending order of created date.
-   `CreatedDateDesc`—Sort in descending order of created date.
-   `NameAsc`—Sort in ascending order of name.
-   `NameDesc`—Sort in descending order of name.

 | 54.0 |
