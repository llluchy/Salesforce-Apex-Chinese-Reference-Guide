---
doc_id: "apex_connectapi_input_cart_from_quote"
---

# ConnectApi.CartFromQuoteInput

Input representation for creating a cart from a quote.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `operationType` | String | Operation type for creating a cart from a quote.
Valid values:

-   `CONVERT_TO_CART`—Create a cart from a quote only when its status is `Approved` or `Accepted`.
    
    When the user completes checkout by converting the quote to a cart, the method sets the `QuoteId` field on the [Order](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_order.htm "HTML (New Window)") object using the quote ID.
    
-   `DUPLICATE_TO_CART`—Duplicate the quote to a cart.

 | Required | 67.0 |

## See Also

- [createCartFromQuote(webstoreId, quoteId, cartFromQuoteInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_createCartFromQuote_1)

-   [ConnectApi.CartFromQuoteOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_from_quote_output.htm "Representation of the response for creating a cart from a quote.")
