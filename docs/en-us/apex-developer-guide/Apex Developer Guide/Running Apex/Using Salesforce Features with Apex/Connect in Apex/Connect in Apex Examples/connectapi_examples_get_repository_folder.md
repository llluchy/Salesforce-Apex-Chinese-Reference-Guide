---
doc_id: "connectapi_examples_get_repository_folder"
---

# Get a Repository Folder

Call a method to get a repository folder.

Call [`getRepositoryFolder(repositoryId, repositoryFolderId)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_3) to get a repository folder.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';
final ConnectApi.RepositoryFolderDetail folder = ConnectApi.ContentHub.getRepositoryFolder(gDriveRepositoryId, gDriveFolderId);
System.debug(String.format('Folder - name: \'\'{0}\'\', description: \'\'{1}\'\', external URL: \'\'{2}\'\', folder items URL: \'\'{3}\'\'', 
   new String[]{ folder.name, folder.description, folder.externalFolderUrl, folder.folderItemsUrl}));
```
