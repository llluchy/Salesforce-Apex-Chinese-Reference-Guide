---
doc_id: "apex_connectapi_input_activity_sharing"
---

# ConnectApi.ActivitySharingInput

Defines who a captured email or event is shared with.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `groupsTo​ShareWith` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | List of IDs for the groups that you share the activity with. Valid only if `sharingType` is `MyGroups`. | Optional | 39.0 |
| `sharingType` | [`ConnectApi.​Activity​SharingType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ActivitySharingTypeEnum) | Type of sharing operation. Values are:
-   `Everyone`—The activity is shared with everyone.
-   `MyGroups`—The activity is shared only with a selection of the context user’s groups.
-   `OnlyMe`—The activity is private.

 | Required | 39.0 |
