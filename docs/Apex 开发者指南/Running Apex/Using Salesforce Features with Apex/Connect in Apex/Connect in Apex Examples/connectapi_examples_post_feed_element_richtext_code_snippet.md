---
doc_id: "connectapi_examples_post_feed_element_richtext_code_snippet"
---

# Post a Rich-Text Feed Element with a Code Block

Call a method to post a feed element with a code block.

Call [`postFeedElement(communityId, feedElement)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) to post a feed item with a code block.

```apex
String communityId = null;
String targetUserOrGroupOrRecordId  = 'me';
String codeSnippet = '\n\t\n\t\tHello, world!\n\t\n';
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = targetUserOrGroupOrRecordId;
input.feedElementType = ConnectApi.FeedElementType.FeedItem;

ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;

messageInput.messageSegments = new List();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = codeSnippet;
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupEndSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postFeedElement(communityId, input);
```

## See Also

- [Apex Reference Guide:
                            ConnectApi.MarkupBeginSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_connectapi_input_markup_begin_segment.htm)

-   [*Apex Reference Guide*: ConnectApi.MarkupEndSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_connectapi_input_markup_end_segment.htm "Apex Reference Guide:
    ConnectApi.MarkupEndSegmentInput - HTML (New Window)")
