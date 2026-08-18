---
doc_id: "apex_connectapi_output_einstein_llm_generation_item"
---

# ConnectApi.​EinsteinLLM​GenerationItem​Output

Generated response from the LLM provider.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `contentQuality​Representation` | [`ConnectApi.​EinsteinLlm​Generations​Content​Quality`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_llm_generations_content_quality.htm "Quality information about the generated response.") | Specifies whether the generated response contains toxic language `(true)` or not `(false)`. | 61.0 |
| `parameters` | String | Parameter values for the LLM provider. | 60.0 |
| `responseId` | String | ID of the generated response. | 60.0 |
| `safetyScore​Representation` | [`ConnectApi.​EinsteinLlm​Generation​SafetyScore​Output`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_llm_generations_safety_score.htm "Safety score information related to the LLM response.") | Safety score information related to the generated response. | 60.0 |
| `structuredResponse` | String | Structured response representation of the generated response. | 64.0 |
| `text` | String | Text of generated response. | 60.0 |
