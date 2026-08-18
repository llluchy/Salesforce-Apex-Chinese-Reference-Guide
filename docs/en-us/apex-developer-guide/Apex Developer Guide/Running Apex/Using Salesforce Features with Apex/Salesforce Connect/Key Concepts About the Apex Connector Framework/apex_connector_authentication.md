---
doc_id: "apex_connector_authentication"
---

# Authentication for Salesforce Connect Custom Adapters

Your `DataSource.Provider` class declares what types of credentials can be used to authenticate to the external system.

If your extension of the [`DataSource.Provider`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_DataSource_Provider.htm) class returns [`DataSource.AuthenticationCapability`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_enum_DataSource_AuthenticationCapability.htm) values that indicate support for authentication, the [`DataSource.Connection`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_DataSource_Connection.htm) class is instantiated with a [`DataSource.ConnectionParams`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm) instance in the constructor.

The authentication credentials in the `DataSource.ConnectionParams` instance depend on the Identity Type field of the external data source definition in Salesforce.

-   If Identity Type is set to `Named Principal`, the credentials come from the external data source definition.
-   If Identity Type is set to `Per User`:
    -   For queries and searches, the credentials are specific to the current user who invokes the query or search. The credentials come from the user’s authentication settings for the external system.
    -   For administrative connections, such as syncing the external system’s schema, the credentials come from the external data source definition.

## See Also

- [OAuth for Salesforce Connect Custom Adapters](atlas.en-us.apexcode.meta/apexcode/apex_connector_oauth.htm)
- [OAuth for Salesforce Connect Custom Adapters](atlas.en-us.apexcode.meta/apexcode/apex_connector_oauth.htm)
