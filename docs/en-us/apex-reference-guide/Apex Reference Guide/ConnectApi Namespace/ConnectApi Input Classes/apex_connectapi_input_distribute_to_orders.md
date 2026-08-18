---
doc_id: "apex_connectapi_input_distribute_to_orders"
---

# ConnectApi.DistributeToOrdersInputRepresentation

Input representation of a single element within the Distribute To Orders list.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `externalOrderId` | String | ID of the external order. | Required | 58.0 |
| `itemQuantities` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ItemQuantityInputRepresentation`\> | List of order item quantities. | Required | 58.0 |
