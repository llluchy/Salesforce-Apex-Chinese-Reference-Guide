---
doc_id: "apex_web_services_methods"
---

# Webservice Methods

Apex class methods can be exposed as custom SOAP Web service calls. This allows an external application to invoke an Apex Web service to perform an action in Salesforce. Use the `webservice` keyword to define these methods. For example:

```apex
global class MyWebService {
    webservice static Id makeContact(String contactLastName, Account a) {
        Contact c = new Contact(lastName = contactLastName, AccountId = a.Id);
        insert c;
        return c.id;
    }
}
```

A developer of an external application can integrate with an Apex class containing `webservice` methods by generating a WSDL for the class. To generate a WSDL from an Apex class detail page:

1.  In the application from Setup, enter “Apex Classes” in the Quick Find box, then select **Apex Classes**.
2.  Click the name of a class that contains `webservice` methods.
3.  Click **Generate WSDL**.
