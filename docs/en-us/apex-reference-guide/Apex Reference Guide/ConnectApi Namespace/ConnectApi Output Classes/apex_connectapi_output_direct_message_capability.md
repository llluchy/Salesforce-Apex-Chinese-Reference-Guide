---
doc_id: "apex_connectapi_output_direct_message_capability"
---

# ConnectApi.DirectMessageCapability

If a feed element has this capability, it’s a direct message.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `memberChanges` | `ConnectApi.DirectMessageMemberActivityPage` | Member activities of the direct message, with the most recent activity first. | 40.0 |
| `members` | [`ConnectApi.​DirectMessage​MemberPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_member_collection.htm#apex_connectapi_output_direct_message_member_collection "A collection of direct message members.") | Members included in the direct message. | 39.0 |
| `originalMembers` | [`ConnectApi.​DirectMessage​MemberPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_member_collection.htm#apex_connectapi_output_direct_message_member_collection "A collection of direct message members.") | Original members of the direct message. | 40.0 |
| `subject` | String | Subject of the direct message. | 39.0 |

## See Also

- [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
