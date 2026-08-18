---
doc_id: "apex_connectapi_output_conversation_application_definition_detail_respresentation"
---

# ConnectApi.ConversationApplicationDefinitionDetailRespresentation

Information about the conversation application definition.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `botInfo` | [`ConnectApi.​BotInfo​Representation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bot_info.htm "Information about the bot associated with the conversation application.") | Basic information of the bot associated with this conversation application. | 54.0 |
| `errorMessage` | String | Error message for the failed get operation. | 54.0 |
| `integration​​Application` | [`ConnectApi.​Conversation​Application​IntegrationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConversationApplicationIntegrationTypeEnum) | Conversation application integration types. Values are:
-   `Api`
-   `Slack`

 | 54.0 |
| `integrationName` | String | Name of the conversation application. | 54.0 |
| `isSuccess` | Boolean | Success indicator of the get operation. | 54.0 |
| `runtimeUrl` | String | Base URL of the bot runtime API. | 54.0 |
