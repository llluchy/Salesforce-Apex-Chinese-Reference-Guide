---
doc_id: "apex_commercepayments_PostAuthorizationResponse_setGatewayResultCodeDescription"
---

# setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

## Signature

`public void setGatewayResultCodeDescription(String gatewayResultCodeDescription)`

## Parameters

-   **gatewayResultCodeDescription**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Provides additional information about
    
    the result code and why the gateway returned the specific code. Descriptions will vary between different gateways.
    

## Return Value

Type: void
