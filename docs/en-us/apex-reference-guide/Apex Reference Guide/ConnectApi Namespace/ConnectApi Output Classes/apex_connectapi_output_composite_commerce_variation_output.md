---
doc_id: "apex_connectapi_output_composite_commerce_variation_output"
---

# ConnectApi.CompositeCommerceVariationOutputRepresentation

Details of composite product variations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.")\> | List of any errors that were returned, including the error code and error message. | 62.0 |
| `productIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | IDs of the created product variations. | 62.0 |
| `success` | Boolean | Indicates whether the product variations were successfully created (`true`) or not (`false`). | 62.0 |
