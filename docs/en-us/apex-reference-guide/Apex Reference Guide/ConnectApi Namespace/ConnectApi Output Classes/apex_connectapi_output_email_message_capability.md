---
doc_id: "apex_connectapi_output_email_message_capability"
---

# ConnectApi.EmailMessageCapability

If a feed element has this capability, it has an email message from a case.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attachments` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​EmailAttachment`\> | Attachments in the email message. | 36.0 |
| `automationType` | String | Automation type of the email message.
-   `aiAssisted`—The email message was created with the assistance of AI.
-   `aiAutomated`—The email message was created automatically by AI.

 | 63.0 |
| `bccAddresses` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​EmailAddress`\> | BCC addresses for the email message. | 36.0 |
| `body` | String | Body of the email message. | 36.0 |
| `ccAddresses` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​EmailAddress`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_emailAddress.htm "Email address.")\> | CC addresses for the email message. | 36.0 |
| `direction` | `ConnectApi.​EmailMessageDirection` | Direction of the email message. Values are:

-   `Inbound`—An inbound message (sent by a customer).
-   `Outbound`—An outbound message (sent to a customer by a support agent).

 | 32.0 |
| `emailMessageId` | String | ID of the email message. | 32.0 |
| `emailSize` | [`ConnectApi.​EmailMessageSize`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#EmailMessageSizeEnum) | Size of a case’s email message HTML body.

-   `Large`—`UseLargeHtmlBody` permission is set, HTML body exceeds 131K characters, and HTML email display is enabled.
-   `Normal`—Email message doesn’t meet the `Large` criteria.

 | 66.0 |
| `fromAddress` | `ConnectApi.EmailAddress` | From address for the email message. | 36.0 |
| `htmlExpand​EmailThread` | Integer | Start location of previous email thread. | 47.0 |
| `isRichText` | Boolean | Indicates whether the body of the email message is in rich text format. | 36.0 |
| `status` | `ConnectApi.​EmailMessageStatus` | Status of an email message on a case. Values are:

-   `DraftStatus`
-   `ForwardedStatus`
-   `NewStatus`
-   `ReadStatus`
-   `RepliedStatus`
-   `SentStatus`

 | 47.0 |
| `subject` | String | Subject of the email message. | 32.0 |
| `textBody` | String | Body of the email message. **Important:** In version 36.0 and later, use the `body` property. | 32.0–35.0 |
| `toAddresses` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​EmailAddress`\> | To addresses of the email message. | 32.0 |
| `totalAttachments` | Integer | Total number of attachments in the email message. | 38.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
