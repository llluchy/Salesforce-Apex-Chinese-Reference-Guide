---
doc_id: "apex_external_services"
---

# External Services

External Services connect your Salesforce org to a service outside of Salesforce, such as an employee banking service. After you register the external service, you can call it natively in your Apex code. Objects and operations defined in the external service's registered API specification become Apex classes and methods in the `ExternalService` namespace. The registered service's schema types map to Apex types, and are strongly typed, making the Apex compiler do the heavy lifting for you. For example, you can make a type safe callout to an external service from Apex without needing to use the `Http` class or perform transforms on JSON strings.

## See Also

- [Salesforce Help: Invoke External Service Callouts Using Apex](https://help.salesforce.com/s/articleView?id=platform.external_services_apex_invoking.htm&amp;type=5&amp;language=en_US)
