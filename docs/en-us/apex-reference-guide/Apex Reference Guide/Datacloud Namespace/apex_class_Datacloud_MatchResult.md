---
doc_id: "apex_class_Datacloud_MatchResult"
---

# MatchResult Class

Represents the duplicate results for a matching rule.

## Namespace

[Datacloud](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm#apex_namespace_datacloud "The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.")

## See Also

- [MatchResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_methods)

## MatchResult Methods

The following are methods for `MatchResult`.

## See Also

- [getEntityType()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getEntityType)
- [getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getErrors)
- [getMatchEngine()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getMatchEngine)
- [getMatchRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getMatchRecords)
- [getRule()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getRule)
- [getSize()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getSize)
- [isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_isSuccess)

### getEntityType()

Returns the entity type of the matching rule.

#### Signature

`public String getEntityType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getErrors()

Returns errors that occurred during matching for the matching rule.

#### Signature

`public List<Database.Error> getErrors()`

#### Return Value

Type: List<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### getMatchEngine()

Returns the match engine for the matching rule.

#### Signature

`public String getMatchEngine()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMatchRecords()

Returns information about the duplicates for the matching rule.

#### Signature

`public List<Datacloud.MatchRecord> getMatchRecords()`

#### Return Value

Type: List<[Datacloud.MatchRecord](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_class_Datacloud_MatchRecord "Represents a duplicate record detected by a matching rule.")\>

### getRule()

Returns the developer name of the matching rule.

#### Signature

`public String getRule()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSize()

Returns the number of duplicates detected by the matching rule.

#### Signature

`public Integer getSize()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isSuccess()

Returns `false` if there’s an error with the matching rule, and `true` if the matching rule successfully ran.

#### Signature

`public Boolean isSuccess()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
