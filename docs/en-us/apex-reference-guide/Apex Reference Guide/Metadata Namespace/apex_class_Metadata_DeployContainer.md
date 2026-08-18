---
doc_id: "apex_class_Metadata_DeployContainer"
---

# DeployContainer Class

Represents a container for custom metadata components to be deployed.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use `Metadata.DeployContainer` to manage custom metadata components for deployment. A container must have one or more components before being deployed.

## Example

```apex
// Use DeployContainer for deployment
Metadata.DeployContainer mdContainer = new Metadata.DeployContainer();
mdContainer.addMetadata(customMetadata);

...

// Enqueue deploy
Metadata.Operations.enqueueDeployment(mdContainer, callback);
```

## See Also

- [DeployContainer Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_methods)

## DeployContainer Methods

The following are methods for `DeployContainer`.

## See Also

- [addMetadata(md)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_addMetadata)
- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_clone)
- [getMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_getMetadata)
- [removeMetadata(md)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_removeMetadata)
- [removeMetadataByFullName(fullName)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_removeMetadataByFullName)

### addMetadata(md)

Add a custom metadata component to the container.

#### Signature

`public void addMetadata(Metadata.Metadata md)`

#### Parameters

-   **md**:
    
    Type: [Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")
    
    A custom metadata component class that derives from `Metadata.Metadata`. Avoid adding components to a `Metadata.DeployContainer`that have the same `Metadata.Metadata.fullName` because it causes deployment errors.
    

#### Return Value

Type: void

### clone()

Makes a duplicate copy of the `Metadata.DeployContainer`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object

### getMetadata()

Retrieves a list of custom metadata components from the container.

#### Signature

`public List<Metadata.Metadata> getMetadata()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")\>

### removeMetadata(md)

Removes a metadata component from the container.

#### Signature

`public Boolean removeMetadata(Metadata.Metadata md)`

#### Parameters

-   **md**:
    
    Type: [Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")
    
    Meta
    
    data component to remove.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns `true` if the container changed as a result of the call.

### removeMetadataByFullName(fullName)

Removes a metadata component from the container using the component’s full name.

#### Signature

`public Boolean removeMetadataByFullName(String fullName)`

#### Parameters

-   **fullName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Full
    
    name of the component to remove.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns `true` if the container changed as a result of the call.
