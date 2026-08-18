---
doc_id: "apex_class_RichMessaging_PostalAddress"
---

# PostalAddress Class

Represents the postal address.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## See Also

- [PostalAddress Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_constructors)
- [PostalAddress Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_properties)

## PostalAddress Constructors

The following are constructors for `PostalAddress`.

## See Also

- [PostalAddress(addressLines, subLocality, locality, postalCode, subAdministrativeArea, administrativeArea, country, countryCode)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_ctor)

### PostalAddress(addressLines, subLocality, locality, postalCode, subAdministrativeArea, administrativeArea, country, countryCode)

Creates a new instance of the `RichMessaging.PostalAddress` class.

#### Signature

`public PostalAddress(List<String> addressLines, String subLocality, String locality, String postalCode, String subAdministrativeArea, String administrativeArea, String country, String countryCode)`

#### Parameters

-   **addressLines**: Type: List<String> The street address.
-   **subLocality**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The sub-locality of the address.
-   **locality**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The locality of the address.
-   **postalCode**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The postal code.
-   **subAdministrativeArea**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The sub-administrative area.
-   **administrativeArea**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The administrative area.
-   **country**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The country.
-   **countryCode**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The country code.

## PostalAddress Properties

The following are properties for `PostalAddress`.

## See Also

- [addressLines](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_addressLines)
- [administrativeArea](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_administrativeArea)
- [country](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_country)
- [countryCode](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_countryCode)
- [locality](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_locality)
- [postalCode](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_postalCode)
- [subAdministrativeArea](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_subAdministrativeArea)
- [subLocality](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_RichMessaging_PostalAddress_subLocality)

### addressLines

The street address.

#### Signature

`public List<String> addressLines {get; set;}`

#### Property Value

Type: List<String>

### administrativeArea

The administrative area.

#### Signature

`public String administrativeArea {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### country

The country.

#### Signature

`public String country {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### countryCode

The country code.

#### Signature

`public String countryCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### locality

The locality of the address.

#### Signature

`public String locality {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### postalCode

The postal code.

#### Signature

`public String postalCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### subAdministrativeArea

The sub-administrative area.

#### Signature

`public String subAdministrativeArea {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### subLocality

The sub-locality of the address.

#### Signature

`public String subLocality {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
