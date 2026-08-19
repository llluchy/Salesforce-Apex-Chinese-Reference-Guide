---
doc_id: "apex_async_overview"
---

# Asynchronous Apex

Apex offers multiple ways for running your Apex code asynchronously. Choose the asynchronous Apex feature that best suits your needs.

This table lists the asynchronous Apex features and when to use each.

| Asynchronous Apex Feature | When to Use |
| --- | --- |
| [Queueable Apex](atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm "Take control of your asynchronous Apex processes by using the Queueable interface. Salesforce recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining.") | 
-   To start a long-running operation and get an ID for it
-   To pass complex types to a job
-   To chain jobs

 |
| [Scheduled Apex](atlas.en-us.apexcode.meta/apexcode/apex_scheduler.htm "Use the Apex Scheduler to delay execution so that you can run Apex classes at a specified time. This is ideal for daily or weekly maintenance tasks using Batch Apex.") | 

-   To schedule an Apex class to run on a specific schedule

 |
| [Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch.htm) | 

-   For long-running jobs with large data volumes that need to be performed in batches, such as database maintenance jobs
-   For jobs that need larger query results than regular transactions allow

 |
| [Future Methods](atlas.en-us.apexcode.meta/apexcode/apex_invoking_future_methods.htm "A future method runs asynchronously. You can call a future method to run long-running operations, such as callouts to external web services or any operation that you want to run in its own thread. You can also use future methods to isolate Data Manipulation Language (DML) operations on different sObject types to prevent the mixed DML error. Each future method is queued and runs when system resources become available. That way, the execution of your code doesn’t wait for the completion of a long-running operation. A benefit of future methods is that some governor limits are higher, such as SOQL query limits and heap size limits.") | 

-   When you have a long-running method and need to prevent delaying an Apex transaction
-   When you make callouts to external Web services
-   To segregate DML operations and bypass the mixed save DML error

 |

## See Also

- [Queueable Apex](atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm)
- [Apex Scheduler](atlas.en-us.apexcode.meta/apexcode/apex_scheduler.htm)
- [Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch.htm)
- [Future Methods](atlas.en-us.apexcode.meta/apexcode/apex_invoking_future_methods.htm)
- [Large Data Processing with Cursors and Queueable Apex Versus Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_cursors_versus_batch.htm)
- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
