---
doc_id: "apex_ConnectAPI_ChatterMessages_static_methods"
---

# ChatterMessages Class

Get, send, search, and reply to private messages. You can also get and search private conversations, mark conversations as read, and get a count of unread private messages.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

Private messages and direct messages are different features. Direct messages are newer and offer a richer feature set for private communication in Experience Cloud sites. Direct messages are a capability within Chatter feeds. To work with direct messages, use the [ChatterFeeds Class](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_static_methods "Get, post, and delete feed elements, likes, comments, and bookmarks. You can also search feed elements, share feed elements, and vote on polls.").

## ChatterMessages Methods

These methods are for `ChatterMessages`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [getConversation(conversationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation)
- [getConversation(conversationId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation_2)
- [getConversation(communityId, conversationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation_3)
- [getConversation(communityId, conversationId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversation_4)
- [getConversations()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations)
- [getConversations(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations_2)
- [getConversations(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations_3)
- [getConversations(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getConversations_4)
- [getMessage(messageId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessage)
- [getMessage(communityId, messageId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessage_2)
- [getMessages()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages)
- [getMessages(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages_2)
- [getMessages(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages_3)
- [getMessages(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getMessages_4)
- [getUnreadCount()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getUnreadCount)
- [getUnreadCount(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_getUnreadCount_2)
- [markConversationRead(conversationId, read)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_markConversationRead)
- [markConversationRead(communityId, conversationID, read)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_markConversationRead_2)
- [replyToMessage(text, inReplyTo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_replyToMessage)
- [replyToMessage(communityId, text, inReplyTo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_replyToMessage_2)
- [searchConversation(conversationId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation)
- [searchConversation(conversationId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation_2)
- [searchConversation(communityId, conversationId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation_3)
- [searchConversation(communityId, conversationId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversation_4)
- [searchConversations(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations)
- [searchConversations(pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations_2)
- [searchConversations(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations_3)
- [searchConversations(communityId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchConversations_4)
- [searchMessages(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages)
- [searchMessages(pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages_2)
- [searchMessages(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages_3)
- [searchMessages(communityId, pageParam, pageSize, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_searchMessages_4)
- [sendMessage(text, recipients)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_sendMessage)
- [sendMessage(communityId, text, recipients)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterMessages_static_methods.htm#apex_ConnectAPI_ChatterMessages_sendMessage_2)

### getConversation(conversationId)

Get a conversation.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation getConversation(String conversationId)`

#### Parameters

conversationId

Type: String

ID for the conversation.

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### getConversation(conversationId, pageParam, pageSize)

Get a page of a conversation.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation getConversation(String conversationId, String pageParam, Integer pageSize)`

#### Parameters

conversationId

Type: String

ID for the conversation.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### getConversation(communityId, conversationId)

Get a conversation from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation getConversation(String communityId, String conversationId)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

conversationId

Type: String

ID for the conversation.

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### getConversation(communityId, conversationId, pageParam, pageSize)

Get a page of a conversation from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation getConversation(String communityId, String conversationId, String pageParam, String pageSize)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

conversationId

Type: String

ID for the conversation.

pageParam

Type:String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### getConversations()

Get the most recent conversations.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage getConversations()`

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### getConversations(pageParam, pageSize)

Get a page of conversations.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage getConversations(String pageParam, Integer pageSize)`

#### Parameters

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### getConversations(communityId)

Get the most recent conversations from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage getConversations(String communityId)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### getConversations(communityId, pageParam, pageSize)

Get a page of conversations from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage getConversations(String communityId, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type:String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### getMessage(messageId)

Get a message.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessage getMessage(String messageId)`

#### Parameters

messageId

Type: String

ID for the message.

#### Return Value

Type: `ConnectApi.​Chatter​Message`

### getMessage(communityId, messageId)

Get a message from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessage getMessage(String communityId, String messageId)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

messageId

Type: String

ID for the message.

#### Return Value

Type:`ConnectApi.​Chatter​Message`

### getMessages()

Get the most recent messages.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage getMessages()`

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### getMessages(pageParam, pageSize)

Get a page of messages.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage getMessages(String pageParam, Integer pageSize)`

#### Parameters

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### getMessages(communityId)

Get the most recent messages from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage getMessages(String communityId)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### getMessages(communityId, pageParam, pageSize)

Get a page of messages from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage getMessages(String communityId, String pageParam, Integer pageSize)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### getUnreadCount()

Get the number of conversations that are marked unread.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UnreadConversationCount getUnreadCount()`

#### Return Value

Type: `ConnectApi.​​UnreadConversationCount`

If there are fewer than 50 unread conversations, `ConnectApi.UreadConversationCount` returns the exact number of unread conversations and the `hasMore` property is `false`. If there are more than 50 unread conversations, `ConnectApi.UreadConversationCount` returns 50 unread conversations and the `hasMore` property is `true`.

#### Example

```apex
ConnectApi.UnreadConversationCount unread = ConnectApi.ChatterMessages.getUnreadCount();
```

### getUnreadCount(communityId)

Get the number of conversations that are marked unread in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UnreadConversationCount getUnreadCount(String communityId)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.​​UnreadConversationCount`

If there are fewer than 50 unread conversations, `ConnectApi.UreadConversationCount` returns the exact number of unread conversations and the `hasMore` property is `false`. If there are more than 50 unread conversations, `ConnectApi.UreadConversationCount` returns 50 unread conversations and the `hasMore` property is `true`.

### markConversationRead(conversationId, read)

Mark a conversation as read or unread.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationSummary markConversationRead(String conversationId, Boolean read)`

#### Parameters

conversationId

Type: String

ID for the conversation.

read

Type: Boolean

Specify whether the conversation is read (`true`) or not (`false`).

#### Return Value

Type: `ConnectApi.​Chatter​ConversationSummary`

### markConversationRead(communityId, conversationID, read)

Mark a conversation as read or unread in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationSummary markConversationRead(String communityId, String conversationID, Boolean read)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

conversationId

Type: String

ID for the conversation.

read

Type: Boolean

Specify whether the conversation is read (`true`) or not (`false`).

#### Return Value

Type: `ConnectApi.​Chatter​ConversationSummary`

### replyToMessage(text, inReplyTo)

Reply to a message.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessage replyToMessage(String text, String inReplyTo)`

#### Parameters

text

Type: String

Text of the message. Can’t be empty or over 10,000 characters.

inReplyTo

Type: String

ID of the message that is being responded to.

#### Return Value

Type: `ConnectApi.​Chatter​Message`

### replyToMessage(communityId, text, inReplyTo)

Reply to a message in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessage replyToMessage(String communityId, String text, String inReplyTo)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

text

Type: String

Text of the message. Can’t be empty or over 10,000 characters.

inReplyTo

Type: String

ID of the message that is being responded to.

#### Return Value

Type: `ConnectApi.​Chatter​Message`

### searchConversation(conversationId, q)

Get a conversation that matches the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation searchConversation(String conversationId, String q)`

#### Parameters

conversationId

Type: String

ID for the conversation.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### searchConversation(conversationId, pageParam, pageSize, q)

Get a conversation with a page of messages that match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation searchConversation(String conversationId, String pageParam, Integer pageSize, String q)`

#### Parameters

conversationId

Type: String

ID for the conversation.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### searchConversation(communityId, conversationId, q)

Get a conversation with messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation searchConversation(String communityId, String conversationId, String q)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

conversationId

Type: String

ID for the conversation.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### searchConversation(communityId, conversationId, pageParam, pageSize, q)

Get a conversation with a page of messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversation searchConversation(String communityId, String conversationId, String pageParam, Integer pageSize, String q)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

conversationId

Type: String

ID for the conversation.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​Conversation`

### searchConversations(q)

Get conversations in which member names and messages match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage searchConversations(String q)`

#### Parameters

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### searchConversations(pageParam, pageSize, q)

Get a page of conversations in which member names and messages match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage searchConversations(String pageParam, Integer pageSize, String q)`

#### Parameters

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### searchConversations(communityId, q)

Get conversations in which member names and messages match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage searchConversations(String communityId, String q)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### searchConversations(communityId, pageParam, pageSize, q)

Get a page of conversations in which member names and messages match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterConversationPage searchConversations(String communityId, String pageParam, Integer pageSize, String q)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​ConversationPage`

### searchMessages(q)

Get messages that match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage searchMessages(String q)`

#### Parameters

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### searchMessages(pageParam, pageSize, q)

Get a page of messages that match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage searchMessages(String pageParam, Integer pageSize, String q)`

#### Parameters

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### searchMessages(communityId, q)

Get messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage searchMessages(String communityId, String q)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### searchMessages(communityId, pageParam, pageSize, q)

Get a page of messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessagePage searchMessages(String communityId, String pageParam, Integer pageSize, String q)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: `ConnectApi.​Chatter​MessagePage`

### sendMessage(text, recipients)

Send a message to a list of recipients.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessage sendMessage(String text, String recipients)`

#### Parameters

text

Type: String

Text of the message. Can’t be empty or over 10,000 characters.

recipients

Type: String

Up to nine comma-separated IDs of the users receiving the message.

#### Return Value

Type: `ConnectApi.​Chatter​Message`

### sendMessage(communityId, text, recipients)

Send a message to a list of recipients in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ChatterMessage sendMessage(String communityId, String text, String recipients)`

#### Parameters

communityId

Type:String

ID for an Experience Cloud site, `internal`, or `null`.

text

Type: String

Text of the message. Can’t be empty or over 10,000 characters.

recipients

Type: String

Up to nine comma-separated IDs of users to receive the message.

#### Return Value

Type: `ConnectApi.​Chatter​Message`
