---
doc_id: "apex_ConnectAPI_ChatterFavorites_static_methods"
---

# ChatterFavorites Class

Chatter favorites give you easy access to topics, list views, and feed searches.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

Use Connect in Apex to get and delete topics, list views, and feed searches that have been added as favorites. Add topics and feed searches as favorites, and update the last view date of a feed search or list view feed to the current system time.

In this image of Salesforce, “Build Issues” is a topic, “All Accounts” is a list view, and “United” is a feed search.

![Chatter Favorites in Web UI](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fapex%2Fimages%2Fconnectapi_favorites.png&folder=apexref)

## ChatterFavorites Methods

These methods are for `ChatterFavorites`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [addFavorite(communityId, subjectId, searchText)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_addFavorite)
- [addRecordFavorite(communityId, subjectId, targetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_addRecordFavorite)
- [deleteFavorite(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_deleteFavorite)
- [getFavorite(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFavorite)
- [getFavorites(communityId, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFavorites)
- [getFeedElements(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_1)
- [getFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_2)
- [getFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_3)
- [updateFavorite(communityId, subjectId, favoriteId, updateLastViewDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_updateFavorite)

### addFavorite(communityId, subjectId, searchText)

Add a feed search favorite for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedFavorite addFavorite(String communityId, String subjectId, String searchText)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

searchText

Type: String

Specify the text of the search to be saved as a favorite. This method can only create a feed search favorite, not a list view favorite or a topic.

#### Return Value

Type: [`ConnectApi.FeedFavorite`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")

### addRecordFavorite(communityId, subjectId, targetId)

Add a topic as a favorite.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedFavorite addRecordFavorite(String communityId, String subjectId, String targetId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

targetId

Type: String

The ID of the topic to add as a favorite.

#### Return Value

Type: [`ConnectApi.FeedFavorite`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")

### deleteFavorite(communityId, subjectId, favoriteId)

Delete a favorite.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteFavorite(String communityId, String subjectId, String favoriteId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

#### Return Value

Type: Void

### getFavorite(communityId, subjectId, favoriteId)

Get information about a favorite.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedFavorite getFavorite(String communityId, String subjectId, String favoriteId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

#### Return Value

Type: [`ConnectApi.FeedFavorite`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")

### getFavorites(communityId, subjectId)

Get a list of favorites for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedFavorites getFavorites(String communityId, String subjectId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

#### Return Value

Type: [`ConnectApi.FeedFavorites`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorites.htm "Feed favorites.")

### getFeedElements(communityId, subjectId, favoriteId)

Get the first page of feed elements for a favorite.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElements(String communityId, String subjectId, String favoriteId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElements(communityId, subjectId, favoriteId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)

Get a page of sorted feed elements for a favorite.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElements(String communityId, String subjectId, String favoriteId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam)

Get a page of sorted feed elements for a favorite. Include no more than the specified number of comments per feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedElementPage getFeedElements(String communityId, String subjectId, String favoriteId, Integer recentCommentCount, Integer elementsPerBundle, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedElementPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### updateFavorite(communityId, subjectId, favoriteId, updateLastViewDate)

Update the last view date of the saved search or list view feed to the current system time.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedFavorite updateFavorite(String communityId, String subjectId, String favoriteId, Boolean updateLastViewDate)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

updateLastViewDate

Type: Boolean

Specify whether to update the last view date of the specified favorite to the current system time (`true`) or not (`false`).

#### Return Value

Type: [`ConnectApi.FeedFavorite`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")

## ChatterFavorites Test Methods

These test methods are for `ChatterFavorites`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

## See Also

- [setTestGetFeedElements(communityId, subjectId, favoriteId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_1)
- [setTestGetFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_2)
- [setTestGetFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_3)

### setTestGetFeedElements(communityId, subjectId, favoriteId, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElements​` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElements(String communityId, String subjectId, String favoriteId, ConnectApi.FeedElementPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

result

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElements(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElements​` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElements(String communityId, String subjectId, String favoriteId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedElementPage` object to be returned when `getFeedElements​` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

`public static Void setTestGetFeedElements(String communityId, String subjectId, String favoriteId, Integer recentCommentCount, Integer elementsPerBundle, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed element. The default value is 3.

**elementsPerBundle**

Type: Integer

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: `ConnectApi.FeedElementPage`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

## Retired ChatterFavorites Methods

These methods for `ChatterFavorites` are retired.

## See Also

- [getFeedItems(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedItems)
- [getFeedItems(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedItems_2)
- [getFeedItems(communityId, subjectId, favoriteId, recentCommentCount, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedItems_3)
- [setTestGetFeedItems(communityId, subjectId, favoriteId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems)
- [setTestGetFeedItems(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems_2)
- [setTestGetFeedItems(communityId, subjectId, favoriteId, recentCommentCount, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems_3)

### getFeedItems(communityId, subjectId, favoriteId)

Get the first page of feed items for a favorite.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElements(communityId, subjectId, favoriteId)](#apex_ConnectAPI_ChatterFavorites_getFeedElements_1).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItems(String communityId, String subjectId, String favoriteId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItems(communityId, subjectId, favoriteId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItems(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)

Get a page of sorted feed items for a favorite.

#### API Version

28.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFavorites_getFeedElements_2).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItems(String communityId, String subjectId, String favoriteId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItems(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFeedItems(communityId, subjectId, favoriteId, recentCommentCount, pageParam, pageSize, sortParam)

Get a page of sorted feed items for a favorite. Include no more than the specified number of comments per feed item.

#### API Version

29.0–31.0

:::tip Important
In version 32.0 and later, use [getFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFavorites_getFeedElements_3).
:::

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.FeedItemPage getFeedItems(String communityId, String subjectId, String favoriteId, Integer recentCommentCount, String pageParam, Integer pageSize, FeedSortOrder sortParam)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

#### Return Value

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFeedItems(communityId, subjectId, favoriteId, recentCommentCount, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItems(communityId, subjectId, favoriteId, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItems(String communityId, String subjectId, String favoriteId, ConnectApi.FeedItemPage result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

subjectId

Type: String

ID of the context user or the alias `me`.

favoriteId

Type: String

ID of a favorite.

result

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItems(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedItems)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItems(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

`public static Void setTestGetFeedItems(String communityId, String subjectId, String favoriteId, String pageParam, Integer pageSize, FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItems(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedItems_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFeedItems(communityId, subjectId, favoriteId, recentCommentCount, pageParam, pageSize, sortParam, result)

Register a `ConnectApi.FeedItemPage` object to be returned when `getFeedItems​` is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

29.0–31.0

#### Signature

`public static Void setTestGetFeedItems(String communityId, String subjectId, String favoriteId, Integer recentCommentCount, String pageParam, Integer pageSize, FeedSortOrder sortParam, ConnectApi.FeedItemPage result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**subjectId**

Type: String

ID of the context user or the alias `me`.

**favoriteId**

Type: String

ID of a favorite.

**recentCommentCount**

Type: Integer

Maximum number of comments to return with each feed item. The default value is 3.

**pageParam**

Type: String

Page token to use to view the page. Page tokens are returned as part of the response class, for example, `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Number of feed items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**sortParam**

Type: [`ConnectApi.FeedSortOrder`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   `CreatedDateAsc`—Sorts by oldest creation date. This sort order is available only for `DirectMessageModeration`, `Draft`, `Isolated`, `Moderation`, and `PendingReview` feeds.
-   `CreatedDateDesc`—Sorts by most recent creation date.
-   `LastModifiedDateDesc`—Sorts by most recent activity.
-   `MostViewed`—Sorts by most viewed content. This sort order is available only for `Home` feeds when the `ConnectApi.FeedFilter` is `UnansweredQuestions`.
-   `Relevance`—Sorts by most relevant content. This sort order is available only for `Company`, `Home`, and `Topics` feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in `null`, the default value `CreatedDateDesc` is used.

**result**

Type: [`ConnectApi.FeedItemPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFeedItems(communityId, subjectId, favoriteId, recentCommentCount, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedItems_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
