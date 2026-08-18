---
doc_id: "apex_ConnectAPI_EinsteinLLM_static_methods"
---

# EinsteinLLM Class

Get a list of prompt templates and generate LLM responses for prompt templates.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## EinsteinLLM Methods

These methods are for `EinsteinLLM`. All methods are static.

## See Also

- [generate​MessagesFor​PromptTemplate​(promptTemplate​DevName, prompt​Template​GenerationsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EinsteinLLM_static_methods.htm#apex_ConnectAPI_EinsteinLLM_generateMessagesForPromptTemplate_1)
- [getPromptTemplates(query, sortBy, offset, pageLimit, fields, type, relatedEntity, isActive)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EinsteinLLM_static_methods.htm#apex_ConnectAPI_EinsteinLLM_getPromptTemplates_1)

### generate​MessagesFor​PromptTemplate​(promptTemplate​DevName, prompt​Template​GenerationsInput)

Generates a response using the specified prompt template and input parameters.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generateMessagesForPromptTemplate(String promptTemplateDevName, ConnectApi.EinsteinPromptTemplateGenerationsInput promptTemplateGenerationsInput)`

#### Parameters

promptTemplateDevName

Type: String

Developer name or ID of a prompt template record.

promptTemplateGenerationsInput

Type: [`ConnectApi.EinsteinPromptTemplateGenerationsInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_einstein_prompt_template_generations.htm "Prompt template input parameters to use for generation.")

Input for generating a response using the specified prompt template.

#### Return Value

Type: [`ConnectApi.EinsteinPromptTemplateGenerationsRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_generations.htm "Generated response from the LLM provider and resolved prompt template text.")

#### Example

In this example, call `generateMessagesForPromptTemplate(promptTemplateDevName, promptTemplateGenerationsInput)` to resolve a Sales Email prompt template. For more examples, see [Resolve a Prompt Template](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_resolve_prompt_template.htm).

```plain
// Create input
ConnectApi.EinsteinPromptTemplateGenerationsInput promptGenerationsInput = new ConnectApi.EinsteinPromptTemplateGenerationsInput();
promptGenerationsInput.isPreview = false;

// Build input map
Map valueMap = new Map();

Map recipientEntityRecordIdMap = new Map();
recipientEntityRecordIdMap.put('id', '00Qxx000002ToPvEAK');

Map senderEntityRecordIdMap = new Map();
senderEntityRecordIdMap.put('id', '005xx000001XiWLAA0');

ConnectApi.WrappedValue recipientEntityWrappedValue = new ConnectApi.WrappedValue();
recipientEntityWrappedValue.value = recipientEntityRecordIdMap;

ConnectApi.WrappedValue senderEntityWrappedValue = new ConnectApi.WrappedValue();
senderEntityWrappedValue.value = senderEntityRecordIdMap;

valueMap.put('Input:Account', recipientEntityWrappedValue);
valueMap.put('Input:Recipient', recipientEntityWrappedValue);
valueMap.put('Input:Sender', senderEntityWrappedValue);

promptGenerationsInput.inputParams = valueMap;

// Set additional configuration values
promptGenerationsInput.additionalConfig = new ConnectApi.EinsteinLlmAdditionalConfigInput();
promptGenerationsInput.additionalConfig.applicationName = 'PromptTemplateGenerationsInvocable';

// Call the service
ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generationsOutput = 
ConnectApi.EinsteinLLM.generateMessagesForPromptTemplate('0hfxx0000000KTNAA2', promptGenerationsInput);

// Consume response
System.debug('Prompt Testing: ' + generationsOutput.prompt);
```

### getPromptTemplates(query, sortBy, offset, pageLimit, fields, type, relatedEntity, isActive)

Get a list of prompt templates using the specified filters.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.EinsteinPromptRecordCollectionOutputRepresentation getPromptTemplates(String query, String sortBy, Integer offset, Integer pageLimit, List<String> fields, String type, String relatedEntity, Boolean isActive)`

#### Parameters

query

Type: String

User-entered search string. If `null`, all prompt template records are returned.

sortBy

Type: String

Field to sort the returned prompt template records by, such as `createdDate`. If `null`, records are returned in the order they’re retrieved.

offset

Type: Integer

Used for pagination. Number of rows to skip between returned prompt template records. The default value is `0`.

pageLimit

Type: Integer

Used for pagination. Maximum number of prompt template records returned per page. The default value is `50`.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

Comma-separated list of prompt template record fields to return, such as `createdDate`. If `null`, all fields are returned.

type

Type: String

Prompt template type to filter records by, such as `einstein_gpt__salesEmail`. If `null`, records of all types are returned.

relatedEntity

Type: String

Related entity to filter records by, such as `Contact`. If `null`, all records with all related entities are returned.

isActive

Type: Boolean

Specifies whether to return active prompt templates only. The default is `false`.

#### Return Value

Type: [`ConnectApi.EinsteinPromptRecordCollectionOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_record_collection_output.htm "List of prompt template records.")

#### Usage

To get a list of prompt templates, you must have Einstein Generative AI enabled and the Execute Prompt Templates user permission.

#### Example

```plain
ConnectApi.EinsteinPromptRecordCollectionOutputRepresentation promptTemplateList = ConnectApi.EinsteinLLM.getPromptTemplates('Summarize', 'CreatedDate', 0, 5, null, 'einstein_gpt__flex', null, true);

// Get information from the prompt templates in the list
    if (promptTemplateList != null && promptTemplateList.promptRecords != null) {
    for (ConnectApi.EinsteinPromptRecordRepresentation promptTemplate : promptTemplateList.promptRecords) {
        System.debug('Prompt Template ID: ' + promptTemplate.id);
        for (String fieldName : promptTemplate.fields.keySet()) {
            System.debug('Field Name: ' + fieldName + ', Value: ' + promptTemplate.fields.get(fieldName).value);
        }
    }
} else {
    System.debug('No prompt templates found.');
}
```
