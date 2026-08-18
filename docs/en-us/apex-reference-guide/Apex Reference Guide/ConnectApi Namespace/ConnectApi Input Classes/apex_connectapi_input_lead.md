---
doc_id: "apex_connectapi_input_lead"
---

# ConnectApi.LeadInput

Contains information about a lead or guest user.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `company` | String | The company of the lead. | Optional | 53.0 |
| `email` | String | The email address of the lead. | Optional | 53.0 |
| `extendedFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.ExtendedFieldInput`\> | Use to add values to any of the fields, including custom fields. | Optional | 53.0 |
| `firstName` | String | The first name of the lead. | Optional | 53.0 |
| `lastName` | String | The last name of the lead. | Optional | 53.0 |
| `phone` | String | The phone number of the lead. | Optional | 53.0 |
