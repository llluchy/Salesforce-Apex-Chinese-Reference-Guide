---
doc_id: "apex_connectapi_output_pinned_feed_element_collection"
---

# ConnectApi.PinnedFeedElements

List of pinned feed elements for a feed.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `elements` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​FeedElement`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")\> | List of pinned feed elements.
In the UI, pinned feed elements don’t show all auxiliary information, such as comments, likes, interaction counts, or read by information. As a result, the `ConnectApi.PinnedFeedElements` output class doesn’t include all the information for these capabilities.

 | 41.0 |
