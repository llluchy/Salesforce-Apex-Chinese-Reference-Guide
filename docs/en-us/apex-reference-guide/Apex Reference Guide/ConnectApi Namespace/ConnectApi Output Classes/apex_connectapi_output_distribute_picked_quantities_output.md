---
doc_id: "apex_connectapi_output_distribute_picked_quantities_output"
---

# ConnectApi.DistributePickedQuantitiesOutputRepresentation

Output representation of where the quantities were distributed in orders and any remaining quantity

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `fullyDistributed​OrdersList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.OrderQuantitiesOutputRepresentation`\> | Orders that have all quantities distributed. | 58.0 |
| `notDistributed​OrdersList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.OrderQuantitiesOutputRepresentation`\> | Orders that have no quantities available after distribution. | 58.0 |
| `partially​Distributed​OrdersList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.OrderQuantitiesOutputRepresentation`\> | Orders that have partially distributed quantities after distribution. | 58.0 |
| `quantities​RemainingList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ItemQuantityOutputRepresentation`\> | Quantities remaining after the distribution. | 58.0 |
