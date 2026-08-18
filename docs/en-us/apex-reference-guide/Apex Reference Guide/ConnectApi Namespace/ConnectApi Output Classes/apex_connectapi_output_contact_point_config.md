---
doc_id: "apex_connectapi_output_contact_point_config"
---

# ConnectApi.ContactPointConfig

Represents an activation contact point configuration output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `activationContactPointFieldConfig` | [`ConnectApi.ActivationContactPointsFieldConfig`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_contact_points_field_config.htm "Represents the activation contact points field configuration output.") | Contact point field configurations. | 60.0 |
| `activationContactPointSourcesConfig` | [`ConnectApi.ActivationContactPointsSourceConfig`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_contact_points_source_config.htm "Represents the activation contact points source configuration output.") | Contact point source configurations. | 60.0 |
| `contactPointFilterExpression` | [`ConnectApi.ContactPointFilterExpression`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_contact_point_filter_expression.htm "Represents an activation contact point filter expression output.") | Contact point filter expression. | 60.0 |
| `contactPointPath` | String | Contact point path. | 60.0 |
| `contactPointType` | [`ContactPointTypeRepresentationEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContactPointTypeRepresentationEnum) | Type of contact point.
-   `Email`
-   `Maid`
-   `Ott`
-   `Phone`
-   `Push`
-   `Subscriber_Key_Email`
-   `Subscriber_Key_Phone`
-   `WhatsApp`

 | 60.0 |
| `entityId` | String | ID of the entity. | 60.0 |
| `entityName` | String | Name of the entity. | 60.0 |
| `queryPathConfigList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​QueryPathConfigList`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm "Represents a list of query path configurations.")\> | List of query path configurations. | 60.0 |
