---
doc_id: "apex_ConnectAPI_OMSAnalytics_submitTextClassificationsRequest"
---

# submitTextClassificationsRequest(textClassificationsRequestInput, llmType)

Submits a text classification request to Einstein

## API Version

59.0

## Requires Chatter

No

## Signature

`public static ConnectApi.TextClassificationsOutputRepresentation submitTextClassificationsRequest(ConnectApi.TextClassificationsInputRepresentation textClassificationsRequestInput, String llmType)`

## Parameters

textClassificationsRequestInput

Type: [ConnectApi.TextClassificationsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_text_classification_representation.htm "Text classification information associating classifiers and text to be classified.")

Text classification containing a list of text strings and classifiers. Each text string is classified into classifiers based on analysis.

llmType

Type: List )String)

The large language model that’s used for analysis. Supports Open AI only.

## Return Value

Type: [ConnectApi.TextClassificationsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_text_classifications.htm "HTTP headers containing URLs associating text strings and classifications.")

## Example

```plain
ConnectApi.TextClassificationsInputRepresentation textClassificationsInputRepresentation = new ConnectApi.TextClassificationsInputRepresentation();
textClassificationsInputRepresentation.textList = textList;
textClassificationsInputRepresentation.classifiers = classifiers;
List  requestIds = new List  ();
```
