---
doc_id: "apex_ConnectAPI_Survey_static_methods"
---

# Surveys Class

Send survey invitations by email.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Surveys Methods

These methods are for `Surveys`. All methods are static.

## See Also

- [sendSurveyInvitationEmail(surveyID, SurveyEmailInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Survey_static_methods.htm#apex_ConnectAPI_Surveys_sendSurveyInvitationEmail_1)

### sendSurveyInvitationEmail(surveyID, SurveyEmailInput)

Email survey invitations to up to 300 participants. You can email either leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.SurveyInvitationEmailOutput sendSurveyInvitationEmail(String surveyID, ConnectApi.SurveyInvitationEmailInput SurveyEmailInput)`

#### Parameters

surveyID

Type: String

ID of the survey.

SurveyEmailInput

Type: [`ConnectApi.SurveyInvitationEmailInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm "Survey invitation email.")

A `ConnectApi.SurveyInvitationEmailInput` object.

#### Return Value

Type: [`ConnectApi.SurveyInvitationEmailOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_survey_email.htm "Survey invitation email.")
