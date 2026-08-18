---
doc_id: "apex_connectapi_input_payment_credit_sequence_item"
---

# ConnectApi.PaymentCreditSequenceItemInputRepresentation

Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it with the type of credit transaction.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `creditType` | String | The type of payment credit that will be issued. Must be a valid value on the Credit Type picklist. | Required | 65.0 |
