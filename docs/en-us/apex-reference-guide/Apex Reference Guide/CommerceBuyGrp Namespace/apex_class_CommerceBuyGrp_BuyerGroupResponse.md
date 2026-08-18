---
doc_id: "apex_class_CommerceBuyGrp_BuyerGroupResponse"
---

# BuyerGroupResponse Class

Contains constructors and methods to retrieve the buyer groups associated with a user.

## Namespace

[CommerceBuyGrp](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceBuyGrp.htm "The CommerceBuyGrp namespace provides classes and methods for retrieving information about the buyer groups associated with a user.")

## See Also

- [BuyerGroupResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_constructors)
- [BuyerGroupResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_methods)

## BuyerGroupResponse Constructors

The following are constructors for `BuyerGroupResponse`.

## See Also

- [BuyerGroupResponse(buyerGroupIds)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_ctor)
- [BuyerGroupResponse()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_ctor_2)

### BuyerGroupResponse(buyerGroupIds)

Creates a new instance of the `CommerceBuyGrp.BuyerGroupResponse` class using the specified `buyerGroupIds` payload parameter.

#### Signature

`public BuyerGroupResponse(Set<String> buyerGroupIds)`

#### Parameters

-   **buyerGroupIds**:
    
    Type: Set<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    
    List of buyer group IDs for a user.
    

### BuyerGroupResponse()

Creates a new instance of the `CommerceBuyGrp.BuyerGroupResponse` class.

#### Signature

`public BuyerGroupResponse()`

## BuyerGroupResponse Methods

The following are methods for `BuyerGroupResponse`.

## See Also

- [getBuyerGroupIds()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_getBuyerGroupIds)
- [setBuyerGroupIds(buyerGroupIds)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_setBuyerGroupIds)
- [setError(errorMessage, localizedErrorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_CommerceBuyGrp_BuyerGroupResponse_setError)

### getBuyerGroupIds()

Retrieves a list of evaluated buyer group IDs assigned to a user.

#### Signature

`public Set<String> getBuyerGroupIds()`

#### Return Value

Type: Set<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### setBuyerGroupIds(buyerGroupIds)

Sets a list of evaluated buyer group IDs assigned to a user.

#### Signature

`public void setBuyerGroupIds(Set<String> buyerGroupIds)`

#### Parameters

-   **buyerGroupIds**:
    
    Type: Set<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    

#### Return Value

Type: void

### setError(errorMessage, localizedErrorMessage)

Sets the error message to be returned when the evaluation of buyer group IDs fails.

#### Signature

`public void setError(String errorMessage, String localizedErrorMessage)`

#### Parameters

-   **errorMessage**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The message stating the reason for the error.
    
-   **localizedErrorMessage**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The translated error message.
    

#### Return Value

Type: void
