---
doc_id: "apex_connectapi_output_preserve_cart_output"
---

# ConnectApi.PreserveCart

Represents a preserved cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `cartId` | String | ID of the authenticated cart. | 60.0 |
| `currencyIsoCode` | String | Currency ISO code for the authenticated cart. | 60.0 |
| `failedCartItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CartItem​BasicResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_basic_result.htm "Represents the result of a cart request.")\> | List of products that weren’t successfully transferred from the guest cart to the authenticated cart. | 60.0 |
| `numberOfProducts` | Integer | Total number of products in the guest cart. | 60.0 |
| `numberOfProductsWithError` | Integer | Total number of products that weren’t successfully transferred from the guest cart to the authenticated cart. | 60.0 |
| `numberOfProductsWithSuccess` | Integer | Total number of products successfully transferred from the guest cart to the authenticated cart. | 60.0 |
| `succeededCartItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CartItem​BasicResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_basic_result.htm "Represents the result of a cart request.")\> | List of products successfully transferred from the guest cart to the authenticated cart. | 60.0 |
