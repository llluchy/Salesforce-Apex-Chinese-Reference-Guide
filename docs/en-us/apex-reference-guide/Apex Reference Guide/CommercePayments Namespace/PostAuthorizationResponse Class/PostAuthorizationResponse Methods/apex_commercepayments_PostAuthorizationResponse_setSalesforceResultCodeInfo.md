---
doc_id: "apex_commercepayments_PostAuthorizationResponse_setSalesforceResultCodeInfo"
---

# setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

## Signature

`public void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)`

## Parameters

-   **salesforceResultCodeInfo**:
    
    Type: commercepayments.[SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")
    
    Description of the Salesforce result code value.
    

## Return Value

Type: void
