---
doc_id: "apex_class_Metadata_DeployResult"
---

# DeployResult Class

Represents the results of a metadata deployment.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

After an asynchronous metadata deployment finishes, Salesforce provides an instance of `Metadata.DeployResult` in a call to your implementation of `handleResult()` in your [`Metadata.DeployCallback`](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_interface_Metadata_DeployCallback "An interface for metadata deployment callback classes.") class.

## Example

```apex
public void handleResult(Metadata.DeployResult result,
                         Metadata.DeployCallbackContext context) {
    if (result.status == Metadata.DeployStatus.Succeeded) {
        // Deployment was successful
    } else {
        // Deployment was not successful
    }
}
```

## See Also

- [DeployResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_properties)
- [DeployResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_methods)

## DeployResult Properties

The following are properties for `DeployResult`.

## See Also

- [canceledBy](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_canceledBy)
- [canceledByName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_canceledByName)
- [checkOnly](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_checkOnly)
- [completedDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_completedDate)
- [createdBy](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_createdBy)
- [createdByName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_createdByName)
- [createdDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_createdDate)
- [details](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_details)
- [done](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_done)
- [errorMessage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_errorMessage)
- [errorStatusCode](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_errorStatusCode)
- [id](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_id)
- [ignoreWarnings](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_ignoreWarnings)
- [lastModifiedDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_lastModifiedDate)
- [messages](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_messages)
- [numberComponentErrors](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_numberComponentErrors)
- [numberComponentsDeployed](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_numberComponentsDeployed)
- [numberComponentsTotal](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_numberComponentsTotal)
- [rollbackOnError](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_rollbackOnError)
- [startDate](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_startDate)
- [stateDetail](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_stateDetail)
- [status](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_status)
- [success](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_success)

### canceledBy

ID of the user who canceled the queued deployment.

#### Signature

`public String canceledBy {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### canceledByName

Full name of the user who canceled the queued deployment.

#### Signature

`public String canceledByName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### checkOnly

Indicates whether the deployment checked only the validity of the deployed files without making changes in the org. A check-only deployment does not deploy components or change the org in any way.

#### Signature

`public Boolean checkOnly {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### completedDate

Date and time for when the deployment process ended.

#### Signature

`public Datetime completedDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### createdBy

ID of the user who created the deployment job.

#### Signature

`public String createdBy {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### createdByName

Full name of the user who created the deployment job.

#### Signature

`public String createdByName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### createdDate

Date and time the deployment job was first queued.

#### Signature

`public Datetime createdDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### details

Provides the details for components in a completed deployment.

#### Signature

`public Metadata.DeployDetails details {get; set;}`

#### Property Value

Type: [Metadata.DeployDetails](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployDetails.htm#apex_class_Metadata_DeployDetails "Contains detailed information on deployed components.")

### done

Indicates whether Salesforce finished processing the deployment.

#### Signature

`public Boolean done {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### errorMessage

Message corresponding to the values in the `errorStatusCode` property, if any.

#### Signature

`public String errorMessage {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### errorStatusCode

If an error occurs during deployment, a status code is returned. The message corresponding to the status code is returned in the `errorMessagefield` property.

#### Signature

`public String errorStatusCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

For a description of each status code value, see [Core Data Types Used in API Calls](https://developer.salesforce.com/docs/atlas.en-us.262.0.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm) in the *SOAP API Developer Guide*.

### id

ID of the deployment job.

#### Signature

`public Id id {get; set;}`

#### Property Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### ignoreWarnings

Specifies whether a deployment continues, even if the deployment generates warnings.

#### Signature

`public Boolean ignoreWarnings {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### lastModifiedDate

Date and time of the last update for the deployment process.

#### Signature

`public Datetime lastModifiedDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### messages

A list of all the detail messages for a deployment.

#### Signature

:::tip Note
Removed in API version 29.0 and
          later.
:::

`public List<Metadata.DeployMessage> messages {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.DeployMessage](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployMessage.htm#apex_class_Metadata_DeployMessage "Represents result information for the deployment of a metadata component.")\>

### numberComponentErrors

The number of components that generated errors during the deployment.

#### Signature

`public Integer numberComponentErrors {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### numberComponentsDeployed

The number of components deployed in the deployment process. Use this value with the `numberComponentsTotal` property to get an estimate of the deployment’s progress.

#### Signature

`public Integer numberComponentsDeployed {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### numberComponentsTotal

The total number of components in the deployment. Use this value with the `numberComponentsDeployed` property to get an estimate of the deployment’s progress.

#### Signature

`public Integer numberComponentsTotal {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### rollbackOnError

Indicates whether any failure causes a complete rollback (true) or not (false) of the deployment.

#### Signature

`public Boolean rollbackOnError {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### startDate

Date and time the deployment process began.

#### Signature

`public Datetime startDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### stateDetail

Indicates which component is being deployed.

#### Signature

`public String stateDetail {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### status

Indicates the current state of the deployment.

#### Signature

`public Metadata.DeployStatus status {get; set;}`

#### Property Value

Type: [Metadata.DeployStatus](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployStatus.htm#apex_enum_Metadata_DeployStatus "The result status of a deployment.")

### success

Indicates whether the deployment was successful (true) or not (false).

#### Signature

`public Boolean success {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## DeployResult Methods

The following are methods for `DeployResult`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_Metadata_DeployResult_clone)

### clone()

Makes a duplicate copy of the `Metadata.DeployResult`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
