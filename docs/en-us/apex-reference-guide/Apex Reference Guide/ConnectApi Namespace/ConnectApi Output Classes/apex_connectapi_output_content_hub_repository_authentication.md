---
doc_id: "apex_connectapi_output_content_hub_repository_authentication"
---

# ConnectApi.ContentHubRepositoryAuthentication

Authentication information for a repository.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `authFlowUrl` | String | 
Depends on the `authProtocol`.

-   `NoAuthentication`—`null`.
-   `Oauth`—URL to start the OAuth flow.
-   `Password`—URL to the authentication settings for external systems.

 | 40.0 |
| `authProtocol` | [ConnectApi.​ContentHubAuthentication​Protocol](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#authProtocolEnum) | Authentication protocol used for the repository. Values are:

-   `NoAuthentication`—Repository doesn’t require authentication.
-   `Oauth`—Repository uses OAuth authentication protocol.
-   `Password`—Repository uses user name and password authentication protocol.

 | 40.0 |
| `userHas​AuthSettings` | Boolean | Specifies whether the user has credentials or the administrator configured the external data source to use the same set of credentials for every user (`true`). Otherwise, `false`. | 40.0 |

## See Also

- [ConnectApi.ContentHubRepository](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm)
