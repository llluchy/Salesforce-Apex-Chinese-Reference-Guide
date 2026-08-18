---
doc_id: "apex_connectapi_output_ChatterMessage"
---

# ConnectApi.ChatterMessage

Chatter message.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `body` | `ConnectApi.​Message​Body` | Contents of the message. | 29.0 |
| `conversationId` | String | ID for the conversation. | 29.0 |
| `conversationUrl` | String | Connect REST API URL identifying the conversation. | 29.0 |
| `id` | String | ID of the message. | 29.0 |
| `recipients` | `List<ConnectApi.​User​Summary>` | List of the recipients of the message. | 29.0 |
| `sender` | `ConnectApi.​User​Summary` | Sender of the message. | 29.0 |
| `sendingCommunity` | `ConnectApi.​​Reference` | Information about the Experience Cloud site from which the message was sent.
Returns `null` for the default site or if digital experiences isn’t enabled.

 | 32.0 |
| `sentDate` | Datetime | The date and time the message was sent. | 29.0 |
| `url` | String | Connect REST API URL identifying the current page of the conversation. | 29.0 |

## See Also

- [ConnectApi.ChatterConversationSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationSummary.htm)

-   [ConnectApi.ChatterMessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")
