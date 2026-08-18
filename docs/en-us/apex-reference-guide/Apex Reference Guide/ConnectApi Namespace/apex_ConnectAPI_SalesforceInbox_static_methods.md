---
doc_id: "apex_ConnectAPI_SalesforceInbox_static_methods"
---

# SalesforceInbox Class

Access information about Automated Activity Capture, which is available in Einstein and Salesforce Inbox.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## SalesforceInbox Methods

These methods are for `SalesforceInbox`. All methods are static.

## See Also

- [shareActivity(activityId, sharingInfo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_SalesforceInbox_static_methods.htm#apex_ConnectAPI_SalesforceInbox_shareActivity_1)

### shareActivity(activityId, sharingInfo)

Share emails or events with certain groups of users.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ActivitySharingResult shareActivity(String activityId, ConnectApi.ActivitySharingInput sharingInfo)`

#### Parameters

activityId

Type: String

The ID of the activity.

sharingInfo

Type: [`ConnectApi.ActivitySharingInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activity_sharing.htm#apex_connectapi_input_activity_sharing "Defines who a captured email or event is shared with.")

A `ConnectApi.ActivitySharingInput` object.

#### Return Value

Type: [`ConnectApi.ActivitySharingResult`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activity_sharing_result.htm#apex_connectapi_output_activity_sharing_result "The results of sharing a captured email or event.")

#### Usage

This method is a feature of both Sales Cloud Einstein and Inbox. It lets users connect their email and calendar to Salesforce. Then, their emails and events are automatically added to related Salesforce records. Users can specify who their individual emails and events are shared with.
