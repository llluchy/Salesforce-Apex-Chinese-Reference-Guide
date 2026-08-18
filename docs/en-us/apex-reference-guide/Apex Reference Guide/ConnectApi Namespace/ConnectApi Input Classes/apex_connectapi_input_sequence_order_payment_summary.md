---
doc_id: "apex_connectapi_input_sequence_order_payment_summary"
---

# ConnectApi.SequenceOrderPaymentSummaryInputRepresentation

Amount to apply to specified OrderPaymentSummary as part of a payment or refund.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `amount` | Double | Amount to apply to the OrderPaymentSummary. | Optional | 56.0 |
| `orderPayment​SummaryId` | String | ID of the OrderPaymentSummary to apply the Amount to. | Required | 56.0 |

## See Also

- [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1)

-   [ConnectApi.EnsureRefundsAsyncInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_ensure_refunds_async.htm "ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.")
