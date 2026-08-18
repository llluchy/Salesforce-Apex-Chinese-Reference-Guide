---
doc_id: "apex_class_commercepayments_AbstractTransactionResponse"
---

# AbstractTransactionResponse Class

Abstract class for storing normalized information sent from payment gateways about a payment transaction. Holds the common response fields sent from payment gateways for authorization, sale, capture, and refund transactions.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Specify the `CommercePayments` namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

`CommercePayments.AbstractTransactionResponse atr = new CommercePayments.AbstractTransactionResponse();`

## See Also

- [AbstractTransactionResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_methods)

## AbstractTransactionResponse Methods

The following are methods for `AbstractTransactionResponse`.

## See Also

- [setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setAmount)
- [setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayAvsCode)
- [setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayDate)
- [setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayMessage)
- [setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayReferenceDetails)
- [setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayReferenceNumber)
- [setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayResultCode)
- [setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayResultCodeDescription)
- [setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setSalesforceResultCodeInfo)

### setAmount(amount)

Sets the transaction amount. Must be a non-negative value.

#### Signature

`global void setAmount(Double amount)`

#### Parameters

-   **amount**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    The amount of the transaction.
    

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code that the gateway returned. Maximum length of 64 characters.

#### Signature

`global void setGatewayAvsCode(String gatewayAvsCode)`

#### Parameters

-   **gatewayAvsCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Used to verify
    
    the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.
    

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the date that the notification occurred. Some gateways don’t send this value.

#### Signature

`global void setGatewayDate(Datetime gatewayDate)`

#### Parameters

-   **gatewayDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    The date that the transaction occurred.
    

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the notification request. Maximum length of 255 characters.

#### Signature

`global void setGatewayMessage(String gatewayMessage)`

#### Parameters

-   **gatewayMessage**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The message that the gateway returned with the transaction request. Contains additional information about the transaction.
    

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets the payment gateway’s reference details.

#### Signature

`global void setGatewayReferenceDetails(String gatewayReferenceDetails)`

#### Parameters

-   **gatewayReferenceDetails**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Provides information about
    
    the gateway communication.
    

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the payment gateway’s reference number.

#### Signature

`global void setGatewayReferenceNumber(String gatewayReferenceNumber)`

#### Parameters

-   **gatewayReferenceNumber**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Unique transaction ID created by the payment gateway.
    

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. You can map the result code to a Salesforce-specific result code. Maximum length of 64 characters.

#### Signature

`global void setGatewayResultCode(String gatewayResultCode)`

#### Parameters

-   **gatewayResultCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Gateway-specific result code.
    
    Must be mapped to a Salesforce-specific result code.
    

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

#### Signature

`global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)`

#### Parameters

-   **gatewayResultCodeDescription**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Provides additional information about
    
    the result code and why the gateway returned the specific code. Descriptions vary between different gateways.
    

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information.

#### Signature

`global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)`

#### Parameters

-   **salesforceResultCodeInfo**:
    
    Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")
    
    Payment gateways have many response codes
    
    for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.
    

#### Return Value

Type: void
