---
doc_id: "apex_plugin_datatype_conversions"
---

# Process.Plugin Data Type Conversions

Understand how data types are converted between Apex and the values returned to the `Process.Plugin`. For example, text data in a flow converts to string data in Apex.

:::tip Tip
We recommend using the `@InvocableMethod` annotation instead of the `Process.Plugin` interface.
          - The interface doesn’t support Blob, Collection, and sObject, data types, and it
            doesn’t support bulk operations. After you implement the interface on a class, the class
            can be referenced only from flows.

          -  The annotation supports all data types and bulk operations. After you implement the
            annotation on a class, the class can be referenced from flows, processes, and the Custom
            Invocable Actions REST API endpoint.

          - Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex
            actions are only available to be added in free-form in Flow Builder. Existing actions
            can be edited in both auto-layout and free-form mode.

          - You can customize how invocable actions created with `@InvocableMethod` appear in Flow Builder by using the
            InvocableActionExtension metadata file. Control parameter order, add picklists, create
            custom headers, and build partial custom property editors.
:::

| Flow Data Type | Data Type |
| --- | --- |
| Number | Decimal |
| Date | Datetime/Date |
| DateTime | Datetime/Date |
| Boolean | Boolean and numeric with 1 or 0 values only |
| Text | String |
