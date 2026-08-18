---
doc_id: "apex_connectapi_input_abstract_base_sequence"
---

# ConnectApi.AbstractBaseSequenceInputRepresentation

The sequence for refunds and payment credits.

This class is abstract.

Superclass of:

-   [ConnectApi.RefundSequenceItemInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund_sequence_item.htm "The Order Payment Summary ID and amount for the individual refund items in a sequence. Each item has a payment method and refund amount to be processed for that method.")
-   [ConnectApi.PaymentCreditSequenceItemInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_credit_sequence_item.htm "Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it with the type of credit transaction.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `amount` | Double | The amount being refunded. | Required | 65.0 |
| `orderPaymentSummaryId` | String | The order payment summary’s ID. | Required | 65.0 |
