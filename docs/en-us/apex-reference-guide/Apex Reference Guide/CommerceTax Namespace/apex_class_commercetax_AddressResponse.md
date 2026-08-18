---
doc_id: "apex_class_commercetax_AddressResponse"
---

# AddressResponse Class

Contains a location code sent from the external tax engine.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Usage

Use the `AddressResponse` class to set unique values for each address.

```apex
commercetax.AddressesResponse addressesRes = new commercetax.AddressesResponse();

//AddressResponse containing ShipTo information
commercetax.AddressResponse shipToAddress = new commercetax.AddressResponse();
shipToAddress.setLocationCode('1234567');

//AddressResponse containing ShipFrom information
commercetax.AddressResponse shipFromAddress = new commercetax.AddressResponse();
shipFromAddress.setLocationCode('84720385');

//AddressResponse containing Sold To information
commercetax.AddressResponse soldToAddress = new commercetax.AddressResponse();
soldToAddress.setLocationCode('92381749');

//set values of addressesRes
addressesRes.setShipFrom(shipFromAddress);
addressesRes.setShipTo(shipToAddress);
addressesRes.setSoldTo(soldToAddress);
```

## See Also

- [AddressResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressResponse.htm#apex_commercetax_AddressResponse_methods)

## AddressResponse Methods

Learn more about the available methods with the `AddressResponse` class.

The `AddressResponse` class includes these methods.

## See Also

- [setLocationCode(locationCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressResponse.htm#apex_commercetax_AddressResponse_setLocationCode)

### setLocationCode(locationCode)

Sets the value of a LocationCode field.

#### Signature

`global void setLocationCode(String locationCode)`

#### Parameters

-   **locationCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    A code that contains address information. This value can be passed to a method that sets the value of an address field.
    

#### Return Value

Type: void
