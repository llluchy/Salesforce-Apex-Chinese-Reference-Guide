---
doc_id: "apex_connectapi_input_estimate_delivery_date"
---

# ConnectApi.EstimateDeliveryDateInputRepresentation

Delivery date estimation information.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `deliveryAddress` | [ConnectApi.DeliveryAddressInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_delivery_address.htm "Delivery address.") | Delivery address. | Optional | 63.0 |
| `locations` | String | List of location external references. | Optional | 63.0 |
| `products` | [ConnectApi.DeliveryEstimationProductInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_delivery_estimation_product.htm "Delivery estimation product information.") | List of products included in delivery estimation. | Required | 63.0 |
| `shippingCarrier` | [ConnectApi.ShippingCarrierInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_shipping_carrier.htm "Shipping carrier.") | Shipping carrier used to deliver the order. | Required | 63.0 |
