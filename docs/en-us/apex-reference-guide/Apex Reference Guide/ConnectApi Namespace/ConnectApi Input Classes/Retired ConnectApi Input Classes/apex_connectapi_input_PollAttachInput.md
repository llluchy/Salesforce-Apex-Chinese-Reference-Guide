---
doc_id: "apex_connectapi_input_PollAttachInput"
---

# ConnectApi.PollAttachmentInput

Attach a poll to a feed item.

:::tip Important
This class isn’t available in version 32.0 and later. In version 32.0
        and later, use [ConnectApi.PollCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_poll_capability.htm).
:::

Subclass of [ConnectApi.FeedItemAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm "Used to attach a file to a feed item.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| `pollChoices` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | The text labels for the poll items. Polls must contain between 2 to 10 poll choices. | 28.0–31.0 |
