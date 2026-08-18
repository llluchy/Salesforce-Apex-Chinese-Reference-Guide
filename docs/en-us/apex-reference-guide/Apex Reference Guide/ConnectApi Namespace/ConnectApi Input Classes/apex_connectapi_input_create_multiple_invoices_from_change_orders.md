---
doc_id: "apex_connectapi_input_create_multiple_invoices_from_change_orders"
---

# ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation

Data about the change orders to create Invoices for.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `invoicesFrom​ChangeOrders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​CreateInvoiceFrom​ChangeOrders​InputRepresentation`\> | List of OrderSummary IDs with the IDs of the associated change orders to create Invoices for. Each entry in the list generates one invoice, which combines the change orders in that entry. | Required | 56.0 |

## See Also

- [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1)
