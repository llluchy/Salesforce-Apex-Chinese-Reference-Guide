---
doc_id: "apex_connectapi_input_batch"
---

# ConnectApi.BatchInput

Construct a set of inputs to be passed into a method at the same time.

Use this constructor when there isn’t a binary input:

```apex
ConnectApi.BatchInput(Object input)
```

Use this constructor to pass one binary input:

```apex
ConnectApi.BatchInput(Object input, ConnectApi.BinaryInput binary)
```

Use this constructor to pass multiple binary inputs:

```apex
ConnectApi.BatchInput(Object input, List binaries)
```

The constructors takes these parameters:

| Argument | Type | Description | Available Version |
| --- | --- | --- | --- |
| `input` | Object | An individual input object to be used in the batch operation. For example, for `postFeedElementBatch()`, this should be `ConnectApi.FeedElementInput`. | 32.0 |
| `binary` | [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.") | A binary file to associate with the input object. | 32.0 |
| `binaries` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")\> | A list of binary files to associate with the input object. | 32.0 |

## See Also

- [Post a Batch of Feed Elements](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_batch.htm)

-   [Post a Batch of Feed Elements with a New (Binary) File](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_batch_binary.htm "Post a Batch of Feed Elements with a New (Binary) File - HTML (New Window)")
