---
doc_id: "apex_connectapi_input_create_quote_from_cart"
---

# ConnectApi.CreateQuoteFromCartInput

Input representation for creating a quote from a cart.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `additionalFields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Map of standard and custom Quote fields, such as expiration date and buyer email. | Required | 66.0 |
| `comments` | String | Comments submitted by the buyer when requesting a quote. | Optional | 66.0 |
| `contextDefinitionName` | String | Context defination name provided by the buyer when requesting a quote. | Optional | 66.0 |
| `deleteCart` | Boolean | Indicate whether to delete the cart (`true`) or not (`false`) after the quote is created. | Optional | 66.0 |

## See Also

- [createQuoteFromCart(webstoreId, activeCartOrId, createQuoteFromCartInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_createQuoteFromCart_1)

-   [ConnectApi.CreateQuoteFromCartOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_quote_from_cart_output.htm "Representation of the response for creating a quote from a cart.")
