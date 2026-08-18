---
doc_id: "apex_connectapi_output_survey_email"
---

# ConnectApi.SurveyInvitationEmailOutput

Survey invitation email.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errorCode` | Integer | Error code for the failed call. | 50.0 |
| `errorMessage` | String | Details explaining why the call failed. | 50.0 |
| `status` | [`ConnectApi.​SurveyEmailStatus​Enum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SurveyEmailStatusEnum) | Status of a survey invitation email. Values are:
-   `Failed`—The survey invitation email wasn't sent.
-   `Queued`—The survey invitation email is queued for sending.

 | 50.0 |
