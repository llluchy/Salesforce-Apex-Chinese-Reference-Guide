---
doc_id: "apex_connectapi_input_article_topic_assignment_job"
---

# ConnectApi.ArticleTopicAssignmentJobInput

An article and topic assignment job.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `operation` | [`ConnectApi.​ArticleTopicJobType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#articleTopicJobEnum) | Type of operation to perform on articles and topics. Values are:
-   `AssignTopicsToArticle`—Assign topics to articles in a data category.
-   `UnassignTopicsFromArticle`—Unassign topics from articles in a data category.

 | Required | 40.0 |
| `topicNames` | `ConnectApi.TopicNamesInput` | List of topic names to assign to or unassign from articles. | Required | 40.0 |
