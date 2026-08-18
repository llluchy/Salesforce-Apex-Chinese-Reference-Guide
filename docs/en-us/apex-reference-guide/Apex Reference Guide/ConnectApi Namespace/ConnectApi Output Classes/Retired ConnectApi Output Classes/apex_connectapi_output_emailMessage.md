---
doc_id: "apex_connectapi_output_emailMessage"
---

# ConnectApi.EmailMessage

Email message from a case.

:::tip Important
This class isn’t available in version 32.0 and later. In version 32.0
        and later, [ConnectApi.EmailMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_message_capability.htm) is used.
:::

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `direction` | `ConnectApi.Email​MessageDirection` Enum | The direction of the email message.
-   `Inbound`—An inbound message (sent by a customer).
-   `Outbound`—An outbound message (sent to a customer by a support agent).

 | 29.0–31.0 |
| `emailMessageId` | String | The ID of the email message. | 29.0–31.0 |
| `subject` | String | The subject of the email message. | 29.0–31.0 |
| `textBody` | String | The body of the email message. | 29.0–31.0 |
| `toAddresses` | `List<ConnectApi.EmailAddress>` | A list of email addresses to send the message to. | 29.0–31.0 |
