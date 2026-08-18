---
doc_id: "apex_ConnectAPI_Chatter_static_methods"
---

# Chatter Class

Access information about followers and subscriptions for records.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Chatter Methods

These methods are for `Chatter`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [deleteSubscription(communityId, subscriptionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_deleteSubscription)
- [getFollowers(communityId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_getFollowers)
- [getFollowers(communityId, recordId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_getFollowers_2)
- [getSubscription(communityId, subscriptionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_getSubscription)
- [submitDigestJob(period)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_submitDigestJob_1)

### deleteSubscription(communityId, subscriptionId)

Delete a subscription. Use this method to stop following a record, a user, or a file.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static void deleteSubscription(String communityId, String subscriptionId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subscriptionId

Type: String

The ID for a subscription.

#### Return Value

Type: Void

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

To leave a group, call [`deleteMember(communityId, membershipId)`](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deleteMember "Remove a member from a group.").

#### Example

When you follow a user, the call to `ConnectApi.ChatterUsers.follow` returns a `ConnectApi.Subscription` object. To stop following the user, pass the `id` property of that object to this method.

```apex
ConnectApi.Chatter.deleteSubscription(null, '0E8RR0000004CnK0AU');
```

## See Also

- [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm)

-   [follow(communityId, userId, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_follow "Follow a user or record.")
    

### getFollowers(communityId, recordId)

Get the first page of followers for a record.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FollowerPage getFollowers(String communityId, String recordId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recordId

Type: String

ID for a record or the keyword `me`.

#### Return Value

Type: `ConnectApi.​FollowerPage`

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

## See Also

- [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm)

### getFollowers(communityId, recordId, pageParam, pageSize)

Get a page of followers for a record.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FollowerPage getFollowers(String communityId, String recordId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recordId

Type: String

ID for a record or the keyword `me`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.​FollowerPage`

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

## See Also

- [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm)

### getSubscription(communityId, subscriptionId)

Get information about a subscription.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Subscription getSubscription(String communityId, String subscriptionId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subscriptionId

Type: String

The ID for a subscription.

#### Return Value

Type: `ConnectApi.​Subscription`

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

## See Also

- [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm)

### submitDigestJob(period)

Submit a daily or weekly Chatter email digest job.

#### API Version

37.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.DigestJobRepresentation submitDigestJob(ConnectApi.DigestPeriod period)`

#### Parameters

**period**

Type: [`ConnectApi.DigestPeriod`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DigestFrequencyEnum)

Time period that’s included in a Chatter email digest. Values are:

-   `DailyDigest`—The email includes up to the 50 latest posts from the previous day.
-   `WeeklyDigest`—The email includes up to the 50 latest posts from the previous week.

#### Return Value

Type: [`ConnectApi.DigestJob`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_digest_job.htm#apex_connectapi_output_digest_job "Represents a successfully enqueued API digest job request.")

#### Usage

The times when Chatter sends email digests are not configurable in the UI. To control when email digests are sent and to use this method, contact Salesforce to enable API-only Chatter Digests.

:::tip Warning
Enabling API-only Chatter Digests
        disables the scheduled digests for your org. You must call the API for your users to receive
        their digests.
:::

We recommend scheduling digest jobs by implementing the Apex `Schedulable` interface with this method. To monitor your digest jobs from Setup, enter Background Jobs in the Quick Find box, then select **Background Jobs**.

#### Example

Schedule daily digests:

```apex
global class ExampleDigestJob1 implements Schedulable {
   global void execute(SchedulableContext context) {
      ConnectApi.Chatter.submitDigestJob(ConnectApi.DigestPeriod.DailyDigest);
   }
}
```

Schedule weekly digests:

```apex
global class ExampleDigestJob2 implements Schedulable {
   global void execute(SchedulableContext context) {
      ConnectApi.Chatter.submitDigestJob(ConnectApi.DigestPeriod.WeeklyDigest);
   }
}
```

## See Also

- [Apex Scheduler](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_scheduler.htm)
