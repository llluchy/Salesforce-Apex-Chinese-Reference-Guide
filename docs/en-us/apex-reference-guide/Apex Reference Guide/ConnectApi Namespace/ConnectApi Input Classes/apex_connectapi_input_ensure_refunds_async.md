---
doc_id: "apex_connectapi_input_ensure_refunds_async"
---

# ConnectApi.EnsureRefundsAsyncInputRepresentation

ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `creditMemoId` | String | ID of the credit memo that represents a refund amount. | Either `creditMemoId` or `excessFunds​Amount` is required | 48.0 |
| `excessFunds​Amount` | Double | Amount of excess funds to refund. | Either `excessFunds​Amount` or `creditMemoId` is required | 49.0 |
| `invoicesToPay` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​InvoiceToPay​InputRepresentation`\> | List of invoices for any fees that reduce the refund, such as return fees. | Optional | 56.0 |
| `isAllowPartial` | Boolean | This value controls the behavior when the amounts included in the `sequences` list don’t cover the entire refund amount. If this value is false, then the default refund logic is applied to ensure the remaining refund amount. If this value is true, then the unrefunded balance remains on the credit memo. If you don’t specify a `sequences` list, this value is ignored and the default refund logic is applied. The default value is false. | Optional | 56.0 |
| `isReservedBalanceAmountConsidered` | Boolean | If true, the refundable amount is used to open the payment balance for the reservedBalanceAmount in the Order Payment Summaries. The remaining refundable amount considers the sequence of order payment summaries, if provided. If false, any reserved balance amount for exchanges is refunded. | Optional | 59.0 |
| `sequences` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​Sequence​OrderPaymentSummary​InputRepresentation`\> | Ordered list of refund amounts and OrderPaymentSummaries to apply them to. An OrderPaymentSummary must either belong to the order summary or be a reference to the order summary in the OrderPaymentSummaryReference entity. The process traverses this list in order and stops when it's refunded the full amount. | Optional | 56.0 |

## See Also

- [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1)
