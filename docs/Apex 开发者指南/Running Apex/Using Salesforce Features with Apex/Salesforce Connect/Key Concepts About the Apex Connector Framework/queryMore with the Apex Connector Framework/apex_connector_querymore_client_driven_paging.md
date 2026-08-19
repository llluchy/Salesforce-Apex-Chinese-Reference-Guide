---
doc_id: "apex_connector_querymore_client_driven_paging"
---

# Support queryMore by Using Client-Driven Paging

With client-driven paging, you use `LIMIT` and `OFFSET` clauses to page through result sets.

If the external system can return the total size of the result set for each query, declare the `QUERY_TOTAL_SIZE` capability in your `DataSource.Provider` class. Make sure that each search or query returns the `totalSize` value in the `DataSource.TableResult`. If the total size is larger than the number of rows that are returned in the batch, we generate a `nextRecordsUrl` link and set the `done` flag to `false`. We also set the `totalSize` in the `TableResult` to the value that you supply.

If the external system can’t return the total size for each query, don’t declare the `QUERY_TOTAL_SIZE` capability in your `DataSource.Provider` class. Whenever we do a query through your custom adapter, we ask for one extra row. For example, if you run the query `SELECT ExternalId FROM Sample LIMIT 5`, we call the `query` method on the `DataSource.Connection` object with a `DataSource.QueryContext` that has the `maxResults` property set to 6. The presence or absence of that sixth row in the result set indicates whether more data is available. We assume, however, that the data set we query against doesn’t change between queries. If the data set changes between queries, you might see repeated rows or not get all results.

Ultimately, accessing external data works most efficiently when you retrieve small amounts of data and the data set that you query against changes infrequently.

## See Also

- [queryMore with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm)
