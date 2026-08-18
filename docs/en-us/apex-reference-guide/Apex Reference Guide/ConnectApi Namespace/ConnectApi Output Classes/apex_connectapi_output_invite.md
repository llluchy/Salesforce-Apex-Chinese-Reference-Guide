---
doc_id: "apex_connectapi_output_invite"
---

# ConnectApi.Invitation

An invitation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `email` | String | Email address of the user. | 39.0 |
| `status` | [`ConnectApi.​GroupViral​InvitationsStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupViralInvitationStatusEnum) | Specifies the status of an invitation to join a group. Values are:
-   `ActedUponUser`—The user was added to the group. An email was sent asking the user to visit the group.
-   `Invited`—An email was sent asking the user to sign up for the org.
-   `MaxedOutUsers`—The group has the maximum allowed members.
-   `MultipleError`—The user wasn’t invited due to multiple errors.
-   `NoActionNeededUser`—The user is already a member of the group.
-   `NotVisibleToExternalInviter`—The user is not accessible to the user sending the invitation.
-   `Unhandled`—The user couldn’t be added to the group for an unknown reason.

 | 39.0 |
| `userId` | String | ID of the user. | 39.0 |

## See Also

- [ConnectApi.Invitations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_invite_collection.htm)
