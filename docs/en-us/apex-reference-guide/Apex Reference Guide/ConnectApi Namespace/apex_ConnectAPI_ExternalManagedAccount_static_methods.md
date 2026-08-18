---
doc_id: "apex_ConnectAPI_ExternalManagedAccount_static_methods"
---

# ExternalManagedAccount Class

Get externally managed accounts.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ExternalManagedAccount Methods

These methods are for `ExternalManagedAccount`. All methods are static.

## See Also

- [getCommunitiesExternalManagedAccounts(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getCommunitiesExternalManagedAccounts_1)
- [getCommunitiesExternalManagedAccounts(communityId, includeMyAccount)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getCommunitiesExternalManagedAccounts_2)
- [getExternalManagedAccounts(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getExternalManagedAccounts_1)
- [getExternalManagedAccounts(webstoreId, includeMyAccount)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getExternalManagedAccounts_2)

### getCommunitiesExternalManagedAccounts(communityId)

Get externally managed accounts available to the context user across all Experience Cloud sites.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalManagedAccountCollectionOutput getCommunitiesExternalManagedAccounts(String communityId)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

:::tip Note
Regardless of the ID specified, this method returns externally managed
              accounts available to the context user across all Experience Cloud sites.
:::

#### Return Value

Type: [`ConnectApi.ExternalManagedAccountCollectionOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")

### getCommunitiesExternalManagedAccounts(communityId, includeMyAccount)

Get externally managed accounts available to the context user, including the context user’s account, across all Experience Cloud sites.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalManagedAccountCollectionOutput getCommunitiesExternalManagedAccounts(String communityId, Boolean includeMyAccount)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

:::tip Note
Regardless of the ID specified, this method returns externally managed
              accounts available to the context user across all Experience Cloud sites.
:::

includeMyAccount

Type: Boolean

Specifies whether to return the context user’s account (`true`) or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.ExternalManagedAccountCollectionOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")

### getExternalManagedAccounts(webstoreId)

Get externally managed accounts for a store.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalManagedAccountCollectionOutput getExternalManagedAccounts(String webstoreId)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

#### Return Value

Type: `ConnectApi.ExternalManagedAccountCollectionOutput`

### getExternalManagedAccounts(webstoreId, includeMyAccount)

Get externally managed accounts, including the context user’s account, for a store.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ExternalManagedAccountCollectionOutput getExternalManagedAccounts(String webstoreId, Boolean includeMyAccount)`

#### Parameters

webstoreId

Type: String

ID of the webstore.

includeMyAccount

Type: Boolean

Specifies whether to return the context user’s account (`true`) or not (`false`). The default value is `false`.

#### Return Value

Type: [`ConnectApi.ExternalManagedAccountCollectionOutput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")
