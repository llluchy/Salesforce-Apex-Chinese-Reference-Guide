---
doc_id: "connectAPI_overview"
---

# Connect in Apex

Use Connect in Apex to develop custom experiences in Salesforce. Connect in Apex provides programmatic access to B2B Commerce, CMS managed content, Experience Cloud sites, topics, and more. Create Apex pages that display Chatter feeds, post feed items with mentions and topics, and update user and group photos. Create triggers that update Chatter feeds.

Many Connect REST API resource actions are exposed as static methods on Apex classes in the `ConnectApi` namespace. These methods use other `ConnectApi` classes to input and return information. The `ConnectApi` namespace is referred to as *Connect in Apex.*

In Apex, you can access some Connect data using SOQL queries and objects. However, it’s simpler to expose data in `ConnectApi` classes, and data is localized and structured for display. For example, instead of making several calls to access and assemble a feed, you can do it with a single call.

Connect in Apex methods execute in the context of the user executing the methods. The code has access to whatever the context user has access to. It doesn’t run in system mode.

For Connect in Apex reference information, see [ConnectApi Namespace](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_connect_api.htm).

## See Also

- [Connect in Apex Examples](atlas.en-us.apexcode.meta/apexcode/connectapi_examples.htm)
- [Connect in Apex Features](atlas.en-us.apexcode.meta/apexcode/connectapi_features.htm)
- [Using ConnectApi Input and Output Classes](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_inputs_outputs.htm)
- [Understanding Limits for ConnectApi Classes](atlas.en-us.apexcode.meta/apexcode/apex_connect_api_limits.htm)
- [Packaging ConnectApi Classes](atlas.en-us.apexcode.meta/apexcode/apex_connect_api_packaging.htm)
- [Serializing and Deserializing ConnectApi Objects](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_serialization.htm)
- [ConnectApi Versioning and Equality Checking](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_versioning.htm)
- [Casting ConnectApi Objects](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_casting.htm)
- [Wildcards](atlas.en-us.apexcode.meta/apexcode/intro_wildcards.htm)
- [Testing ConnectApi Code](atlas.en-us.apexcode.meta/apexcode/connectAPI_TestingApex.htm)
- [Differences Between ConnectApi Classes and Other Apex Classes](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_differences.htm)
