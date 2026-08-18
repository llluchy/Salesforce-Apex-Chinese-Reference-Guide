---
doc_id: "connectapi_examples_post_feed_element_batch"
---

# Post a Batch of Feed Elements

Use a trigger to call a method to bulk post to the feeds of accounts.

This trigger calls [`postFeedElementBatch(communityId, feedElements)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElementBatch_1) to bulk post to the feeds of newly inserted accounts.

```apex
trigger postFeedItemToAccount on Account (after insert) {
    Account[] accounts = Trigger.new;
    
    // Bulk post to the account feeds.

    List batchInputs = new List();

    for (Account a : accounts) {
        ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();

        input.subjectId = a.id;
        
        ConnectApi.MessageBodyInput body = new ConnectApi.MessageBodyInput();
        body.messageSegments = new List();

        ConnectApi.TextSegmentInput textSegment = new ConnectApi.TextSegmentInput();
        textSegment.text = 'Let\'s win the ' + a.name + ' account.';

        body.messageSegments.add(textSegment);
        input.body = body;

        ConnectApi.BatchInput batchInput = new ConnectApi.BatchInput(input);
        batchInputs.add(batchInput);
    }

    ConnectApi.ChatterFeeds.postFeedElementBatch(Network.getNetworkId(), batchInputs);
}
```
