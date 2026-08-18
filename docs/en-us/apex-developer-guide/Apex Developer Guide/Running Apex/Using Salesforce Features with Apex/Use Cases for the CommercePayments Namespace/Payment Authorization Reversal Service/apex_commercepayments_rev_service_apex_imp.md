---
doc_id: "apex_commercepayments_rev_service_apex_imp"
---

# Authorization Reversal Apex Class Implementation

The Authorization Reversal Service uses the `AuthorizationReversalRequest` and `AuthorizationReversalResponse` classes to manage the creation and storage of authorization reversal information. Implement these classes in your payment gateway adapter.

-   **AuthorizationReversalRequest**: Represents the authorization reversal request. Extends `BaseRequest` and inherits all its methods. `AuthorizationReversalRequest` uses a constructor to build an authorization reversal request record in Salesforce. The `AuthorizationReversalRequest` constructor takes no arguments. You can invoke it as follows. 

```apex
CommercePayments.AuthorizationReversalRequest arr = new CommercePayments.AuthorizationReversalRequest();
```

 If you want to build a sample authorization reversal, you can also invoke a constructor with arguments for the reversal amount and payment authorization ID. However, the constructor would only work for test usage and would throw an exception if used outside of the Apex test context. 

```apex
commercepayments.AuthorizationReversalRequest authorizationReversalRequest = 
new commercepayments.AuthorizationReversalRequest(80, authObj.id);
```

-   **AuthorizationReversalResponse**: The payment gateway adapter sends this class as a response for an Authorization Reversal request type. Extends `AbstractResponse` and inherits its methods. `AuthorizationReversalResponse` uses a constructor to build an authorization reversal request record in Salesforce. The `AuthorizationReversalResponse` constructor takes no arguments. You can invoke it as follows: 

```apex
CommercePayments.AuthorizationReversalResponse arp = new CommercePayments.AuthorizationReversalResponse();
```

:::tip Note
Salesforce doesn't support bulk operations or custom fields in the authorization reversal
   process.
:::

## Implementing Reversal Classes in Your Gateway Adapter

Add your reversal classes to your payment gateway adapter. We recommend adding `AuthorizationReversal` as a possible `requestType` value when calling `processRequest` on the gateway’s response.

```apex
global commercepayments.GatewayResponse processRequest(commercepayments.paymentGatewayContext gatewayContext) {
        commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
        commercepayments.GatewayResponse response;
        
        try {
        //add conditions for other requestType values here
        //..
        else if (requestType == commercepayments.RequestType.AuthorizationReversal) {
                response = createAuthReversalResponse((commercepayments.AuthorizationReversalRequest)gatewayContext.getPaymentRequest());}
        
        return response;
```

Then, add a class that sets the amount of the authorization reversal request, gateway information, and the Salesforce result code.

```apex
global commercepayments.GatewayResponse createAuthReversalResponse(commercepayments.AuthorizationReversalRequest authReversalRequest) {
        commercepayments.AuthorizationReversalResponse authReversalResponse = new commercepayments.AuthorizationReversalResponse();
        if(authReversalRequest.amount!=null )
        {
            authReversalResponse.setAmount(authReversalRequest.amount);
        }
        else
        {
             throw new SalesforceValidationException('Required Field Missing : Amount');             
        }
   
        system.debug('Response - success');
        authReversalResponse.setGatewayDate(system.now());
        authReversalResponse.setGatewayResultCode('00');
        authReversalResponse.setGatewayResultCodeDescription('Transaction Normal');
        //Replace 'xxxxx' with the gateway reference number.
        authReversalResponse.setGatewayReferenceNumber('SF'+xxxxx);
        authReversalResponse.setSalesforceResultCodeInfo(SUCCESS_SALESFORCE_RESULT_CODE_INFO);
        return authReversalResponse;
    }
```

**Sample Apex Request**

```apex
String authorizationId = '0XcxXXXXXXXXXXXXXXX';
ConnectApi.AuthorizationReversalRequest authorizationReversalRequest = new ConnectApi.AuthorizationReversalRequest();
authorizationReversalRequest.amount = 1.0;
authorizationReversalRequest.comments = 'Captured from custom action';
authorizationReversalRequest.ipAddress = '192.162.10.3';
authorizationReversalRequest.email = 'testuser@example.com';

ConnectApi.AuthorizationReversalResponse authorizationReversalResponse = ConnectApi.Payments.reverseAuthorization(authorizationReversalRequest, authorizationId);
String authReversalId = authorizationReversalResponse.paymentAuthAdjustment.id;
System.debug(authorizationReversalResponse);
System.debug(authReversalId);
```
