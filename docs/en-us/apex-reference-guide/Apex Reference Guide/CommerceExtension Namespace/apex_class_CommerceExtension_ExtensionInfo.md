---
doc_id: "apex_class_CommerceExtension_ExtensionInfo"
---

# ExtensionInfo Class

Contains static methods to expose extension-related context information.

## Namespace

[CommerceExtension](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm "Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.")

## Example

```plain
// The Sample Extension Provider registered with developer name as 
        // 'tax_extension_provider_for_us' will be selected for execution for en_US locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'en_US') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_us');
        }
        // The Sample Extension Provider registered with developer name as 
        // 'tax_extension_provider_for_canada' will be selected for execution for en_CA locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'en_CA') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_canada');
        }
        // The default Salesforce Internal Tax Api will return an empty response for German locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'de') {
            return new CommerceExtension.Resolution(CommerceExtension.ResolutionStates.OFF);
        }
```

## See Also

- [ExtensionInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_methods)

## ExtensionInfo Methods

The following are methods for `ExtensionInfo`.

## See Also

- [getClientApiVersion()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_getClientApiVersion)
- [getCustomParameterField(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_getCustomParameterField)
- [getLocaleString()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_getLocaleString)
- [isCustomParametersAvailable()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_isCustomParametersAvailable)

### getClientApiVersion()

Returns the version number of the Client API for the extension context.

#### Signature

`public static Double getClientApiVersion()`

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Version number of the Client API for the extension context.

### getCustomParameterField(fieldName)

Returns a custom parameter field value, if available, for the extension context.

#### Signature

`public static String getCustomParameterField(String fieldName)`

#### Parameters

-   **fieldName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Custom parameter field name.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom parameter field value for the extension context.

### getLocaleString()

Returns the locale for the extension context.

#### Signature

`public static String getLocaleString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Locale for the extension context.

### isCustomParametersAvailable()

Indicates whether custom parameters are available for the extension context.

#### Signature

`public static Boolean isCustomParametersAvailable()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Value indicating if custom parameters are available in the extension context (`true`) or not (`false`).
