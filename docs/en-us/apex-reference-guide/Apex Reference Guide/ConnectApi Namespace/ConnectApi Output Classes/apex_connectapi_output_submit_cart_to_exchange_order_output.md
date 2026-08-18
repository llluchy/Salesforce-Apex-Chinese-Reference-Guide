---
doc_id: "apex_connectapi_output_submit_cart_to_exchange_order_output"
---

# ConnectApi.SubmitCartToExchangeOrderOutputRepresentation

Exhange order summary resulting from a submit cart to exchange order action.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `balanceStateExchangeWebCart` | `ConnectApi.BalanceStatePreviewOutput` | The balance state preview for the exchange web cart. | Big, 61.0 |
| `balanceStateOriginalOrderSummary` | `ConnectApi.BalanceStatePreviewOutput` | The balance state preview for the original order summary. | Big, 61.0 |
| `balanceStateReturnOrder` | `ConnectApi.BalanceStatePreviewOutput` | The balance state preview for the return order. | Big, 61.0 |
| `changeBalances` | `ConnectApi.ChangeItemOutputRepresentation` | Change order financial values for a preview order action. | Big, 60.0 |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | Any errors that were returned. | Big, 60.0 |
| `exchangeOrderSummaryId` | String | Exchange order summary ID. | Big, 60.0 |
| `orderSummaryId` | String | ID of the order summary. | Big, 60.0 |
| `success` | Boolean | Indicates whether the transaction was successful. | Big, 60.0 |
