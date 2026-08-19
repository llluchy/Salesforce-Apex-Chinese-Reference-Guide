---
doc_id: "connectapi_examples_follow_record"
---

# Follow a Record

Call a method to follow a record.

Call [`follow(communityId, userId, subjectId)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_follow) to follow a record.

```apex
ChatterUsers.ConnectApi.Subscription subscriptionToRecord = ConnectApi.ChatterUsers.follow(null, 'me', '001RR000002G4Y0');
```

## See Also

- [Unfollow a Record](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_unfollow_record.htm)
