---
doc_id: "apex_connectapi_input_topic_name_collection"
---

# ConnectApi.TopicNamesInput

A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `topicNames` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | A list of up to 10 topic names for a feed item or 100 topic names for a record. | Required | 35.0 |
| `topicSuggestions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | A list of suggested topics to assign to a record or feed item to improve future topic suggestions. | Optional | 37.0 |

## See Also

- [reassignTopicsByName(communityId, recordId, topicNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_reassignTopicsByName)

-   [ConnectApi.ArticleTopicAssignmentJobInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_article_topic_assignment_job.htm "An article and topic assignment job.")
