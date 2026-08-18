---
doc_id: "apex_connectapi_input_activation_contact_point"
---

# ConnectApi.ActivationContactPointInput

Represents the activation contact point input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `attributesConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.ContactPointAttributeInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contact_point_attribute.htm "Represents the attribute of an activation contact point.") | Attributes for the contact point. |  | 60.0 |
| `entityName` | String | Entity name for the contact point. |  | 60.0 |
| `externalPlatformHashMethod` | String | External platform hash method for the contact point. |  | 60.0 |
| `filterExpression` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.DMOFilterInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_d_m_o_filter.htm "Represents the DMO filter input.") | Filter expression for the contact point. |  | 60.0 |
| `queryPathConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.QueryPathInputConfig`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm "Represents the query path configuration input.") | Query path configuration list. |  | 60.0 |
| `sourcesConfig` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")< [`ConnectApi.ContactPointSourceInput`\>](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contact_point_source.htm "Represents the configuration input for contact point sources.") | Source configurations for the contact point. |  | 60.0 |
| `type` | [`ContactPointTypeRepresentationEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContactPointTypeRepresentationEnum) | Type of contact point.
-   `Email`
-   `Maid`
-   `Ott`
-   `Phone`
-   `Push`
-   `Subscriber_Key_Email`
-   `Subscriber_Key_Phone`
-   `WhatsApp`

 |  | 60.0 |
