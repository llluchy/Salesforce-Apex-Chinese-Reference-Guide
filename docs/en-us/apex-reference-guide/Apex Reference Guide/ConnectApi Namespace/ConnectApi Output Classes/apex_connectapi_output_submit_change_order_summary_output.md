---
doc_id: "apex_connectapi_output_submit_change_order_summary_output"
---

# ConnectApi.SubmitChangeOrderSummaryOutputRepresentation

ID of the change order created for a submit change order summary action, and a set of its financial values.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `changeBalances` | `ConnectApi.​ChangeItem​OutputRepresentation` | The financial values for the change Order Summary action. | 66.0 |
| `orderSummaryId` | String | The ID of the OrderSummary. | 66.0 |
| `preFulfillmentChangeOrderId` | String | The pre fulfillment change order ID that holds the financial changes applicable to the modified order. When the change is non-financial, this value is always null. Use this change order to create a credit memo. | 66.0 |
