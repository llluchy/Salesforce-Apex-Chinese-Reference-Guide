---
doc_id: "connectapi_examples_post_feed_element_direct_message"
---

# Send a Direct Message

Call a method to send a direct message.

Call [`postFeedElement(communityId, feedElement)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) to send a direct message to two people. 

```apex
// Define the FeedItemInput object to pass to postFeedElement
ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
 
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();
textSegmentInput.text = 'Thanks for attending my presentation test run this morning. Send me any feedback.';
 
// The MessageBodyInput object holds the text in the post
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
messageBodyInput.messageSegments = new List();
messageBodyInput.messageSegments.add(textSegmentInput);
feedItemInput.body = messageBodyInput;
 
// The FeedElementCapabilitiesInput object holds the capabilities of the feed item.
// For this feed item, we define a direct message capability to hold the member(s) and the subject.
 
ListString> memberIds = new ListString>();
memberIds.add('005B00000016OUQ');
memberIds.add('005B0000001rIN6');
 
ConnectApi.DirectMessageCapabilityInput dmInput = new ConnectApi.DirectMessageCapabilityInput();
dmInput.subject = 'Thank you!';
dmInput.membersToAdd = memberIds;
 
ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new ConnectApi.FeedElementCapabilitiesInput();
feedElementCapabilitiesInput.directMessage = dmInput;
 
feedItemInput.capabilities = feedElementCapabilitiesInput;
 
// Post the feed item. 
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```
