---
doc_id: "apex_connectapi_input_order_summary"
---

# ConnectApi.OrderSummaryInputRepresentation

An order from which to create an OrderSummary. Optionally, you can specify OrderSummary-specific information such as its Status and whether it is managed in Salesforce Order Management.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `businessModel` | String | The order’s business model. It can have one of these values:
-   B2B
-   B2C

 | Optional | 53.0 |
| `externalReference​Identifier` | String | Used internally to prevent duplicate records. This value is case-sensitive. | Optional | 56.0 |
| `name` | String | Specifies an OrderNumber to assign to the order summary. | Optional | 50.0 |
| `orderId` | String | ID of the original order. | Required | 48.0 |
| `orderLifeCycleType` | String | Specifies whether the order is managed in Salesforce Order Management or by an external system. It can have one of these values:

-   `MANAGED`—Managed in Salesforce Order Management.
-   `UNMANAGED`—Managed by an external system.

If no value is specified, the default is `MANAGED`. | Optional | 49.0 |
| `sourceProcess` | String | Describes the order process creating the OrderSummary. It can have one of these values:

-   `Exchange—An Exchange process.`
-   `OrderOnBehalf`—An Order on Behalf Of process.
-   `Standard`—Any process other than Exchange or Order on Behalf Of.

If no value is specified, the default is `Standard`. | Optional | 57.0 |
| `status` | String | Specifies a status to assign to the order summary. The value must match one of the picklist values on the Status field of the OrderSummary object. | Optional | 50.0 |

## See Also

- [createOrderSummary(orderSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummaryCreation_static_methods.htm#apex_ConnectAPI_OrderSummaryCreation_createOrderSummary_1)
