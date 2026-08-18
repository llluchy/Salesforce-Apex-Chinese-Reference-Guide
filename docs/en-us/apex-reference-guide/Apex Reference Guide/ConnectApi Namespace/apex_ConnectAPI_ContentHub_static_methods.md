---
doc_id: "apex_ConnectAPI_ContentHub_static_methods"
---

# ContentHub Class

Access Files Connect repositories and their files and folders.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ContentHub Methods

These methods are for `ContentHub`. All methods are static.

Use `ContentHub` methods to work with Files Connect repositories.

## See Also

- [addRepositoryItem(repositoryId, repositoryFolderId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_5)
- [addRepositoryItem(communityId, repositoryId, repositoryFolderId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_6)
- [addRepositoryItem(repositoryId, repositoryFolderId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_7)
- [addRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_8)
- [getAllowedItemTypes(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_1)
- [getAllowedItemTypes(repositoryId, repositoryFolderId, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_2)
- [getAllowedItemTypes(communityId, repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_3)
- [getAllowedItemTypes(communityId, repositoryId, repositoryFolderId, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_4)
- [getFilePreview(repositoryId, repositoryFileId, formatType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_1)
- [getFilePreview(repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_2)
- [getFilePreview(communityId, repositoryId, repositoryFileId, formatType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_3)
- [getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_4)
- [getItemType(repositoryId, repositoryItemTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getItemType_1)
- [getItemType(communityId, repositoryId, repositoryItemTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getItemType_2)
- [getPreviews(repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getPreviews_1)
- [getPreviews(communityId, repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getPreviews_2)
- [getRepositories()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_1)
- [getRepositories(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_2)
- [getRepositories(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_3)
- [getRepositories(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_4)
- [getRepository(repositoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_1)
- [getRepository(communityId, repositoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_2)
- [getRepositoryFile(repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_3)
- [getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_4)
- [getRepositoryFile(communityId, repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_5)
- [getRepositoryFile(communityId, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_6)
- [getRepositoryFolder(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_3)
- [getRepositoryFolder(communityId, repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_4)
- [getRepositoryFolderItems(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_1)
- [getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_2)
- [getRepositoryFolderItems(repositoryId, repositoryFolderId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_3)
- [getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_4)
- [updateRepositoryFile(repositoryId, repositoryFileId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_7)
- [updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_8)
- [updateRepositoryFile(communityId, repositoryId, repositoryFileId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_9)
- [updateRepositoryFile(communityId, repositoryId, repositoryFileId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_10)

### addRepositoryItem(repositoryId, repositoryFolderId, file)

Add a repository item.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItem addRepositoryItem(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example creates a file without binary content (metadata only) in a Google Drive repository folder. After the file is created, we show the file’s ID, name, description, external URL, and download URL.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';

final ConnectApi.ContentHubItemInput newItem = new ConnectApi.ContentHubItemInput();
newItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
newItem.fields = new List();

//Metadata: name field
final ConnectApi.ContentHubFieldValueInput fieldValueInput = new ConnectApi.ContentHubFieldValueInput();
fieldValueInput.name = 'name';
fieldValueInput.value = 'new folder item name.txt';
newItem.fields.add(fieldValueInput);

//Metadata: description field
final ConnectApi.ContentHubFieldValueInput fieldValueInputDesc = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputDesc.name = 'description';
fieldValueInputDesc.value = 'It does describe it';
newItem.fields.add(fieldValueInputDesc);

final ConnectApi.RepositoryFolderItem newFolderItem = ConnectApi.ContentHub.addRepositoryItem(gDriveRepositoryId, gDriveFolderId, newItem);
final ConnectApi.RepositoryFileSummary newFile = newFolderItem.file;
System.debug(String.format('New file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\' \n external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'', new String[]{ newFile.id, newFile.name, newFile.description, newFile.externalDocumentUrl, newFile.downloadUrl}));
```

## See Also

- [setTestAddRepositoryItem(repositoryId, repositoryFolderId, file, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestAddRepositoryItem_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### addRepositoryItem(communityId, repositoryId, repositoryFolderId, file)

Add a repository item in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItem addRepositoryItem(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestAddRepositoryItem(communityId, repositoryId, repositoryFolderId, file, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestAddRepositoryItem_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### addRepositoryItem(repositoryId, repositoryFolderId, file, fileData)

Add a repository item, including the binary file.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItem addRepositoryItem(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example creates a file with binary content and metadata in a Google Drive repository folder. After the file is created, we show the file’s ID, name, description, external URL, and download URL.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';

final ConnectApi.ContentHubItemInput newItem = new ConnectApi.ContentHubItemInput();
newItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
newItem.fields = new List();

//Metadata: name field
Final String newFileName = 'new folder item name.txt';
final ConnectApi.ContentHubFieldValueInput fieldValueInput = new ConnectApi.ContentHubFieldValueInput();
fieldValueInput.name = 'name';
fieldValueInput.value = newFileName;
newItem.fields.add(fieldValueInput);

//Metadata: description field
final ConnectApi.ContentHubFieldValueInput fieldValueInputDesc = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputDesc.name = 'description';
fieldValueInputDesc.value = 'It does describe it';
newItem.fields.add(fieldValueInputDesc);

//Binary content
final Blob newFileBlob = Blob.valueOf('awesome content for brand new file');
final String newFileMimeType = 'text/plain';
final ConnectApi.BinaryInput fileBinaryInput = new ConnectApi.BinaryInput(newFileBlob, newFileMimeType, newFileName);

final ConnectApi.RepositoryFolderItem newFolderItem = ConnectApi.ContentHub.addRepositoryItem(gDriveRepositoryId, gDriveFolderId, newItem, fileBinaryInput);
final ConnectApi.RepositoryFileSummary newFile = newFolderItem.file;
System.debug(String.format('New file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\' \n external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'', new String[]{ newFile.id, newFile.name, newFile.description, newFile.externalDocumentUrl, newFile.downloadUrl}));
```

## See Also

- [setTestAddRepositoryItem(repositoryId, repositoryFolderId, file, fileData, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestAddRepositoryItem_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### addRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData)

Add a repository item, including the binary file, in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItem addRepositoryItem(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestAddRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestAddRepositoryItem_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getAllowedItemTypes(repositoryId, repositoryFolderId)

Get the item types that the context user is allowed to create in the repository folder.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubAllowedItemTypeCollection getAllowedItemTypes(String repositoryId, String repositoryFolderId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

#### Return Value

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetAllowedItemTypes(repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetAllowedItemTypes_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getAllowedItemTypes(repositoryId, repositoryFolderId, filter)

Get the item types, filtered by type, that the context user is allowed to create in the repository folder.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubAllowedItemTypeCollection getAllowedItemTypes(String repositoryId, String repositoryFolderId, ConnectApi.ConnectContentHubItemType filter)`

#### Parameters

**repositoryId**

Type: String

The ID of the repository.

**repositoryFolderId**

Type: String

The ID of the repository folder.

**filter**

Type: [`ConnectApi.ContentHubItemType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubItemTypeEnum)

Item types. Values are:

-   `Any`—Includes files and folders.
-   `FilesOnly`—Includes files only.
-   `FoldersOnly`—Includes folders only.

#### Return Value

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example calls `getAllowedItemTypes(repositoryId, repositoryFolderId, ConnectApi.ContentHubItemType.FilesOnly)` to get the first `ConnectApi.ContentHubItemTypeSummary.id` of a file. The context user can create allowed files in a repository folder in the external system.

```apex
final ConnectApi.ContentHubAllowedItemTypeCollection allowedItemTypesColl = ConnectApi.ContentHub.getAllowedItemTypes(repositoryId, repositoryFolderId, ConnectApi.ContentHubItemType.FilesOnly);
final List allowedItemTypes = allowedItemTypesColl.allowedItemTypes;
string allowedFileItemTypeId = null;
if(allowedItemTypes.size() > 0){
   ConnectApi.ContentHubItemTypeSummary allowedItemTypeSummary = allowedItemTypes.get(0);
   allowedFileItemTypeId = allowedItemTypeSummary.id;
}
```

## See Also

- [setTestGetAllowedItemTypes(repositoryId, repositoryFolderId, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetAllowedItemTypes_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getAllowedItemTypes(communityId, repositoryId, repositoryFolderId)

Get the item types that the context user is allowed to create in the repository folder in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubAllowedItemTypeCollection getAllowedItemTypes(String communityId, String repositoryId, String repositoryFolderId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

#### Return Value

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetAllowedItemTypes(communityId, repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetAllowedItemTypes_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getAllowedItemTypes(communityId, repositoryId, repositoryFolderId, filter)

Get the item types, filtered by type, that the context user is allowed to create in the repository folder in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubAllowedItemTypeCollection getAllowedItemTypes(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ConnectContentHubItemType filter)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**repositoryId**

Type: String

The ID of the repository.

**repositoryFolderId**

Type: String

The ID of the repository folder.

**filter**

Type: [`ConnectApi.ContentHubItemType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubItemTypeEnum)

Item types. Values are:

-   `Any`—Includes files and folders.
-   `FilesOnly`—Includes files only.
-   `FoldersOnly`—Includes folders only.

#### Return Value

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetAllowedItemTypes(communityId, repositoryId, repositoryFolderId, filter, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetAllowedItemTypes_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFilePreview(repositoryId, repositoryFileId, formatType)

Get a repository file preview.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FilePreview getFilePreview(String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType)`

#### Parameters

**repositoryId**

Type: String

The ID of the repository.

**repositoryFileId**

Type: String

The ID of the repository file.

**formatType**

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

#### Return Value

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example calls `getFilePreview(repositoryId, repositoryFileId, ConnectApi.FilePreviewFormat.Thumbnail)` to get the thumbnail format preview along with its respective URL and number of thumbnail renditions. For each thumbnail format, we show every rendition URL available.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId =
'document:1-zcA1BaeoQbo2_yNFiHCcK6QJTPmOke-kHFC4TYg3rk';final ConnectApi.FilePreview filePreview =
ConnectApi.ContentHub.getFilePreview(gDriveRepositoryId, gDriveFileId,
ConnectApi.FilePreviewFormat.Thumbnail);System.debug(String.format('Preview - URL: \'\'{0}\'\', format: \'\'{1}\'\', nbr of
renditions for this format: {2}', new String[]{ filePreview.url,
filePreview.format.name(),String.valueOf(filePreview.previewUrls.size())}));for(ConnectApi.FilePreviewUrl filePreviewUrl : filePreview.previewUrls){
   System.debug('-----> Rendition URL: ' + filePreviewUrl.previewUrl);
}
```

## See Also

- [setTestGetFilePreview(repositoryId, repositoryFileId, formatType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetFilePreview_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFilePreview(repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)

Get a page or page range of a repository file preview.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FilePreview getFilePreview(String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, Integer startPageNumber, Integer endPageNumber)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

startPageNumber

Type: Integer

The starting page number in the range of file preview URLs.

endPageNumber

Type: Integer

The ending page number in the range of file preview URLs.

#### Return Value

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFilePreview(repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetFilePreview_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFilePreview(communityId, repositoryId, repositoryFileId, formatType)

Get a repository file preview in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FilePreview getFilePreview(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

#### Return Value

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFilePreview(communityId, repositoryId, repositoryFileId, formatType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetFilePreview_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)

Get a page or page range of a repository file preview in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FilePreview getFilePreview(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, Integer startPageNumber, Integer endPageNumber)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

startPageNumber

Type: Integer

The starting page number in the range of file preview URLs.

endPageNumber

Type: Integer

The ending page number in the range of file preview URLs.

#### Return Value

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetFilePreview_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getItemType(repositoryId, repositoryItemTypeId)

Get information about an item type associated with a repository.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubItemTypeDetail getItemType(String repositoryId, String repositoryItemTypeId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryItemTypeId

Type: String

The ID of the repository item type.

#### Return Value

Type: [`ConnectApi.ContentHubItemTypeDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm#apex_connectapi_output_content_hub_item_type_detail "The details of an item type associated with a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetItemType(repositoryId, repositoryItemTypeId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetItemType_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getItemType(communityId, repositoryId, repositoryItemTypeId)

Get information about an item type associated with a repository in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubItemTypeDetail getItemType(String communityId, String repositoryId, String repositoryItemTypeId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryItemTypeId

Type: String

The ID of the repository item type.

#### Return Value

Type: [`ConnectApi.ContentHubItemTypeDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm#apex_connectapi_output_content_hub_item_type_detail "The details of an item type associated with a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetItemType(communityId, repositoryId, repositoryItemTypeId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetItemType_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getPreviews(repositoryId, repositoryFileId)

Get information about a repository file’s supported previews.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FilePreviewCollection getPreviews(String repositoryId, String repositoryFileId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

#### Return Value

Type: `ConnectApi.FilePreviewCollection`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets all supported preview formats and their respective URLs and number of renditions. For each supported preview format, we show every rendition URL available.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'document:1-zcA1BaeoQbo2_yNFiHCcK6QJTPmOke-kHFC4TYg3rk';
final ConnectApi.FilePreviewCollection previewsCollection = ConnectApi.ContentHub.getPreviews(gDriveRepositoryId, gDriveFileId);
for(ConnectApi.FilePreview filePreview : previewsCollection.previews){
   System.debug(String.format('Preview - URL: \'\'{0}\'\', format: \'\'{1}\'\', nbr of renditions for this format: {2}', new String[]{ filePreview.url, filePreview.format.name(),String.valueOf(filePreview.previewUrls.size())}));
   for(ConnectApi.FilePreviewUrl filePreviewUrl : filePreview.previewUrls){
      System.debug('-----> Rendition URL: ' + filePreviewUrl.previewUrl);
      }
}
```

## See Also

- [setTestGetPreviews(repositoryId, repositoryFileId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetPreviews_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getPreviews(communityId, repositoryId, repositoryFileId)

Get information about a repository file’s supported previews in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FilePreviewCollection getPreviews(String communityId, String repositoryId, String repositoryFileId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

#### Return Value

Type: `ConnectApi.FilePreviewCollection`

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetPreviews(communityId, repositoryId, repositoryFileId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetPreviews_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositories()

Get a list of repositories.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubRepositoryCollection getRepositories()`

#### Return Value

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets all repositories and gets the first SharePoint online repository found.

```apex
final string sharePointOnlineProviderType ='ContentHubSharepointOffice365';
final ConnectApi.ContentHubRepositoryCollection repositoryCollection = ConnectApi.ContentHub.getRepositories();
ConnectApi.ContentHubRepository sharePointOnlineRepository = null;
for(ConnectApi.ContentHubRepository repository : repositoryCollection.repositories){
   if(sharePointOnlineProviderType.equalsIgnoreCase(repository.providerType.type)){
      sharePointOnlineRepository = repository;
      break;
   }
}
```

## See Also

- [setTestGetRepositories(result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositories(communityId)

Get a list of repositories in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubRepositoryCollection getRepositories(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

#### Return Value

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositories(communityId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositories(pageParam, pageSize)

Get a page of repositories.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubRepositoryCollection getRepositories(Integer pageParam, Integer pageSize)`

#### Parameters

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

#### Return Value

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositories(pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositories(communityId, pageParam, pageSize)

Get a page of repositories in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubRepositoryCollection getRepositories(String communityId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

#### Return Value

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositories(communityId, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepository(repositoryId)

Get a repository.

#### API Version

369.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubRepository getRepository(String repositoryId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

#### Return Value

Type: [`ConnectApi.ContentHubRepository`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

```apex
final string repositoryId = '0XCxx0000000123GAA';
final ConnectApi.ContentHubRepository repository = ConnectApi.ContentHub.getRepository(repositoryId);
```

## See Also

- [setTestGetRepository(repositoryId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepository_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepository(communityId, repositoryId)

Get a repository in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ContentHubRepository getRepository(String communityId, String repositoryId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

#### Return Value

Type: [`ConnectApi.ContentHubRepository`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepository(communityId, repositoryId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepository_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFile(repositoryId, repositoryFileId)

Get a repository file.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail getRepositoryFile(String repositoryId, String repositoryFileId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'file:0B0lTys1KmM3sTmxKNjVJbWZja00';
final ConnectApi.RepositoryFileDetail file = ConnectApi.ContentHub.getRepositoryFile(gDriveRepositoryId, gDriveFileId);
System.debug(String.format('File - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', 
   new String[]{ file.name, String.valueOf(file.contentSize), file.externalDocumentUrl, file.downloadUrl}));
```

## See Also

- [setTestGetRepositoryFile(repositoryId, repositoryFileId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFile_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)

Get a repository file with or without permissions information.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail getRepositoryFile(String repositoryId, String repositoryFileId, Boolean includeExternalFilePermissionsInfo)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

includeExternalFilePermissionsInfo

Type: Boolean

Specifies whether to include permission information, such as whether the file is shared and what are the available permission types.

Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'file:0B0lTys1KmM3sTmxKNjVJbWZja00';

final ConnectApi.RepositoryFileDetail file = ConnectApi.ContentHub.getRepositoryFile(gDriveRepositoryId, gDriveFileId, true);
System.debug(String.format('File - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', new String[]{ file.name, String.valueOf(file.contentSize), file.externalDocumentUrl, file.downloadUrl}));
final ConnectApi.ExternalFilePermissionInformation externalFilePermInfo = file.externalFilePermissionInformation;

//permission types
final List permissionTypes = externalFilePermInfo.externalFilePermissionTypes;
for(ConnectApi.ContentHubPermissionType permissionType : permissionTypes){
   System.debug(String.format('Permission type - id: \'\'{0}\'\', label: \'\'{1}\'\'', new String[]{ permissionType.id, permissionType.label}));
}

//permission groups
final List groups = externalFilePermInfo.repositoryPublicGroups;
for(ConnectApi.RepositoryGroupSummary ggroup : groups){
   System.debug(String.format('Group - id: \'\'{0}\'\', name: \'\'{1}\'\', type: \'\'{2}\'\'', new String[]{ ggroup.id, ggroup.name, ggroup.type.name()}));
}
```

## See Also

- [setTestGetRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFile_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFile(communityId, repositoryId, repositoryFileId)

Get a repository file in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail getRepositoryFile(String communityId, String repositoryId, String repositoryFileId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositoryFile(communityId, repositoryId, repositoryFileId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFile_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFile(communityId, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)

Get a repository file with or without permissions information in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail getRepositoryFile(String communityId, String repositoryId, String repositoryFileId, Boolean includeExternalFilePermissionsInfo)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

includeExternalFilePermissionsInfo

Type: Boolean

Specifies whether to include permission information, such as whether the file is shared and what are the available permission types.

Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositoryFile(communityId, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFile_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFolder(repositoryId, repositoryFolderId)

Get a repository folder.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderDetail getRepositoryFolder(String repositoryId, String repositoryFolderId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

#### Return Value

Type: [`ConnectApi.RepositoryFolderDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm#apex_connectapi_output_repository_folder_detail "A detailed description of a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';
final ConnectApi.RepositoryFolderDetail folder = ConnectApi.ContentHub.getRepositoryFolder(gDriveRepositoryId, gDriveFolderId);
System.debug(String.format('Folder - name: \'\'{0}\'\', description: \'\'{1}\'\', external URL: \'\'{2}\'\', folder items URL: \'\'{3}\'\'', 
   new String[]{ folder.name, folder.description, folder.externalFolderUrl, folder.folderItemsUrl}));
```

## See Also

- [setTestGetRepositoryFolder(repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolder_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFolder(communityId, repositoryId, repositoryFolderId)

Get a repository folder in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderDetail getRepositoryFolder(String communityId, String repositoryId, String repositoryFolderId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

#### Return Value

Type: [`ConnectApi.RepositoryFolderDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm#apex_connectapi_output_repository_folder_detail "A detailed description of a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositoryFolder(communityId, repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolder_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFolderItems(repositoryId, repositoryFolderId)

Get repository folder items.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItemsCollection getRepositoryFolderItems(String repositoryId, String repositoryFolderId)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets the collection of items in a repository folder. For files, we show the file’s name, size, external URL, and download URL. For folders, we show the folder’s name, description, and external URL.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';
final ConnectApi.RepositoryFolderItemsCollection folderItemsColl = ConnectApi.ContentHub.getRepositoryFolderItems(gDriveRepositoryId,gDriveFolderId);
final List folderItems = folderItemsColl.items;
System.debug('Number of items in repository folder: ' + folderItems.size());
for(ConnectApi.RepositoryFolderItem item : folderItems){
   ConnectApi.RepositoryFileSummary fileSummary = item.file;
   if(fileSummary != null){
      System.debug(String.format('File item - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', new String[]{ fileSummary.name, String.valueOf(fileSummary.contentSize), fileSummary.externalDocumentUrl, fileSummary.downloadUrl}));
      }else{
         ConnectApi.RepositoryFolderSummary folderSummary = item.folder;
         System.debug(String.format('Folder item - name: \'\'{0}\'\', description: \'\'{1}\'\'',  new String[]{ folderSummary.name, folderSummary.description}));
      }
}
```

## See Also

- [setTestGetRepositoryFolderItems(repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolderItems_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId)

Get repository folder items in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItemsCollection getRepositoryFolderItems(String communityId, String repositoryId, String repositoryFolderId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolderItems_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFolderItems(repositoryId, repositoryFolderId, pageParam, pageSize)

Get a page of repository folder items.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItemsCollection getRepositoryFolderItems(String repositoryId, String repositoryFolderId, Integer pageParam, Integer pageSize)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositoryFolderItems(repositoryId, repositoryFolderId, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolderItems_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, pageParam, pageSize)

Get a page of repository folder items in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFolderItemsCollection getRepositoryFolderItems(String communityId, String repositoryId, String repositoryFolderId, Integer pageParam, Integer pageSize)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

#### Return Value

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestGetRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolderItems_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### updateRepositoryFile(repositoryId, repositoryFileId, file)

Update the name of a repository file.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail updateRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

When updating the metadata of a repository file, only the name field can be updated.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example updates the name of a file in a Google Drive repository. After the file is updated, we show the file’s ID, name, description, external URL, download URL.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs', gDriveFileId = 'document:1q9OatVpcyYBK-JWzp_PhR75ulQghwFP15zhkamKrRcQ';

final ConnectApi.ContentHubItemInput updatedItem = new ConnectApi.ContentHubItemInput();
updatedItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
updatedItem.fields = new List();

//Metadata: name field
final ConnectApi.ContentHubFieldValueInput fieldValueInputName = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputName.name = 'name';
fieldValueInputName.value =  'updated file name.txt';
updatedItem.fields.add(fieldValueInputName);

final ConnectApi.RepositoryFileDetail updatedFile = ConnectApi.ContentHub.updateRepositoryFile(gDriveRepositoryId, gDriveFileId, updatedItem);
System.debug(String.format('Updated file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\',\n external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'',  new String[]{ updatedFile.id, updatedFile.name, updatedFile.description, updatedFile.externalDocumentUrl, updatedFile.downloadUrl}));
```

## See Also

- [setTestUpdateRepositoryFile(communityId, repositoryId, repositoryFileId, file, fileData, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestUpdateRepositoryFile_10)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)

Update the content of a repository file.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail updateRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

When updating the metadata of a repository file, only the name field can be updated.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example updates the content and name of a file in a Google Drive repository. After the file is updated, we show the file’s ID, name, description, external URL, and download URL.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs', gDriveFileId = 'document:1q9OatVpcyYBK-JWzp_PhR75ulQghwFP15zhkamKrRcQ';

final ConnectApi.ContentHubItemInput updatedItem = new ConnectApi.ContentHubItemInput();
updatedItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
updatedItem.fields = new List();

//Metadata: name field
final ConnectApi.ContentHubFieldValueInput fieldValueInputName = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputName.name = 'name';
fieldValueInputName.value =  'updated file name.txt';
updatedItem.fields.add(fieldValueInputName);

//Binary content
final Blob updatedFileBlob = Blob.valueOf('even more awesome content for updated file');
final String updatedFileMimeType = 'text/plain';
final ConnectApi.BinaryInput fileBinaryInput = new ConnectApi.BinaryInput(updatedFileBlob, updatedFileMimeType, updatedFileName);

final ConnectApi.RepositoryFileDetail updatedFile = ConnectApi.ContentHub.updateRepositoryFile(gDriveRepositoryId, gDriveFileId, updatedItem);
System.debug(String.format('Updated file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\',\n external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'',  new String[]{ updatedFile.id, updatedFile.name, updatedFile.description, updatedFile.externalDocumentUrl, updatedFile.downloadUrl}));
```

## See Also

- [setTestUpdateRepositoryFile(repositoryId, repositoryFileId, file, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestUpdateRepositoryFile_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### updateRepositoryFile(communityId, repositoryId, repositoryFileId, file)

Update the name of a repository file in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail updateRepositoryFile(String communityId, String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

When updating the metadata of a repository file, only the name field can be updated.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestUpdateRepositoryFile(repositoryId, repositoryFileId, file, fileData, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestUpdateRepositoryFile_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### updateRepositoryFile(communityId, repositoryId, repositoryFileId, file, fileData)

Update the content of a repository file in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.RepositoryFileDetail updateRepositoryFile(String communityId, String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

When updating the metadata of a repository file, only the name field can be updated.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

#### Return Value

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with `setTest`). Use the set test method with the same parameters or the code throws an exception.

## See Also

- [setTestUpdateRepositoryFile(communityId, repositoryId, repositoryFileId, file, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestUpdateRepositoryFile_9)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

## ContentHub Test Methods

These test methods are for `ContentHub`. All methods are static.

For information about using these methods to test your `ConnectApi` code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestAddRepositoryItem(repositoryId, repositoryFolderId, file, result)

Register a `ConnectApi.RepositoryFolderItem` object to be returned when the matching `addRepositoryItem(repositoryId, repositoryFolderId, file)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestAddRepositoryItem(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.RepositoryFolderItem result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

result

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [addRepositoryItem(repositoryId, repositoryFolderId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestAddRepositoryItem(communityId, repositoryId, repositoryFolderId, file, result)

Register a `ConnectApi.RepositoryFolderItem` object to be returned when the matching `addRepositoryItem(communityId, repositoryId, repositoryFolderId, file)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestAddRepositoryItem(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.RepositoryFolderItem result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

result

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [addRepositoryItem(communityId, repositoryId, repositoryFolderId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestAddRepositoryItem(repositoryId, repositoryFolderId, file, fileData, result)

Register a `ConnectApi.RepositoryFolderItem` object to be returned when the matching `addRepositoryItem(repositoryId, repositoryFolderId, file, fileData)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestAddRepositoryItem(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData, ConnectApi.RepositoryFolderItem result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

result

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [addRepositoryItem(repositoryId, repositoryFolderId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestAddRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData, result)

Register a `ConnectApi.RepositoryFolderItem` object to be returned when the matching `addRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestAddRepositoryItem(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData, ConnectApi.RepositoryFolderItem result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

result

Type: [`ConnectApi.RepositoryFolderItem`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [addRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetAllowedItemTypes(repositoryId, repositoryFolderId, result)

Register a `ConnectApi.ContentHubAllowedItemTypeCollection` object to be returned when the matching `getAllowedItemTypes(repositoryId, repositoryFolderId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetAllowedItemTypes(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubAllowedItemTypeCollection result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

result

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getAllowedItemTypes(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetAllowedItemTypes(repositoryId, repositoryFolderId, filter, result)

Register a `ConnectApi.ContentHubAllowedItemTypeCollection` object to be returned when the matching `getAllowedItemTypes(repositoryId, repositoryFolderId, filter)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetAllowedItemTypes(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemType filter, ConnectApi.ContentHubAllowedItemTypeCollection result)`

#### Parameters

**repositoryId**

Type: String

The ID of the repository.

**repositoryFolderId**

Type: String

The ID of the repository folder.

**filter**

Type: [`ConnectApi.ContentHubItemType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubItemTypeEnum)

Item types. Values are:

-   `Any`—Includes files and folders.
-   `FilesOnly`—Includes files only.
-   `FoldersOnly`—Includes folders only.

**result**

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getAllowedItemTypes(repositoryId, repositoryFolderId, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetAllowedItemTypes(communityId, repositoryId, repositoryFolderId, result)

Register a `ConnectApi.ContentHubAllowedItemTypeCollection` object to be returned when the matching `getAllowedItemTypes(communityId, repositoryId, repositoryFolderId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetAllowedItemTypes(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubAllowedItemTypeCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

result

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getAllowedItemTypes(communityId, repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetAllowedItemTypes(communityId, repositoryId, repositoryFolderId, filter, result)

Register a `ConnectApi.ContentHubAllowedItemTypeCollection` object to be returned when the matching `getAllowedItemTypes(communityId, repositoryId, repositoryFolderId, filter)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetAllowedItemTypes(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemType filter, ConnectApi.ContentHubAllowedItemTypeCollection result)`

#### Parameters

**communityId**

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

**repositoryId**

Type: String

The ID of the repository.

**repositoryFolderId**

Type: String

The ID of the repository folder.

**filter**

Type: [`ConnectApi.ContentHubItemType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ContentHubItemTypeEnum)

Item types. Values are:

-   `Any`—Includes files and folders.
-   `FilesOnly`—Includes files only.
-   `FoldersOnly`—Includes folders only.

**result**

Type: [`ConnectApi.ContentHubAllowedItemTypeCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_allowed_item_type_collection.htm#apex_connectapi_output_content_hub_allowed_item_type_collection "The item types that the context user is allowed to create in a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getAllowedItemTypes(communityId, repositoryId, repositoryFolderId, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFilePreview(repositoryId, repositoryFileId, formatType, result)

Register a `ConnectApi.FilePreview` object to be returned when the matching `getFilePreview(repositoryId, repositoryFileId, formatType)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFilePreview(String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, ConnectApi.FilePreview result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

result

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFilePreview(repositoryId, repositoryFileId, formatType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFilePreview(repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result)

Register a `ConnectApi.FilePreview` object to be returned when the matching `getFilePreview(repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFilePreview(String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, Integer startPageNumber, Integer endPageNumber, ConnectApi.FilePreview result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

startPageNumber

Type: Integer

The starting page number in the range of file preview URLs.

endPageNumber

Type: Integer

The ending page number in the range of file preview URLs.

result

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFilePreview(repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFilePreview(communityId, repositoryId, repositoryFileId, formatType, result)

Register a `ConnectApi.FilePreview` object to be returned when the matching `getFilePreview(communityId, repositoryId, repositoryFileId, formatType)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFilePreview(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, ConnectApi.FilePreview result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

result

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFilePreview(communityId, repositoryId, repositoryFileId, formatType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result)

Register a `ConnectApi.FilePreview` object to be returned when the matching `getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetFilePreview(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, Integer startPageNumber, Integer endPageNumber, ConnectApi.FilePreview result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

formatType

Type: [`ConnectApi.FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

startPageNumber

Type: Integer

The starting page number in the range of file preview URLs.

endPageNumber

Type: Integer

The ending page number in the range of file preview URLs.

result

Type: [`ConnectApi.FilePreview`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetItemType(repositoryId, repositoryItemTypeId, result)

Register a `ConnectApi.ContentHubItemTypeDetail` object to be returned when the matching `getItemType(repositoryId, repositoryItemTypeId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetItemType(String repositoryId, String repositoryItemTypeId, ConnectApi.ContentHubItemTypeDetail result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryItemTypeId

Type: String

The ID of the repository item type.

result

Type: [`ConnectApi.ContentHubItemTypeDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm#apex_connectapi_output_content_hub_item_type_detail "The details of an item type associated with a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getItemType(repositoryId, repositoryItemTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getItemType_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetItemType(communityId, repositoryId, repositoryItemTypeId, result)

Register a `ConnectApi.ContentHubItemTypeDetail` object to be returned when the matching `getItemType(communityId, repositoryId, repositoryItemTypeId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetItemType(String communityId, String repositoryId, String repositoryItemTypeId, ConnectApi.ContentHubItemTypeDetail result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryItemTypeId

Type: String

The ID of the repository item type.

result

Type: [`ConnectApi.ContentHubItemTypeDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm#apex_connectapi_output_content_hub_item_type_detail "The details of an item type associated with a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getItemType(communityId, repositoryId, repositoryItemTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getItemType_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetPreviews(repositoryId, repositoryFileId, result)

Register a `ConnectApi.FilePreviewCollection` object to be returned when the matching `getPreviews(repositoryId, repositoryFileId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetPreviews(String repositoryId, String repositoryFileId, ConnectApi.FilePreviewCollection result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

result

Type: `ConnectApi.FilePreviewCollection`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getPreviews(repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getPreviews_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetPreviews(communityId, repositoryId, repositoryFileId, result)

Register a `ConnectApi.FilePreviewCollection` object to be returned when the matching `getPreviews(communityId, repositoryId, repositoryFileId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetPreviews(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

result

Type: `ConnectApi.FilePreviewCollection`

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getPreviews(communityId, repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getPreviews_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositories(result)

Register a `ConnectApi.ContentHubRepositoryCollection` object to be returned when the matching `getRepositories()` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositories(ConnectApi.ContentHubRepositoryCollection result)`

#### Parameters

result

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositories()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositories(communityId, result)

Register a `getRepositories(communityId)` object to be returned when the matching `ConnectApi.ContentHubRepositoryCollection` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositories(String communityId, ConnectApi.ContentHubRepositoryCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

result

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositories(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositories(pageParam, pageSize, result)

Register a `ConnectApi.ContentHubRepositoryCollection` object to be returned when the matching `getRepositories(pageParam, pageSize)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositories(Integer pageParam, Integer pageSize, ConnectApi.ContentHubRepositoryCollection result)`

#### Parameters

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

result

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositories(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositories(communityId, pageParam, pageSize, result)

Register a `ConnectApi.ContentHubRepositoryCollection` object to be returned when the matching `getRepositories(communityId, pageParam, pageSize)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositories(String communityId, Integer pageParam, Integer pageSize, ConnectApi.ContentHubRepositoryCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

result

Type: [`ConnectApi.ContentHubRepositoryCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositories(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepository(repositoryId, result)

Register a `ConnectApi.ContentHubRepository` object to be returned when the matching `getRepository(repositoryId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepository(String repositoryId, ConnectApi.ContentHubRepository result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

result

Type: [`ConnectApi.ContentHubRepository`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepository(repositoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepository(communityId, repositoryId, result)

Register a `ConnectApi.ContentHubRepository` object to be returned when the matching `getRepository(communityId, repositoryId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepository(String communityId, String repositoryId, ConnectApi.ContentHubRepository result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

result

Type: [`ConnectApi.ContentHubRepository`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepository(communityId, repositoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFile(repositoryId, repositoryFileId, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `getRepositoryFile(repositoryId, repositoryFileId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.RepositoryFileDetail result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFile(repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFile(String repositoryId, String repositoryFileId, Boolean includeExternalFilePermissionsInfo, ConnectApi.RepositoryFileDetail result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

includeExternalFilePermissionsInfo

Type: Boolean

Specifies whether to include permission information, such as whether the file is shared and what are the available permission types.

Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFile(communityId, repositoryId, repositoryFileId, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `getRepositoryFile(communityId, repositoryId, repositoryFileId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFile(String communityId, String repositoryId, String repositoryFileId, ConnectApi.RepositoryFileDetail result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFile(communityId, repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_5)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFile(communityId, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `getRepositoryFile(communityId, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFile(String communityId, String repositoryId, String repositoryFileId, Boolean includeExternalFilePermissionsInfo, ConnectApi.RepositoryFileDetail result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

includeExternalFilePermissionsInfo

Type: Boolean

Specifies whether to include permission information, such as whether the file is shared and what are the available permission types.

Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFile(communityId, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_6)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFolder(repositoryId, repositoryFolderId, result)

Register a `ConnectApi.RepositoryFolderDetail` object to be returned when the matching `getRepositoryFolder(repositoryId, repositoryFolderId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFolder(String repositoryId, String repositoryFolderId, ConnectApi.RepositoryFolderDetail result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

result

Type: [`ConnectApi.RepositoryFolderDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm#apex_connectapi_output_repository_folder_detail "A detailed description of a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFolder(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFolder(communityId, repositoryId, repositoryFolderId, result)

Register a `ConnectApi.RepositoryFolderDetail` object to be returned when the matching `getRepositoryFolder(communityId, repositoryId, repositoryFolderId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFolder(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.RepositoryFolderDetail result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

result

Type: [`ConnectApi.RepositoryFolderDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm#apex_connectapi_output_repository_folder_detail "A detailed description of a repository folder.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFolder(communityId, repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFolderItems(repositoryId, repositoryFolderId, result)

Register a `ConnectApi.RepositoryFolderItemsCollection` object to be returned when the matching `getRepositoryFolderItems(repositoryId, repositoryFolderId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFolderItems(String repositoryId, String repositoryFolderId, ConnectApi.RepositoryFolderItemsCollection result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

result

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFolderItems(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_1)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, result)

Register a `ConnectApi.RepositoryFolderItemsCollection` object to be returned when the matching `getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFolderItems(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.RepositoryFolderItemsCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

result

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_2)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFolderItems(repositoryId, repositoryFolderId, pageParam, pageSize, result)

Register a `ConnectApi.RepositoryFolderItemsCollection` object to be returned when the matching `getRepositoryFolderItems(repositoryId, repositoryFolderId, pageParam, pageSize)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFolderItems(String repositoryId, String repositoryFolderId, Integer pageParam, Integer pageSize, ConnectApi.RepositoryFolderItemsCollection result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

result

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFolderItems(repositoryId, repositoryFolderId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_3)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestGetRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, pageParam, pageSize, result)

Register a `ConnectApi.RepositoryFolderItemsCollection` object to be returned when the matching `getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, pageParam, pageSize)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestGetRepositoryFolderItems(String communityId, String repositoryId, String repositoryFolderId, Integer pageParam, Integer pageSize, ConnectApi.RepositoryFolderItemsCollection result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFolderId

Type: String

The ID of the repository folder.

pageParam

Type: Integer

Number of the page you want returned. Starts at 0. If you pass in `null` or 0, the first page is returned.

pageSize

Type: Integer

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in `null`, the default page size is 25.

result

Type: [`ConnectApi.RepositoryFolderItemsCollection`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_4)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestUpdateRepositoryFile(communityId, repositoryId, repositoryFileId, file, fileData, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `updateRepositoryFile(communityId, repositoryId, repositoryFileId, file, fileData)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestUpdateRepositoryFile(String communityId, String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData, ConnectApi.RepositoryFileDetail result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [updateRepositoryFile(repositoryId, repositoryFileId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_7)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestUpdateRepositoryFile(repositoryId, repositoryFileId, file, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `updateRepositoryFile(repositoryId, repositoryFileId, file)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestUpdateRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.RepositoryFileDetail result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_8)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestUpdateRepositoryFile(repositoryId, repositoryFileId, file, fileData, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestUpdateRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData, ConnectApi.RepositoryFileDetail result)`

#### Parameters

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [`ConnectApi.BinaryInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [updateRepositoryFile(communityId, repositoryId, repositoryFileId, file)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_9)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
    

### setTestUpdateRepositoryFile(communityId, repositoryId, repositoryFileId, file, result)

Register a `ConnectApi.RepositoryFileDetail` object to be returned when the matching `updateRepositoryFile(communityId, repositoryId, repositoryFileId, file)` method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

`public static Void setTestUpdateRepositoryFile(String communityId, String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.RepositoryFileDetail result)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

repositoryId

Type: String

The ID of the repository.

repositoryFileId

Type: String

The ID of the repository file.

file

Type: [`ConnectApi.ContentHubItemInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

result

Type: [`ConnectApi.RepositoryFileDetail`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

## See Also

- [updateRepositoryFile(communityId, repositoryId, repositoryFileId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_10)

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
