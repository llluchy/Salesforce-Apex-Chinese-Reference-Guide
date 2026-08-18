---
doc_id: "apex_connectapi_output_text_classifications"
---

# ConnectApi.TextClassificationsOutputRepresentation

HTTP headers containing URLs associating text strings and classifications.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `httpHeaders` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ConnectApi.HttpHeaderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_http_header.htm "HTTP header with information about a text classification")\> | HTTP headers for text classifications output. Each header provides a URL you can use to get the result of the classification. The URL takes a list of text strings and classifiers that each text string can be classified in. | **59.0** |
