---
doc_id: "apex_connectapi_output_actor"
---

# ConnectApi.Actor

Actor.

This class is abstract.

Superclass of:

-   [ConnectApi.ActorWithId](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm "Actor with ID.")
-   [ConnectApi.RecommendedObject](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommended_object.htm "A recommended object, such as a custom or static recommendation.")
-   [ConnectApi.UnauthenticatedUser](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_unauth_user.htm "Unauthenticated user.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `name` | String | Name of the actor, such as the group name. | 28.0 |
| `type` | String | One of the following:
-   `file`
-   `group`
-   `recommendedObject` (version 34.0 and later)
-   `unauthenticateduser`
-   `user`
-   record type name—the name of the record type, such as myCustomObject\_\_c or Account

 | 28.0 |

## See Also

- [ConnectApi.CaseCommentCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm)

-   [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.")
    
-   [ConnectApi.EditCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_edit_capability.htm "If a feed element or comment has this capability, users who have permission can edit it.")
    
-   [ConnectApi.FeedEntitySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm "The summary of a feed entity that is shared with a feed element.")
    
-   [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")
    
-   [ConnectApi.FeedItemSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_summary.htm "A feed item summary.")
    
-   [ConnectApi.Subscription](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_subscription.htm "Subscription.")
