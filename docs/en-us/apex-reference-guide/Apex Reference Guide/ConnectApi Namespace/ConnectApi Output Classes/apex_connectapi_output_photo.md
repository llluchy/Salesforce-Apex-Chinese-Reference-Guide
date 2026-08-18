---
doc_id: "apex_connectapi_output_photo"
---

# ConnectApi.Photo

Profile photo.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `fullEmailPhotoUrl` | String | A temporary URL to the large profile picture. The URL expires after 30 days and is available to unauthenticated users. | 28.0 |
| `largePhotoUrl` | String | URL to the large profile picture. The default width is 200 pixels, and the height is scaled so the original image proportions are maintained.
If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org.

 | 28.0 |
| `mediumPhotoUrl` | String | URL to the medium profile picture. The default width is 160 pixels, and the height is scaled so the original image proportions are maintained.

If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org.

 | 37.0 |
| `photoVersionId` | String | 18–character ID to that version of the photo | 28.0 |
| `smallPhotoUrl` | String | URL to the small profile picture. The default size is 64x64 pixels.

If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org.

 | 28.0 |
| `standardEmail​PhotoUrl` | String | A temporary URL to the small profile. The URL expires after 30 days and is available to unauthenticated users. | 28.0 |
| `url` | String | A resource that returns a Photo object: for example, `/services/data/v67.0/chatter/users/005D0000001LL8OIAW/photo`. | 28.0 |

## See Also

- [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm)

-   [ConnectApi.RecommendationDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm "Represents a custom recommendation definition.")
    
-   [ConnectApi.User](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm "User.")
