---
doc_id: "apex_ConnectAPI_ConversationApplicationDefinition_static_methods"
---

# ConversationApplicationDefinition Class

Access information about a conversation application definition.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ConversationApplicationDefinition Methods

These methods are for `ConversationApplicationDefinition`. All methods are static.

## See Also

- [getConversationApplicationDefinition(integrationName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ConversationApplicationDefinition_static_methods.htm#apex_ConnectAPI_ConversationApplicationDefinition_getConversationApplicationDefinition_1)

### getConversationApplicationDefinition(integrationName)

Get information about an integration’s conversation application definition and the associated bot.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ConversationApplicationDefinitionDetailRespresentation getConversationApplicationDefinition(String integrationName)`

#### Parameters

integrationName

Type: String

Name of the conversation application.

#### Return Value

Type: [`ConnectApi.ConversationApplicationDefinitionDetailRespresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_conversation_application_definition_detail_respresentation.htm "Information about the conversation application definition.")

#### Usage

To access this method, enable the bot feature, and the user must be an admin or have the Manage Bots or Manage Bots Training Data user permissions.
