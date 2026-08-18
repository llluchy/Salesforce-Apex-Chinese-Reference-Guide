---
doc_id: "apex_connectapi_input_payment_initiation_source"
---

# ConnectApi.PaymentInitiationSourceInputRepresentation

Payment initiation source input representation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `application` | `ConnectApi.​Application` | Application that initiated this payment, such as Revenue Lifecycle Management (RLM). | Optional | 63.0 |
| `channel` | String | Channel that submitted the payment. | Optional | 63.0 |
| `customFields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Map containing custom field names and their corresponding IDs. | Optional | 63.0 |
| `process` | String | Process or component of the application that submitted the payment, such as the Billing component of RLM. | Optional | 63.0 |
| `standard​References` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Map of standard reference fields and their corresponding IDs. | Optional | 63.0 |
