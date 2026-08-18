---
doc_id: "apex_connectapi_output_product_price"
---

# ConnectApi.ProductPrice

Pricing information for a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currencyIsoCode` | String | Three-letter ISO 4217 currency code associated with the product.
Products are priced using the currency for the buyer account or guest buyer profile. If your store doesn’t support the currency for the buyer account or guest buyer profile, products are priced using the default currency for your store.

 | 49.0 |
| `listPrice` | String | List price for the product. | 49.0 |
| `lowestUnitPrice` | String | Lowest unit price for the product. | 49.0 |
| `priceAdjustment` | [`ConnectApi.​PriceAdjustment​Schedule`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_price_adjustment_schedule.htm "Price adjustment schedule.") | Price adjustment schedule for the product. If a product selling model ID is specified in a request parameter, this property is empty. | 49.0 |
| `pricebookEntryId` | String | ID of the price book entry. If a product selling model ID is specified in a request parameter, this property is empty. | 49.0 |
| `productPriceEntries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.ProductPriceEntry`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_price_entry.htm "Line item price for the product.")\> | List of line item prices for the product. | 56.0 |
| `unitPrice` | String | Unit price for the product. If a product selling model ID is specified in a request parameter, this property is empty. | 49.0 |
