---
doc_id: "apex_ConnectAPI_CommerceCatalogManagement_static_methods"
---

# CommerceCatalogManagement Class

Create or update a composite product. Create a variation product.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceCatalogManagement Methods

These methods are for `CommerceCatalogManagement`. All methods are static.

### compositeCommerceProductCreate(webstoreId, compositeCommerceProductInputRepresentation)

Create a composite product.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CompositeCommerceProductOutputRepresentation compositeCommerceProductCreate(String webstoreId, ConnectApi.CompositeCommerceProductInputRepresentation compositeCommerceProductInputRepresentation)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

compositeCommerceProductInputRepresentation

Type: [`ConnectApi.CompositeCommerceProductInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_composite_commerce_product.htm "Composite product input.")

Details used to create the composite product.

#### Return Value

Type: [`ConnectApi.CompositeCommerceProductOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_product_output.htm "Details of a composite product.")

### compositeCommerceProductUpdate(webstoreId, productId, compositeCommerceProductInputRepresentation)

Update a composite product.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CompositeCommerceProductOutputRepresentation compositeCommerceProductUpdate(String webstoreId, String productId, ConnectApi.CompositeCommerceProductInputRepresentation compositeCommerceProductInputRepresentation)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

productId

Type: String

ID of the composite product.

compositeCommerceProductInputRepresentation

Type: [`ConnectApi.CompositeCommerceProductInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_composite_commerce_product.htm "Composite product input.")

Details used to update the composite product.

#### Return Value

Type: [`ConnectApi.CompositeCommerceProductOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_product_output.htm "Details of a composite product.")

### compositeCommerceVariationCreate(webstoreId, compositeCommerceVariationInputRepresentation)

Create a variation product.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CompositeCommerceVariationOutputRepresentation compositeCommerceVariationCreate(String webstoreId, ConnectApi.CompositeCommerceVariationInputRepresentation compositeCommerceVariationInputRepresentation)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

compositeCommerceVariationInputRepresentation

Type: [`ConnectApi.CompositeCommerceVariationInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_composite_commerce_variation.htm "Composite product variations input.")

Details used to create the variation product.

#### Return Value

Type: [`ConnectApi.CompositeCommerceVariationOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_variation_output.htm "Details of composite product variations.")
