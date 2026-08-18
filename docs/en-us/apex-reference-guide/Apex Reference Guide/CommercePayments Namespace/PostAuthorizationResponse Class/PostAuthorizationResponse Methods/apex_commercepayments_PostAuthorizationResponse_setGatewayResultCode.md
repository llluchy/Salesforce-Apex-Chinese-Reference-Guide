---
doc_id: "apex_commercepayments_PostAuthorizationResponse_setGatewayResultCode"
---

# setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.

## Signature

`public void setGatewayResultCode(String gatewayResultCode)`

## Parameters

-   **gatewayResultCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Gateway-specific result code.
    
    Must be used to map a Salesforce-specific result code.
    

## Return Value

Type: void
