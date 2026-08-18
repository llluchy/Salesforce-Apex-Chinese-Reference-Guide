---
doc_id: "apex_connectapi_output_user_profile"
---

# ConnectApi.UserProfile

Details necessary to render a view of a user profile.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `capabilities` | `ConnectApi.UserCapabilities` | The context user’s capabilities specific to the subject user’s profile. | 29.0 |
| `id` | String | The ID of the user attached to the profile. | 29.0 |
| `tabs` | `List<ConnectApi.UserProfileTab>` | The tabs visible to the context user specific to the subject user’s profile. | 29.0 |
| `url` | String | The URL of the user’s profile. | 29.0 |
| `userDetail` | `ConnectApi.UserDetail` | The details about the user attached to the profile. | 29.0 |
