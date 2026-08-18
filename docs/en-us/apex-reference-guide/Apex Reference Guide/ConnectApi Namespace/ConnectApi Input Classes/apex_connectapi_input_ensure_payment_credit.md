---
doc_id: "apex_connectapi_input_ensure_payment_credit"
---

# ConnectApi.EnsurePaymentCreditInputRepresentation

The credit memo information and, optionally, the payment sequence details for issuing credits. The credit memo amount is distributed to the payment methods specified in the payment sequence until the amount is fully applied. If you don’t specify a payment sequence, the default payment sequence for Ensure Payment is used.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `creditMemo` | `CreditMemoInputRepresentation` | The credit memo that’s being credited. | Required | 65.0 |
| `paymentCreditSequence` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.PaymentCreditSequenceInputRepresentation`\> | The ordering sequence of payments being used for the payment credit application. | Optional | 65.0 |
