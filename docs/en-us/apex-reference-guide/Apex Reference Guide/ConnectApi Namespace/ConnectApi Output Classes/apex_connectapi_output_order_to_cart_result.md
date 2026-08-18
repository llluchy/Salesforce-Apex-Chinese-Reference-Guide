---
doc_id: "apex_connectapi_output_order_to_cart_result"
---

# ConnectApi.OrderToCartResult

Result of action adding an order to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `cartId` | String | ID of the cart. | 57.0 |
| `totalFailedProductCount` | Integer | Number of products that couldn't be successfully added to the cart from the order. | 57.0 |
| `totalSucceededProductCount` | Integer | Number of products successfully added to the cart from the order. | 57.0 |
| `unaddedProducts` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.OrderToCartFailedProduct`\> | List of products not successfully added to the cart. | 57.0 |
