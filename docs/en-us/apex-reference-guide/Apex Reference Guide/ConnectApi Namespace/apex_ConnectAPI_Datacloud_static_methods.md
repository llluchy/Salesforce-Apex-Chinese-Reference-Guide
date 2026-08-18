---
doc_id: "apex_ConnectAPI_Datacloud_static_methods"
---

# Datacloud Class

Purchase Data.com contact or company records, and retrieve purchase information.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

:::tip Note
When your Data.com Prospector or Data.com Clean contract expires, Data.com features,
          objects, and fields will be removed from your org.

        To support customers’ needs around compliance and to remain a leader in trust and
          privacy, Salesforce removed all contact data from the Data.com service on February 1,
          2021.

        For more information, see [Data.com Prospector and Clean
            Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1).
:::

## See Also

- [Datacloud Methods](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_methods)

## Datacloud Methods

These methods are for `Datacloud`. All methods are static.

## See Also

- [getCompaniesFromOrder(orderId, pageSize, page)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getCompaniesFromOrder_1)
- [getCompany(companyId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getCompany_1)
- [getContact(contactId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getContact_1)
- [getContactsFromOrder(orderId, page, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getContactsFromOrder_1)
- [getOrder(orderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getOrder_1)
- [getUsage(userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getUsage_1)
- [postOrder(orderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_postOrder_1)

### getCompaniesFromOrder(orderId, pageSize, page)

Get a list of purchased company records for an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudCompanies getCompaniesFromOrder(String orderId, String pageSize, String page)`

#### Parameters

orderId

Type: String

ID of an order.

page

Type: Integer

Number of the page that you want returned.

pageSize

Type: Integer

Number of companies to show on a page. The default pageSize is 25.

#### Return Value

Type: `ConnectApi.DatacloudCompanies`

### getCompany(companyId)

Get a company record.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudCompany getCompany(String companyId)`

#### Parameters

companyId

Type: String

ID of a company in the Data.com database.

#### Return Value

Type: `ConnectApi.DatacloudCompany`

### getContact(contactId)

Get a contact.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudContact getContact(String contactId)`

#### Parameters

contactId

Type: String

ID of a contact in the Data.com database.

#### Return Value

Type: `ConnectApi.DatacloudContact`

### getContactsFromOrder(orderId, page, pageSize)

Get a list of purchased contacts for an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudContacts getContactsFromOrder(String orderId, String page, String pageSize)`

#### Parameters

orderId

Type: String

ID of an order.

page

Type: Integer

Number of the page that you want returned.

pageSize

Type: Integer

Number of contacts to show on a page. The default pageSize is 25.

#### Return Value

Type: `ConnectApi.DatacloudContacts`

### getOrder(orderId)

Get an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudOrder getOrder(String orderId)`

#### Parameters

orderId

Type: String

ID of an order.

#### Return Value

Type: `ConnectApi.DatacloudOrder`

### getUsage(userId)

Get purchase usage information for a user.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudPurchaseUsage getUsage(String userId)`

#### Parameters

userId

Type: String

ID of a user.

#### Return Value

Type: `ConnectApi.DatacloudPurchaseUsage`

### postOrder(orderInput)

Purchase records that are listed in an input file.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.DatacloudOrder postOrder(ConnectApi.DatacloudOrderInput orderInput)`

#### Parameters

orderInput

Type: `ConnectApi.DatacloudOrderInput`

A list that contains IDs for the contacts or companies that you want to see.

#### Return Value

Type: `ConnectApi.DatacloudOrder`

#### Example

```apex
ConnectApi.DatacloudOrderInput inputOrder=new ConnectApi.DatacloudOrderInput();
ListString> ids=new ListString>();
ids.add('1234');
inputOrder.companyIds=ids;
ConnectApi.DatacloudOrder datacloudOrderRep = ConnectApi.Datacloud.postOrder(inputOrder);
```
