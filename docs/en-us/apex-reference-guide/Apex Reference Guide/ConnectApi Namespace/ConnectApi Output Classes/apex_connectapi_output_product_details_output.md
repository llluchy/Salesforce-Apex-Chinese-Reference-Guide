---
doc_id: "apex_connectapi_output_product_details_output"
---

# ConnectApi.ProductDetailsOutputRepresentation

Details about a product.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `attributes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ProductVariation​AttributeOutput​Representation`\> | List of variation attributes that define variations of the product. | 55.0 |
| `currencyIsoCode` | String | Currency ISO code. | 55.0 |
| `childItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ProductBundleChild​AttributeOutput​Representation`\> | For bundle products only: an array of the individual products that are a part of the bundle. Only applicable for B2B or D2C stores. /> | 64.0 |
| `description` | String | Description of the product. | 55.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | List of the product’s fields. | 55.0 |
| `imageGroups` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ProductImage​GroupOutput​Representation`\> | List of the product’s image groups. | 55.0 |
| `listPrice` | Double | List price. | 55.0 |
| `name` | String | Name. | 55.0 |
| `productClass` | String | The product’s class. Possible values are: Bundle, Simple, Variation, Variation Parent, or Set. | 64.0 |
| `productQuantityRule` | [Purchase Quantity Rule](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm "Rule that restricts the quantity of a product that can be purchased.") | If one exists, purchase quantity rule for the product. | 55.0 |
| `productId` | String | Product ID. | 55.0 |
| `stockKeepingUnit` | String | Stock keeping unit. | 55.0 |
| `totalChildrenCount` | [Enum](atlas.en-us.apexref.meta/apexref/apex_methods_system_enum.htm "An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Apex provides built-in enums, such as LoggingLevel, and you can define your own enum.") | For bundles only: the total number of child products in a bundle. Only applicable for B2B or D2C stores./> | 64.0 |
| `unitPrice` | Double | Unit price. | 55.0 |
| `variants` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ProductVariant​Output​Representation`\> | List of variations of the product. | 55.0 |
