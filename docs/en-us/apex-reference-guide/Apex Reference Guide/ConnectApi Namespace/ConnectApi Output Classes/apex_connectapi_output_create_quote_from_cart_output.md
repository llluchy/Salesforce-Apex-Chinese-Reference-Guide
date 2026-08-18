---
doc_id: "apex_connectapi_output_create_quote_from_cart_output"
---

# ConnectApi.CreateQuoteFromCartOutput

Representation of the response for creating a quote from a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`​ConnectApi.QuoteError`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_quote_error_output.htm "Error representation.")\> | Detailed error message if the create quote from a cart operation was unsuccessful. | 66.0 |
| `quoteId` | String | ID of the quote created from the cart. | 66.0 |

## See Also

- [createQuoteFromCart(webstoreId, activeCartOrId, createQuoteFromCartInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_createQuoteFromCart_1)

-   [ConnectApi.CreateQuoteFromCartInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_quote_from_cart.htm "Input representation for creating a quote from a cart.")
