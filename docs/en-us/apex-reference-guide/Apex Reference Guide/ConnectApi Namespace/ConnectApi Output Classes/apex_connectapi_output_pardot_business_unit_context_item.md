---
doc_id: "apex_connectapi_output_pardot_business_unit_context_item"
---

# ConnectApi.PardotBusinessUnitContextItem

Pardot business unit context item.

:::tip Important
Where possible, we changed noninclusive terms to align with our company
        value of Equality. We maintained certain terms to avoid any effect on customer
        implementations.
:::

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `id` | String | ID of the PardotTenant record. | 55.0 |
| `isCurrent` | Boolean | Specifies whether the business unit is selected as the context user's current business unit context in the business unit switcher of the Pardot Lightning app (`true`) or not (`false`). | 55.0 |
| `name` | String | Name of the Pardot business unit as it is specified in the `MasterLabel` of the PardotTenant record. | 55.0 |

## See Also

- [ConnectApi.PardotBusinessUnitContextOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pardot_business_unit_context_output.htm)
