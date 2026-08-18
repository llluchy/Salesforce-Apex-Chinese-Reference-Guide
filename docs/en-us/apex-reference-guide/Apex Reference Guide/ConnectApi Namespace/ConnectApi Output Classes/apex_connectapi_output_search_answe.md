---
doc_id: "apex_connectapi_output_search_answe"
---

# ConnectApi.SearchAnswer

Results of searching objects using a natural language query.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `content` | String | AI generated response. | 63.0 |
| `llmGenerationId` | String | LLM generation ID used to track any feedback on the conversation. | 63.0 |
| `metadata` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.​ObjectMetadata`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm "Search metadata related to the object.")\> | All search related metadata associated with the objects found in the results. | 63.0 |
| `searchObjects` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​SearchObject`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.")\> | Record results for the natural language search. | 63.0 |

## See Also

- [answer(q, objectApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_object_1)

-   [answer(q, objectApiName, displayFields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_object_2 "Search an object using a natural language query and display fields.")
    
-   [answer(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_objects_1 "Search objects using a natural language query and return an answer.")
