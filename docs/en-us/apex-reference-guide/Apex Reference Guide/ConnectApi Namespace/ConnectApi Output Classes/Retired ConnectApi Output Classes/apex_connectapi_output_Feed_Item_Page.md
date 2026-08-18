---
doc_id: "apex_connectapi_output_Feed_Item_Page"
---

# ConnectApi.FeedItemPage

A paged collection of `ConnectApi.FeedItem` objects.

:::tip Important
This class isn’t available in version 32.0 and later. In version 32.0
        and later, [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm) is used.
:::

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `currentPageToken` | String | Token identifying the current page. | 28.0–31.0 |
| `currentPageUrl` | String | Connect REST API URL identifying the current page. | 28.0–31.0 |
| `isModifiedToken` | String | Opaque polling token to use in the since parameter of the `ChatterFeeds.isModified` method. The token describes when the feed was last modified. **Important:** This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | 28.0–31.0 |
| `isModifiedUrl` | String | Connect REST API URL with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns `null` if the feed isn’t a news feed. Use this URL to poll a news feed for updates. **Important:** This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | 28.0–31.0 |
| `items` | `List<ConnectApi.FeedItem>` | List of feed items | 28.0–31.0 |
| `nextPageToken` | String | Token identifying the next page, or `null` if there isn’t a next page. | 28.0–31.0 |
| `nextPageUrl` | String | Connect REST API URL identifying the next page, or `null` if there isn’t a next page. | 28.0–31.0 |
| `updatesToken` | String | Token to use in an `updatedSince` parameter, or `null` if not available. | 30.0–31.0 |
| `updatesUrl` | String | A Connect REST API resource with a query string containing the value of the `updatesToken` property. The resource returns the feed items that have been updated since the last request. Use the URL as it is—do not modify it. Property is `null` if not available. | 30.0–31.0 |
