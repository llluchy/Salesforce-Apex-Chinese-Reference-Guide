---
doc_id: "apex_class_commercetax_AmountDetailsResponse"
---

# AmountDetailsResponse Class

Sets tax amount fields based on a response from the external tax engine.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Example

In this example, an instance of `AmountDetailsResponse` class in a mock adapter calculates several tax amount fields. The `totalTax` and `totalAmount` parameters were defined in an instance of [`LineItemResponse`](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineItemResponse.htm#apex_class_commercetax_LineItemResponse "Response class that stores details of a list of one or more line items on which the tax engine has calculated tax.") class. The adapter then assigns the instance to `lineItemResponse`.

commercetax.AmountDetailsResponse amountResponse = new commercetax.AmountDetailsResponse(); amountResponse.setTotalAmountWithTax(totalTax+totalAmount); amountResponse.setExemptAmount(0); amountResponse.setTotalAmount(totalAmount); amountResponse.setTaxAmount(totalTax); lineItemResponse.setAmountDetails(amountResponse);

## See Also

- [AmountDetailsResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_commercetax_AmountDetailsResponse_methods)

## AmountDetailsResponse Methods

Learn more about the methods available from the `AmountDetailsResponse` class.

The following are methods for `AmountDetailsResponse`.

## See Also

- [setExemptAmount(exemptAmount)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_commercetax_AmountDetailsResponse_setExemptAmount)
- [setTaxAmount(taxAmount)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_commercetax_AmountDetailsResponse_setTaxAmount)
- [setTotalAmount(totalAmount)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_commercetax_AmountDetailsResponse_setTotalAmount)
- [setTotalAmountWithTax(totalAmtWithTax)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_commercetax_AmountDetailsResponse_setTotalAmountWithTax)

### setExemptAmount(exemptAmount)

Sets the value of the ExemptAmount field.

#### Signature

`global void setExemptAmount(Double exemptAmount)`

#### Parameters

-   **exemptAmount**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    The amount of a line item's total amount that's exempt from tax calculation.
    

#### Return Value

Type: void

### setTaxAmount(taxAmount)

Sets the value of the TaxAmount field.

#### Signature

`global void setTaxAmount(Double taxAmount)`

#### Parameters

-   **taxAmount**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    The calculated amount of tax for a line item.
    

#### Return Value

Type: void

### setTotalAmount(totalAmount)

Sets the value of the TotalAmount field.

#### Signature

`global void setTotalAmount(Double totalAmount)`

#### Parameters

-   **totalAmount**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    The total amount of a line item, excluding tax.
    

#### Return Value

Type: void

### setTotalAmountWithTax(totalAmtWithTax)

Sets the value of the TotalAmountWithTax field.

#### Signature

`global void setTotalAmountWithTax(Double totalAmtWithTax)`

#### Parameters

-   **totalAmtWithTax**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    The total amount of a line item combined with the calculated tax for that line item.
    

#### Return Value

Type: void
