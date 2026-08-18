---
doc_id: "apex_connectapi_output_delivery_estimate_output"
---

# ConnectApi.DeliveryEstimateOutputRepresentation

Delivery estimation information for products.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `error` | [ConnectApi.DeliveryEstimationErrorOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_delivery_estimation_error_output.htm "Delivery estimation error.") | Any error that was returned, including the error code and error message. | 63.0 |
| `location` | String | Location external reference. | 63.0 |
| `productDeliverEstimations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")[ConnectApi.ProductDeliverEstimationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_deliver_estimation_output.htm "Delivery estimation information for each product.") | List of product delivery estimations. | 63.0 |
| `shippingCarrierMethodExternalReference` | String | Shipping carrier method external reference. | 63.0 |
