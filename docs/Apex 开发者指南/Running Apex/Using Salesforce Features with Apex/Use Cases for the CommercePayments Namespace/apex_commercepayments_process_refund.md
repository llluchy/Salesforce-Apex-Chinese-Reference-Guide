---
doc_id: "apex_commercepayments_process_refund"
---

# Process Refund

Process a refund in the payment gateway.

<table class="editionTable" border="0" summary="Salesforce editions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="subHead">Available in: Salesforce Spring ’20</td></tr></tbody></table>

  

To access the `commercepayments` API, you need the PaymentPlatform org permission.

1.  Get the referenced refund request object from the `PaymentGatewayContext Class`.
    
    

```plain
commercepayments.ReferencedRefundRequest = (commercepayments.ReferencedRefundRequest)gatewayContext.getPaymentRequest();
```

    
2.  Set the HTTP request object.
    
    

```plain
HttpRequest req = new HttpRequest();
req.setHeader('Content-Type', 'application/json');
```

    
3.  Read the parameters from the `ReferencedRefundRequest object` and prepare the HTTP request body.
4.  Make the HTTP call to the gateway using the`PaymentsHttp Class`.
    
    

```plain
commercepayments.PaymentsHttp http = new commercepayments.PaymentsHttp();
HttpResponse res = http.send(req);
```

    
5.  Parse the `httpResponse` and prepare the `ReferencedRefundResponse` object.
    
    

```plain
commercepayments.ReferencedRefundResponse referencedRefundResponse = new commercepayments.ReferencedRefundResponse();
referencedRefundResponse.setGatewayResultCode(“”);
referencedRefundResponse.setGatewayResultCodeDescription(“”);
referencedRefundResponse.setGatewayReferenceNumber(“”);
referencedRefundResponse.setSalesforceResultCodeInfo(getSalesforceResultCodeInfo(commercepayments.SalesforceResultCode.SUCCESS.name())); 
referencedRefundResponse.setGatewayReferenceDetails(“”);
referencedRefundResponse.setAmount(double.valueOf(100);
```

    
6.  Return the `referencedRefundResponse`.
