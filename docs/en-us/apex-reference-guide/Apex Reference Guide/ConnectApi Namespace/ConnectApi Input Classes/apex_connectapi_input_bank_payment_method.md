---
doc_id: "apex_connectapi_input_bank_payment_method"
---

# ConnectApi.BankPaymentMethodRequest

Bank payment method input representation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `accountHolder​FirstName` | String | First name of the bank account holder. | Optional | 65.0 |
| `accountHolder​LastName` | String | Last name of the bank account holder. | Optional | 65.0 |
| `accountHolderName` | String | Name of the bank account holder. | Required | 65.0 |
| `accountHolder​Type` | `ConnectApi.​AccountHolderType` | Bank account holder type. Valid values are:
-   `Business`
-   `Individual`

 | Optional | 65.0 |
| `accountId` | String | Salesforce account to which this payment method is linked. | Required | 65.0 |
| `accountNumber` | String | Unique account number for the bank account. | Required | 65.0 |
| `accountType` | `ConnectApi.​AccountType` | Bank account type. Valid values are:

-   `Business`
-   `Savings`

for e.g. Savings/Checking | Optional | 65.0 |
| `autoPay` | Boolean | Indicates whether a token for recurring payments is being requested (`true`) or not (`false`). The token lets the payment method be used for recurring payments. | Optional | 65.0 |
| `bankCode` | String | Routing number is a unique nine-digit code that identifies the bank. | Required | 65.0 |
| `bankType` | `ConnectApi.​BankType` | Bank type. Valid values are:

-   `ACH`—Automated Clearing House transaction
-   `BACS`—Bankers' Automated Clearing Services transaction
-   `BECS`—Bulk Electronic Clearing System transaction
-   `SepaDebit`—Single Euro Payments Area transaction

 | Optional | 65.0 |
| `comments` | String | Comments for providing more information about the bank. | Optional | 65.0 |
| `email` | String | Email address of the bank account holder. | Optional | 65.0 |
| `mandate` | String | Authorization from the account holder to debit their payment method. | Optional | 65.0 |
| `nickName` | String | Nick name of the bank account holder. | Optional | 65.0 |
| `standardEntry​ClassCode` | `ConnectApi.​StandardEntryClassCode` | Three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network. Valid values are:

-   `CCD`—Corporate Credit or Debit
-   `PPD`—Prearranged Payment and Deposit
-   `TEL`—Telephone-Initiated Entry
-   `WEB`—Internet Initiated/Mobile

 | Optional | 65.0 |
