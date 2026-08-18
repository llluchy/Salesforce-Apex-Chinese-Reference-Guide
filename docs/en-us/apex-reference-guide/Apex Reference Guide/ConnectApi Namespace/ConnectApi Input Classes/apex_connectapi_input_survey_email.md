---
doc_id: "apex_connectapi_input_survey_email"
---

# ConnectApi.SurveyInvitationEmailInput

Survey invitation email.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `allowGuest​UserResponse` | Boolean | Specifies whether participants who don't have a Salesforce account can respond (`true`) or not (`false`). | Required | 50.0 |
| `allowParticipants​AccessTheirResponse` | Boolean | Specifies whether participants can see their responses (`true`) or not (`false`). | Required | 50.0 |
| `associateRecords​WithRecipients` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​AssociateRecordsWith​RecipientInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_recipient_survey_subjects.htm "Records associated with the survey invitation.")\> | Maps each recipient with another record that must be associated with the recipient's survey invitation. | Optional | 50.0 |
| `body` | String | Content of the email. Specify the email body in case you don't specify an email template. The email body must contain one of these merge fields:
-   To embed a link to launch the survey: \[\[SURVEY\_INVITATION\_URL\]\]
-   To embed a survey question: {{{SurveyQuestion.QuestionName}}} and {{{SurveyQuestion.QuestionHtmlContent}}}

 | Optional | 50.0 |
| `collectAnonymous​Response` | Boolean | Specifies whether participants can respond anonymously (`true`) or not (`false`). | Required | 50.0 |
| `communityId` | String | ID of the site that's used to open the survey for users outside your org. | Optional | 50.0 |
| `emailTemplateId` | String | ID of the Lightning email template that's used to send the survey invitation. The template must contain the required merge fields that embed either the survey link or a question in the email. Only Lightning email templates are used to send survey invitations. | Optional | 50.0 |
| `fromEmailAddress` | String | Email ID of the user or the org-wide email address associated with the user's profile. | Required | 50.0 |
| `invitation​ExpirationDate` | Datetime | Date on which the survey invitation expires. | Optional | 50.0 |
| `invitationOwner` | String | ID of the owner of the survey invitation records. | Optional | 50.0 |
| `isPersonal​Invitation` | Boolean | Specifies whether a unique invitation is created for each participant (`true`) or not (`false`). When a participant responds using a personal invitation, the response record is associated with the participant's Salesforce record. | Required | 50.0 |
| `recipient​Engagement​Contexts` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​RecipientEngagement​ContextInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_recipient_engagement_context.htm "Context based on which the survey invitation is sent to a participant.")\> | Maps each recipient with the context based on which the survey invitation is emailed. | Optional | 50.0 |
| `recipients` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | List of up to 300 IDs of leads, contacts, or users to whom the survey invitation is emailed. | Required | 50.0 |
| `sendEmail​ThroughUma` | Boolean | Specifies whether to send the email through Marketing Cloud (`true`) or not (`false`). If unspecified, defaults to `false`. | Optional | 65.0 |
| `shareInvitations​With` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | IDs of the users with whom the survey invitation records must be shared. The invitation records are shared with Read access. | Optional | 50.0 |
| `subject` | String | Subject of the email. Specify the subject in case you don't specify an email template. | Optional | 50.0 |
| `surveyQuestion​Ids` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String> | IDs of the questions that are embedded in the email. You can send an email invitation for questions of these types: Net Promoter Score (NPS), rating, and score. | Optional | 50.0 |
