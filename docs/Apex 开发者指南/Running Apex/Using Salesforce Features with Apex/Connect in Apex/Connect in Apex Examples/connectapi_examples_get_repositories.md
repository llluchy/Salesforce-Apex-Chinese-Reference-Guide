---
doc_id: "connectapi_examples_get_repositories"
---

# Get Repositories

Call a method to get all repositories.

Call [`getRepositories()`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_1) to get all repositories and get the first SharePoint online repository found.

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
