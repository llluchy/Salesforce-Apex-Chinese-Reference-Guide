---
doc_id: "apex_connectapi_input_cart"
---

# ConnectApi.CartInput

A cart.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `currencyIsoCode` | String | Currency ISO code of the cart. | Optional | 57.0 |
| `customFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`SObject`](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\> | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the WebCart sObject is supported. Field-level security rules from the [shopper profile](https://help.salesforce.com/s/articleView?id=commerce.comm_create_shopper_profile.htm&type=5&language=en_US) are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. See [Create a Cart and Cart Item with Custom Fields in a Commerce Store](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_commerce_cart_custom.htm). | Optional | 61.0 |
| `effective​AccountId` | String | ID of the buyer account or guest buyer profile for which the request is made.If unspecified, the default value is determined from context. | Optional | 49.0 |
| `isSecondary` | Boolean | Specifies whether the cart is secondary (`true`) or not (`false`).If unspecified, defaults to `false`. | Optional | 53.0 |
| `name` | String | Name of the cart. The name can have up to 250 Unicode characters. Avoid using special characters in the cart name, including `\"'<>@!$#&%\{[]}`.
If unspecified, a cart name is generated automatically using the pattern, `Untitled Cart - [Date] [Time]`.

 | Optional | 49.0 |
| `orderOwnerId` | String | ID of the owner of the order. | Optional | 58.0 |
| `type` | [`ConnectApi.​CartType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#cartTypeEnum) | Type of cart. Vaues are:

-   `Cart`—Cart created by a customer.
-   `PayNowReadOnly`—Clone of a Template cart that the customer can check out with using the Pay Now feature.
-   `Template`—Cart created by an internal user.

If unspecified, defaults to `Cart`. | Optional | 49.0 |
| `typeAsString` | String | Type of the cart provided as a string. | Optional | 59.0 |
