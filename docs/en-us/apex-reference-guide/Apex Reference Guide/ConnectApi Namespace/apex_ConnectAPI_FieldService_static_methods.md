---
doc_id: "apex_ConnectAPI_FieldService_static_methods"
---

# FieldService Class

Preview and create shifts from a pattern.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## FieldService Methods

These methods are for `FieldService`. All methods are static.

## See Also

- [createShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FieldService_static_methods.htm#apex_ConnectAPI_FieldService_newShiftsFromPattern_2)
- [previewShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FieldService_static_methods.htm#apex_ConnectAPI_FieldService_previewShiftsFromPattern_1)

### createShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)

Create up to 2,000 shifts from a pattern.

#### API Version

51.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ShiftsFromPattern createShiftsFromPattern(ConnectApi.ShiftsFromPatternInput shiftsFromPatternInput, String shiftPatternId)`

#### Parameters

shiftsFromPatternInput

Type: [`ConnectApi.ShiftsFromPatternInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_new_shifts_from_pattern.htm "Shifts from a pattern.")

A `ConnectApi.ShiftsFromPatternInput` object providing the pattern.

shiftPatternId

Type: String

ID of the shift pattern.

#### Return Value

Type: [`ConnectApi.ShiftsFromPattern`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_shifts_from_pattern.htm "Shifts created from a pattern.")

### previewShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)

Preview up to 2,000 shifts from a pattern.

#### API Version

51.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ShiftsFromPattern previewShiftsFromPattern(ConnectApi.ShiftsFromPatternInput shiftsFromPatternInput, String shiftPatternId)`

#### Parameters

shiftsFromPatternInput

Type: [`ConnectApi.ShiftsFromPatternInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_new_shifts_from_pattern.htm "Shifts from a pattern.")

A `ConnectApi.ShiftsFromPatternInput` object providing the pattern.

shiftPatternId

Type: String

ID of the shift pattern.

#### Return Value

Type: [`ConnectApi.ShiftsFromPattern`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_shifts_from_pattern.htm "Shifts created from a pattern.")
