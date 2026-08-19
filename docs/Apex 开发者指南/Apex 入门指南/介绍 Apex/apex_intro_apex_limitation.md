---
doc_id: "apex_intro_apex_limitations"
---

# Developing Code in the Cloud

The Apex programming language is saved and runs in the cloud—the multitenant platform. Apex is tailored for data access and data manipulation on the platform, and it enables you to add custom business logic to system events. While it provides many benefits for automating business processes on the platform, it is not a general purpose programming language.

Apex cannot be used to:

-   Render elements in the user interface other than error messages
-   Change standard functionality—Apex can only prevent the functionality from happening, or add additional functionality
-   Create temporary files
-   Spawn threads

:::tip Tip
All Apex code runs on the Lightning Platform, which is a shared resource used by all
                other organizations. To guarantee consistent performance and scalability, the
                execution of Apex is bound by governor limits that ensure no single Apex execution
                impacts the overall service of Salesforce. This means all Apex code is limited by
                the number of operations (such as DML or SOQL) that it can perform within one
                process. 

            All Apex requests return a collection that contains from 1 to 50,000 records. You
                cannot assume that your code only works on a single record at a time. Therefore, you
                must implement programming patterns that take bulk processing into account. If you
                don’t, you may run into the governor limits.
:::

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_intro_how_does_apex_work.htm)

#### See Also

-   [Trigger and Bulk Request Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bestpract.htm)
