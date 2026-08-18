---
doc_id: "pages_security_tips_data_access_control"
---

# Data Access Control

The Salesforce Platform makes extensive use of data sharing rules. Each object has permissions and can have sharing settings that users can read, create, edit, and delete. These settings are enforced when using all standard controllers.

When using an Apex class, the default behavior is tp respect built-in user permissions and field-level security restrictions during execution, that is, as if the class were declared as `with sharing`. For example, consider this Apex pseudo-code.

```apex
public class customController { 
    public void read() { 
        Contact contact = [SELECT id FROM Contact WHERE Name = :value]; 
    } 
}
```

In this case, only contact records for the current user are searched.

The platform uses the security sharing permissions of the user currently logged in, rather than granting full access to all records.
