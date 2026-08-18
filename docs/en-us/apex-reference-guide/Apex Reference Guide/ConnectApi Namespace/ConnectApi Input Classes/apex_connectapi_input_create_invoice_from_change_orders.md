---
doc_id: "apex_connectapi_input_create_invoice_from_change_orders"
---

# ConnectApi.CreateInvoiceFromChangeOrdersInputRepresentation

OrderSummary and associated change orders to create Invoices for.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeOrderIds` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of IDs of change orders to create Invoices for. | Required | 56.0 |
| `orderSummaryId` | String | ID of the associated Order Summary. | Required | 56.0 |

## See Also

- [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1)

-   [ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_multiple_invoices_from_change_orders.htm "Data about the change orders to create Invoices for.")
