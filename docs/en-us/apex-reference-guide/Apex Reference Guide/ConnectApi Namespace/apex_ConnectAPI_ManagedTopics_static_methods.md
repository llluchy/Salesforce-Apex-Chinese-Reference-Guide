---
doc_id: "apex_ConnectAPI_ManagedTopics_static_methods"
---

# ManagedTopics Class

Get managed topics in an Experience Cloud site. Create, delete, and reorder managed topics.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ManagedTopics Methods

These methods are for `ManagedTopics`. All methods are static.

## See Also

- [createManagedTopic(communityId, recordId, managedTopicType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopic)
- [createManagedTopic(communityId, recordId, managedTopicType, parentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopic_1)
- [createManagedTopicByName(communityId, name, managedTopicType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopicByName)
- [createManagedTopicByName(communityId, name, managedTopicType, parentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopicByName_1)
- [deleteManagedTopic(communityId, managedTopicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_deleteManagedTopic)
- [getManagedTopic(communityId, managedTopicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopic)
- [getManagedTopic(communityId, managedTopicId, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopic_1)
- [getManagedTopics(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_1)
- [getManagedTopics(communityId, managedTopicType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_2)
- [getManagedTopics(communityId, managedTopicType, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_3)
- [getManagedTopics(communityId, managedTopicType, recordIds, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_5)
- [getManagedTopics(communityId, managedTopicType, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_6)
- [reorderManagedTopics(communityId, managedTopicPositionCollection)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_reorderManagedTopics)

### createManagedTopic(communityId, recordId, managedTopicType)

Create a managed topic of a specific type for an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopic createManagedTopic(String communityId, String recordId, ConnectApi.ManagedTopicType managedTopicType)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**recordId**

Type: String

ID of the topic.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Specify the type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

You can create up to 25 `Featured` and 5,000 `Content` topics. You can create up to eight levels of `Navigational` managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 `Navigational` topics.

#### Return Value

Type: `ConnectApi.ManagedTopic`

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### createManagedTopic(communityId, recordId, managedTopicType, parentId)

Create a child managed topic for an Experience Cloud site.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopic createManagedTopic(String communityId, String recordId, ConnectApi.ManagedTopicType managedTopicType, String parentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

recordId

Type: String

ID of the topic.

managedTopicType

Type: `ConnectApi.ManagedTopicType`

Specify `Navigational` for the type of managed topic to create a child managed topic.

You can create up to 25 `Featured` and 5,000 `Content` topics. You can create up to eight levels of `Navigational` managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 `Navigational` topics.

parentId

Type: String

ID of the parent managed topic.

You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic.

#### Return Value

Type: `ConnectApi.ManagedTopic`

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### createManagedTopicByName(communityId, name, managedTopicType)

Create a managed topic of a specific type by name for an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopic createManagedTopicByName(String communityId, String name, ConnectApi.ManagedTopicType managedTopicType)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**name**

Type: String

Name of the topic.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Specify the type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

You can create up to 25 `Featured` and 5,000 `Content` topics. You can create up to eight levels of `Navigational` managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 `Navigational` topics.

#### Return Value

Type: `ConnectApi.ManagedTopic`

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### createManagedTopicByName(communityId, name, managedTopicType, parentId)

Create a child managed topic by name for an Experience Cloud site.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopic createManagedTopicByName(String communityId, String name, ConnectApi.ManagedTopicType managedTopicType, String parentId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

name

Type: String

Name of the topic.

managedTopicType

Type: `ConnectApi.ManagedTopicType`

Specify `Navigational` for the type of managed topic to create a child managed topic.

You can create up to 25 `Featured` and 5,000 `Content` topics. You can create up to eight levels of `Navigational` managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 `Navigational` topics.

parentId

Type: String

ID of the parent managed topic.

You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic.

#### Return Value

Type: `ConnectApi.ManagedTopic`

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### deleteManagedTopic(communityId, managedTopicId)

Delete a managed topic from an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static deleteManagedTopic(String communityId, String managedTopicId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

managedTopicId

Type: String

ID of managed topic.

#### Return Value

Type: Void

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can delete managed topics.

### getManagedTopic(communityId, managedTopicId)

Get a managed topic in an Experience Cloud site.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopic getManagedTopic(String communityId, String managedTopicId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

managedTopicId

Type: String

ID of managed topic.

#### Return Value

Type: `ConnectApi.ManagedTopic`

### getManagedTopic(communityId, managedTopicId, depth)

Get a managed topic, including its parent and children managed topics, in an Experience Cloud site.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopic getManagedTopic(String communityId, String managedTopicId, Integer depth)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

managedTopicId

Type: String

ID of managed topic.

depth

Type: Integer

Specify an integer 1–8. If you specify 1, the `children` property of the `ConnectApi.ManagedTopic` output class is `null`. If you specify 2, the `children` property of the `ConnectApi.ManagedTopic` output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: `ConnectApi.ManagedTopic`

### getManagedTopics(communityId)

Get the featured and navigational managed topics for an Experience Cloud site.

To get the content topics for an Experience Cloud site, use `getManagedTopics(communityId, managedTopicType)`.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`

### getManagedTopics(communityId, managedTopicType)

Get managed topics of the specified type for an Experience Cloud site.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

If you specify `Content`, up to 50 topics are returned. If you want more than 50 `Content` topics, use `getManagedTopics(communityId, managedTopicType, pageParam, pageSize)`.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`

### getManagedTopics(communityId, managedTopicType, depth)

Get managed topics of the specified type, including their parent and children managed topics, in an Experience Cloud site.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, Integer depth)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

**depth**

Type: Integer

Specify an integer 1–8. If you specify 1, the `children` property of the `ConnectApi.ManagedTopic` output class is `null`. If you specify 2, the `children` property of the `ConnectApi.ManagedTopic` output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`

### getManagedTopics(communityId, managedTopicType, recordIds, depth)

Get managed topics of the specified type, including their parent and children managed topics, that are associated with topics in an Experience Cloud site.

#### API Version

38.0

#### Available to Guest Users

38.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, List<String> recordIds, Integer depth)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

**recordIds**

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

A list of up to 100 topic IDs associated with the managed topics.

If you list more than 10 topic IDs, you can’t specify 2–8 for depth.

**depth**

Type: Integer

Specify an integer 1–8. If you specify 1, the `children` property of the `ConnectApi.ManagedTopic` output class is `null`. If you specify 2, the `children` property of the `ConnectApi.ManagedTopic` output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`

### getManagedTopics(communityId, managedTopicType, pageParam, pageSize)

Get a page of managed topics.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, Integer pageParam, Integer pageSize)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

**pageParam**

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 50.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`

### reorderManagedTopics(communityId, managedTopicPositionCollection)

Reorder the relative positions of managed topics in an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection reorderManagedTopics(String communityId, ConnectApi.ManagedTopicPositionCollectionInput managedTopicPositionCollection)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

managedTopicPositionCollection

Type: `ConnectApi.ManagedTopicPositionCollectionInput`

A collection of relative positions of managed topics. This collection can include only `Featured` and `Navigational` topics and doesn’t have to include all managed topics.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can reorder managed topics.

You can reorder parent managed topics or children managed topics with the same parent. If you don’t include all managed topics in the `ConnectApi.ManagedTopicPositionCollectionInput`, the managed topics are reordered by respecting the positions indicated in the `ConnectApi.ManagedTopicPositionCollectionInput` and then by pushing down any managed topics that aren’t included in the `ConnectApi.ManagedTopicPositionCollectionInput` to the next available position.

#### Example

If you have these managed topics:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicA | 0 |
| ManagedTopicB | 1 |
| ManagedTopicC | 2 |
| ManagedTopicD | 3 |
| ManagedTopicE | 4 |

And you reorder managed topics by including this information in `ConnectApi.ManagedTopicPositionCollectionInput`:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicE | 2 |

The result is:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicA | 1 |
| ManagedTopicE | 2 |
| ManagedTopicB | 3 |
| ManagedTopicC | 4 |

## Retired ManagedTopics Methods

These methods for `ManagedTopics` are retired.

## See Also

- [getManagedTopics(communityId, managedTopicType, recordId, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_4)

### getManagedTopics(communityId, managedTopicType, recordId, depth)

Get managed topics of the specified type, including their parent and children managed topics, that are associated with a given topic in an Experience Cloud site.

#### API Version

35.0–37.0

:::tip Important
In version 38.0 and later, use `getManagedTopics(communityId, managedTopicType, recordIds, depth)`.
:::

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, String recordId, Integer depth)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**managedTopicType**

Type: `ConnectApi.ManagedTopicType`

Type of managed topic.

-   `Content`—Topics that are associated with native content.
-   `Featured`—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   `Navigational`—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a `Featured`, `Navigational`, and `Content` topic.

**recordId**

Type: String

ID of the topic associated with the managed topics.

**depth**

Type: Integer

Specify an integer 1–8. If you specify 1, the `children` property of the `ConnectApi.ManagedTopic` output class is `null`. If you specify 2, the `children` property of the `ConnectApi.ManagedTopic` output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: `ConnectApi.ManagedTopicCollection`
