---
doc_id: "apex_commercepayments_idempotency_guidelines"
---

# Idempotency Guidelines

Idempotency represents the ability of a payment gateway to recognize duplicate requests submitted either in error or maliciously, and then process the duplicate requests accordingly. When working with an idempotent gateway, consider these important guidelines.

<table class="editionTable" border="0" summary="Salesforce editions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="subHead">Available in: Salesforce Spring ’20</td></tr></tbody></table>

  

To access the `commercepayments` API, you need the PaymentPlatform org permission.

The payment gateway adapter class is linked to a paymentGatewayProvider object record. CCS Payments provides its own layer of idempotency for its own service request. Each payment gateway can also specify their `idempotencySupported` value in the paymentGatewayProvider object record. If Salesforce CCS Payment APIs detects a duplicate request and the gateway provider supports idempotency, the request body’s `duplicate` parameter becomes True.

```plain
commercepayments.CaptureRequest request = 
(commercepayments.CaptureRequest)paymentGatewayContext.getPaymentRequest();
Boolean isDuplicate = requestObject.duplicate
```

The idempotency key can be fetched from the request object.

`String idempotencyKey = request.idempotencyKey`
