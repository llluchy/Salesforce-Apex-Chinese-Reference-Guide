---
doc_id: "apex_ConnectAPI_CdpConnection_static_methods"
---

# CdpConnection Class

Get database schemas for a Data 360 connection.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpConnection Methods

These methods are for `CdpConnection`. All methods are static.

## See Also

- [getDatabaseSchemas(connectionId, getDatabaseSchemasInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpConnection_static_methods.htm#apex_ConnectAPI_CdpConnection_getDatabaseSchemas_1)

### getDatabaseSchemas(connectionId, getDatabaseSchemasInput)

Get a list of database schemas for a connection.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ConnectionDbSchemaCollection getDatabaseSchemas(String connectionId, ConnectApi.ConnectionDbSchemaCollectionInputRepresentation getDatabaseSchemasInput)`

#### Parameters

connectionId

Type: String

ID for the connection.

getDatabaseSchemasInput

Type: [`ConnectApi.ConnectionDbSchemaCollectionInputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_connection_db_schema_collection.htm "Represents the input for a database schema collection.")

Input representation for a database schema collection.

#### Return Value

Type: [`ConnectApi.ConnectionDbSchemaCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_connection_db_schema_collection.htm "Represents a collection of database schemas.")
