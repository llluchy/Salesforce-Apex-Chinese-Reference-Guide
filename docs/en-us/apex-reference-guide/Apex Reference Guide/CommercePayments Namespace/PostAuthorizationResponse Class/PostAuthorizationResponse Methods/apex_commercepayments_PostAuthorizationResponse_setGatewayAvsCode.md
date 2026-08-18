---
doc_id: "apex_commercepayments_PostAuthorizationResponse_setGatewayAvsCode"
---

# setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.

## Signature

`public void setGatewayAvsCode(String gatewayAvsCode)`

## Parameters

-   **gatewayAvsCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Used to verify
    
    the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.
    

## Return Value

Type: void
