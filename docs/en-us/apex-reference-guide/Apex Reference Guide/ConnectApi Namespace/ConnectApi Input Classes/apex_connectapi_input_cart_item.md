---
doc_id: "apex_connectapi_input_cart_item"
---

# ConnectApi.CartItemInput

An item in a cart.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `cartDeliveryGroupId` | String | ID of the cart delivery group. | Optional | 59.0 |
| `customFields` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`SObject`](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\> | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the CartItem sObject is supported. Field-level security rules from the [shopper profile](https://help.salesforce.com/s/articleView?id=commerce.comm_create_shopper_profile.htm&type=5&language=en_US) are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. The `customFields` property isn't supported in stores built on an Aura template. See [Create a Cart and Cart Item with Custom Fields in a Commerce Store](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/connectapi_examples_commerce_cart_custom.htm). | Optional | 61.0 |
| `productId` | String | ID of the product. | Required when adding an item to a cart
Not supported when updating a cart item

 | 49.0 |
| `productSellingModelId` | String | The ID of the product selling model associated with Product2. | Optional | 59.0 |
| `quantity` | String | Quantity of the cart item. Use a value that can be converted to BigDecimal. | Required | 49.0 |
| `subscriptionTerm` | Integer | The total number of terms in the subscription period. | Optional | 59.0 |
| `subType` | [`ConnectApi.​CartItemSubType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#cartItemSubTypeEnum) | Subtype of item in a cart.Possible values are:

-   `Bonus`—A bonus product.
-   `Gift`—A gift product.

 | Optional | 64.0 |
| `type` | [`ConnectApi.​CartItemType`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#cartItemTypeEnum) | Type of item in a cart. Value is `Product`.

-   `DeliveryCharge`
-   `Product`

 | Required when adding an item to a cart

Not supported when updating a cart item

 | 49.0 |
