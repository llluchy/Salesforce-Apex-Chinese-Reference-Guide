---
doc_id: "connectapi_examples_get_allowed_item_types"
---

# Get Allowed Item Types

Call a method to get allowed item types.

Call [`getAllowedItemTypes(repositoryId, repositoryFolderId, filter)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_2) with a `filter` of `FilesOnly` to get the first `ConnectApi.ContentHubItemTypeSummary.id` of a file. The context user can create allowed files in a repository folder in the external system.

```apex
final ConnectApi.ContentHubAllowedItemTypeCollection allowedItemTypesColl = ConnectApi.ContentHub.getAllowedItemTypes(repositoryId, repositoryFolderId, ConnectApi.ContentHubItemType.FilesOnly);
final List allowedItemTypes = allowedItemTypesColl.allowedItemTypes;
string allowedFileItemTypeId = null;
if(allowedItemTypes.size() > 0){
   ConnectApi.ContentHubItemTypeSummary allowedItemTypeSummary = allowedItemTypes.get(0);
   allowedFileItemTypeId = allowedItemTypeSummary.id;
}
```
