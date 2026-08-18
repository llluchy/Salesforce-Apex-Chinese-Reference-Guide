---
doc_id: "apex_connectapi_output_composite_commerce_product_output"
---

# ConnectApi.CompositeCommerceProductOutputRepresentation

Details of a composite product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | List of any errors that were returned, including the error code and error message. | 61.0 |
| `productId` | String | ID of the product record created. | 61.0 |
| `success` | Boolean | Indicates whether the product was successfully created (`true`) or not (`false`). | 61.0 |
