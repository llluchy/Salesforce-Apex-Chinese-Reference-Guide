---
doc_id: "apex_ConnectAPI_EmployeeProfiles_static_methods"
---

# EmployeeProfiles Class

Get, set and crop, and delete employee banner photos and photos.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## EmployeeProfiles Methods

These methods are for `EmployeeProfiles`. All methods are static.

## See Also

- [deleteBannerPhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_deleteBannerPhoto_1)
- [deletePhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_deletePhoto_1)
- [getBannerPhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_getBannerPhoto_2)
- [getPhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_getPhoto_2)
- [setBannerPhoto(employeeId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhoto_3)
- [setBannerPhoto(employeeId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhoto_4)
- [setBannerPhotoWithAttributes(employeeId, bannerPhoto)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhotoWithAttributes_5)
- [setBannerPhotoWithAttributes(employeeId, bannerPhoto, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhotoWithAttributes_6)
- [setPhoto(employeeId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhoto_3)
- [setPhoto(employeeId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhoto_4)
- [setPhotoWithAttributes(employeeId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhotoWithAttributes_5)
- [setPhotoWithAttributes(employeeId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhotoWithAttributes_6)

### deleteBannerPhoto(employeeId)

Delete an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static Void deleteBannerPhoto(String employeeId)`

#### Parameters

employeeId

Type: String

ID of the employee.

#### Return Value

Type: Void

### deletePhoto(employeeId)

Delete an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static Void deletePhoto(String employeeId)`

#### Parameters

employeeId

Type: String

ID of the employee.

#### Return Value

Type: Void

### getBannerPhoto(employeeId)

Get an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BannerPhoto getBannerPhoto(String employeeId)`

#### Parameters

employeeId

Type: String

ID of the employee.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

### getPhoto(employeeId)

Get an employee’s photo.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Photo getPhoto(String employeeId)`

#### Parameters

employeeId

Type: String

ID of the employee.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

### setBannerPhoto(employeeId, fileId, versionNumber)

Set an uploaded file as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhoto(String employeeId, String fileId, Integer versionNumber)`

#### Parameters

employeeId

Type: String

ID of the employee.

fileId

Type: String

ID of the uploaded file to use as the employee banner photo. The file must be an image and be smaller than 2 GB.

versionNumber

Type: Integer

Version number of the file. Specify an existing version number or, to get the latest version, specify `null`.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

### setBannerPhoto(employeeId, fileUpload)

Set a file that hasn’t been uploaded as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhoto(String employeeId, ConnectApi.BinaryInput fileUpload)`

#### Parameters

employeeId

Type: String

ID of the employee.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(employeeId, bannerPhoto)

Set and crop an uploaded file as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String employeeId, ConnectApi.BannerPhotoInput bannerPhoto)`

#### Parameters

employeeId

Type: String

ID of the employee.

bannerPhoto

Type: `ConnectApi.BannerPhotoInput`

A `ConnectApi.BannerPhotoInput` object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [`ConnectApi.BannerPhoto`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(employeeId, bannerPhoto, fileUpload)

Set and crop a file that hasn’t been uploaded as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String employeeId, ConnectApi.BannerPhotoInput bannerPhoto, ConnectApi.BinaryInput fileUpload)`

#### Parameters

employeeId

Type: String

ID of the employee.

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

### setPhoto(employeeId, fileId, versionNumber)

Set an uploaded file as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Photo setPhoto(String employeeId, String fileId, Integer versionNumber)`

#### Parameters

employeeId

Type: String

ID of the employee.

fileId

Type: String

ID of the uploaded file to use as the employee photo. The file must be an image and be smaller than 2 GB.

versionNumber

Type: Integer

Version number of the file. Specify an existing version number or, to get the latest version, specify `null`.

#### Return Value

Type: [`ConnectApi.Photo`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhoto(employeeId, fileUpload)

Set a file that hasn’t been uploaded as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Photo setPhoto(String employeeId, ConnectApi.BinaryInput fileUpload)`

#### Parameters

employeeId

Type: String

ID of the employee.

fileUpload

Type: `ConnectApi.Binary​​Input`

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: `ConnectApi.Photo`

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(employeeId, photo)

Set and crop an uploaded file as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Photo setPhotoWithAttributes(String employeeId, ConnectApi.PhotoInput photo)`

#### Parameters

employeeId

Type: String

ID of the employee.

photo

Type: `ConnectApi.PhotoInput`

A `ConnectApi.PhotoInput` object specifying the file ID, version number, and cropping parameters.

#### Return Value

Type: `ConnectApi.Photo`

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(employeeId, photo, fileUpload)

Set and crop a file that hasn’t been uploaded as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Photo setPhotoWithAttributes(String employeeId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)`

#### Parameters

employeeId

Type: String

ID of the employee.

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
