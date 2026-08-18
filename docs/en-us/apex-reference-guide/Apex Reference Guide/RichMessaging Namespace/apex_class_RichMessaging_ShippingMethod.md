---
doc_id: "apex_class_RichMessaging_ShippingMethod"
---

# ShippingMethod Class

Represents a shipping method listed in payment requests sent in enhanced Messaging channels.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## Example

```apex
public with sharing class MessagingShippingMethods {
    
    @InvocableMethod
    public static List> getShippingMethods(){
        Double amount = 0.25;
        List> result = new List>();
        
        List options = new List{
            new RichMessaging.ShippingMethod('doordash', amount, '1 hour delivery to your door', 'ddash'),
            new RichMessaging.ShippingMethod('UPS', amount, '2 days delivery', 'UPS')
        };
        result.add(options);
        return result;
    }
    
}
```

## See Also

- [ShippingMethod Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_constructors)
- [ShippingMethod Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_properties)

## ShippingMethod Constructors

The following are constructors for `ShippingMethod`.

## See Also

- [ShippingMethod(label, amount, detail, identifier)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_ctor)
- [ShippingMethod()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_ctor_2)

### ShippingMethod(label, amount, detail, identifier)

Creates a new instance of the `RichMessaging.ShippingMethod` class.

#### Signature

`public ShippingMethod(String label, Double amount, String detail, String identifier)`

#### Parameters

-   **label**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The label of the shipping method.
-   **amount**: Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.") The amount of the shipping method.
-   **detail**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Details about the shipping method.
-   **identifier**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The identifier of the shipping method.

### ShippingMethod()

Creates a new instance of the `RichMessaging.ShippingMethod` class.

#### Signature

`public ShippingMethod()`

## ShippingMethod Properties

The following are properties for `ShippingMethod`.

## See Also

- [amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_amount)
- [amountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_amountValue)
- [detail](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_detail)
- [detailValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_detailValue)
- [identifier](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_identifier)
- [identifierValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_identifierValue)
- [label](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_label)
- [labelValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_labelValue)
- [shippingMethodType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_RichMessaging_ShippingMethod_shippingMethodType)

### amount

The amount of the shipping method.

#### Signature

`public Double amount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### amountValue

The amount value of the shipping method.

#### Signature

`public Double amountValue {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### detail

Details about the shipping method.

#### Signature

`public String detail {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### detailValue

The detail value of the shipping method.

#### Signature

`public String detailValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### identifier

The identifier of the shipping method.

#### Signature

`public String identifier {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### identifierValue

The identifier value of the shipping method.

#### Signature

`public String identifierValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### label

The label of the shipping method.

#### Signature

`public String label {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelValue

The label value of the shipping method.

#### Signature

`public String labelValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### shippingMethodType

The shipping method type. Read only.

#### Signature

`public String shippingMethodType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
