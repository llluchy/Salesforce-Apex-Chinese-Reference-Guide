---
doc_id: "apex_class_commercetax_TaxTransactionRequest"
---

# TaxTransactionRequest Class

Abstract class for storing customer details used in tax calculation and estimation requests.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Usage

Specify the `CommerceTax` namespace when creating an instance of this class. The constructor of this class takes no arguments. For example, let's say you create an instance of `CalculateTaxRequest` class, which extends the `TaxTransactionRequest` class.

## See Also

- [TaxTransactionRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_constructors)
- [TaxTransactionRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_properties)
- [TaxTransactionRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_methods)

## TaxTransactionRequest Constructors

Learn more about the available constructors with the `TaxTransactionRequest` class.

The `TaxTransactionRequest` class includes these constructors.

## See Also

- [TaxTransactionRequest(addresses, currencyIsoCode, customerDetails, description, documentCode, referenceDocumentCode, transactionDate, effectiveDate, lineItems, referenceEntityId, sellerDetails, customTaxAttributes)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_ctor)

### TaxTransactionRequest(addresses, currencyIsoCode, customerDetails, description, documentCode, referenceDocumentCode, transactionDate, effectiveDate, lineItems, referenceEntityId, sellerDetails, customTaxAttributes)

Initializes the request for the tax transaction. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global TaxTransactionRequest(commercetax.HeaderTaxAddressesRequest addresses, String currencyIsoCode, commercetax.TaxCustomerDetailsRequest customerDetails, String description, String documentCode, String referenceDocumentCode, Datetime transactionDate, Datetime effectiveDate, List<commercetax.TaxLineItemRequest> lineItems, String referenceEntityId, commercetax.TaxSellerDetailsRequest sellerDetails,Map<String,Object> customTaxAttributes)`

#### Parameters

-   **addresses**:
    
    Type: [HeaderTaxAddressesRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_class_commercetax_HeaderTaxAddressesRequest "Captures the address values that are applicable for the quote or order transaction.")
    
    Tax addresses, such as Ship To and Bill From.
    
-   **currencyIsoCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Three-letter ISO 4217 currency code associated with the `TaxTransactionRequest`.
    
-   **customerDetails**:
    
    Type: [TaxCustomerDetailsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_class_commercetax_TaxCustomerDetailsRequest "Contains customer details used in tax calculation.")
    
    Customer information used in tax calculation.
    
-   **description**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Optional user-defined description for providing more information about the tax transaction request.
    
-   **documentCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Code
    
    for documents that are used to provide more information in the tax calculation process.
    
-   **referenceDocumentCode**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Identifier that combines
    
    the original invoice ID, previous tax transaction type, and tax engine ID, used in tax calculations for negative invoice lines. For example, a referenceDocumentCode parameter value `3ttxx00000004Bh_Debit-4wAxx0000000001EAA` indicates `3ttxx00000004Bh` is the original invoice ID and `4wAxx0000000001EAA` is the tax engine ID.
    
-   **transactionDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    The date that the tax transaction occurred.
    
-   **effectiveDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
    The date that the tax transaction takes effect. User-defined and used only for reporting purposes.
    
-   **lineItems**:
    
    Type: List<[TaxLineItemRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_class_commercetax_TaxLineItemRequest "Contains line item details of a tax request.")\>
    
    A list of line items on which tax is calculated.
    
-   **referenceEntityId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    ID of an object related to the line items sent for tax calculation.
    
-   **sellerDetails**:
    
    Type: [TaxSellerDetailsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_class_commercetax_TaxSellerDetailsRequest "Contains tax code details used in the tax calculation request.")
    
    Contains tax code information used in a tax calculation request.
    
-   **customTaxAttributes**:
    
    Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object> Customised tax contract to include additional attributes at the header level.
    

## TaxTransactionRequest Properties

Learn more about the available properties with the `TaxTransactionRequest` class.

The `TaxTransactionRequest` class includes these properties.

## See Also

- [addresses](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_addresses)
- [currencyIsoCode](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_currencyIsoCode)
- [customerDetails](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_customerDetails)
- [customTaxAttributes](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_customTaxAttributes)
- [description](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_description)
- [documentCode](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_documentCode)
- [effectiveDate](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_effectiveDate)
- [lineItems](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_lineItems)
- [referenceDocumentCode](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_referenceDocumentCode)
- [referenceEntityId](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_referenceEntityId)
- [sellerDetails](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_sellerDetails)
- [transactionDate](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_transactionDate)

### addresses

A list of addresses (such as Ship To and Sold To) used as part of the tax transaction.

#### Signature

`global commercetax.HeaderTaxAddressesRequest addresses {get; set;}`

#### Property Value

Type: [HeaderTaxAddressesRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_class_commercetax_HeaderTaxAddressesRequest "Captures the address values that are applicable for the quote or order transaction.")

### currencyIsoCode

Three-letter ISO 4217 currency code associated with the `TaxTransactionRequest`.

#### Signature

`global String currencyIsoCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### customerDetails

Customer information used in tax calculation.

#### Signature

`global CommerceTax.TaxCustomerDetailsRequest customerDetails {get; set;}`

#### Property Value

Type: [TaxCustomerDetailsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_class_commercetax_TaxCustomerDetailsRequest "Contains customer details used in tax calculation.")

### customTaxAttributes

Customised tax contract to include additional attributes at the header level.

#### Signature

`global commercetax.TaxTransactionRequest customTaxAttributes {get; set;}`

#### Property Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

### description

Optional user-defined description for providing more information about the tax transaction request.

#### Signature

`global String description {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### documentCode

Code for documents used to provide more information in the tax calculation process.

#### Signature

`global String documentCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### effectiveDate

The date that the tax transaction takes effect. User-defined and used only for reporting purposes.

#### Signature

`global Datetime effectiveDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### lineItems

A list of line items on which tax will be calculated.

#### Signature

`global List<CommerceTax.TaxLineItemRequest> lineItems {get; set;}`

#### Property Value

Type: List<[TaxLineItemRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_class_commercetax_TaxLineItemRequest "Contains line item details of a tax request.")\>

### referenceDocumentCode

Identifier that combines the original invoice ID, previous tax transaction type, and tax engine ID, used in tax calculations for negative invoice lines.

For example, a referenceDocumentCode parameter value `3ttxx00000004Bh_Debit-4wAxx0000000001EAA` indicates `3ttxx00000004Bh` is the original invoice ID and `4wAxx0000000001EAA` is the tax engine ID.

#### Signature

`global String referenceDocumentCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### referenceEntityId

ID of an object related to the line items sent for tax calculation.

#### Signature

`global String referenceEntityId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sellerDetails

Contains tax code information used in a tax calculation request.

#### Signature

`global commercetax.TaxSellerDetailsRequest sellerDetails {get; set;}`

#### Property Value

Type: [TaxSellerDetailsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_class_commercetax_TaxSellerDetailsRequest "Contains tax code details used in the tax calculation request.")

### transactionDate

The date that the tax transaction occurred.

#### Signature

`global Datetime transactionDate {get; set;}`

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

## TaxTransactionRequest Methods

The following are methods for `TaxTransactionRequest`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxTransactionRequest.htm#apex_commercetax_TaxTransactionRequest_toString)

### equals(obj)

Maintains the integrity of lists of type `TaxTransactionRequest` by determining the equality of external objects in a list. This method is dynamic and based on the `equals()` method in Java.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type: Object
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `TaxTransactionRequest` by determining the uniqueness of the external object records in a list.

#### Signature

`global Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a value to a string.

#### Signature

`global String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
