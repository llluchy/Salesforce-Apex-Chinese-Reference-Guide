---
doc_id: "apex_connectapi_output_ChatterConversationSummary"
---

# ConnectApi.ChatterConversationSummary

Chatter conversation summary.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | ID for the conversation summary. | 29.0 |
| `latestMessage` | `ConnectApi.​Chatter​Message` | Contents of the latest message. | 29.0 |
| `members` | `List<ConnectApi.​User​Summary>` | List of members in the conversation. | 29.0 |
| `read` | Boolean | Specifies if the conversation is read (`true`) or not read (`false`). | 29.0 |
| `url` | String | Connect REST API URL to the conversation summary. | 29.0 |

## See Also

- [ConnectApi.ChatterConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm)
