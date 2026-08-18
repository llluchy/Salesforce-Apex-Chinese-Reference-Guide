---
doc_id: "apex_connector_external_id"
---

# External IDs for Salesforce Connect External Objects

When you access external data with a custom adapter for Salesforce Connect, the values of the External ID standard field on an external object come from the `DataSource.Column` named `ExternalId`.

Each external object has an External ID standard field. Its values uniquely identify each external object record in your org. When the external object is the parent in an external lookup relationship, the External ID standard field is used to identify the child records.

:::tip Important
- The custom adapter’s Apex code must declare the `DataSource.Column` named `ExternalId` and provide its values.

                - 
Don’t use sensitive data as the values of the
                        External ID standard field or fields designated as name fields, because
                        Salesforce sometimes stores those values.
                        External lookup
                                relationship fields on child records store and display the External
                                ID values of the parent records.

                        - 
For
                                internal use only, Salesforce stores the External ID value of each
                                row that’s retrieved from the external system.
                            This behavior doesn’t
                                apply to external objects that are associated with high-data-volume
                                external data sources.
:::

## Example

This excerpt from a sample `DataSource.Connection` class shows the `DataSource.Column` named `ExternalId`.

```apex
override global List sync() {
        List tables =
        new List();
    List columns;
    columns = new List();
    columns.add(DataSource.Column.text('title', 255));
    columns.add(DataSource.Column.text('description',255));
    columns.add(DataSource.Column.text('createdDate',255));
    columns.add(DataSource.Column.text('modifiedDate',255));
    columns.add(DataSource.Column.url('selfLink'));
    columns.add(DataSource.Column.url('DisplayUrl'));
    columns.add(DataSource.Column.text('ExternalId',255));
    tables.add(DataSource.Table.get('googleDrive','title',
        columns));
    return tables;
    }
```

## See Also

- [Apex Reference Guide: Column Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_DataSource_Column.htm)
