---
doc_id: "apex_connectapi_output_pricing_result"
---

# ConnectApi.PricingResult

Product pricing result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the product. | 49.0 |
| `error` | [`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.") | Error code and message. | 49.0 |
| `pricingLine​ItemResults` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​PricingResultLineItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result_line_item.htm "Pricing result line item.")\> | Pricing result line Items. | 49.0 |
| `success` | Boolean | Specifies whether the execution was successful (`true`) or not (`false`). | 49.0 |
