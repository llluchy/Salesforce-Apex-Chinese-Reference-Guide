---
doc_id: "apex_connectapi_output_user_mission_activities_job"
---

# ConnectApi.UserMissionActivitiesJob

User mission activities job.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `jobToken` | String | Token that identifies the mission user activities job. | 45.0 |
| `jobType` | String | Type of user activities job, either `export` or `purge`. | 45.0 |
| `message` | String | Message describing the status and expected outcome of the job.
When the job completes, you receive an email with information about the Salesforce file that contains `ConnectApi.UserMissionActivityCollection`.

 | 45.0 |
