---
doc_id: "apex_connectapi_input_Topic"
---

# ConnectApi.TopicInput

Update a topic’s name or description or merge topics.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| `description` | String | Description of the topic | 29.0 |
| `idsToMerge` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of up to five secondary topic IDs to merge with the primary topic
If any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic.

 | 33.0 |
| `name` | String | Name of the topic

Use this property to change only the capitalization and spacing of the topic name.

 | 29.0 |

## See Also

- [updateTopic(communityId, topicId, topic)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_updateTopic)
