---
doc_id: "apex_testing_data"
---

# Understanding Test Data

Apex test data is transient and isn’t committed to the database.

This means that after a test method finishes execution, the data inserted by the test doesn’t persist in the database. As a result, there is no need to delete any test data at the conclusion of a test. Likewise, all the changes to existing records, such as updates or deletions, don’t persist. This transient behavior of test data makes the management of data easier as you don’t have to perform any test data cleanup. At the same time, if your tests access organization data, this prevents accidental deletions or modifications to existing records.

By default, existing organization data isn’t visible to test methods, with the exception of certain setup objects. You should create test data for your test methods whenever possible. However, test code saved against Salesforce API version 23.0 or earlier has access to all data in the organization. Data visibility for tests is covered in more detail in the next section.

## See Also

- [Isolation of Test Data from Organization Data in Unit Tests](atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm)
- [Using the isTest(SeeAllData=True) Annotation](atlas.en-us.apexcode.meta/apexcode/apex_testing_seealldata_using.htm)
- [Loading Test Data](atlas.en-us.apexcode.meta/apexcode/apex_testing_load_data.htm)
- [Common Test Utility Classes for Test Data Creation](atlas.en-us.apexcode.meta/apexcode/apex_testing_utility_classes.htm)
- [Using Test Setup Methods](atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm)
