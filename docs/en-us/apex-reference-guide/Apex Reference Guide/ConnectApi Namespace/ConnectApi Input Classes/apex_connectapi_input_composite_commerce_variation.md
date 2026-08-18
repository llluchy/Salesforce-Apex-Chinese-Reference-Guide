---
doc_id: "apex_connectapi_input_composite_commerce_variation"
---

# ConnectApi.CompositeCommerceVariationInputRepresentation

Composite product variations input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `parentProductId` | String | ID of the variation parent product. | Required | 62.0 |
| `variations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​ProductVariationInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_product_variation.htm "Variation product input.")\> | List of variation products and their attributes. | Required | 62.0 |
