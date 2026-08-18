---
doc_id: "apex_connectapi_output_o_c_i_inventory_record_output"
---

# ConnectApi.OCIInventoryRecordOutputRepresentation

Inventory availability data for a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `availableToFulfill` | Double | The Available To Fulfill quantity. | 51.0 |
| `availableToOrder` | Double | The Available To Order quantity. | 51.0 |
| `effectiveDate` | Datetime | The effective date of the inventory. Indicates if the SKU exists in the inventory. | 51.0 |
| `exists` | Boolean | Indicates if the SKU exists in the inventory. | 62.0 |
| `futures` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​OCIFutureInventory​OutputRepresentation`\> | A list of any expected future inventory restocks. | 51.0 |
| `onHand` | Double | The On Hand quantity. | 51.0 |
| `reserved` | Double | The Reserved quantity. | 51.0 |
| `safetyStockCount` | Double | The Safety Stock Count. | 51.0 |
| `stockKeepingUnit` | String | The SKU of the product. | 51.0 |
