---
doc_id: "apex_connectapi_input_assigned_resource"
---

# ConnectApi.AssignedResourcesInput

Contains information about assigned resources for a service appointment.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `extendedFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ExtendedFieldInput`\> | Use to add values to any of the fields, including custom fields. | Optional | 53.0 |
| `isPrimaryResource` | Boolean | Indicates whether an assigned resource is a primary resource. For multi-resource appointments, only one resource can be a primary resource. | Optional | 53.0 |
| `isRequiredResource` | Boolean | Indicates whether an assigned resource is a required resource. | Optional | 53.0 |
| `serviceResourceId` | String | The ID of the service resource assigned to the service appointment. | Optional | 53.0 |
