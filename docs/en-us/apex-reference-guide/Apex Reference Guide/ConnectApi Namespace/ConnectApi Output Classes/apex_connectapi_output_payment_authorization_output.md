---
doc_id: "apex_connectapi_output_payment_authorization_output"
---

# ConnectApi.PaymentAuthorizationResponse

Payment authorization output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `accountId` | String | Salesforce account for the payment authorization. | 51.0 |
| `amount` | Double | Amount that the gateway authorized for the payment transaction. | 51.0 |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the payment group record. | 51.0 |
| `effectiveDate` | Datetime | Date that the authorization becomes effective. | 51.0 |
| `expirationDate` | Datetime | Date that the authorization expires. | 51.0 |
| `id` | String | ID of the payment authorization record. | 51.0 |
| `paymentAuthorizationNumber` | String | System-defined number for the payment authorization record. | 51.0 |
| `requestDate` | Datetime | Date that the authorization occurred. | 51.0 |
| `status` | String | Status of the payment authorization as returned by the gateway. | 51.0 |
