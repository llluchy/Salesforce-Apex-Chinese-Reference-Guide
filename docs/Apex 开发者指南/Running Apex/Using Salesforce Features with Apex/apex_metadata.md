---
doc_id: "apex_metadata"
---

# Metadata

Salesforce uses metadata types and components to represent org configuration and customization. Metadata is used for org settings that admins control, or configuration information applied by installed apps and packages.

Use the classes in the `Metadata` namespace to access metadata from within Apex code for tasks that include:

-   Customizing app installs or upgrades—During or after an install (or upgrade), your app can create or update metadata to let users configure your app.
-   Customizing apps after installation—After your app is installed, you can use metadata in Apex to let admins configure your app using the UI that your app provides rather than having admins manually use the standard Salesforce setup UI.
-   Securely accessing protected metadata—Update metadata that your app uses internally without exposing these types and components to your users.
-   Creating custom configuration tools—Use metadata in Apex to provide custom tools for admins to customize apps and packages.

Metadata access in Apex is available for Apex classes using API version 40.0 and later.

For more information on metadata types and components, see the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm "HTML (New Window)")* and [Custom Metadata Types](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_overview.htm&language=en_US "HTML (New Window)").

## See Also

- [Retrieving and Deploying Metadata](atlas.en-us.apexcode.meta/apexcode/apex_metadata_retrieve_deploy.htm)
- [Supported Metadata Types](atlas.en-us.apexcode.meta/apexcode/apex_metadata_supported_types.htm)
- [Security Considerations](atlas.en-us.apexcode.meta/apexcode/apex_metadata_security.htm)
- [Testing Metadata Deployments](atlas.en-us.apexcode.meta/apexcode/apex_metadata_testing.htm)
- [Apex Reference Guide: Metadata Namespace](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_namespace_Metadata.htm)
