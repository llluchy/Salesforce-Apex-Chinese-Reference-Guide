---
doc_id: "apex_connectapi_output_feed_item_summary"
---

# ConnectApi.FeedItemSummary

A feed item summary.

Subclass of [ConnectApi.FeedEntitySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm "The summary of a feed entity that is shared with a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `capabilities` | [`ConnectApi.​FeedElement​Capabilities`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm#apex_connectapi_output_feed_element_capabilities "A container for all capabilities that can be included with a feed element.") | Container for all capabilities that can be included with a feed item. | 39.0 |
| `header` | [`ConnectApi.​MessageBody`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm#apex_connectapi_output_msg_body "Message body.") | Title of the post. This property contains renderable plain text for all the message segments. If a client doesn’t know how to render a feed element type, it should render this text. | 39.0 |
| `modifiedDate` | Datetime | When the feed item was modified in the form of an ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 39.0 |
| `originalFeedItem` | [`ConnectApi.​Reference`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm#apex_connectapi_output_reference "Reference to a record.") | Reference to the original feed item if this feed item is a shared feed item; otherwise, `null`. | 39.0 |
| `originalFeed​ItemActor` | [`ConnectApi.Actor`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm#apex_connectapi_output_actor "Actor.") | If this feed item is a shared feed item, information about the original poster of the feed item; otherwise, `null`. | 39.0 |
| `photoUrl` | String | URL of the photo associated with the feed item. | 39.0 |
| `visibility` | [`ConnectApi.​FeedItemVisibility`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedItemTypeVisEnum) | Specifies who can see a feed item.
-   `AllUsers`—Visibility is not limited to internal users.
-   `InternalUsers`—Visibility is limited to internal users.

 | 39.0 |
