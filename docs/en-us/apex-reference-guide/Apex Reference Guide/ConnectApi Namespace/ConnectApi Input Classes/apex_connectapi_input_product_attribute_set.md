---
doc_id: "apex_connectapi_input_product_attribute_set"
---

# ConnectApi.AttributeSetInputRepresentation

Attribute set information input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | List of up to 5 attribute API names. Required if creating a new attribute set. | Optional | 62.0 |
| `id` | String | If updating an attribute set, the ID of the existing attribute set for the variation parent product. | Optional | 62.0 |
| `name` | String | Attribute set name for a new attribute set. | Optional | 62.0 |
