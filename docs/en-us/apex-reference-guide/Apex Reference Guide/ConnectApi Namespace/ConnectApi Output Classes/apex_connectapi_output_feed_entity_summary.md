---
doc_id: "apex_connectapi_output_feed_entity_summary"
---

# ConnectApi.FeedEntitySummary

The summary of a feed entity that is shared with a feed element.

This class is abstract.

Superclass of:

-   [ConnectApi.FeedItemSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_summary.htm "A feed item summary.")
-   [ConnectApi.FeedEntityNotAvailableSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_not_available_summary.htm "A summary when the feed entity isn’t available.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `actor` | [`ConnectApi.Actor`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm#apex_connectapi_output_actor "Actor.") | Entity that created the feed entity. | 39.0 |
| `body` | [`ConnectApi.​FeedBody`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_body.htm#apex_connectapi_output_feed_body "Feed body.") | Information about the feed entity. | 39.0 |
| `createdDate` | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, when the entity was created. | 39.0 |
| `feedElementType` | [`ConnectApi.​FeedElementType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedElementTypeEnum) | Type of feed entity.
-   `Bundle`—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.
-   `FeedItem`—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.
-   `Recommendation`—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user.

 | 39.0 |
| `id` | String | 18-character ID of the feed entity. | 39.0 |
| `isEntityAvailable` | Boolean | Specifies whether the entity is available. If `false`, either the user doesn’t have access to the entity or the entity was deleted. | 39.0 |
| `parent` | [`ConnectApi.​ActorWithId`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm#apex_connectapi_output_actorWithIdOutput "Actor with ID.") | Parent of the feed entity. | 39.0 |
| `relativeCreatedDate` | String | Relative created date, for example, “2h ago.” | 39.0 |
| `url` | String | URL to the feed entity. | 39.0 |

## See Also

- [ConnectApi.FeedEntityShareCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_share_capability.htm)
