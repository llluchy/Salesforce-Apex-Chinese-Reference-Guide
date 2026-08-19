---
doc_id: "apex_callouts_named_credentials_merge_fields"
---

# Merge Fields for Apex Callouts That Use Named Credentials

To construct the HTTP headers and request bodies of callouts to endpoints that are specified as named credentials, use these merge fields in your Apex code.

| Merge Field | Description |
| --- | --- |
| `{!$Credential.Username}`
`{!$Credential.Password}`

 | Username and password of the running user. Available only if the named credential uses password authentication. For an example, see [Non-standard authentication with username and password](#ex_username_password). |
| `{!$Credential.OAuthToken}` | OAuth token of the running user. Available only if the named credential uses OAuth authentication. For an example, see [OAuth authentication](#ex_oauth_token). |
| `{!$Credential.AuthorizationMethod}` | Valid values depend on the authentication protocol of the named credential.

-   `Basic`—password authentication
-   `Bearer`—OAuth 2.0
-   `null`—no authentication

 |
| `{!$Credential.AuthorizationHeaderValue}` | Valid values depend on the authentication protocol of the named credential.

-   `Base-64 encoded username and password`—password authentication
-   `OAuth token`—OAuth 2.0
-   `null`—no authentication

 |
| `{!$Credential.OAuthConsumerKey}` | Consumer key. Available only if the named credential uses OAuth authentication. |

## Using {!$Credential.Username} and {!$Credential.Password} for non-standard authentication

```apex
// non-standard authentication
req.setHeader('X-Username', '{!$Credential.Username}');
req.setHeader('X-Password', '{!$Credential.Password}');
```

## Using {!$Credential.OAuthToken} for OAuth authentication

```apex
req.setHeader('Authorization', '{!$Credential.OAuthToken}');
```

When you use merge fields to construct HTTP headers and request bodies, keep these considerations in mind.

-   To allow Apex code to use merge fields to populate the HTTP header and request body with org data when the callout is made, a Salesforce admin must enable **Allow Merge Fields in HTTP Header** and **Allow Merge Fields in HTTP Body** on the named credential. See [Create or Edit a Named Credential](https://help.salesforce.com/s/articleView?id=sf.nc_create_edit_named_credential.htm&language=en_US) in Salesforce Help.
-   To access or input custom headers, use Connect REST API. See [Named Credentials Resources](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/connect_resources_named_credentials_resources.htm "HTML (New Window)") in the Connect REST API Developer Guide.
-   When you use these merge fields in HTTP request bodies of callouts, you can apply the `HTMLENCODE` formula function to escape special characters. The formula must start with HTMLENCODE, and other formula functions aren't supported. `HTMLENCODE` can’t be used on merge fields in HTTP headers. This example escapes special characters that are in the credentials.

```apex
req.setBody('Username:{!HTMLENCODE($Credential.Username)}')
req.setBody('Password:{!HTMLENCODE($Credential.Password)}')
```

-   When you use these merge fields in SOAP API calls, OAuth access tokens aren’t refreshed.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm)

#### See Also

-   [Custom Headers and Bodies of Apex Callouts That Use Named Credentials](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm "Salesforce generates a standard authorization header for each callout to a named-credential-defined endpoint, but you can disable this option. Your Apex code can also use merge fields to construct each callout’s HTTP header and body.")
    
-   [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.")
    
-   [*Knowledge Article*: Named credential OAuth token doesn't get automatically refreshed with Salesforce SOAP API endpoint](https://help.salesforce.com/articleView?id=Named-credential-oauth-token-doesn-t-get-automatically-refreshed-with-Salesforce-SOAP-API-end-point&type=1&language=en_US "Knowledge Article: Named credential OAuth token doesn't get
    automatically refreshed with Salesforce SOAP API endpoint - HTML (New Window)")
