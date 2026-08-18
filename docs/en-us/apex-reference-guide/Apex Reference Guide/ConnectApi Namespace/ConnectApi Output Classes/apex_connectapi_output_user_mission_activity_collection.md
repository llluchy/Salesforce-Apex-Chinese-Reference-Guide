---
doc_id: "apex_connectapi_output_user_mission_activity_collection"
---

# ConnectApi.UserMissionActivityCollection

List of mission activities for a user.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `community` | [`ConnectApi.​CommunitySummary`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_community_summary.htm "Summary of an Experience Cloud site.") | Experience Cloud site in which the user performed activities. | 45.0 |
| `userId` | String | ID of the user. | 45.0 |
| `userMission​Activities` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AbstractUser​MissionActivity`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_user_mission_activity.htm "User activity associated with missions.")\> | List of mission activities performed by the user. | 45.0 |
| `userName` | String | Name of the user. | 45.0 |

## See Also

- [ConnectApi.UserMissionActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm)
