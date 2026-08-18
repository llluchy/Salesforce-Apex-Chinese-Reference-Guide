---
doc_id: "apex_class_commercetax_RuleDetailsResponse"
---

# RuleDetailsResponse Class

Contains details about the tax rules used for tax calculation.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## See Also

- [RuleDetailsResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_methods)

## RuleDetailsResponse Methods

Learn more about the available methods with the `RuleDetailsResponse` class.

The `RuleDetailsResponse` includes these methods.

## See Also

- [RuleDetailsResponse()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_RuleDetailsResponse)
- [setNonTaxableRuleId(nonTaxableRuleId)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setNonTaxableRuleId)
- [setNonTaxableType(nonTaxableType)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setNonTaxableType)
- [setRateRuleId(rateRuleId)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setRateRuleId)
- [setRateSourceId(rateSourceId)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setRateSourceId)

### RuleDetailsResponse()

Contains information about the tax rules used when calculating tax for line items.

#### Signature

`global void RuleDetailsResponse()`

#### Return Value

Type: void

### setNonTaxableRuleId(nonTaxableRuleId)

Sets the NonTaxableRuleId field of the `RuleDetailsResponse`.

#### Signature

`global void setNonTaxableRuleId(String nonTaxableRuleId)`

#### Parameters

-   **nonTaxableRuleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    ID of the tax rule applied to non-taxable line items.
    

#### Return Value

Type: void

### setNonTaxableType(nonTaxableType)

Sets the NonTaxableType field of the `RuleDetailsResponse`.

#### Signature

`global void setNonTaxableType(String nonTaxableType)`

#### Parameters

-   **nonTaxableType**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Reason (from several possible types) that a line item is non-taxable.
    

#### Return Value

Type: void

### setRateRuleId(rateRuleId)

Sets the RateRuleId field of the `RuleDetailsResponse`.

#### Signature

`global void setRateRuleId(String rateRuleId)`

#### Parameters

-   **rateRuleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    ID of the tax rule used to determine a tax rate.
    

#### Return Value

Type: void

### setRateSourceId(rateSourceId)

Sets the RateSourceId field on the `RuleDetailsResponse`.

#### Signature

`global void setRateSourceId(String rateSourceId)`

#### Parameters

-   **rateSourceId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    ID of the source object used for calculating tax rate.
    

#### Return Value

Type: void
