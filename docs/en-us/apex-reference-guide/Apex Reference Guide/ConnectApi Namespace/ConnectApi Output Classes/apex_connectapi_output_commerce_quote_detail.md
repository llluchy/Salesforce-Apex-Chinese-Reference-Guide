---
doc_id: "apex_connectapi_output_commerce_quote_detail"
---

# ConnectApi.CommerceQuoteDetail

Representation of quote details response.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ErrorResponse`\> | Detailed error message if the operation was unsuccessful. | 66.0 |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.RecordFieldRepresentation`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_connectapi_output_recordField.htm "HTML (New Window)")\> | Record field containing the quote field details. | 66.0 |
| `id` | String | ID of the quote. | 66.0 |
| `lineItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CommerceQuoteLineItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_quote_line_item.htm "Representation of the quote line item summary lookup.")\> | List of quote line items. | 66.0 |
| `notes` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.CommerceNote`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_note.htm "Representation for Note")\> | List of notes exchanged between the buyer and the sales representative. | 66.0 |
| `quoteNumber` | String | Quote reference number of the quote. | 66.0 |
| `status` | String | Status of the quote. | 66.0 |

## See Also

- [getQuoteDetail(webstoreId, quoteId, effectiveAccountId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_getQuoteDetail_1)
