---
doc_id: "apex_connectapi_input_create_order_payment_summary"
---

# ConnectApi.CreateOrderPaymentSummaryInputRepresentation

An OrderSummary for which to create an OrderPaymentSummary, with the payment authorization or payments to include in it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `orderSummaryId` | String | ID of the OrderSummary. | Required | 48.0 |
| `name` | String | Name of the OrderPaymentSummary. | Optional | 66.0 |
| `payment​AuthorizationId` | String | ID of the payment authorization. | Either a payment authorization or at least one payment is required. | 48.0 |
| `paymentIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of IDs of the payments. | Either a payment authorization or at least one payment is required. | 48.0 |

## See Also

- [createOrderPaymentSummary(orderPaymentSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderPaymentSummary_static_methods.htm#apex_ConnectAPI_OrderPaymentSummary_createOrderPaymentSummary_1)
