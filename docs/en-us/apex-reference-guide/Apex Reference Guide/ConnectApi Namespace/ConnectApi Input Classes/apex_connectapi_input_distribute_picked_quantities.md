---
doc_id: "apex_connectapi_input_distribute_picked_quantities"
---

# ConnectApi.DistributePickedQuantitiesInputRepresentation

Input representation to Distribute Picked Quantities

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `distributeToOrders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.DistributeToOrdersInputRepresentation`\> | List of orders that need quantities distributed. |  | 58.0 |
| `optimization​Criteria` | String | Criteria used for distributing picked quantities to orders. |  | 58.0 |
| `quantities​PickedList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ItemQuantityInputRepresentation`\> | Quantities for each item picked. |  | 58.0 |
