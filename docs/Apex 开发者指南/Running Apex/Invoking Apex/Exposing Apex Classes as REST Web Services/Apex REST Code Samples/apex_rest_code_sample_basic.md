---
doc_id: "apex_rest_code_sample_basic"
---

# Apex REST Basic Code Sample

This sample shows how to implement a simple REST API in Apex with three HTTP request methods to delete, retrieve, and update a record.

For more information about authenticating with `cURL`, see the [Quick Start](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_rest.meta/api_rest/quickstart.htm "HTML (New Window)") section of the *REST API Developer Guide*.

1.  Create an Apex class in your instance from Setup. Enter Apex Classes in the Quick Find box, select **Apex Classes**, and then click **New**. Add this code to the new Apex class:

```apex
@RestResource(urlMapping='/Account/*')
global with sharing class MyRestResource {

    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account account = [SELECT Id FROM Account WHERE Id = :accountId WITH USER_MODE];
        delete as user account;
    }
  
    @HttpGet
    global static Account doGet() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId WITH USER_MODE];
        return result;
    }
  
  @HttpPost
    global static String doPost(String name,
        String phone, String website) {
        Account account = new Account();
        account.Name = name;
        account.phone = phone;
        account.website = website;
        insert as user account;
        return account.Id;
    }
}
```

2.  To call the `doGet` method from a client, open a command-line window and execute the following `cURL` command to retrieve an account by ID:
    
    `curl -H "Authorization: Bearer sessionId" "https://instance.salesforce.com/services/apexrest/Account/accountId"`
    
    -   Replace **sessionId** with the `<sessionId>` element that you noted in the login response.
    -   Replace **instance** with your `<serverUrl>` element.
    -   Replace **accountId** with the ID of an account which exists in your organization.
    
    After calling the `doGet` method, Salesforce returns a JSON response with data such as the following:
    
    

```plain
{
  "attributes" : 
    {
      "type" : "Account",
      "url" : "/services/data/v22.0/sobjects/Account/accountId"
    },
  "Id" : "accountId",
  "Name" : "Acme"

}
```

 

:::tip Note
The `cURL` examples in this section don't
            use a namespaced Apex class so you don’t see the namespace in the URL.
:::

-   Create a file called account.txt to contain the data for the account you will create in the next step.

```apex
{
  "name" : "Wingo Ducks",
  "phone" : "707-555-1234",
  "website" : "www.wingo.ca.us"
}
```

-   Using a command-line window, execute the following `cURL` command to create a new account:
    
    `curl -H "Authorization: Bearer sessionId" -H "Content-Type: application/json" -d @account.txt "https://instance.salesforce.com/services/apexrest/Account/"`
    
    After calling the `doPost` method, Salesforce returns a response with data such as the following:
    
    

```apex
"accountId"
```

    
    The **accountId** is the ID of the account you just created with the POST request.
    
-   Using a command-line window, execute the following `cURL` command to delete an account by specifying the ID:
    
    `curl —X DELETE —H "Authorization: Bearer sessionId" "https://instance.salesforce.com/services/apexrest/Account/accountId"`
