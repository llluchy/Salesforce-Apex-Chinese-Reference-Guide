---
doc_id: "apex_ConnectAPI_Zones_static_methods"
---

# Zones Class

Access information about Chatter Answers zones in your organization. Zones organize questions into logical groups, with each zone having its own focus and unique questions.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports
                Chatter Answers. Users of Chatter Answers can post, answer, comment, or view
                existing Chatter Answers data, but support and updates are scheduled to end. We
                recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter
                    Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Zones Methods

These methods are for `Zones`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [getZone(communityId, zoneId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_getZone)
- [getZones(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_getZones)
- [getZones(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_getZones_2)
- [searchInZone(communityId, zoneId, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone)
- [searchInZone(communityId, zoneId, q, filter, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone_2)
- [searchInZone(communityId, zoneId, q, filter, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone_3)

### getZone(communityId, zoneId)

Get a zone.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
    Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support
    and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more
    information, see [End of Support for Chatter Answers in
     Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Zone getZone(String communityId, String zoneId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

zoneId

Type: String

The ID of a zone.

#### Return Value

Type: `ConnectApi.Zone`

### getZones(communityId)

Get a list of zones.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers.
                        Users of Chatter Answers can post, answer, comment, or view existing Chatter
                        Answers data, but support and updates are scheduled to end. We recommend
                        transitioning to Chatter Questions. For more information, see [End of Support
                              for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ZonePage getZones(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: `ConnectApi.ZonePage`

### getZones(communityId, pageParam, pageSize)

Get a page of zones.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
    Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support
    and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more
    information, see [End of Support for Chatter Answers in
     Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Zone getZones(String communityId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.ZonePage`

### searchInZone(communityId, zoneId, q, filter)

Search articles or questions in a zone.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
        Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but
        support and updates are scheduled to end. We recommend transitioning to Chatter Questions.
        For more information, see [End of Support for Chatter Answers
          in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Available to Guest Users

37.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ZoneSearchPage searchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**zoneId**

Type: String

ID of a zone.

**q**

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.ZoneSearchResultType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ZoneSearchResultTypeEnum)

A `ZoneSearchResultType` enum value. One of the following:

-   `Article`—Search results contain only articles.
-   `Question`—Search results contain only questions.

#### Return Value

Type: `ConnectApi.ZoneSearchPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchInZone(communityId, zoneId, q, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectApi_Zones_setTestSearchInZone)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchInZone(communityId, zoneId, q, filter, pageParam, pageSize)

Search a page of articles or questions in a zone.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
        Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but
        support and updates are scheduled to end. We recommend transitioning to Chatter Questions.
        For more information, see [End of Support for Chatter Answers
          in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Available to Guest Users

37.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ZoneSearchPage searchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, String pageParam, Integer pageSize)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**zoneId**

Type: String

ID of a zone.

**q**

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.ZoneSearchResultType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ZoneSearchResultTypeEnum)

A `ZoneSearchResultType` enum value. One of the following:

-   `Article`—Search results contain only articles.
-   `Question`—Search results contain only questions.

**pageParam**

Type: String

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

#### Return Value

Type: `ConnectApi.ZoneSearchPage`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchInZone(communityId, zoneId, q, filter, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectApi_Zones_setTestSearchInZone_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### searchInZone(communityId, zoneId, q, filter, language)

Search articles or questions in a zone, and specify the language of the results.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
        Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but
        support and updates are scheduled to end. We recommend transitioning to Chatter Questions.
        For more information, see [End of Support for Chatter Answers
          in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

36.0

#### Available to Guest Users

37.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.ZoneSearchPage searchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, String language)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**zoneId**

Type: String

ID of a zone.

**q**

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.ZoneSearchResultType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectApi.ZoneSearchResultType-FCB0824A)

-   `Article`—Search results contain only articles.
-   `Question`—Search results contain only questions.

**language**

Type: String

The language of the articles or questions. The value must be a Salesforce supported locale code.

#### Return Value

Type: [`ConnectApi.ZoneSearchPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zoneSearchPage.htm#apex_connectapi_output_zoneSearchPage "Page of zone search results.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestSearchInZone(communityId, zoneId, q, filter, language, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_setTestSearchInZone_3)

## Zones Test Methods

These test methods are for `Zones`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestSearchInZone(communityId, zoneId, q, filter, result)

Register a `ConnectApi.ZoneSearchPage` object to be returned when `searchInZone(communityId, zoneId, q, filter)` is called in a test context. Use the method with the same parameters or you receive an exception.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
        Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but
        support and updates are scheduled to end. We recommend transitioning to Chatter Questions.
        For more information, see [End of Support for Chatter Answers
          in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Signature

`public static Void setTestSearchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, ConnectApi.ZoneSearchPage result)`

#### Parameters

**communityId**

Type: String

Use either the ID for an Experience Cloud site, `internal`, or `null`.

**zoneId**

Type: String

The ID of a zone.

**q**

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: `ConnectApi.ZoneSearchResultType`

A `ZoneSearchResultType` enum value. One of the following:

-   `Article`—Search results contain only articles.
-   `Question`—Search results contain only questions.

**result**

Type: `ConnectApi.ZoneSearchPage`

The object containing test data.

#### Return Value

Type: Void

## See Also

- [searchInZone(communityId, zoneId, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchInZone(communityId, zoneId, q, filter, pageParam, pageSize, result)

Register a `ConnectApi.ZoneSearchPage` object to be returned when `searchInZone(communityId, zoneId, q, filter, pageParam, pageSize)` is called in a test context. Use the method with the same parameters or you receive an exception.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
        Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but
        support and updates are scheduled to end. We recommend transitioning to Chatter Questions.
        For more information, see [End of Support for Chatter Answers
          in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

29.0

#### Signature

`public static Void setTestSearchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, String pageParam, Integer pageSize, ConnectApi.ZoneSearchPage result)`

#### Parameters

**communityId**

Type: String

Use either the ID for an Experience Cloud site, `internal`, or `null`.

**zoneId**

Type: String

The ID of a zone.

**q**

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

**filter**

Type: [`ConnectApi.ZoneSearchResultType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ZoneSearchResultTypeEnum)

A `ZoneSearchResultType` enum value. One of the following:

-   `Article`—Search results contain only articles.
-   `Question`—Search results contain only questions.

**pageParam**

Type: String

Specifies the page token to be used to view a page of information. Page tokens are returned as part of the response class, such as `currentPageToken` or `nextPageToken`. If you pass in `null`, the first page is returned.

**pageSize**

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default size is 25.

**result**

Type: `ConnectApi.ZoneSearchPage`

The object containing test data.

#### Return Value

Type: Void

## See Also

- [searchInZone(communityId, zoneId, q, filter, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestSearchInZone(communityId, zoneId, q, filter, language, result)

Register a `ConnectApi.ZoneSearchPage` object to be returned when `searchInZone(communityId, zoneId, q, filter, language)` is called in a test context. Use the method with the same parameters or you receive an exception.

:::tip Note
With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of
        Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but
        support and updates are scheduled to end. We recommend transitioning to Chatter Questions.
        For more information, see [End of Support for Chatter Answers
          in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18).
:::

#### API Version

36.0

#### Signature

`public static Void setTestSearchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, String language, ConnectApi.ZoneSearchPage result)`

#### Parameters

communityId

Type: String

Use either the ID for an Experience Cloud site, `internal`, or `null`.

zoneId

Type: String

The ID of a zone.

q

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

filter

Type: [`ConnectApi.ZoneSearchResultType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectApi.ZoneSearchResultType-FCB0824A)

-   `Article`—Search results contain only articles.
-   `Question`—Search results contain only questions.

language

Type: String

The language of the articles or questions. The value must be a Salesforce supported locale code. In an `<apex:page>`, the default value is the language of the page. Otherwise, the default value is the user's locale.

result

Type: [`ConnectApi.ZoneSearchPage`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zoneSearchPage.htm#apex_connectapi_output_zoneSearchPage "Page of zone search results.")

The object containing test data.

#### Return Value

Type: Void

## See Also

- [searchInZone(communityId, zoneId, q, filter, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
