---
doc_id: "apex_connectapi_output_field_metadat"
---

# ConnectApi.FieldMetadata

Search metadata for the field of an object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `domain` | String | The object that the field is associated with. | 63.0 |
| `field` | String | Field path through the object. | 63.0 |
| `fieldApiName` | String | API name of the field. | 63.0 |
| `fieldType` | [`ConnectApi.​FieldType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FieldTypeEnum) | Field type. Values are:
-   `Address`
-   `AnyType`
-   `Base64`
-   `Boolean`
-   `Combobox`
-   `ComplexValue`
-   `Currency`
-   `DataCategoryGroupReference`
-   `Date`
-   `DateTime`
-   `Double`
-   `Email`
-   `EncryptedString`
-   `ExtensionEntityLookup`
-   `ExternalLookup`
-   `FloatArray`
-   `Id`
-   `ImageUrl`
-   `IndirectLookup`
-   `Integer`
-   `Json`
-   `Location`
-   `Long`
-   `MultiPicklist`
-   `Percent`
-   `PersonName`
-   `Phone`
-   `Picklist`
-   `PlainTextArea`
-   `Reference`
-   `RichTextArea`
-   `Sobject`
-   `String`
-   `SwitchablePersonName`
-   `TextArea`
-   `Time`
-   `Url`

 | 63.0 |
| `filterable` | Boolean | Specifies whether the field is filterable (`true`) or not (`false`). | 63.0 |
| `highlightable` | Boolean | Specifies whether the field is highlightable (`true`) or not (`false`). | 63.0 |
| `label` | String | Label of the field. | 63.0 |
| `sortable` | Boolean | Specifies whether the field is sortable (`true`) or not (`false`). | 63.0 |

## See Also

- [ConnectApi.ObjectMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm)
