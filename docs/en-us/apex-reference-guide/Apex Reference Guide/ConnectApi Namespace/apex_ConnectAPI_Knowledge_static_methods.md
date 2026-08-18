---
doc_id: "apex_ConnectAPI_Knowledge_static_methods"
---

# Knowledge Class

Get information about trending articles in Experience Cloud sites.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Knowledge Methods

These methods are for `Knowledge`. All methods are static.

## See Also

- [getTopViewedArticlesForTopic(communityId, topicId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTopicTopViewedArticles_1)
- [getTrendingArticles(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticles_1)
- [getTrendingArticlesForTopic(communityId, topicId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticlesForTopic_1)

### getTopViewedArticlesForTopic(communityId, topicId, maxResults)

Get the top viewed articles for a topic.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.KnowledgeArticleVersionCollection getTopViewedArticlesForTopic(String communityId, String topicId, Integer maxResults)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

topicId

Type: String

ID of the topic.

maxResults

Type: Integer

The maximum number of articles returned for each topic ID. Values can be from 1 to 25. The default value is 5.

#### Return Value

Type: [`ConnectApi.KnowledgeArticleVersionCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm#apex_connectapi_output_knowledge_article_version_collection "A collection of knowledge article versions.")

### getTrendingArticles(communityId, maxResults)

Get trending articles for an Experience Cloud site.

#### API Version

36.0

#### Available to Guest Users

36.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.KnowledgeArticleVersionCollection getTrendingArticles(String communityId, Integer maxResults)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

maxResults

Type: Integer

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

#### Return Value

Type: `ConnectApi.KnowledgeArticleVersionCollection`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetTrendingArticles(communityId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_setTestGetTrendingArticles_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getTrendingArticlesForTopic(communityId, topicId, maxResults)

Get the trending articles for a topic in an Experience Cloud site.

#### API Version

36.0

#### Available to Guest Users

36.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.KnowledgeArticleVersionCollection getTrendingArticlesForTopic(String communityId, String topicId, Integer maxResults)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

topicId

Type: String

ID of the topic.

maxResults

Type: Integer

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

#### Return Value

Type: `ConnectApi.KnowledgeArticleVersionCollection`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetTrendingArticlesForTopic(communityId, topicId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_setTestGetTrendingArticlesForTopic_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

## Knowledge Test Methods

These test methods are for `Knowledge`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestGetTrendingArticles(communityId, maxResults, result)

Register a `ConnectApi.KnowledgeVersionArticleCollection` object to be returned when the matching `ConnectApi.getTrendingArticles` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

36.0

#### Signature

`public static Void setTestGetTrendingArticles(String communityId, Integer maxResults, ConnectApi.KnowledgeArticleVersionCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

maxResults

Type: Integer

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

result

Type: `ConnectApi.KnowledgeArticleVersionCollection`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getTrendingArticles(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticles_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetTrendingArticlesForTopic(communityId, topicId, maxResults, result)

Register a `ConnectApi.KnowledgeVersionArticleCollection` object to be returned when the matching `ConnectApi.getTrendingArticlesForTopic` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

36.0

#### Signature

`public static Void setTestGetTrendingArticlesForTopic(String communityId, String topicId, Integer maxResults, ConnectApi.KnowledgeArticleVersionCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

topicId

Type: String

ID of the topic.

maxResults

Type: Integer

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

result

Type: `ConnectApi.KnowledgeArticleVersionCollection`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getTrendingArticlesForTopic(communityId, topicId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticlesForTopic_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
