---
doc_id: "apex_commercepayments_process_payments"
---

# Process Payments

Process a payment in the payment gateway.

<table class="editionTable" border="0" summary="Salesforce editions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="subHead">Available in: Salesforce Spring ’20</td></tr></tbody></table>

  

To access `commercepayments` API, you need the PaymentPlatform org permission.

1.  Get the payment capture request object from the `PaymentGatewayContext Class`.
    
    

```apex
commercepayments.CaptureRequest = (commercepayments.CaptureRequest)gatewayContext.getPaymentRequest()
```

    
2.  Set the HTTP request object.
    
    

```apex
HttpRequest req = new HttpRequest();
req.setHeader('Content-Type', 'application/json');
```

    
3.  Read the parameters from the [`CaptureRequest`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_class_commerce_payments_CaptureRequest) object and prepare the HTTP request body.
4.  Make the HTTP call to the gateway using the `PaymentsHttp Class`.
    
    

```apex
commercepayments.PaymentsHttp http = new commercepayments.PaymentsHttp();
HttpResponse res = http.send(req);
```

    
5.  Parse the `httpResponse` and prepare the `CaptureResponse` object.
    
    

```apex
commercepayments.CaptureResponse captureResponse = new commercepayments.CaptureResponse();
captureResponse.setGatewayResultCode(“”); captureResponse.setGatewayResultCodeDescription(“”); captureResponse.setGatewayReferenceNumber(“”);
captureResponse.setSalesforceResultCodeInfo(getSalesforceResultCodeInfo(commercepayments.SalesforceResultCode.SUCCESS.name())); 
captureResponse.setGatewayReferenceDetails(“”);
captureResponse.setAmount(double.valueOf(100);
```

    
6.  Return the `captureResponse`.
