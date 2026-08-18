---
doc_id: "apex_connectapi_output_create_multiple_invoices_from_change_orders_output"
---

# ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation

List of lists of invoices created from change orders for fees.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `invoices` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ChangeOrdersInvoice​OutputRepresentation`\> | List of IDs of invoices created from change orders for fees. Include these invoice IDs when calling Ensure Refunds for the return that the fees applied to. | 56.0 |

## See Also

- [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1)
