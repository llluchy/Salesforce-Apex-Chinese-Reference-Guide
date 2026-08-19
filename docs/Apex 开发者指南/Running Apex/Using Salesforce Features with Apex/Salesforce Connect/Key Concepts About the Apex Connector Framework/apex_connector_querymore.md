---
doc_id: "apex_connector_querymore"
---

# queryMore with the Apex Connector Framework

Custom adapters for Salesforce Connect don’t automatically support the `queryMore` method in API queries. However, your implementation must be able to break up large result sets into batches and iterate over them by using the `queryMore` method in the SOAP API. The default batch size is 500 records, but the query developer can adjust that value programmatically in the query call.

To support `queryMore`, your implementation must indicate whether more data exists than what’s in the current batch. When the Lightning Platform knows that more data exists, your API queries return a `QueryResult` object that’s similar to the following.

```plain
{
         "totalSize" => -1,
              "done" => false,
    "nextRecordsUrl" => "/services/data/v32.0/query/01gxx000000B5OgAAK-2000",
           "records" => [
        [   0] {
            "attributes" => {
                "type" => "Sample__x",
                 "url" => 
                     "/services/data/v32.0/sobjects/Sample__x/x06xx0000000001AAA"
            },
            "ExternalId" => "id0"
        },
        [   1] {
            "attributes" => {
                "type" => "Sample__x",
                 "url" => 
                     "/services/data/v32.0/sobjects/Sample__x/x06xx0000000002AAA"
            },
…
}
```

## See Also

- [Support queryMore by Using Server-Driven Paging by Using Server-Driven Paging](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore_server_driven_paging.htm)
- [Support queryMore by Using Client-Driven Paging](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore_client_driven_paging.htm)
