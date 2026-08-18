---
doc_id: "apex_connectapi_output_einstein_prompt_template_generations"
---

# ConnectApi.​EinsteinPrompt​Template​Generations​Representation

Generated response from the LLM provider and resolved prompt template text.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `citations` | [`ConnectApi.​EinsteinLlmGeneration​CitationOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_llm_generation_citation.htm "Source information associated with a generated response.") | Source information associated with the generated responses. | 62.0 |
| `fileData` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ConnectApi.​EinsteinPrompt​TemplateAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_attachment.htm "Data for file attachments to prompts.")\> | File data of the input files used in generation. | 63.0 |
| `generationErrors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​EinsteinPrompt​Template​GenerationsError`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_generations_error.htm "Error response to a prompt template generation request.")\> | List of errors associated with the generated responses, if any. | 60.0 |
| `generations` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< `ConnectApi.​EinsteinLlm​GenerationItem​Output`\> | List of generated responses from the LLM provider. | 60.0 |
| `isSummarized` | Boolean | Specifies whether the generated response contains summarized text `(true)` or not `(false)`. | 61.0 |
| `parameters` | [`ConnectApi.​WrappedMapObject`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wrapped_ma.htm "Map of a parameter name and value.") | Map of parameters and values for the LLM provider parameters. | 60.0 |
| `mergeField​Information` | [`ConnectApi.EinsteinPrompt​Template​MergeField​Information​Context`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_merge_field_information_contex.htm "Representation for merge field information context") | Merge field information mapping used for annotations in the resolved prompt. | 64.0 |
| `prompt` | String | Prompt template text with resolved inputs. | 60.0 |
| `promptTemplate​DevName` | String | Developer name or ID of the prompt template record. | 60.0 |
| `requestId` | String | ID of the generation request sent to the LLM provider. | 60.0 |
| `renderConfiguration` | String | Render configuration used for rendering output in embeddable prompt display component. | 65.0 |
| `requestMessages` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​​EinsteinPrompt​​TemplateMask​​Content​`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_mask_content.htm "Generated response with masked data and masking information for a prompt template.")\> | List of resolved prompt templates with masked data and masking information. | 61.0 |
| `responseMessages` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​​EinsteinPrompt​​TemplateMask​​Content​`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_mask_content.htm "Generated response with masked data and masking information for a prompt template.")\> | List of generated responses with masked data and masking information for the specified prompt template. | 61.0 |
| `slotsMasking​Information` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​​EinsteinPrompt​​TemplateMaskData`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_mask_data.htm "Information about masked data for a prompt template.")\> | List of original and placeholder values of the masked data. | 61.0 |
