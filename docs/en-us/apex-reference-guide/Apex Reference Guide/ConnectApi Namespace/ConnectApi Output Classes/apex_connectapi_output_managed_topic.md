---
doc_id: "apex_connectapi_output_managed_topic"
---

# ConnectApi.ManagedTopic

Represents a managed topic in an Experience Cloud site.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `children` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ManagedTopic`\> | Children managed topics of the managed topic; `null` if the `depth` request parameter isn’t specified or is 1. | 35.0 |
| `id` | String | ID of managed topic. | 32.0 |
| `managedTopicType` | [`ConnectApi.Managed​Topic​Type`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum) | Type of managed topic.
-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

 | 32.0 |
| `parent` | `ConnectApi.Reference` | Parent managed topic of the managed topic. | 35.0 |
| `topic` | `ConnectApi.​Topic` | Information about the topic. | 32.0 |
| `url` | String | Connect REST API URL to the managed topic. | 32.0 |

## See Also

- [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm)
