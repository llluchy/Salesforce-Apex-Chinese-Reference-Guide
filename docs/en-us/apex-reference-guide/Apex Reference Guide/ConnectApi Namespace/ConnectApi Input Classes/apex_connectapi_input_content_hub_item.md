---
doc_id: "apex_connectapi_input_content_hub_item"
---

# ConnectApi.ContentHubItemInput

Item type ID and fields of the item type.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `fields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ContentHub​FieldValue​Input`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_field_value.htm#apex_connectapi_input_content_hub_field_value "Fields of the item type.")\> | List of fields for the item. | Required to create a SharePoint file in a repository because the file name is required; otherwise optional | 39.0 |
| `itemTypeId` | String | ID of the item type, such as `L3NpdGVzL0FDRVRfRklMRUNPTk5FQ1RfSU5U:​5f33e0f4-b33c-4127-b9e4-dd5a73dd2f1b:​0c847e7c-d4a2-4136-bfda-c468fae2d087:0x0101`.
To get the `itemTypeId`, use one of the [`getAllowedItemTypes()`](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_1 "Get the item types that the context user is allowed to create in the repository folder.") methods.

 | Required to create a file in a repository | 39.0 |
