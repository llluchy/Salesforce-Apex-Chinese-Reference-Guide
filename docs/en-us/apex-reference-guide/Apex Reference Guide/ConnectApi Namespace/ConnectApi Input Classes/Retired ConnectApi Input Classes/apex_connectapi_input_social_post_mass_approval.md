---
doc_id: "apex_connectapi_input_social_post_mass_approval"
---

# ConnectApi.SocialPostMassApprovalInput

List of social post ids and the action to approve or reject publishing them.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `isApproved` | Boolean | Specifies whether to approve (`true`) or reject (`false`) publishing the social posts. If unspecified, defaults to `false`. | Optional | 46.0 |
| `socialPost​IdList` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | A list of up to 200 social post IDs. | Required | 46.0 |
