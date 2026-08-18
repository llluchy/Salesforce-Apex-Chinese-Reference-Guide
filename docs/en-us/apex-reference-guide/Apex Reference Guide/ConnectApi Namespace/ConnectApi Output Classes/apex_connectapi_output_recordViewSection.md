---
doc_id: "apex_connectapi_output_recordViewSection"
---

# ConnectApi.RecordViewSection

Section of record fields and values on a record detail.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `columnCount` | Integer | Number of columns to use to lay out the fields in a record section. | 29.0 |
| `columnOrder` | `ConnectApi.​RecordColumnOrder` Enum | Order of the fields to use in the `fields` property to lay out the fields in a record section.
-   `LeftRight`—Fields are rendered from left to right.
-   `TopDown`—Fields are rendered from the top down.

 | 29.0 |
| `fields` | `ConnectApi.​​Abstract​RecordField` | Fields and values for the record contained in this section. | 29.0 |
| `heading` | String | Localized label to display when rendering this section of fields. | 29.0 |
| `isCollapsible` | Boolean | Indicates whether the section can be collapsed to hide all the fields (`true`) or not (`false`). | 29.0 |

## See Also

- [ConnectApi.RecordView](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm)
