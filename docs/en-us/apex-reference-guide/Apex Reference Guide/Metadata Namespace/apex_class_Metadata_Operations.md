---
doc_id: "apex_class_Metadata_Operations"
---

# Operations Class

Represents a class to execute metadata operations, such as retrieving or deploying custom metadata.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use the `Metadata.Operations` class to execute metadata operations. For more information on use cases and restrictions of metadata operations in Apex, see [Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce").

## Example: Retrieve Metadata

The following example retrieves the “MyTestCustomMDType” custom metadata record from the subscriber org, and inspects the custom fields.

```apex
public class ReadMetadata {
  public void retrieveMetadata () {
    // List fullnames of components we want to retrieve
    ListString> componentNameList = 
new ListString>{'ISVNamespace__TestCustomMDType.MyTestCustomMDType'};

    // Retrieve components that are records of custom metadata types
    // based on name
    List components = Metadata.Operations.retrieve(
Metadata.MetadataType.CustomMetadata, componentNameList);
    Metadata.CustomMetadata customMetadataRecord = (Metadata.CustomMetadata) components.get(0);

    // Check fields of retrieved component
    List values = customMetadataRecord.values;
    for (integer i = 0; i if (values.get(i).field == 'testField__c' && 
          values.get(i).value == 'desired value') {
        // ...process accordingly...
      }
    }
  }
}
```

## Example: Deploy Metadata

The following example uses the Metadata API in Apex to update the customField custom field value of the MetadataRecordName custom metadata record and deploy this change into the subscriber org. Because the deployment is asynchronous, you must provide a callback class that implements the `Metadata.DeployCallback` interface, which is then used when the queued deployment completes.

```apex
public class CreateMetadata{
  public void updateAndDeployMetadata() {
    // Setup custom metadata to be created in the subscriber org.
    Metadata.CustomMetadata customMetadata =  new Metadata.CustomMetadata();
    customMetadata.fullName = 'ISVNamespace__MetadataTypeName.MetadataRecordName';

    Metadata.CustomMetadataValue customField = new Metadata.CustomMetadataValue();
    customField.field = 'customField__c';
    customField.value = 'New value';

    customMetadata.values.add(customField);

    Metadata.DeployContainer mdContainer = new Metadata.DeployContainer();
    mdContainer.addMetadata(customMetadata);

    // Setup deploy callback, MyDeployCallback implements
    // the Metadata.DeployCallback interface (code for
    // this class not shown in this example)
    MyDeployCallback callback = new MyDeployCallback();

    // Enqueue custom metadata deployment
    Id jobId = Metadata.Operations.enqueueDeployment(mdContainer, callback);
  }
}
```

## Example: Create Two Metadata Records Synchronously

Create a metadata record along with another one that references it in the same transaction. If the parent record was installed with a namespace, prefix the developer name with recordNs\_\_. 

:::tip Note
No custom metadata relationship can relate records of
          the same type to each other.
:::

```apex
public class CreateMetadata {
 
    public Id doCreate(
        String parentRecDevName,
        String parentRecLabel, 
        String childRecDevName, 
        String childRecLabel) {
 
        Metadata.DeployContainer mdContainer = new Metadata.DeployContainer();
 
        Metadata.CustomMetadata parentRecord = new Metadata.CustomMetadata();
        parentRecord.fullName = 'ParentType.' + parentRecDevName;
        parentRecord.label = parentRecLabel;
        mdContainer.addMetadata(parentRecord);
 
        Metadata.CustomMetadata childRecord = new Metadata.CustomMetadata();
        childRecord.fullName = 'ChildType.' + childRecDevName;
        childRecord.label = childRecLabel;
        Metadata.CustomMetadataValue relValue = new Metadata.CustomMetadataValue();
        relValue.field = 'Parent__c';
        relValue.value = parentRecDevName;
        childRecord.values.add(relValue);
        mdContainer.addMetadata(childRecord);
 
        Id jobId = Metadata.Operations.enqueueDeployment(mdContainer, null);
        return jobId;
    }
 
}
```

 

## See Also

- [Operations Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_methods)

## Operations Methods

The following are methods for `Operations`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_clone)
- [enqueueDeployment(container, callback)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_enqueueDeployment)
- [retrieve(type, fullNames)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_retrieve)

### clone()

Makes a duplicate copy of the `Metadata.Operations`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object

### enqueueDeployment(container, callback)

Deploys custom metadata components asynchronously.

#### Signature

To preserve service function, we limit the number of Metadata API deployments originating from Apex that can be enqueued at a time. See Limit on Enqueued Deployments from Apex.

`public static Id enqueueDeployment(Metadata.DeployContainer container, Metadata.DeployCallback callback)`

#### Parameters

-   **container**:
    
    Type: [Metadata.DeployContainer](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_class_Metadata_DeployContainer "Represents a container for custom metadata components to be deployed.")
    
    Container that contains the set of metadata components to deploy.
    
-   **callback**:
    
    Type: [Metadata.DeployCallback](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_interface_Metadata_DeployCallback "An interface for metadata deployment callback classes.")
    
    A class that implements the `Metadata.DeployCallback` interface. Used by Salesforce to return information about the deployment results.
    

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of deployment request.

### retrieve(type, fullNames)

Retrieves a list of custom metadata components.

#### Signature

`public static List<Metadata.Metadata> retrieve(Metadata.MetadataType type, List<String> fullNames)`

#### Parameters

-   **type**:
    
    Type: [Metadata.MetadataType](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_MetadataType.htm#apex_enum_Metadata_MetadataType "Represents the custom metadata components available in Apex.")
    
    The metadata component type.
    
-   **fullNames**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    
    A list of component names to retrieve. For information on component name formats, see [Metadata.fullName()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_fullName "The full name of the custom metadata, which can include the namespace, type, and component name.").
    

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")\>
