---
doc_id: "apex_connectapi_output_tracked_change_bundle_capability"
---

# ConnectApi.TrackedChangeBundleCapability

If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a **bundle**. This type of bundle aggregates feed tracked changes.

Subclass of [ConnectApi.BundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm "If a feed element has this capability, it has a container of feed elements called a bundle.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `changes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​TrackedChangeItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_TrackedChangeItem.htm "Tracked change item.")\> | Collection of feed tracked changes. | 31.0 |
