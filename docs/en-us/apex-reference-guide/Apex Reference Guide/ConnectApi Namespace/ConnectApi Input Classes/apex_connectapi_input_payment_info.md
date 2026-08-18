---
doc_id: "apex_connectapi_input_payment_info"
---

# ConnectApi.PaymentInfoInputRepresentation

Payment information about additional funds required for an order.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `lastPaymentGatewayLogId` | String | Last payment gateway log ID for the new order payment summary. | Optional | 60.0 |
| `name` | String | Overrides the default name of the order payment summary created. | Optional | 60.0 |
| `paymentAuthorizationId` | String | Payment authorization ID to be used if needed to fund the exchange order. | Optional | 60.0 |
| `paymentIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | Payment IDs for the new order payment summary. | Optional | 60.0 |
| `paymentMethodId` | String | Payment method ID for the new order payment summary. | Optional | 60.0 |
