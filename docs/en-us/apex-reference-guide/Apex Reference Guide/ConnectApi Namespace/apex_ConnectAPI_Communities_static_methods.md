---
doc_id: "apex_ConnectAPI_Communities_static_methods"
---

# Communities Class

Get information about Experience Cloud sites in your org.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Communities Methods

These methods are for `Communities`. All methods are static.

## See Also

- [getCommunities()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunities)
- [getCommunities(communityStatus)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunities_2)
- [getCommunity(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunity)

### getCommunities()

Get a list of Experience Cloud sites that the context user has access to.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CommunityPage getCommunities()`

#### Return Value

Type: `ConnectApi.CommunityPage`

### getCommunities(communityStatus)

Get a list of Experience Cloud sites with the specified status that the context user has access to.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.CommunityPage getCommunities(ConnectApi.CommunityStatus communityStatus)`

#### Parameters

**communityStatus**

Type: `ConnectApi.​CommunityStatus`

communityStatus—Status of the Experience Cloud site. Values are:

-   `Live`
-   `Inactive`
-   `UnderConstruction`

#### Return Value

Type: `ConnectApi.CommunityPage`

### getCommunity(communityId)

Get information about an Experience Cloud site.

#### API Version

28.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Community getCommunity(String communityId)`

#### Parameters

communityId

Type: String

ID of an Experience Cloud site. You can’t specify `null` or `internal`.

#### Return Value

Type: `ConnectApi.​Community`
