---
doc_id: "apex_class_pref_center_LoadParameters"
---

# LoadParameters Class

Contains methods to retrieve record Id information for parameters passed into the load-form handler.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

```apex
String userId = loadParams.getRecordId();

User user = [select id, AboutMe from User where id=:userId];
```

## See Also

- [LoadParameters Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm#apex_pref_center_LoadParameters_methods)

## LoadParameters Methods

The following are methods for `LoadParameters`.

## See Also

- [getRecordId()](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm#apex_pref_center_LoadParameters_getRecordId)

### getRecordId()

Returns the untokenized version of the record Id.

#### Signature

`public String getRecordId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
