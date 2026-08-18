---
doc_id: "apex_connectapi_input_managed_content_space"
---

# ConnectApi.ManagedContentSpaceInput

Create a managed content space.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `apiName` | String | API name of the managed content space. | Optional | 64.0 |
| `defaultLanguage` | String | Default language of the managed content space. | Optional | 64.0 |
| `description` | String | Description of the managed content space. | Optional | 64.0 |
| `name` | String | Name of the managed content space. | Required | 64.0 |
| `spaceType` | [`ConnectApi.​ManagedContent​SpaceType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedContentSpaceTypeEnum) | Type of managed content space. Values are:
-   `Content`
-   `Marketing`

 | Optional | 64.0 |

## See Also

- [postManagedContentSpace(ManagedContentSpaceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_postManagedContentSpace_2)
