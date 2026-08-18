---
doc_id: "apex_connectapi_output_refund_instructions_hint_output"
---

# ConnectApi.RefundInstructionsHintOutputRepresentation

Instructions showing the sequence in which credits and refunds were issued to the customer.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `paymentCreditSequence` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.PaymentCreditSequenceItemOutputRepresentation` \> | The representation of individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it. | 65.0 |
| `refundSequence` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.RefundSequenceItemOutputRepresentation`\> | The order payment summary ID and value of the processed refund items. | 65.0 |
