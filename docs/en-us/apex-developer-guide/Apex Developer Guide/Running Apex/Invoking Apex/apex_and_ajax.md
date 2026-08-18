---
doc_id: "apex_and_ajax"
---

# Apex in AJAX

The AJAX toolkit includes built-in support for invoking Apex through anonymous blocks or public `webservice` methods.

To invoke Apex through anonymous blocks or public `webservice` methods, include the following lines in your AJAX code:

```js
"/soap/ajax/67.0/connection.js" type="text/javascript">
"/soap/ajax/67.0/apex.js" type="text/javascript">
```

 

:::tip Note
For AJAX buttons, use the alternate forms of these includes.
:::

To invoke Apex, use one of the following two methods:

-   Execute anonymously via `sforce.apex.executeAnonymous (script)`. This method returns a result similar to the API's result type, but as a JavaScript structure.
-   Use a class WSDL. For example, you can call the following Apex class:

```apex
global class myClass { 
  webservice static Id makeContact(String lastName, Account a) { 
        Contact c = new Contact(LastName = lastName, AccountId = a.Id); 
        return c.id; 
    }
}
```

    
    By using the following JavaScript code:
    
    

```apex
var account = sforce.sObject("Account");
var id = sforce.apex.execute("myClass","makeContact",
                             {lastName:"Smith",
                              a:account});
```

    
    The `execute` method takes primitive data types, sObjects, and lists of primitives or sObjects.
    
    To call a webservice method with no parameters, use `{}` as the third parameter for `sforce.apex.execute`. For example, to call the following Apex class:
    
    

```apex
global class myClass{ 
   webservice static String getContextUserName() {
        return UserInfo.getFirstName();
   }
}
```

    
    Use the following JavaScript code:
    
    

```apex
var contextUser = sforce.apex.execute("myClass", "getContextUserName", {});
```

 

:::tip Note
If a namespace has been defined for your
                        organization, you must include it in the JavaScript code when you invoke the
                        class. For example, to call the myClass class, the
                        JavaScript code from above would be rewritten as
                            follows:@@PH5PH@@
To verify whether your organization has a namespace, log
                            in to your Salesforce organization and from Setup, enter
                                Packages in the Quick
                                Find box, then select **Packages**. If
                            a namespace is defined, it’s listed under Developer
                        Settings.
:::

For more information on the return datatypes, see [Data Types in AJAX Toolkit](https://developer.salesforce.com/docs/atlas.en-us.262.0.ajax.meta/ajax/sforce_api_ajax_datatypes.htm)

Use the following line to display a window with debugging information:

```apex
sforce.debug.trace=true;
```

 

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm)
