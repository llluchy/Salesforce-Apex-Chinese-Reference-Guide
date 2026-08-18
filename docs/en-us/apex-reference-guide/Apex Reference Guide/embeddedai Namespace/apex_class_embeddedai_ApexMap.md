---
doc_id: "apex_class_embeddedai_ApexMap"
---

# ApexMap Class

Create, clone, and convert string based key-value pairs to a JSON string format.

## Namespace

[embeddedai](atlas.en-us.apexref.meta/apexref/apex_namespace_embeddedai.htm "The embeddedai namespace provides classes and methods to manage and represent records and data in Apex to support embedded AI features.")

## See Also

- [ApexMap Constructors](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_constructors)
- [ApexMap Properties](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_properties)
- [ApexMap Methods](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_methods)

## ApexMap Constructors

Learn more about the constructors available with the ApexMap class.

The `ApexMap` class includes these constructors.

## See Also

- [ApexMap(key, value)](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_ctor)
- [ApexMap()](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_ctor_2)

### ApexMap(key, value)

Initializes a new instance of the ApexMap class by assigning the specified key and value. This constructor creates a single key–value entry that can be included in an embedded AI Apex map for passing contextual data to embedded AI logic.

#### Signature

`public ApexMap(String key, String value)`

#### Parameters

-   **key**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The unique identifier for an entry in the embedded AI Apex map. This key references and retrieves the associated value during embedded AI processing.
    
-   **value**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The data associated with the specified key in the embedded AI Apex map. This value stores the contextual information consumed by embedded AI logic.
    

### ApexMap()

Initializes the ApexMap class.

#### Signature

`public ApexMap()`

## ApexMap Properties

These are the properties for `ApexMap`.

## See Also

- [key](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_key)
- [value](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_value)

### key

Represents key of the key-value pair. This property is used to store the unique ID or name of the data.

#### Signature

`public String key {get; set;}`

```apex
embeddedai.ApexMap, key
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### value

Represents value of the key-value pair. This property is used to store the data associated with the key.

#### Signature

`public String value {get; set;}`

```apex
embeddedai.ApexMap, value
```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## ApexMap Methods

Create a copy of the ApexMap object and convert key-value pairs to string format.

These are the methods for `ApexMap`.

## See Also

- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_toString)

### toString()

Returns a string representation of the `ApexMap` object.

#### Signature

`public String toString()`

```apex
embeddedai.ApexMap, toString, [], String
```

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
