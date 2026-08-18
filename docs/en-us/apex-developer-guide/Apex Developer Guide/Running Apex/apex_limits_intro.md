---
doc_id: "apex_limits_intro"
---

# Apex Transactions and Governor Limits

Apex Transactions ensure the integrity of data. Apex code runs as part of atomic transactions. Governor execution limits ensure the efficient use of resources on the Lightning Platform multitenant platform.

Most of the governor limits are per transaction, and some aren’t, such as 24-hour limits.

To make sure Apex adheres to governor limits, certain design patterns should be used, such as bulk calls and foreign key relationships in queries.

## See Also

- [Apex Transactions](atlas.en-us.apexcode.meta/apexcode/apex_transaction.htm)
- [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- [Elastic Limits for Asynchronous Apex Jobs (Beta)](atlas.en-us.apexcode.meta/apexcode/apex_limits_elastic_limits.htm)
- [Set Up Governor Limit Email Warnings](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits_emails.htm)
- [Running Apex within Governor Execution Limits](atlas.en-us.apexcode.meta/apexcode/apex_limits_tips.htm)
