---
doc_id: "apex_connectapi_input_managed_topic_position_collection"
---

# ConnectApi.ManagedTopicPositionCollectionInput

A collection of relative positions of managed topics.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `managedTopic​Positions` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ManagedTopic​PositionInput`\> | List of relative positions of managed topics. This list can include `Featured` and `Navigational` managed topics and doesn’t need to include all managed topics.
For more information about reordering managed topics, see the example in [reorderManagedTopics(communityId, managedTopicPositionCollection)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_reorderManagedTopics "Reorder the relative positions of managed topics in an Experience Cloud site.").

 | Required | 32.0 |
