---
doc_id: "apex_connectapi_output_user_capabilities"
---

# ConnectApi.UserCapabilities

Capabilities associated with a user profile.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `canChat` | Boolean | Specifies if the context user can use Chatter Messenger with the subject user (`true`) or not (`false`) | 29.0 |
| `canDirectMessage` | Boolean | Specifies if the context user can direct message the subject user (`true`) or not (`false`) | 29.0 |
| `canEdit` | Boolean | Specifies if the context user can edit the subject user’s account (`true`) or not (`false`) | 29.0 |
| `canFollow` | Boolean | Specifies if the context user can follow the subject user’s feed (`true`) or not (`false`) | 29.0 |
| `canViewFeed` | Boolean | Specifies if the context user can view the feed of the subject user (`true`) or not (`false`) | 29.0 |
| `canViewFullProfile` | Boolean | Specifies if the context user can view the full profile of the subject user (`true`) or only the limited profile (`false`) | 29.0 |
| `isModerator` | Boolean | Specifies if the subject user is a Chatter moderator or admin (`true`) or not (`false`) | 29.0 |

## See Also

- [ConnectApi.UserProfile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile.htm)
