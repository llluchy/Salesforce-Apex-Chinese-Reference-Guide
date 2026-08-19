---
doc_id: "apex_dynamic_permissions"
---

# Understanding Describe Information Permissions

Apex classes run in user mode by default, which means that user permissions on objects and field-level security are respected. A user cannot run code that tries to access fields or objects that are hidden from the user.

User permissions also matter when you execute describe calls in an anonymous block.. As a result, not all sObjects and fields can be looked up if access is restricted for the running user. For example, if you describe account fields in an anonymous block and you don’t have access to all fields, not all fields are returned.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm)

#### See Also

-   [Anonymous Blocks](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm "An anonymous block is Apex code that doesn’t get stored in the metadata, but that you can compile and execute.")
    
-   [Managed Package Types](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm "Salesforce supports the creation and distribution of Apex through different types of packages. Understand the distinctions between package types, and recognize that Apex behavior can vary across them.")
