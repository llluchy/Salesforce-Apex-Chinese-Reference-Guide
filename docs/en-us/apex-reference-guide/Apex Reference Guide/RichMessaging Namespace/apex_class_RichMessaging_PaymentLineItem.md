---
doc_id: "apex_class_RichMessaging_PaymentLineItem"
---

# PaymentLineItem Class

Represents a payment line item in payment requests sent in enhanced Messaging channels. 

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## Example

```apex
public with sharing class MessagingPaymentLineItems {
    
    @InvocableMethod
    public static List> getLineItems() {
        Double amount = 0.25;
        List> result = new List>();
        RichMessaging.PaymentLineItem pizza = new RichMessaging.PaymentLineItem('pizza', amount);
        RichMessaging.PaymentLineItem pasta = new RichMessaging.PaymentLineItem('pasta', amount);
        pizza.statusValue = RichMessaging.PaymentItemStatus.FinalCost;
        pasta.statusValue = RichMessaging.PaymentItemStatus.FinalCost;
        
        List options = new List{
            pizza, pasta
        };
        result.add(options);
        return result;
    }
    
}
```

## See Also

- [PaymentLineItem Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_constructors)
- [PaymentLineItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_properties)
- [PaymentLineItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_methods)

## PaymentLineItem Constructors

The following are constructors for `PaymentLineItem`.

## See Also

- [PaymentLineItem(label, amount, timing)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_ctor)
- [PaymentLineItem(label, amount)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_ctor_2)
- [PaymentLineItem()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_ctor_3)

### PaymentLineItem(label, amount, timing)

Creates a new instance of the `RichMessaging.PaymentLineItem` class.

#### Signature

`public PaymentLineItem(String label, Double amount, RichMessaging.AbstractTiming timing)`

#### Parameters

-   **label**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The label of the payment line item.
-   **amount**: Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.") The amount of the payment line item.
-   **timing**: Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.") The timing of the payment line item.

### PaymentLineItem(label, amount)

Creates a new instance of the `RichMessaging.PaymentLineItem` class.

#### Signature

`public PaymentLineItem(String label, Double amount)`

#### Parameters

-   **label**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") The label of the payment line item.
-   **amount**: Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.") The amount of the payment line item.

### PaymentLineItem()

Creates a new instance of the `RichMessaging.PaymentLineItem` class.

#### Signature

`public PaymentLineItem()`

## PaymentLineItem Properties

The following are properties for `PaymentLineItem`.

## See Also

- [amount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_amount)
- [amountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_amountValue)
- [automaticReloadPaymentThresholdAmount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_automaticReloadPaymentThresholdAmount)
- [automaticReloadPaymentThresholdAmountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_automaticReloadPaymentThresholdAmountValue)
- [commerce](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_commerce)
- [commerceValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_commerceValue)
- [discount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_discount)
- [discountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_discountValue)
- [label](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_label)
- [labelValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_labelValue)
- [lineItemType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_lineItemType)
- [quantity](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_quantity)
- [quantityValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_quantityValue)
- [saleAmount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_saleAmount)
- [saleAmountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_saleAmountValue)
- [status](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_status)
- [statusValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_statusValue)
- [timing](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_timing)
- [timingValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_RichMessaging_PaymentLineItem_timingValue)

### amount

The amount of the payment line item.

#### Signature

`public Double amount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### amountValue

The amount value of the payment line item.

#### Signature

`public Double amountValue {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### automaticReloadPaymentThresholdAmount

The automatic reload payment threshold amount of the payment line item.

#### Signature

`public Double automaticReloadPaymentThresholdAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### automaticReloadPaymentThresholdAmountValue

The automatic reload payment threshold amount value of the payment line item.

#### Signature

`public Double automaticReloadPaymentThresholdAmountValue {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### commerce

The commerce attributes of the payment line item.

#### Signature

`public RichMessaging.OrderItemCommerceAttributes commerce {get; set;}`

#### Property Value

Type: [RichMessaging.OrderItemCommerceAttributes](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderItemCommerceAttributes.htm#apex_class_RichMessaging_OrderItemCommerceAttributes "Represents the commerce attributes of an order item.")

### commerceValue

The commerce attributes variable for the payment line item.

#### Signature

`public RichMessaging.OrderItemCommerceAttributes commerceValue {get; set;}`

#### Property Value

Type: [RichMessaging.OrderItemCommerceAttributes](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_OrderItemCommerceAttributes.htm#apex_class_RichMessaging_OrderItemCommerceAttributes "Represents the commerce attributes of an order item.")

### discount

The discount applied to the payment line item.

#### Signature

`public RichMessaging.Discount discount {get; set;}`

#### Property Value

Type: RichMessaging.Discount

### discountValue

The discount variable for the payment line item.

#### Signature

`public RichMessaging.Discount discountValue {get; set;}`

#### Property Value

Type: RichMessaging.Discount

### label

The label of the payment line item.

#### Signature

`public String label {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelValue

The label value of the payment line item.

#### Signature

`public String labelValue {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lineItemType

The line item type of the payment line item. Read-only variable.

#### Signature

`public String lineItemType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### quantity

The quantity of the payment line item.

#### Signature

`public Integer quantity {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### quantityValue

The quantity variable for the payment line item.

#### Signature

`public Integer quantityValue {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### saleAmount

The sale amount of the payment line item.

#### Signature

`public Double saleAmount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### saleAmountValue

The sale amount variable for the payment line item.

#### Signature

`public Double saleAmountValue {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### status

The status of the payment line item.

#### Signature

`public String status {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### statusValue

The status value of the payment line item.

#### Signature

`public RichMessaging.PaymentItemStatus statusValue {get; set;}`

#### Property Value

Type: [RichMessaging.PaymentItemStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentItemStatus.htm "Represents the status of a payment item in payment requests sent in enhanced Messaging channels. ")

### timing

The timing of the payment line item.

#### Signature

`public RichMessaging.AbstractTiming timing {get; set;}`

#### Property Value

Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.")

### timingValue

The timing value of the payment line item.

#### Signature

`public RichMessaging.AbstractTiming timingValue {get; set;}`

#### Property Value

Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.")

## PaymentLineItem Methods

The following are methods for `PaymentLineItem`.
