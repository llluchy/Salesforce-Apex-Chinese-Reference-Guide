---
doc_id: "apex_connectapi_output_group_membership_request"
---

# ConnectApi.GroupMembershipRequest

Request to become a group member.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `createdDate` | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 28.0 |
| `id` | String | ID for the group membership request object. | 28.0 |
| `lastUpdateDate` | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 28.0 |
| `requestedGroup` | `ConnectApi.​​Reference` | Information about the group the context user is requesting to join. | 28.0 |
| `responseMessage` | String | A message for the user if their membership request is declined. The value of this property is used only when the value of the `status` property is `Declined`.
The maximum length is 756 characters.

 | 28.0 |
| `status` | `ConnectApi.​GroupMembership​RequestStatus` Enum | Status of a request to join a private group. Values are:

-   `Accepted`
-   `Declined`
-   `Pending`

 | 28.0 |
| `url` | String | URL of the group membership request object. | 28.0 |
| `user` | `ConnectApi.​User​Summary` | Information about the user requesting membership in a group. | 28.0 |

## See Also

- [ConnectApi.GroupMembershipRequests](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_requests.htm)
