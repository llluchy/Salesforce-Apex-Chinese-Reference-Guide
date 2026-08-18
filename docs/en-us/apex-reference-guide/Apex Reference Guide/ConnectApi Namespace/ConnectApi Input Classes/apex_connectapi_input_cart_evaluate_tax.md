---
doc_id: "apex_connectapi_input_cart_evaluate_tax"
---

# ConnectApi.CartEvaluateTaxInput

Shipping address and custom fields used to calculate taxes for a cart.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `customFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`SObject`](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\> | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, the WebCart, CartItem, and CartDeliveryGroup sObjects are supported. Field-level security rules from the [shopper profile](https://help.salesforce.com/s/articleView?id=commerce.comm_create_shopper_profile.htm&type=5&language=en_US) are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. See [Create a Cart and Cart Item with Custom Fields in a Commerce Store](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_commerce_cart_custom.htm). | Optional | 63.0 |
| `shippingAddress` | [`ConnectApi.CartShippingAddressInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_shipping_address.htm "A cart shipping address.") | Shipping address for a cart. | Required | 63.0 |
