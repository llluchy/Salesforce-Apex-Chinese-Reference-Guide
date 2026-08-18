---
doc_id: "apex_ConnectAPI_CommerceQuotes_static_methods"
---

# CommerceQuotes Class

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceQuotes Methods

These methods are for `CommerceQuotes`. All methods are static.

## See Also

- [updateQuote(webstoreId, quoteId, updateQuoteInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_updateQuote_2)
- [getQuoteDetail(webstoreId, quoteId, effectiveAccountId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_getQuoteDetail_1)
- [getQuotes(webstoreId, effectiveAccountId, fields, sortParam, pageSize, pageToken, earliestDate, latestDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_getQuotes_1)
- [createQuoteFromProduct(webstoreId, productId, createQuoteFromProductInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_createQuoteFromProduct_1)

### updateQuote(webstoreId, quoteId, updateQuoteInput)

Initiate a quote renegotiation or decline a quote.

This method initiates negotiation only when the quote status is Approved, as triggered by the Renegotiate or Decline action on the My Quotes page of the B2B storefront.

Updates quote status based on user action, changing Approved quotes back to Draft for renegotiation while saving comments, or setting status to Denied for rejected quotes.

#### API Version

67.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.UpdateQuoteOutput updateQuote(String webstoreId, String quoteId, ConnectApi.updateQuoteInput updateQuoteInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore

quoteId

Type: String

ID of the quote whose status is to be updated.

updateQuoteInput

Type: [`ConnectApi.updateQuoteInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_update_quote.htm "Input representation for updating the quote status and optionally creating an associated note.")

Representation for updating the quote status and optionally creating an associated note.

#### Return Value

Type: [`ConnectApi.UpdateQuoteOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_update_quote_output.htm "Representation of the quote update response.")

### getQuoteDetail(webstoreId, quoteId, effectiveAccountId, fields)

Get quote details associated with a specified account.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CommerceQuoteDetail getQuoteDetail(String webstoreId, String quoteId, String effectiveAccountId, String fields)`

#### Parameters

webstoreId

Type: String

ID of the web store.

quoteId

Type: String

ID of the quote.

effectiveAccountId

Type: String

User account ID used to retreive associated quote details.

fields

Type: String

List of fields to include in the response. Supports fields from the objects, including [Quote](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_quote.htm), [Quote Line Item](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm), and [Product2](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm).

#### Return Value

Type: [`ConnectApi.CommerceQuoteDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_quote_detail.htm "Representation of quote details response.")

### getQuotes(webstoreId, effectiveAccountId, fields, sortParam, pageSize, pageToken, earliestDate, latestDate)

Get all quotes associated with a specified account.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CommerceQuoteCollection getQuotes(String webstoreId, String effectiveAccountId, String fields, ConnectApi.CommereQuotesSortOrder sortParam, Integer pageSize, String pageToken, String earliestDate, String latestDate)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

effectiveAccountId

Type: String

User account ID used to retreive associated quotes.

fields

Type: String

List of fields to include in the response. Supports fields from the objects, including [Quote](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_quote.htm), [Quote Line Item](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm), and [Product2](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm).

sortParam

Type: `ConnectApi.CommereQuotesSortOrder`

Sort order for quotes. Valid values:

-   CreatedDateAsc—Sorts by the oldest created date.
-   CreatedDateDesc—Sorts by the most recent created date.

pageSize

Type: Integer

Number of items per page. Valid values are from 1 through 200. The default value is 25.

pageToken

Type: String

Base64 encoded page token to use to view a page of information. Page tokens are pageToken String returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned.

earliestDate

Type: String

ISO 8601 date string for the oldest date from which to get quote records. Return quotes created on or after this date. Valid format: yyyy-MM-dd'T'HH:mm:ss.SSSZ.

latestDate

Type: String

ISO 8601 date string for the most recent date from which to get quote records. Return quotes created before this date. Valid format: yyyy-MM-dd'T'HH:mm:ss.SSSZ.

#### Return Value

Type: [`ConnectApi.CommerceQuoteCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_quote_collection.htm "Representation of quotes associated to an account.")

### createQuoteFromProduct(webstoreId, productId, createQuoteFromProductInput)

Create a quote from a product.

This method creates a new quote from a product on the Product Display Pages (PDP) in a B2B storefront. It creates a temporary (secondary) cart to process the request. It converts the product details into quote line items based on the specified product ID and quantity. After processing, the secondary cart is deleted, regardless of whether the API call succeeds or fails.

Supported product types by license:

-   Simple products—Supported with B2B Commerce Only or B2B Commerce and Revenue Cloud licenses.
-   Static Bundled—Supported only with the B2B Commerce and Revenue Cloud licenses.

#### API Version

67.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CreateQuoteFromProductOutput createQuoteFromProduct(String webstoreId, String productId, ConnectApi.CreateQuoteFromProductInput createQuoteFromProductInput)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

productId

Type: String

ID of the product to convert to a quote.

createQuoteFromProductInput

Type: [`ConnectApi.CreateQuoteFromProductInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_quote_from_product.htm "Input representation for creating a quote from a product.")

Representation for creating a quote from a product.

#### Return Value

Type: [`ConnectApi.CreateQuoteFromProductOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_quote_from_product_output.htm "Representation of the response for creating a quote from a product.")
