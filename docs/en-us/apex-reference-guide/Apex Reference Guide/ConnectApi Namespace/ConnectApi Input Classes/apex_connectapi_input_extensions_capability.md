---
doc_id: "apex_connectapi_input_extensions_capability"
---

# ConnectApi.ExtensionsCapabilityInput

Create or update extensions associated with a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `itemsToAdd` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ExtensionInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_extension.htm#apex_connectapi_input_extension "An extension.")\> | List of extensions to associate with the feed element. | Required for creating an extension
Optional for updating an extension

 | 40.0 |
| `itemsToRemove` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of attachment IDs to remove from the feed element. | Optional for updating an extension

Don’t specify for creating an extension

 | 41.0 |

## See Also

- [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
