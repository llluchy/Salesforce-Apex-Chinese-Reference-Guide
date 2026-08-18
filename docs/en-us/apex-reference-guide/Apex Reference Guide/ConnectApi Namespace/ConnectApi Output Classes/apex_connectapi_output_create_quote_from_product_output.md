---
doc_id: "apex_connectapi_output_create_quote_from_product_output"
---

# ConnectApi.CreateQuoteFromProductOutput

Representation of the response for creating a quote from a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.QuoteError`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_quote_error_output.htm "Error representation.")\> | Detailed error message if the create quote from product operation was unsuccessful. | 67.0 |
| `quoteId` | String | ID of the quote created upon a successful request. | 67.0 |

## See Also

- [createQuoteFromProduct(webstoreId, productId, createQuoteFromProductInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_createQuoteFromProduct_1)

-   [ConnectApi.CreateQuoteFromProductInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_quote_from_product.htm "Input representation for creating a quote from a product.")
