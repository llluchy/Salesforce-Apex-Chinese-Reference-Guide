---
doc_id: "apex_connectapi_input_custom_list_audience_criteria"
---

# ConnectApi.CustomListAudienceCriteriaInput

Criteria for the custom list type of custom recommendation audience.

Subclass of [ConnectApi.AudienceCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criteria.htm "Custom recommendation audience criteria type.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `member​OperationType` | [`ConnectApi.​Recommendation​AudienceMember​OperationType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationAudienceMemberOperationType) | The operation to carry out on the audience members. Values are:
-   `Add`—Adds specified members to the audience.
-   `Remove`—Removes specified members from the audience.

 | Required to update a recommendation audience

Don’t use or specify `null` to create a recommendation audience

 | 36.0 |
| `members` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | A collection of user IDs.

When updating an audience, you can include up to 100 members. An audience can have up to 100,000 members, and each Experience Cloud site can have up to 100 audiences.

 | Required to update a recommendation audience

Don’t use or specify `null` to create a recommendation audience

 | 36.0 |
