---
doc_id: "connectapi_examples_unfollow_record"
---

# Unfollow a Record

Call a method to stop following a record.

When you follow a record such as a user, the call to `ConnectApi.ChatterUsers.follow` returns a `ConnectApi.Subscription` object. To unfollow a record, pass the `id` property of that object to [`deleteSubscription(communityId, subscriptionId)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_deleteSubscription).

```apex
ConnectApi.Chatter.deleteSubscription(null, '0E8RR0000004CnK0AU');
```

## See Also

- [Follow a Record](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_follow_record.htm)
