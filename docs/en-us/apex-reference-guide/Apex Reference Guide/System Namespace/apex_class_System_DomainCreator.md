---
doc_id: "apex_class_System_DomainCreator"
---

# DomainCreator Class

Use the DomainCreator class to return a hostname specific to the org. For example, get the org’s Visualforce hostname. Values are returned as a hostname, such as `MyDomainName.lightning.force.com`.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Examples

This example code fetches the org’s My Domain login hostname and the Visualforce hostname for the `uat` package.

//Get the My Domain login hostname String myDomainHostname = DomainCreator.getOrgMyDomainHostname(); //Get the Visualforce hostname String vfHostname = DomainCreator.getVisualforceHostname('uat');

In this case, in a production org with a My Domain name of `mycompany`, `myDomainHostname` returns `mycompany.my.salesforce.com`. And in the same production org, `vfHostname` returns `mycompany--uat.vf.force.com`.

This example code creates a link to a Salesforce Account record. It gets the Lightning hostname associated with this org. It then gets the Account record ID and uses concatenation to build the link URL.

//Get the org’s Lightning hostname String myLightningHostname = DomainCreator.getLightningHostname(); //Get the ID of a record Account with the name ‘Acme’ Account acct = \[SELECT Id FROM Account WHERE Name = 'Acme' LIMIT 1\]; //Build the URL to view the account record String fullRecordURL = 'https://' + myLightningHostname + '/lightning/r/Account/' + acct.Id + '/view';

## See Also

- [DomainCreator Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_methods)

## DomainCreator Methods

The following are methods for `DomainCreator`.

## See Also

- [getContentHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getContentHostname)
- [getExperienceCloudSitesBuilderHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesBuilderHostname)
- [getExperienceCloudSitesHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesHostname)
- [getExperienceCloudSitesLivePreviewHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesLivePreviewHostname)
- [getExperienceCloudSitesPreviewHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesPreviewHostname)
- [getLightningContainerComponentHostname(packageName)](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getLightningContainerComponentHostname)
- [getLightningHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getLightningHostname)
- [getOrgMyDomainHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getOrgMyDomainHostname)
- [getSalesforceSitesHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getSalesforceSitesHostname)
- [getSetupHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getSetupHostname)
- [getVisualforceHostname(packageName)](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getVisualforceHostname)

### getContentHostname()

Returns the hostname for content stored in the org, such as files.

#### Signature

`public static String getContentHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesBuilderHostname()

Returns the hostname to access Experience Builder for the org’s Experience Cloud sites.

#### Signature

`public static String getExperienceCloudSitesBuilderHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesHostname()

Returns the system-managed hostname for the org’s Experience Cloud sites, such as `ExperienceCloudSitesSubdomainName.force.com`. If Digital Experiences aren’t enabled, this method throws an `InvalidParameterValueException`.

#### Signature

`public static String getExperienceCloudSitesHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesLivePreviewHostname()

Returns the hostname to access Experience Builder Live Preview for the org’s Experience Cloud sites.

#### Signature

`public static String getExperienceCloudSitesLivePreviewHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesPreviewHostname()

Returns the hostname to access Experience Builder Preview for the org’s Experience Cloud sites.

#### Signature

`public static String getExperienceCloudSitesPreviewHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningContainerComponentHostname(packageName)

Returns the hostname for the org’s Lightning Container Components.

#### Signature

`public static String getLightningContainerComponentHostname(String packageName)`

#### Parameters

-   **packageName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The package name for this component.
    
    If packageName is `null`, this method uses the org’s namespace prefix as the package name. Otherwise, it uses the default namespace.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningHostname()

Returns the hostname for the org’s Lightning pages.

#### Signature

`public static String getLightningHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOrgMyDomainHostname()

Returns the hostname for the org’s My Domain login domain.

#### Signature

`public static String getOrgMyDomainHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSalesforceSitesHostname()

Returns the hostname for the org’s Salesforce Sites. If Salesforce Sites aren’t enabled, this method throws an `InvalidParameterValueException`.

#### Signature

`public static String getSalesforceSitesHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSetupHostname()

Returns the hostname for the org’s setup domain, which hosts Setup pages in Salesforce.

#### Signature

`public static String getSetupHostname()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getVisualforceHostname(packageName)

Returns the hostname for the org’s Visualforce pages.

#### Signature

`public static String getVisualforceHostname(String packageName)`

#### Parameters

-   **packageName**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The package name for this component.
    
    If packageName is `null`, this method uses the org’s namespace prefix as the package name. Otherwise, it uses the default namespace.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
