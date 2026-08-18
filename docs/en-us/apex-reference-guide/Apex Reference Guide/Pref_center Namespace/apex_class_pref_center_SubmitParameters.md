---
doc_id: "apex_class_pref_center_SubmitParameters"
---

# SubmitParameters Class

Retrieve record ID information to use with your submit-form handler.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

```apex
String userId = submitParams.getRecordId();

User user = [select id, AboutMe from User where id=:userId];
```

## See Also

- [SubmitParameters Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm#apex_pref_center_SubmitParameters_methods)

## SubmitParameters Methods

The following are methods for `SubmitParameters`.

## See Also

- [getRecordId()](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm#apex_pref_center_SubmitParameters_getRecordId)

### getRecordId()

Returns the untokenized version of the record ID.

#### Signature

`public String getRecordId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
