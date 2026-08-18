---
doc_id: "apex_methods_system_userinfo"
---

# UserInfo Class

Contains methods for obtaining information about the context user.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## UserInfo Methods

The following are methods for `UserInfo`. All methods are static.

## See Also

- [getCurrentUvid()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getCurrentUvid)
- [getDefaultCurrency()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getDefaultCurrency)
- [getFirstName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getFirstName)
- [getLanguage()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getLanguage)
- [getLastName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getLastName)
- [getLocale()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getLocale)
- [getName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getName)
- [getOrganizationId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getOrganizationId)
- [getOrganizationName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getOrganizationName)
- [getProfileId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getProfileId)
- [getSessionId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getSessionId)
- [getTimeZone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getTimeZone)
- [getUiTheme()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUiTheme)
- [getUiThemeDisplayed()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUiThemeDisplayed)
- [getUserEmail()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserEmail)
- [getUserId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserId)
- [getUserName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserName)
- [getUserRoleId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserRoleId)
- [getUserType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserType)
- [hasPackageLicense(packageId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#hasPackageLicense)
- [isCurrentUserLicensed(namespace)](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isCurrentUserLicensed)
- [isCurrentUserLicensedForPackage(packageID)](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isCurrentUserLicensedForPackage)
- [isMultiCurrencyOrganization()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isMultiCurrencyOrganization)

### getCurrentUvid()

Returns the context guest user’s unique visitor ID (UVID).

#### Signature

`public static String getCurrentUvid()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a UVID isn’t available, returns `null`.

### getDefaultCurrency()

Returns the context user's default currency code for multiple currency organizations or the organization's currency code for single currency organizations.

#### Signature

`public static String getDefaultCurrency()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

:::tip Note
For Apex saved using Salesforce API version 22.0 or earlier, `getDefaultCurrency` returns `null` for single currency organizations.
:::

### getFirstName()

Returns the context user's first name

#### Signature

`public static String getFirstName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLanguage()

Returns the context user's language

#### Signature

`public static String getLanguage()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLastName()

Returns the context user's last name

#### Signature

`public static String getLastName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLocale()

Returns the context user's locale.

#### Signature

`public static String getLocale()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String result = UserInfo.getLocale();
System.assertEquals('en_US', result);
```

### getName()

Returns the context user's full name. The format of the name depends on the language preferences specified for the organization.

#### Signature

`public static String getName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The format is one of the following:

-   FirstName LastName
-   LastName, FirstName

### getOrganizationId()

Returns the context organization's ID.

#### Signature

`public static String getOrganizationId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOrganizationName()

Returns the context organization's company name.

#### Signature

`public static String getOrganizationName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getProfileId()

Returns the context user's profile ID.

#### Signature

`public static String getProfileId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSessionId()

Returns the session ID for the current session.

#### Signature

`public static String getSessionId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

You can use `getSessionId()` both synchronously and asynchronously. In asynchronous Apex (Batch, Future, Queueable, or Scheduled Apex), this method returns the session ID only when the code is run by an active, valid user. When the code is run by an internal user, such as the automated process user or a proxy user, the method returns `null`.

As a best practice, ensure that your code handles both cases: when a session ID is or is not available.

:::tip Note
If you use a JWT-based access token for session authentication, you can’t use `UserInfo.getSessionId()`. To use `UserInfo.getSessionId()`, use an opaque access token
        instead. Ensure that the “Issue JSON Web Token (JWT)-based access tokens for named users”
        setting isn’t selected for your external client app or connected app.
:::

### getTimeZone()

Returns the current user’s local time zone.

#### Signature

`public static System.TimeZone getTimeZone()`

#### Return Value

Type: [System.TimeZone](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_methods_system_timezone "Represents a time zone. Contains methods for creating a new time zone and obtaining time zone properties, such as the time zone ID, offset, and display name.")

#### Example

```apex
TimeZone tz = 
  UserInfo.getTimeZone();
System.debug(
  'Display name: ' + 
  tz.getDisplayName());
System.debug(
  'ID: ' + 
  tz.getID());
```

### getUiTheme()

Returns the preferred theme for the current user. Use `getUiThemeDisplayed` to determine the theme actually displayed to the current user.

#### Signature

`public static String getUiTheme()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The preferred theme for the current user.

Valid values include:

-   `Theme1`—Obsolete Salesforce theme
-   `Theme2`—Salesforce Classic 2005 user interface theme
-   `Theme3`—Salesforce Classic 2010 user interface theme
-   `Theme4d`—Modern “Lightning Experience” Salesforce theme
-   `Theme4t`—Salesforce mobile app theme
-   `Theme4u`—Lightning Console theme
-   `PortalDefault`—Salesforce Customer Portal theme that applies to Customer Portals only and not to Experience Builder sites
-   `Webstore`—AppExchange theme

### getUiThemeDisplayed()

Returns the theme being displayed for the current user.

#### Signature

`public static String getUiThemeDisplayed()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The theme being displayed for the current user

Valid values include:

-   `Theme1`—Obsolete Salesforce theme
-   `Theme2`—Salesforce Classic 2005 user interface theme
-   `Theme3`—Salesforce Classic 2010 user interface theme
-   `Theme4d`—Modern “Lightning Experience” Salesforce theme
-   `Theme4t`—Salesforce mobile app theme
-   `Theme4u`—Lightning Console theme
-   `PortalDefault`—Salesforce Customer Portal theme that applies to Customer Portals only and not to Experience Builder sites
-   `Webstore`—AppExchange theme

### getUserEmail()

Returns the current user’s email address.

#### Signature

`public static String getUserEmail()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String emailAddress = 
  UserInfo.getUserEmail();
System.debug(
  'Email address: ' + 
  emailAddress);
```

### getUserId()

Returns the context user's ID

#### Signature

`public static String getUserId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserName()

Returns the context user's login name.

#### Signature

`public static String getUserName()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserRoleId()

Returns the context user's role ID.

#### Signature

`public static String getUserRoleId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserType()

Returns the context user's type.

#### Signature

`public static String getUserType()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### hasPackageLicense(packageId)

Returns `true` if the context user has a license to the managed package via a package license only. Otherwise, returns `false`.

#### Signature

`public static Boolean hasPackageLicense(ID packageID)`

#### Parameters

-   **packageID**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCurrentUserLicensed(namespace)

Returns `true` if the context user has a license to any managed package denoted by the namespace. Otherwise, returns `false`.

#### Signature

`public static Boolean isCurrentUserLicensed(String namespace)`

#### Parameters

-   **namespace**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A `TypeException` is thrown if namespace is an invalid type.

### isCurrentUserLicensedForPackage(packageID)

Returns `true` if the context user has a license to the managed package denoted by the package ID. Otherwise, returns `false`. If the context user has access, it’s determined either via the package license or a namespace permission set license for the package namespace.

#### Signature

`public static Boolean isCurrentUserLicensedForPackage(ID packageID)`

#### Parameters

-   **packageID**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Retrieve packageID at runtime, with the [getCurrentPackageId()](atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm#apex_System_Packaging_getCurrentPackageId "Returns the context packageID in managed and unlocked packages.") method. Then, use packageId to confirm that the contextual user is licensed to use that managed package.

A `TypeException` is thrown if packageID is an invalid type or is the ID of an unlocked or unmanaged package.

## See Also

- [Set Up and Maintain Your Salesforce Organization: Manage Licenses for Installed Packages](https://help.salesforce.com/s/articleView?id=xcloud.distribution_managing_licenses.htm&amp;type=5&amp;language=en_US)

### isMultiCurrencyOrganization()

Specifies whether the organization uses multiple currencies.

#### Signature

`public static Boolean isMultiCurrencyOrganization()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
