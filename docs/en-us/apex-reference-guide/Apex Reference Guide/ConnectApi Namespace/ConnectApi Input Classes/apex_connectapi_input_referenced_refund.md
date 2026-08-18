---
doc_id: "apex_connectapi_input_referenced_refund"
---

# ConnectApi.ReferencedRefundRequest

Referenced refund input.

Subclass of [ConnectApi.RefundRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund.htm "Refund input.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `accountId` | String | ID of the account linked to the referenced refund request. | Optional | 50.0 |
| `amount` | Double | Amount refunded. | Required | 50.0 |
| `clientContext` | String | Context for payment APIs. Used for a payment caller to re-establish context. | Optional | 50.0 |
| `comments` | String | Optional comments for the refund. | Optional | 50.0 |
| `effectiveDate` | Datetime | Date when the refund becomes effective. | Optional | 50.0 |
| `paymentGroup` | [`ConnectApi.​PaymentGroupRequest`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_group.htm "Payment group input consumed by a payment group service.") | Payment group details associated with the refund request. | Optional | 50.0 |
