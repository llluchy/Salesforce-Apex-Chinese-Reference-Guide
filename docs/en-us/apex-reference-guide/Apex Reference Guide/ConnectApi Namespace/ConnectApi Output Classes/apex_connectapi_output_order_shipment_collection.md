---
doc_id: "apex_connectapi_output_order_shipment_collection"
---

# ConnectApi.OrderShipmentCollection

Collection of order shipments.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `count` | Integer | Total number of records returned in the collection. | 52.0 |
| `currentPageToken` | String | Token identifying the current page of order shipments. | 52.0 |
| `currentPageUrl` | String | URL to the current page of order shipments. | 52.0 |
| `nextPageToken` | String | Token identifying the next page of order shipments. | 52.0 |
| `nextPageUrl` | String | URL to the next page of order shipments. | 52.0 |
| `previousPageToken` | String | Token identifying the previous page of order shipments. | 52.0 |
| `previousPageUrl` | String | URL to the previous page of order shipments. | 52.0 |
| `shipments` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​OrderShipment`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment.htm "Order shipment.")\> | Collection of order shipments. | 52.0 |
| `sortOrder` | [`ConnectApi.​OrderShipmentSort`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderShipmentSortEnum) | Sort order for order shipments. Values are:
-   `ExpectedDeliveryDateAsc`—Sorts by the oldest expected delivery date.
-   `ExpectedDeliveryDateDesc`—Sorts by the most recent expected delivery date.
-   `ShipmentNumberAsc`—Sorts by shipment number in ascending order (0–9).
-   `ShipmentNumberDesc`—Sorts by shipment number in descending order (9–0).

 | 52.0 |
