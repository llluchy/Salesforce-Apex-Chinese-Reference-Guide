---
doc_id: "apex_connectapi_input_action_link_definition"
---

# ConnectApi.ActionLinkDefinitionInput

The definition of an action link. An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

## Usage

You can use context variables in the `actionUrl`, `headers`, and `requestBody` properties. Use context variables to pass information about the user who executed the action link to your server-side code. Salesforce substitutes the value when the action link is executed.

The available context variables are:

| Context Variable | Description |
| --- | --- |
| `{!actionLinkId}` | The ID of the action link the user executed. |
| `{!actionLinkGroupId}` | The ID of the action link group containing the action link the user executed. |
| `{!communityId}` | The ID of the site in which the user executed the action link. The value for your internal org is the empty key `"000000000000000000"`. |
| `{!communityUrl}` | The URL of the site in which the user executed the action link. The value for your internal org is empty string `""`. |
| `{!orgId}` | The ID of the org in which the user executed the action link. |
| `{!userId}` | The ID of the user that executed the action link. |

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `actionType` | [`ConnectApi.​ActionLinkType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActionLinkTypeEnum) | Defines the type of action link. Values are:
-   `Api`—The action link calls a synchronous API at the action URL. Salesforce sets the status to `SuccessfulStatus` or `FailedStatus` based on the HTTP status code returned by your server.
-   `ApiAsync`—The action link calls an asynchronous API at the action URL. The action remains in a `PendingStatus` state until a third party makes a request to `/connect/action-links/actionLinkId` to set the status to `SuccessfulStatus` or `FailedStatus` when the asynchronous operation is complete.
-   `Download`—The action link downloads a file from the action URL.
-   `Ui`—The action link takes the user to a web page at the action URL.

Use `Ui` if you need to load a page before the user performs an action, for example, to have the user provide input or view something before the action happens.

Invoking `ApiAsync` action links from an app requires a call to set the status. However, there isn’t currently a way to set the status of an action link using Apex. To set the status, use Connect REST API. See the Action Link resource in the [Connect REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/ "HTML (New Window)")for more information. | Required

Can be defined in an action link template.

 | 33.0 |
| `actionUrl` | String | The action link URL. For example, a `Ui` action link URL is a Web page. A `Download` action link URL is a link to the file to download. `Ui` and `Download` action link URLs are provided to clients. An `Api` or `ApiAsync` action link URL is a REST resource. `Api` and `ApiAsync` action link URLs aren’t provided to clients. Links to Salesforce can be relative. All other links must be absolute and start with `https://`. **Tip:** To avoid issues due to upgrades or changing functionality in your API, we recommend using a versioned API for `actionUrl`, for example, https://www.example.com/​api/v1/exampleResource. If your API isn’t versioned, you can use the `expirationDate` property of the `ConnectApi.ActionLinkGroup​DefinitionInput` class to avoid issues due to upgrades or changing functionality in your API. | Required

Can be defined in an action link template.

 | 33.0 |
| `excludedUserId` | String | ID of a single user to exclude from performing the action. If you specify an `excludedUserId`, you can’t specify a `userId`. | Optional

Can be defined in an action link template using the User Visibility and Custom User Alias fields.

 | 33.0 |
| `groupDefault` | Boolean | `true` if this action is the default action link in the action link group; `false` otherwise. There can be only one default action link per action link group. The default action link gets distinct styling in the Salesforce UI. | Optional

Can be defined in an action link template.

 | 33.0 |
| `headers` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​RequestHeader​Input`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_request_header.htm#apex_connectapi_input_request_header "An HTTP request header name and value pair.")\> | The request headers for the `Api` and `ApiAsync` action link types.

See [Action Links Overview, Authentication, and Security](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_features_action_links_overview.htm).

 | Optional

Can be defined in an action link template.

 | 33.0 |
| `labelKey` | String | Key for the set of labels to show in the user interface. A set includes labels for these states: NewStatus, PendingStatus, SuccessStatus, FailedStatus. For example, if you use the `Approve` key, you get these labels: Approve, Pending, Approved, Failed.

For a complete list of keys and labels, see [Action Links Labels](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/connect_appendices_action_links_labels.htm).

If none of the predefined labels work for your action link, use a custom label. To use a custom label, create an action link template. See [Create Action Link Templates](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/action_link_group_template_create.htm).

 | Required

Can be defined in an action link template.

 | 33.0 |
| `method` | [`ConnectApi.​HttpRequest​Method`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RequestMethodEnum) | One of these HTTP methods:

-   `HttpDelete`—Returns HTTP 204 on success. Response body or output class is empty.
-   `HttpGet`—Returns HTTP 200 on success.
-   `HttpHead`—Returns HTTP 200 on success. Response body or output class is empty.
-   `HttpPatch`—Returns HTTP 200 on success or HTTP 204 if the response body or output class is empty.
-   `HttpPost`—Returns HTTP 201 on success or HTTP 204 if the response body or output class is empty. Exceptions are the batch posting resources and methods, which return HTTP 200 on success.
-   `HttpPut`—Return HTTP 200 on success or HTTP 204 if the response body or output class is empty.

 | Required

Can be defined in an action link template.

 | 33.0 |
| `requestBody` | String | The request body for `Api` action links. Escape quotation mark characters in the `requestBody` value. | Optional

Can be defined in an action link template.

 | 33.0 |
| `requires​Confirmation` | Boolean | `true` to require the user to confirm the action; `false` otherwise. | Required

Can be defined in an action link template.

 | 33.0 |
| `userId` | String | The ID of the user who can execute the action. If not specified or `null`, any user can execute the action. If you specify a `userId`, you can’t specify an `excludedUserId`. | Optional

Can be defined in an action link template using the User Visibility and Custom User Alias fields.

 | 33.0 |

## See Also

- [ConnectApi.ActionLinkGroupDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm)
