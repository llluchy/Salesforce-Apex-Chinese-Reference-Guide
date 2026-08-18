---
doc_id: "apex_connectapi_input_adjust_order_item_summary"
---

# ConnectApi.AdjustOrderItemSummaryInputRepresentation

Price adjustments to order item summaries that together make up a price adjustment to an order, with options for adjusting items in the process of being fulfilled.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `adjustItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​AdjustItemInput​Representation`\> | List of price adjustments to order item summaries. | Required | 49.0 |
| `allocatedItems​ChangeOrderType` | String | Process to use for order item summary quantities that are currently being fulfilled, defined as `QuantityAllocated` - `QuantityFulfilled`. Values are:
-   `Disallowed`—When distributing the adjustment, ignore any quantities being fulfilled. If an order item summary’s entire quantity is being fulfilled, return an error. This is the default value.
-   `InFulfillment`—When distributing the adjustment, include quantities being fulfilled. Create a separate change order for the adjustments made to those quantities.
-   `PreFulfillment`—When distributing the adjustment, include quantities being fulfilled. Include the adjustments made to those quantities in the change order for pre-fulfillment quantity adjustments.

 | Optional | 55.0 |
| individualLineItemTaxAdjustments | Boolean | Specifies whether to create multiple lines for each tax adjustment or one line with all tax adjustments. The default value is false. | Optional | 59.0 |
