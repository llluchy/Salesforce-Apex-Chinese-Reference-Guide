---
doc_id: "apex_connectapi_output_commerce_quote_with_product_detail"
---

# ConnectApi.CommerceQuoteWithProductDetail

Representation for Quote basic details

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `fields` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [`ConnectApi.RecordFieldRepresentation`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_connectapi_output_recordField.htm "HTML (New Window)")\> | Record field containing the quote record details. | 66.0 |
| `id` | String | ID of the quote. | 66.0 |
| `products` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.BuyerProductSummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_buyer_product_summary.htm "Representation of the buyer's product summary.")\> | Buyer's product summary details for the line item. | 66.0 |
| `quoteNumber` | String | Quote reference number of the quote. | 66.0 |
| `status` | String | Status of the quote. | 66.0 |
