---
doc_id: "apex_methods_system_version"
---

# Version Class

Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release.

A called component can check the version against which the caller was compiled using the [`System.requestVersion`](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_requestVersion "Returns a two-part version that contains the major and minor version numbers of a package. Applies to first-generation managed packages.") method and behave differently depending on the caller’s expectations. This allows you to continue to support existing behavior in classes and triggers in previous package versions while continuing to evolve the code.

The value returned by the `System.requestVersion` method is an instance of this class with a two-part version number containing a major and a minor number. Since the `System.requestVersion` method doesn’t return a patch number, the patch number in the returned Version object is null.

The `System.Version` class can also hold also a three-part version number that includes a patch number.

See [Version Apex Code Behavior](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_manpkgs_behavior.htm "HTML (New Window)") in the *Apex Developer Guide*.

## Example

This example shows how to use the methods in this class, along with the `requestVersion` method, to determine the managed package version of the code that is calling your package.

```apex
if (System.requestVersion() == new Version(1,0))
{
    // Do something
}
if ((System.requestVersion().major() == 1) 
     && (System.requestVersion().minor() > 0)
     && (System.requestVersion().minor() // Do something different for versions 1.1 to 1.9
}
else if (System.requestVersion().compareTo(new Version(2,0)) >= 0)
{
    // Do something completely different for versions 2.0 or greater
}
```

## See Also

- [Version Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_constructors)
- [Version Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_methods)

## Version Constructors

The following are constructors for `Version`.

## See Also

- [Version(major, minor)](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_ctor_2)
- [Version(major, minor, patch)](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_ctor)

### Version(major, minor)

Creates a new instance of the `Version` class as a two-part package version using the specified major and minor version numbers.

#### Signature

`public Version(Integer major, Integer minor)`

#### Parameters

-   **major**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The major version number.
    
-   **minor**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The minor version number.
    

### Version(major, minor, patch)

Creates a new instance of the `Version` class as a three-part package version using the specified major, minor, and patch version numbers.

#### Signature

`public Version(Integer major, Integer minor, Integer patch)`

#### Parameters

-   **major**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The major version number.
    
-   **minor**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The minor version number.
    
-   **patch**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The patch version number.
    

## Version Methods

The following are methods for `Version`. All are instance methods.

## See Also

- [compareTo(version)](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_compareTo)
- [major()](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_major)
- [minor()](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_minor)
- [patch()](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_patch)

### compareTo(version)

Compares the current version with the specified version.

#### Signature

`public Integer compareTo(System.Version version)`

#### Parameters

-   **version**:
    
    Type: [System.Version](#apex_methods_system_version "Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Returns one of the following values:

-   zero if the current package version is equal to the specified package version
-   an Integer value greater than zero if the current package version is greater than the specified package version
-   an Integer value less than zero if the current package version is less than the specified package version

#### Usage

If a two-part version is being compared to a three-part version, the patch number is ignored and the comparison is based only on the major and minor numbers.

### major()

Returns the major package version of the of the calling code.

#### Signature

`public Integer major()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### minor()

Returns the minor package version of the calling code.

#### Signature

`public Integer minor()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### patch()

Returns the patch package version of the calling code or `null` if there is no patch version.

#### Signature

`public Integer patch()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
