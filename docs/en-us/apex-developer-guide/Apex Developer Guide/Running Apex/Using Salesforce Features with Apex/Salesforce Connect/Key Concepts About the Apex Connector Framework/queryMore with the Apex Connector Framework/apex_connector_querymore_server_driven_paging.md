---
doc_id: "apex_connector_querymore_server_driven_paging"
---

# Support queryMore by Using Server-Driven Paging by Using Server-Driven Paging

With server-driven paging, the external system controls the paging and ignores any batch boundaries or page sizes that are specified in queries. To enable server-driven paging, declare the `QUERY_PAGINATION_SERVER_DRIVEN` capability in your `DataSource.Provider` class.

When the returned `DataSource.TableResult` doesn’t contain the entire result set, the `TableResult` must provide a `queryMoreToken` value. The query token is an arbitrary string that we store temporarily. When we request the next batch of results, we pass the query token back to your custom adapter in the `DataSource.QueryContext`. Your Apex code must use that query token to determine which rows belong to the next batch of results.

When your custom adapter returns the final batch, it must not return a `queryMoreToken` value in the `TableResult`.

The Apex Connector Framework doesn't support server-driven pagination for list views.

## See Also

- [queryMore with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm)
