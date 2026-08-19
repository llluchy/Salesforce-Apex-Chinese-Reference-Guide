---
doc_id: "connectapi_examples_post_feed_element_binary"
---

# Post a Feed Element with a New File (Binary) Attachment

Call a method to post a feed element with a new file.

:::tip Important
In version 36.0 and later, you can’t post a feed
                                element with a new file in the same call. Upload files to Salesforce
                                first, and then specify existing files when posting a feed
                                element.
:::

This example calls [`postFeedElement(communityId, feedElement, feedElementFileUpload)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_2) to post a feed item with a new file (binary) attachment.

```apex
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = 'me';

ConnectApi.ContentCapabilityInput contentInput = new ConnectApi.ContentCapabilityInput();
contentInput.title = 'Title';

ConnectApi.FeedElementCapabilitiesInput capabilities = new ConnectApi.FeedElementCapabilitiesInput();
capabilities.content = contentInput;

input.capabilities = capabilities;

String text = 'These are the contents of the new file.';
Blob myBlob = Blob.valueOf(text);
ConnectApi.BinaryInput binInput = new ConnectApi.BinaryInput(myBlob, 'text/plain', 'fileName');

ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), input, binInput);
```
