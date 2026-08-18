---
doc_id: "apex_connector_start_setup"
---

# Set Up Salesforce Connect to Use Your Custom Adapter

After you create your `DataSource.Connection` and `DataSource.Provider` classes, the Salesforce Connect custom adapter becomes available in Setup.

Complete the tasks that are described in “[Set Up Salesforce Connect to Access External Data with a Custom Adapter](https://help.salesforce.com/apex/HTViewHelpDoc?id=apex_adapter_setup.htm&language=en_US "HTML (New Window)")” in the Salesforce Help.

To add write capability for external objects to your adapter:

1.  Make the external data source for this adapter writable. See “[Define an External Data Source for Salesforce Connect—Custom Adapter](https://help.salesforce.com/articleView?id=apex_add_external_data_source.htm&language=en_US "HTML (New Window)")” in the Salesforce Help.
2.  Implement the `DataSource.Connection.upsertRows()` and `DataSource.Connection.deleteRows()` methods for the adapter. For details, see [Connection Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_DataSource_Connection.htm).

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_provider_class.htm)
