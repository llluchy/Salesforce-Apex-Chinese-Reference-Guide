---
doc_id: "apex_connectapi_output_product_price_entry"
---

# ConnectApi.ProductPriceEntry

Line item price for the product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | [`ConnectApi.​ErrorResponse`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm "Base error response.") | Error code and error message. | 56.0 |
| `listPrice` | String | List price for the product entry. | 56.0 |
| `priceAdjustment` | [`ConnectApi.​PriceAdjustment​Schedule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_price_adjustment_schedule.htm "Price adjustment schedule.") | Price adjustment schedule. | 56.0 |
| `pricebookEntryId` | String | ID of the pricebook entry. | 56.0 |
| `productSelling​ModelId` | String | ID of the product selling model. If no product selling model ID is specified in a request parameter, this property is empty. | 56.0 |
| `success` | Boolean | Specifies whether execution was successful (`true`) or not (`false`). | 56.0 |
| `unitPrice` | String | Unit price for the product entry. | 56.0 |
