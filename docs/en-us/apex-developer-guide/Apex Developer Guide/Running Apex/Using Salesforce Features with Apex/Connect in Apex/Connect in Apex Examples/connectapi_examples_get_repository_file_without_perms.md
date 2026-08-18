---
doc_id: "connectapi_examples_get_repository_file_without_perms"
---

# Get a Repository File Without Permissions Information

Call a method to get a repository file without permission information.

Call [`getRepositoryFile(repositoryId, repositoryFileId)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_3) to get a repository file without permissions information.

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'file:0B0lTys1KmM3sTmxKNjVJbWZja00';
final ConnectApi.RepositoryFileDetail file = ConnectApi.ContentHub.getRepositoryFile(gDriveRepositoryId, gDriveFileId);
System.debug(String.format('File - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', 
   new String[]{ file.name, String.valueOf(file.contentSize), file.externalDocumentUrl, file.downloadUrl}));
```
