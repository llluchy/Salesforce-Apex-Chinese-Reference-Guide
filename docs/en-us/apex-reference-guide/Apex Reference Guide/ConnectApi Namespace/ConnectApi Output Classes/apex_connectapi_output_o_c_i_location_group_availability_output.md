---
doc_id: "apex_connectapi_output_o_c_i_location_group_availability_output"
---

# ConnectApi.OCILocationGroupAvailabilityOutputRepresentation

A set of inventory availability data for one inventory location group.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `inventoryRecords` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCIInventoryRecord​OutputRepresentation`\> | A list of availability data for individual products. The data combines the quantities for all locations belonging to this location group. | 51.0 |
| `locationGroup​Identifier` | String | The identifier of the location group. | 51.0 |
