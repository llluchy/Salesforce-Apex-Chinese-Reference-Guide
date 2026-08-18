---
doc_id: "test"
---

# Custom Metadata Type Methods

Custom metadata types are customizable, deployable, packageable, and upgradeable application metadata. All custom metadata is exposed in the application cache, which allows access without repeated queries to the database. The metadata is then available for formula fields, validation rules, flows, Apex, and SOAP API. All methods are static.

## Usage

Custom metadata types methods are instance type methods and are called by and operate on a specific instance of a custom metadata type.

## Custom Metadata Types Example

The following example uses the `getAll()` method. The custom metadata type named Games has a field called GameType\_\_c. This example determines if the field value of the first record is equal to the string PC.

```apex
List mcs = Games__mdt.getAll().values();
Boolean isPcGameType = false;
if (mcs[0].GameType__c == 'PC') {
    isPcGameType = true;
}
Assert.isTrue(isPcGameType);
```

## See Also

- [getAll()](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_metadata_types.htm#apex_System_CustomMetadataType_getall)
- [getInstance(recordId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_metadata_types.htm#apex_System_CustomMetadataType_getinstance)
- [getInstance(developerName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_metadata_types.htm#apex_System_CustomMetadataType_getinstance_devName)
- [getInstance(qualifiedApiName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_metadata_types.htm#apex_System_CustomMetadataType_getinstance_apiName)

## getAll()

Returns a map containing custom metadata records for the specific custom metadata type. The map keys are the record DeveloperNames and the map values are the record sObjects.

### Signature

`public Map<String, CustomMetadataType__mdt> getAll()`

### Return Value

Type: `Map<String, CustomMetadataType__mdt>`

### Usage

If no records are defined for the type, this method returns an empty map. To iterate over the list of custom metadata type record sObjects, use `getAll().values()`. Only the first 255 characters are returned for any field in a custom metadata type record, so longer text fields get truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

This sample returns a map of all the records for a custom metadata type named `Games__mdt`.

```apex
MapString, Games__mdt> mcs = Games__mdt.getAll();
```

## getInstance(recordId)

Returns a single custom metadata type record sObject for a specified record ID. Returns null if no record matches the parameter.

### Signature

`public CustomMetadataType__mdt getInstance(recordId)`

### Parameters

-   **recordId**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Return Value

Type: `CustomMetadataType__mdt`

### Usage

Use this method to explicitly retrieve custom metadata type information at the user level. Only the first 255 characters of any field in a custom metadata type record are returned. Therefore, fields such as long text fields can be truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

This sample returns a single record sObject for the custom metadata type named `Games_mdt` with recordID specified as `m00000000000001`.

```apex
Games__mdt mc = Games__mdt.getInstance('m00000000000001');
```

## getInstance(developerName)

Returns a single custom metadata type record sObject for a specified developerName field of the custom metadata type object. Returns null if no record matches the parameter.

### Signature

`public CustomMetadataType__mdt getInstance(String developerName)`

### Parameters

-   **developerName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Return Value

Type: `CustomMetadataType__mdt`

### Usage

Use this method to return a single custom metadata type record for the specified developerName. The developerName is the unique name of the custom metadata type object in the API. Only the first 255 characters of any field in a custom metadata type record are returned. Therefore, fields such as long text fields can be truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

Returns a single record sObject for the custom metadata type named `Games_mdt` with developerName specified as `FirstRecord`.

```apex
Games__mdt mc = Games__mdt.getInstance('FirstRecord');
```

## getInstance(qualifiedApiName)

Returns a single custom metadata type record sObject for a qualified API name. Returns null if no record matches the parameter.

### Signature

`public CustomMetadataType__mdt getInstance(String qualifiedApiName)`

### Parameters

-   **qualifiedApiName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### Return Value

Type: `CustomMetadataType__mdt`

### Usage

Use this method to return a single custom metadata type record for the specified qualifiedApiName. The qualifiedApiName is a concatenation of the namespace prefix and developerName, and has this format: namespacePrefix\_\_developerName. The developerName is the unique name of the custom metadata type object in the API. Only the first 255 characters of any field in a custom metadata type record are returned. Therefore, fields such as long text fields can be truncated. If you want all the field data from a custom metadata type record, use a SOQL query.

### Example

This sample returns a single record sObject for the custom metadata type named `Games_mdt` with qualifiedApiName specified as `MyNamespace__FirstRecord`.

```apex
Games__mdt mc = Games__mdt.getInstance('MyNamespace__FirstRecord');
```
