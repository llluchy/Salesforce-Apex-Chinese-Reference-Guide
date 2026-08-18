---
doc_id: "apex_connectapi_output_payment_output"
---

# ConnectApi.PaymentResponse

Payment output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `accountId` | String | ID of the account related the payment record. | 50.0 |
| `amount` | Double | Total amount of the payment transaction performed in the payment request. | 50.0 |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the payment output. | 50.0 |
| `effectiveDate` | Datetime | Date that the payment becomes effective. | 50.0 |
| `id` | String | ID of the payment record. | 50.0 |
| `paymentNumber` | String | Number of the payment record created as a result of the request processing. | 50.0 |
| `requestDate` | Datetime | Date when the payment transaction occurred. | 50.0 |
| `status` | String | Status of the new payment record. Can be DRAFT, PROCESSED or CANCELLED. | 50.0 |
