---
doc_id: "apex_class_System_Domain"
---

# Domain Class

Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the Domain class to obtain information about the domains that Salesforce hosts for your org. This class only applies to domains hosted by Salesforce, and can’t be used to generate a new domain.

## Example

This code uses the [System.DomainParser](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm#apex_class_System_DomainParser "Use the DomainParser class to parse a domain that Salesforce hosts for the org and extract information about the domain.") class to parse a hostname. It then gets the associated domain type.

System.Domain d = DomainParser.parse('mycompany.lightning.force.com'); String myDomainName = d.getMyDomainName(); System.DomainType domainType = d.getDomainType();

## See Also

- [Domain Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_System_Domain_methods)

## Domain Methods

The following are methods for `Domain`.

## See Also

- [getDomainType()](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_System_Domain_getDomainType)
- [getMyDomainName()](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_System_Domain_getMyDomainName)
- [getPackageName()](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_System_Domain_getPackageName)
- [getSandboxName()](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_System_Domain_getSandboxName)
- [getSitesSubdomainName()](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_System_Domain_getSitesSubdomainName)
- [enhanced domains](https://help.salesforce.com/s/articleView?id=domain_name_enhanced.htm&amp;language=en_US)

### getDomainType()

Returns the domain’s type, such as `CONTENT_DOMAIN`, `EXPERIENCE_CLOUD_SITES_DOMAIN`, or `LIGHTNING_DOMAIN`.

#### Signature

`public System.DomainType getDomainType()`

#### Return Value

Type: [System.DomainType](atlas.en-us.apexref.meta/apexref/apex_enum_System_DomainType.htm "Specifies the domain type for a System.Domain.")

### getMyDomainName()

Returns the domain’s My Domain name.

#### Signature

`public String getMyDomainName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getPackageName()

For a domain that includes the package name, such as a Lightning Component domain or Visualforce page domain, returns the package name. For a domain that doesn’t contain a package name, this method returns `null`.

#### Signature

`public String getPackageName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSandboxName()

For a sandbox org domain, returns the sandbox name. For a production org domain, returns `null`.

#### Signature

`public String getSandboxName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSitesSubdomainName()

For a system-managed Experience Cloud site domain or Salesforce Site domain, returns the sites subdomain name. If [enhanced domains](https://help.salesforce.com/s/articleView?id=domain_name_enhanced.htm&language=en_US) are enabled, this method always returns `null`. When enhanced domains are enabled, the org’s My Domain name is the subdomain for the system-managed domains for Experience Cloud sites and Salesforce Sites domains.

#### Signature

`public String getSitesSubdomainName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
