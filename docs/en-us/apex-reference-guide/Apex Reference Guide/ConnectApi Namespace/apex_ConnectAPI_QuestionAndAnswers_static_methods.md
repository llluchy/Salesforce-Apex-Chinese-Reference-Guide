---
doc_id: "apex_ConnectAPI_QuestionAndAnswers_static_methods"
---

# QuestionAndAnswers Class

Access question and answers suggestions.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## See Also

- [QuestionAndAnswers Methods](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_methods)

## QuestionAndAnswers Methods

These methods are for `QuestionAndAnswers`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [getSuggestions(communityId, q, subjectId, includeArticles, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_getSuggestions_1)
- [setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_setTestGetSuggestions_1)
- [updateQuestionAndAnswers(communityId, feedElementId, questionAndAnswersCapability)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_updateQuestionAndAnswers_1)

### getSuggestions(communityId, q, subjectId, includeArticles, maxResults)

Get question and answers suggestions.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.QuestionAndAnswersSuggestions getSuggestions(String communityId, String q, String subjectId, Boolean includeArticles, Integer maxResults)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

subjectId

Type: String

Specify a subject ID to search only questions on that object. If the ID is a topic or a user, the ID is ignored.

includeArticles

Type: Boolean

Specify `true` to include knowledge articles in the search results. To return only questions, specify `false`.

maxResults

Type: Integer

The maximum number of results to return for each type of item. Possible values are 1–10. The default value is 5.

#### Return Value

Type: `ConnectApi.QuestionAndAnswersSuggestions`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_setTestGetSuggestions_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result)

Register a `ConnectApi.QuestionAndAnswersSuggestions` object to be returned when `getSuggestions` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

`public static Void setTestGetSuggestions(String communityId, String q, String subjectId, Boolean includeArticles, Integer maxResults, ConnectApi.QuestionAndAnswersSuggestions result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

q

Type: String

Required and can’t be `null`. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

subjectId

Type: String

Specify a subject ID to search only questions on that object. If the ID is a topic or a user, the ID is ignored.

includeArticles

Type: Boolean

Specify `true` to include knowledge articles in the search results. To return only questions, specify `false`.

maxResults

Type: Integer

The maximum number of results to return for each type of item. Possible values are 1–10. The default value is 5.

result

Type: `ConnectApi.QuestionAndAnswersSuggestions`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getSuggestions(communityId, q, subjectId, includeArticles, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_getSuggestions_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### updateQuestionAndAnswers(communityId, feedElementId, questionAndAnswersCapability)

Choose or change the best answer for a question.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.QuestionAndAnswersCapability updateQuestionAndAnswers(String communityId, String feedElementId, ConnectApi.QuestionAndAnswersCapabilityInput questionAndAnswersCapability)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

feedElementId

Type: String

ID of the feed element.

questionAndAnswersCapability

Type: `ConnectApi.QuestionAndAnswersCapabilityInput`

Specify the best answer (comment ID) for the question.

#### Return Value

Type: `ConnectApi.QuestionAndAnswersCapability`

If the feed element doesn’t support this capability, the return value is [`ConnectApi.NotFoundException`](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```apex
ConnectApi.QuestionAndAnswersCapabilityInput qaInput = new ConnectApi.QuestionAndAnswersCapabilityInput();
qaInput.bestAnswerId = '0D7D00000000lMAKAY';

ConnectApi.QuestionAndAnswersCapability qa = ConnectApi.QuestionAndAnswers.updateQuestionAndAnswers(null, '0D5D0000000XZjJ', qaInput);
```
