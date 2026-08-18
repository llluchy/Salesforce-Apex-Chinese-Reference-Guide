---
doc_id: "apex_class_DataSource_DataSourceUtil"
---

# DataSourceUtil Class

Parent class for the `DataSource.Provider`, `DataSource.Connection`, `DataSource.Table`, and `DataSource.Column` classes.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## See Also

- [DataSourceUtil Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_DataSource_DataSourceUtil_methods)

## DataSourceUtil Methods

The following are methods for `DataSourceUtil`.

## See Also

- [logWarning(message)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_DataSource_DataSourceUtil_logWarning)
- [throwException(message)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_DataSource_DataSourceUtil_throwException)

### logWarning(message)

Logs the error message in the debug log.

#### Signature

`public void logWarning(String message)`

#### Parameters

-   **message**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The error message.
    

#### Return Value

Type: void

### throwException(message)

Throws a `DataSourceException` and displays the provided message to the user.

#### Signature

`public void throwException(String message)`

#### Parameters

-   **message**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Error message to display to the user.
    

#### Return Value

Type: void
