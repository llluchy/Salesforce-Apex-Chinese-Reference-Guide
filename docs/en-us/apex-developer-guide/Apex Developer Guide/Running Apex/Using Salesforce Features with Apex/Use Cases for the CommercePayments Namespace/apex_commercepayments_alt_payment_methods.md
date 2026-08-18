---
doc_id: "apex_commercepayments_alt_payment_methods"
---

# Alternative Payment Methods

An alternative payment method allows customers to store and represent payment method information not represented by another pre-defined payment method such as `CardPaymentMethod` or `DigitalWallet`. Common examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. Alternative payment methods are available in API v51.0 and later.

<table class="editionTable" border="0" summary="Salesforce editions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="subHead">Available in: Salesforce Spring '21 and later</td></tr></tbody></table>

  

Create a unique record type for each type of alternative payment method in your org. This way, each of your alternative payment methods can show different picklist values and page layouts based on the method provider and gateway provider’s requirements. For example, you could have one alternative payment method record type for direct debit and a different record type for cash on deliver.

We also recommend creating a `GtwyProviderPaymentMethodType` for each of your unique alternative payment method record types.

AlternativePaymentMethod has the private sharing model enabled as default for both internal and external users. Only the record owner and users with higher ownership have Read, Edit, and Delete access.

## Example

Let's say you wanted to make an alternative payment method for GiroPay. First, create an `AlternativePaymentMethod` record type.

**New RecordType**

```apex
/services/data/v51.0/sobjects/RecordType
```

```apex
{
 "Name" : "Giro Pay",
 "DeveloperName" : "GiroPay",
 "SobjectType" : "AlternativePaymentMethod"
}
```

Next, create an alternative payment method record for the `AlternativePaymentMethod` record type.

**New AlternativePaymentMethod**

```apex
/services/data/v51.0/sobjects/AlternativePaymentMethod
```

 

```apex
{
 "ProcessingMode": "External",
 "status":"Active",
 "GatewayToken":"mHkDsh0oIA3mnWjo9UL",
"NickName" : "MyGiroPay",
"RecordTypeId" : "{record_type_id}"
}
```

You can also create a gateway provider payment method type.

**New GtwyProvPaymentMethodType**

```apex
{
 "PaymentGatewayProviderId": "XXXXXXXXXXXXXXX",
 "PaymentMethodType":"AlternativePaymentMethod",
 "GtwyProviderPaymentMethodType" : "PM_Giro",
 "DeveloperName" : "DevName",
 "MasterLabel" : "MasterLabel",
 "RecordTypeId" : "{record_type_id}"
}
```
