---
doc_id: "apex_connectapi_output_wishlist_summaries"
---

# ConnectApi.WishlistsSummary

List of wishlist summaries and the displayed list for the context user.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `displayedList` | [`ConnectApi.​Wishlist`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.") | Oldest wishlist displayed for the context user. | 49.0 |
| `summaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​WishlistSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summary.htm "Summary of a wishlist.")\> | Summary of wishlists belonging to the context user. | 49.0 |
| `wishlistCount` | Integer | Total number of wishlists belonging to the context user. | 49.0 |
