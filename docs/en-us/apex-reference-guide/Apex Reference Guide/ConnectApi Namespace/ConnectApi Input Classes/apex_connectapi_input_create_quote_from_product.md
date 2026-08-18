---
doc_id: "apex_connectapi_input_create_quote_from_product"
---

# ConnectApi.CreateQuoteFromProductInput

Input representation for creating a quote from a product.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `additionalFields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Key-value pairs for quote entity fields, including both standard and custom fields, used to set additional quote properties during creation. | Required | 67.0 |
| `comments` | String | Buyer-provided comments when requesting a quote, including special requests, bulk pricing inquiries, or additional notes. | Optional | 67.0 |
| `contextDefinitionName` | String | Context definition name for Revenue Cloud (RLM) when requesting a quote. | Optional | 67.0 |
| `quantity` | String | Quantity of the product to include in the quote. | Required | 67.0 |

## See Also

- [createQuoteFromProduct(webstoreId, productId, createQuoteFromProductInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_createQuoteFromProduct_1)

-   [ConnectApi.CreateQuoteFromProductOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_quote_from_product_output.htm "Representation of the response for creating a quote from a product.")
