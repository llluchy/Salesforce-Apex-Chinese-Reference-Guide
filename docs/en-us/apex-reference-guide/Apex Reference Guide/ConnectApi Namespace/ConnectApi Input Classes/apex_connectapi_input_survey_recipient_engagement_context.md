---
doc_id: "apex_connectapi_input_survey_recipient_engagement_context"
---

# ConnectApi.RecipientEngagementContextInput

Context based on which the survey invitation is sent to a participant.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `recipient​Engagement​Context` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, String> | Map each recipient with the context based on which the survey invitation is emailed. | Required | 50.0 |
| `recipientId` | String | Participant ID with whom the engagement context should be associated. | Required | 50.0 |

## See Also

- [ConnectApi.SurveyInvitationEmailInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm)
