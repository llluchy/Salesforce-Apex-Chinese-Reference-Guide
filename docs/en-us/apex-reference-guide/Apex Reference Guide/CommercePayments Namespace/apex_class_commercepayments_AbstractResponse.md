---
doc_id: "apex_class_commerce_payments_AbstractResponse"
---

# AbstractResponse Class

Contains the normalized response fields from payment gateways that are common to all the other gateway responses.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

You must specify the `CommercePayments` namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

`CommercePayments.AbstractResponse abr = new CommercePayments.AbstractResponse();`

This class can’t be instantiated on its own. This class implements the GatewayResponse class. Other GatewayResponse classes extend this class to inherit common properties.

## See Also

- [AbstractResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_methods)

## AbstractResponse Methods

The following are methods for `AbstractResponse`.

## See Also

- [setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_setGatewayAvsCode)
- [setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_setGatewayDate)
- [setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_setGatewayMessage)
- [setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_setGatewayResultCode)
- [setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_setGatewayResultCodeDescription)
- [setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commerce_payments_AbstractResponse_setSalesforceResultCodeInfo)
- [setRetryCategory(retryCategory)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commercepayments_AbstractResponse_setRetryCategory)
- [setRetryDecision(retryDecision)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_commercepayments_AbstractResponse_setRetryDecision)

### setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.

#### Signature

`global void setGatewayAvsCode(String gatewayAvsCode)`

#### Parameters

-   **gatewayAvsCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Code sent by gateways that use
    
    an address verification system.
    

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the date that the transaction occurred. Some gateways don’t send this value.

#### Signature

`global void setGatewayDate(Datetime gatewayDate)`

#### Parameters

-   **gatewayDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    Date and time of the gateway communication.
    

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the payment request. Maximum length of 255 characters.

#### Signature

`global void setGatewayMessage(String gatewayMessage)`

#### Parameters

-   **gatewayMessage**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Information on error messages sent from
    
    the gateway.
    

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.

#### Signature

`global void setGatewayResultCode(String gatewayResultCode)`

#### Parameters

-   **gatewayResultCode**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Gateway-specific result code. Must be used to map a Salesforce-specific result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

#### Signature

`global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)`

#### Parameters

-   **gatewayResultCodeDescription**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Description of the gateway’s result code. Use this field to learn more about why the gateway returned a certain result code.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Signature

`global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)`

#### Parameters

-   **salesforceResultCodeInfo**: Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.") Description of the Salesforce result code value.

#### Return Value

Type: void

### setRetryCategory(retryCategory)

Sets the retry category returned by the payment gateway for the failed payment in a batch flow.

#### Signature

`public void setRetryCategory(commercepayments.RetryCategory retryCategory)`

#### Parameters

-   **retryCategory**: Type: commercepayments.[RetryCategory](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryCategory.htm "Specifies the retry category.") Specifies the payment failure category used to determine retry eligibility. Indicates the classification of the payment failure and whether the transaction is eligible for retry.

#### Return Value

Type: void

### setRetryDecision(retryDecision)

Sets the retry decision.

#### Signature

`public void setRetryDecision(commercepayments.RetryDecision retryDecision)`

#### Parameters

-   **retryDecision**: Type: commercepayments.[RetryDecision](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryDecision.htm "Specifies the retry decision.") Determines whether the payment operation can be retried based on the retry category.

#### Return Value

Type: void
