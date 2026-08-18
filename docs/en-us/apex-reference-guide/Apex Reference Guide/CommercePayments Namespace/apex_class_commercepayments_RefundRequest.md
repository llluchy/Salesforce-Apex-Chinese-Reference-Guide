---
doc_id: "apex_class_commercepayments_RefundRequest"
---

# RefundRequest Class

Sends data related to a refund to the payment gateway adapter.

## Namespace

[CommercePayments](#apex_class_commercepayments_RefundRequest "Sends data related to a refund to the payment gateway adapter.")

## Usage

The constructor of this class takes no arguments. For example:

`CommercePayments.RefundRequest rrq = new CommercePayments.RefundRequest();`

## Example

```apex
commercepayments.ReferencedRefundRequest refundRequest = new commercepayments.ReferencedRefundRequest(80, pmt.id);
```

## See Also

- [RefundRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_RefundRequest.htm#apex_commercepayments_RefundRequest_methods)

## RefundRequest Methods

The following are methods for `RefundRequest`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_RefundRequest.htm#apex_commercepayments_RefundRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_RefundRequest.htm#apex_commercepayments_RefundRequest_hashCode)

### equals(obj)

Maintains the integrity of lists of type `RefundRequest` by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type: Object
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `RefundRequest` by determining the uniqueness of the external object records in a list.

#### Signature

`global Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
