---
doc_id: "apex_connectapi_input_managed_content_document_clone"
---

# ConnectApi.ManagedContentDocumentCloneInput

Managed content clone input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `apiName` | String | API name of the cloned content. | Optional | 61.0 |
| `contentSpaceOr​FolderId` | String | ID of the target folder for the cloned content. If unspecified, defaults to the folder of the source content. | Optional | 61.0 |
| `includeVariants` | Boolean | Specifies whether to include variants (`true`) or not (`false`) when cloning the content. If unspecified, default is `false`. | Optional | 61.0 |
| `title` | String | Title of the cloned content. If unspecified, “clone of” is appended to the source content’s title. | Optional | 61.0 |

## See Also

- [cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_cloneManagedContentDocument_1)
