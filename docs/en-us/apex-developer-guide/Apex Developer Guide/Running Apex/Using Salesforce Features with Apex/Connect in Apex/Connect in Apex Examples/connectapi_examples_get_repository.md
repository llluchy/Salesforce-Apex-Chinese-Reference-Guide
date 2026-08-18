---
doc_id: "connectapi_examples_get_repository"
---

# Get a Repository

Call a method to get a repository.

Call [`getRepository(repositoryId)`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_1) to get a repository.

```apex
final string repositoryId = '0XCxx0000000123GAA';
final ConnectApi.ContentHubRepository repository = ConnectApi.ContentHub.getRepository(repositoryId);
```
