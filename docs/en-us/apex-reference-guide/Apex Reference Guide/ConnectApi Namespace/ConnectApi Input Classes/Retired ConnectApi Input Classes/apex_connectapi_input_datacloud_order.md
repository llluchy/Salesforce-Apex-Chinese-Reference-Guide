---
doc_id: "apex_connectapi_input_datacloud_order"
---

# ConnectApi.DatacloudOrderInput

Input representation for a Datacloud order to purchase contacts or companies and retrieve purchase information.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `companyIds` | String | A comma-separated list of identification numbers for the companies to be purchased.
You can’t include any contact IDs or your purchase fails.

 | Required to purchase companies | 32.0 |
| `contactIds` | String | A comma-separated list of identification numbers for the contacts to be purchased.

You can’t include any company IDs or your purchase fails.

 | Required to purchase contacts | 32.0 |
| `userType` | [ConnectDatacloudUserTypeEnum](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DatacloudUserType_desc) | Indicates the Data.com user type to be used. There are two user types.

-   `Monthly` (default)
-   `Listpool`

 | Optional | 32.0 |

## See Also

- [postOrder(orderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_postOrder_1)
