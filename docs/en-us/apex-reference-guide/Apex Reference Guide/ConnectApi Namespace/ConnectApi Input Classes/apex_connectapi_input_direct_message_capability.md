---
doc_id: "apex_connectapi_input_direct_message_capability"
---

# ConnectApi.DirectMessageCapabilityInput

Create or update the members of a direct message.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `membersToAdd` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of user IDs for members to include in the direct message. | Required when creating a direct message (POST)
Optional when updating a direct message (PATCH)

 | 39.0 |
| `membersToRemove` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of user IDs for members to remove from the direct message. | Optional when updating a direct message (PATCH)

Not supported when creating a direct message (POST)

 | 40.0 |
| `subject` | String | Subject of the direct message. | Optional when creating a direct message (POST)

Not supported when updating a direct message (PATCH)

 | 39.0 |

## See Also

- [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
