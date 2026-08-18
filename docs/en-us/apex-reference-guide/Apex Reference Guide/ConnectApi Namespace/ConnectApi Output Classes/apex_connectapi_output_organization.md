---
doc_id: "apex_connectapi_output_organization"
---

# ConnectApi.OrganizationSettings

Org settings.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `accessTimeout` | Integer | Amount of time after which the system prompts users who have been inactive to log out or continue working. | 28.0 |
| `features` | `ConnectApi.Features` | Information about features available in the org. | 28.0 |
| `maintenanceInfo` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.MaintenanceInfo`\> | Information about a list of upcoming scheduled maintenances for the org. | 34.0 |
| `name` | String | Org name. | 28.0 |
| `orgId` | String | 18-character ID for the org. | 28.0 |
| `userSettings` | `ConnectApi.UserSettings` | Information about the org permissions for the user. | 28.0 |
