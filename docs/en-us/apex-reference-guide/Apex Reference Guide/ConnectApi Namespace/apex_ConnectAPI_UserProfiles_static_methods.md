---
doc_id: "apex_ConnectAPI_UserProfiles_static_methods"
---

# UserProfiles Class

Access user profile data. The user profile data populates the profile page (also called the Chatter profile page). This data includes user information (such as address, manager, and phone number), some user capabilities (permissions), and a set of subtab apps, which are custom tabs on the profile page.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## UserProfiles Methods

These methods are for `UserProfiles`. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

## See Also

- [deleteBannerPhoto(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_deleteBannerPhoto_1)
- [deletePhoto(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_deletePhoto)
- [getBannerPhoto(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_getBannerPhoto_2)
- [getPhoto(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_getPhoto)
- [getUserProfile(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_getUserProfile)
- [setBannerPhoto(communityId, userId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setBannerPhoto_3)
- [setBannerPhoto(communityId, userId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setBannerPhoto_4)
- [setBannerPhotoWithAttributes(communityId, userId, bannerPhoto)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setBannerPhotoWithAttributes_5)
- [setBannerPhotoWithAttributes(communityId, userId, bannerPhoto, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setBannerPhotoWithAttributes_6)
- [setPhoto(communityId, userId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setPhoto)
- [setPhoto(communityId, userId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setPhoto_2)
- [setPhotoWithAttributes(communityId, userId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setPhotoWithAttributes)
- [setPhotoWithAttributes(communityId, userId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setPhotoWithAttributes_2)

### deleteBannerPhoto(communityId, userId)

Delete a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static Void deleteBannerPhoto(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

#### Return Value

Type: Void

### deletePhoto(communityId, userId)

Delete a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static Void deletePhoto(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

#### Return Value

Type: Void

### getBannerPhoto(communityId, userId)

Get a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BannerPhoto getBannerPhoto(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

### getPhoto(communityId, userId)

Get a user’s photo.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo getPhoto(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for a user.

#### Return Value

Type: `ConnectApi.Photo`

### getUserProfile(communityId, userId)

Get the user profile of the context user.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.UserProfile getUserProfile(String communityId, String userId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for a user.

#### Return Value

Type: `ConnectApi.UserProfile`

### setBannerPhoto(communityId, userId, fileId, versionNumber)

Set an uploaded file as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhoto(String communityId, String userId, String fileId, Integer versionNumber)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

fileId

Type: String

ID of the uploaded file to use as the user banner. The key prefix must be 069, and the image must be smaller than 8 MB.

versionNumber

Type: Integer

Version number of the file. Specify an existing version number or, to get the latest version, specify `null`.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhoto(communityId, userId, fileUpload)

Set a file that hasn’t been uploaded as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhoto(String communityId, String userId, ConnectApi.BinaryInput fileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(communityId, userId, bannerPhoto)

Set and crop an uploaded file as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String userId, ConnectApi.BannerPhotoInput bannerPhoto)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

bannerPhoto

Type: `ConnectApi.BannerPhotoInput`

A `ConnectApi.BannerPhotoInput` object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(communityId, userId, bannerPhoto, fileUpload)

Set and crop a file that hasn’t been uploaded as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String userId, ConnectApi.BannerPhotoInput bannerPhoto, ConnectApi.BinaryInput fileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID of the user.

bannerPhoto

Type: `ConnectApi.BannerPhotoInput`

A `ConnectApi.BannerPhotoInput` object specifying the cropping parameters.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhoto(communityId, userId, fileId, versionNumber)

Set an uploaded file as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo setPhoto(String communityId, String userId, String fileId, Integer versionNumber)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

fileId

Type: String

ID of an uploaded file. The file must be an image, and be smaller than 2 GB.

versionNumber

Type: Integer

Version number of the existing file. Specify either an existing version number, or `null` to get the latest version.

#### Return Value

Type: `ConnectApi.Photo`

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhoto(communityId, userId, fileUpload)

Set a file that hasn’t been uploaded as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo setPhoto(String communityId, String userId, ConnectApi.BinaryInput fileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: `ConnectApi.Photo`

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(communityId, userId, photo)

Set and crop an uploaded file as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo setPhotoWithAttributes(String communityId, String userId, ConnectApi.PhotoInput photo)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

photo

Type: `ConnectApi.PhotoInput`

A `ConnectApi.PhotoInput` object specifying the file ID, version number, and cropping parameters.

#### Return Value

Type: `ConnectApi.Photo`

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(communityId, userId, photo, fileUpload)

Set and crop a file that hasn’t been uploaded as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

`public static ConnectApi.Photo setPhotoWithAttributes(String communityId, String userId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

userId

Type: String

ID for the context user or the keyword `me`.

photo

Type: `ConnectApi.PhotoInput`

A `ConnectApi.PhotoInput` object specifying the cropping parameters.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: `ConnectApi.Photo`

#### Usage

Photos are processed asynchronously and might not be visible right away.
