---
doc_id: "apex_connectapi_input_refund_instructions_hint"
---

# ConnectApi.RefundInstructionsHintInputRepresentation

The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `paymentCreditSequenceItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< `ConnectApi.PaymentCreditSequenceItemInputRepresentation`\> | The Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | Required | 65.0 |
| `refundSequenceItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.RefundSequenceItemInputRepresentation`\> | The Order Payment Summary ID and amount for the individual refund items in a sequence. Each item has a payment method and refund amount to be processed for that method. | Required | 65.0 |
