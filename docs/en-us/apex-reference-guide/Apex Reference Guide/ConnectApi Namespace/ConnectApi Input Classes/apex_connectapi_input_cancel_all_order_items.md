---
doc_id: "apex_connectapi_input_cancel_all_order_items"
---

# ConnectApi.CancelAllOrderItemsInputRepresentation

Cancellation of all items in an order.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeItemFees` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ChangeItemFeeWithTaxInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_item_fee_with_tax.htm "Input representation of a change item fee with taxes.")\> | List of input data for fees, including taxes, associated with the order items being canceled. | Optional | 63.0 |
| `excludedItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of items excluded from cancellation. | Optional | 63.0 |
| `reason` | String | Reason for the cancellation. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object. | Required | 63.0 |
| `reasonText` | String | Reason text used for the return insights. The value has a max of 255 characters. | Optional | 63.0 |
