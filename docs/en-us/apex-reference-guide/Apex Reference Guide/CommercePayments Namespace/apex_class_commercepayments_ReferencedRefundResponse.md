---
doc_id: "apex_class_commerce_payments_ReferencedRefundResponse"
---

# ReferencedRefundResponse Class

The payment gateway adapter sends this response for the `ReferencedRefund` request type.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

`CommercePayments.ReferencedRefundResponse refr = new CommercePayments.ReferencedRefundResponse();`

## See Also

- [ReferencedRefundResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_methods)

## ReferencedRefundResponse Methods

The following are methods for `ReferencedRefundResponse`.

## See Also

- [setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setAmount)
- [setAsync(async)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commercepayments_ReferencedRefundResponse_setAsync)
- [setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayAvsCode)
- [setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayDate)
- [setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayMessage)
- [setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayReferenceDetails)
- [setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayReferenceNumber)
- [setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayResultCode)
- [setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayResultCodeDescription)
- [setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setSalesforceResultCodeInfo)

### setAmount(amount)

Sets the transaction amount. The value must be a postive number.

#### Signature

`global void setAmount(Double amount)`

#### Parameters

-   **amount**: Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.") The amount to be debited or captured.

#### Return Value

Type: void

### setAsync(async)

Sets whether the payment capture or authorization is asynchronous (`True`) or synchronous (`False`). If `True`, then the payment refund record created has a status of `Pending`.

#### Signature

`public void setAsync(Boolean async)`

#### Parameters

-   **async**: Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the payment gateway’s address verification system (AVS) code.

#### Signature

`global void setGatewayAvsCode(String gatewayAvsCode)`

#### Parameters

-   **gatewayAvsCode**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Code sent by gateways that use an address verification system.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the payment gateway’s date.

#### Signature

`global void setGatewayDate(Datetime gatewayDate)`

#### Parameters

-   **gatewayDate**: Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.") Date and time of the gateway communication.

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets information or messages that the gateway returned.

#### Signature

`global void setGatewayMessage(String gatewayMessage)`

#### Parameters

-   **gatewayMessage**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Information or error messages returned by the gateway.

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets the payment gateway’s reference details.

#### Signature

`global void setGatewayReferenceDetails(String gatewayReferenceDetails)`

#### Parameters

-   **gatewayReferenceDetails**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Information about the gateway communication.

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the payment gateway’s reference number.

#### Signature

`global void setGatewayReferenceNumber(String gatewayReferenceNumber)`

#### Parameters

-   **gatewayReferenceNumber**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Unique transaction ID created by the payment gateway.

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets the payment gateway’s result code.

#### Signature

`global void setGatewayResultCode(String gatewayResultCode)`

#### Parameters

-   **gatewayResultCode**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The gateway result code. Must be mapped to a Salesforce result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets the payment gateway’s result code description.

#### Signature

`global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)`

#### Parameters

-   **gatewayResultCodeDescription**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Description of the `GatewayResultCode`. Provides more information about the result code returned by the gateway.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Set the Salesforce result code info.

#### Signature

`global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)`

#### Parameters

-   **salesforceResultCodeInfo**: Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.") Describes the Salesforce result code value.

#### Return Value

Type: void
