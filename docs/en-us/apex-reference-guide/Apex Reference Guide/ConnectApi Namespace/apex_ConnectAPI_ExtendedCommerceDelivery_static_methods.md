---
doc_id: "apex_ConnectAPI_ExtendedCommerceDelivery_static_methods"
---

# ExtendedCommerceDelivery Class

Access information about delivery estimation.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ExtendedCommerceDelivery Methods

This method is for `ExtendedCommerceDelivery`. It is static.

## See Also

- [estimateDeliveryDate(estimateDeliveryDateInput, externalReference)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExtendedCommerceDelivery_static_methods.htm#apex_ConnectAPI_ExtendedCommerceDelivery_estimateDeliveryDate_1)

### estimateDeliveryDate(estimateDeliveryDateInput, externalReference)

Forecast an expected delivery date and time based on delivery estimation settings and the selected shipping carrier method. Provide information on when a package is expected to be shipped and delivered.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.EstimateDeliveryDateOutputRepresentation estimateDeliveryDate(ConnectApi.EstimateDeliveryDateInputRepresentation estimateDeliveryDateInput, String externalReference)`

#### Parameters

estimateDeliveryDateInput

Type: Datetime

[ConnectApi.EstimateDeliveryDateInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_estimate_delivery_date.htm "Delivery date estimation information.")

Estimated delivery date.

externalReference

Type: String

Delivery estimation setup external reference ID.

#### Return Value

Type: [ConnectApi.EstimateDeliveryDateOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_estimate_delivery_date_output.htm "Estimated delivery dates.")
