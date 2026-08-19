---
doc_id: "apex_cursors_versus_batch"
---

# Large Data Processing with Cursors and Queueable Apex Versus Batch Apex

Apex Cursors combined with chained Queueable Apex jobs are a powerful alternative to Batch Apex for processing large volumes of records. Cursors provide the record-traversal capabilities of Batch Apex, but offer greater flexibility in handling parallel jobs. With Batch Apex, only five active Batch Apex jobs are allowed at one time in your org. Jobs beyond this limit are placed in the Flex Queue, which is limited to 100 additional jobs. In orgs with high volumes of background processing, jobs can accumulate in the Flex Queue and delay critical work.

With Apex Cursors, you create a pointer to a large SOQL query result set of up to 50 million rows. The cursor can traverse the result set in chunks across multiple transactions. If you combine a Cursor with a chained Queueable job, each execution processes one or more chunks of records and then re-enqueues itself to handle the next chunk, until all records are processed. This approach has two key advantages over Batch Apex:

-   No parallel batch slot consumption. A chained Queueable job chain counts as a single logical process. It doesn’t consume Batch Apex slots or accumulate in the Flex Queue.
-   Flexibility at scale. Queueable jobs with Cursors can scale the chunk size to adapt to different processing requirements for individual records.

For a sample implementation, see [Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_cursors.htm).

:::tip Note
Apex Cursors and Batch Apex query locators (`Database.getQueryLocator()`) both establish a fixed set of resulting
                record IDs when they’re created. Subsequent record updates don’t affect the existing
                set of record IDs. For example, if an object field is updated such that the record
                no longer meets the initial `WHERE` clause of
                the SOQL query, the record ID remains in the result set. Similarly, subsequent
                changes to record sharing rules don’t alter the result set.
:::

## Cursors and Queueables Versus Batch Apex

<table class="featureTable sort_table" summary=""><tbody class="tbody"><tr><td class="entry">Detail</td><td class="entry"><strong class="ph b">Batch Apex</strong></td><td class="entry"><strong class="ph b">Cursors+Queueable</strong></td></tr><tr><td class="entry">Parallel Batch Slot Usage</td><td class="entry">Yes. Counts against the 5-job limit.</td><td class="entry">No</td></tr><tr><td class="entry">Flex Queue Contention</td><td class="entry">Yes</td><td class="entry">No</td></tr><tr><td class="entry">Execution Model</td><td class="entry">Ordered and sequential with a fixed scope size</td><td class="entry">Developer-defined order, sequence, and fetch size</td></tr><tr><td class="entry">Error Isolation</td><td class="entry">Per Batch chunk</td><td class="entry">Transaction Finalizer Per Queueable transaction via a Transaction Finalizer</td></tr></tbody></table>

## See Also

- [Apex Developer Guide: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_queueing_jobs.htm)

-   [*Apex Developer Guide:* Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_cursors.htm "Apex Developer Guide: Apex Cursors - HTML (New Window)")
    
-   [*Apex Developer Guide:* Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_batch.htm "Apex Developer Guide: Batch Apex - HTML (New Window)")
    
-   [*Salesforce Architecture Center:* Asynchronous Processing](https://architect.salesforce.com/docs/architect/decision-guides/guide/async-processing.html "Salesforce Architecture Center: Asynchronous Processing - HTML (New Window)")
