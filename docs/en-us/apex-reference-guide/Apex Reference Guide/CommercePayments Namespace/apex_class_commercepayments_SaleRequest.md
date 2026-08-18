---
doc_id: "apex_class_commercepayments_SaleRequest"
---

# SaleRequest Class

Stores information about a sales request.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class holds all the required details about a sale request. Gateway adapters read the fields of this class object while constructing a sale JSON request thatis sent to the payment gateway. The object of this class is made available through `commercepayments.paymentGatewayContext` by calling `getPaymentRequest()`.

## Example

```apex
/**
     * Responsibilities:
     * - Set merchant and reference details
     * - Convert amount into minor units (e.g., cents)
     * - Map payment method types (card, ACH, SEPA, etc.)
     * - Include stored payment method token for recurring payments
     * - Optionally include enhanced Level 2/3 data
     *
     * @param saleRequest Input request containing payment and shopper details
     * @return JSON string payload for the payment gateway
     */
    private String buildSaleRequest(commercepayments.SaleRequest saleRequest) {

        // Resolve currency (fallback to user's default if missing)
        String currencyIso = saleRequest.currencyIsoCode;
        if (currencyIso == null) {
            currencyIso = UserInfo.getDefaultCurrency();
        }

        // Extract payment method
        commercepayments.SaleApiPaymentMethodRequest paymentMethod = saleRequest.paymentMethod;

        // Initialize JSON generator
        JSONGenerator jsonGeneratorInstance = JSON.createGenerator(true);
        jsonGeneratorInstance.writeStartObject();

        // Merchant configuration (from Named Credential)
        jsonGeneratorInstance.writeStringField('merchantAccount', '{!$Credential.Username}');

        // Unique reference using timestamp + random suffix
        jsonGeneratorInstance.writeStringField(
            'reference',
            String.valueOf(Datetime.now().getTime()) +
            String.valueOf(Math.random()).substring(2, 8)
        );

        // Amount block
        jsonGeneratorInstance.writeFieldName('amount');
        jsonGeneratorInstance.writeStartObject();
        jsonGeneratorInstance.writeStringField(
            'value',
            String.valueOf((saleRequest.amount * 100.0).intValue()) // convert to minor units
        );
        jsonGeneratorInstance.writeStringField('currency', currencyIso);
        jsonGeneratorInstance.writeEndObject();

        // Payment method block
        jsonGeneratorInstance.writeFieldName('paymentMethod');
        jsonGeneratorInstance.writeStartObject();

        String shopperReference;
        String type = 'scheme'; // default = card

        // Handle stored payment method data (tokenized payments)
        if (saleRequest.paymentMethodData != null) {

            String token = saleRequest.paymentMethodData.get('gatewayToken');
            String paymentMethodType = saleRequest.paymentMethodData.get('paymentMethodType');
            shopperReference = saleRequest.paymentMethodData.get('gatewayReference');

            // Map payment method types to gateway-specific values
            if ('us_bank_account'.equals(paymentMethodType)) {
                type = 'ach';
            } else if ('sepa_debit'.equals(paymentMethodType)) {
                type = 'sepadirectdebit';
            } else if ('au_becs_debit'.equals(paymentMethodType)) {
                type = 'directdebit_AU';
            } else if ('bacs_debit'.equals(paymentMethodType)) {
                type = 'directdebit_GB';
            }

            jsonGeneratorInstance.writeStringField('type', type);
            jsonGeneratorInstance.writeStringField('storedPaymentMethodId', token);
        }

        // Add enhanced scheme data ONLY for card payments
        // Note: Gateway might have validations on L2/L3 data so do test them out before using L2/L3 else transactions might fail
        if (enhancedPaymentData != null && 'scheme'.equals(type)) {
            jsonGeneratorInstance.writeFieldName('additionalData');
            jsonGeneratorInstance.writeStartObject();
            populateEnhancedSchemeData(jsonGeneratorInstance, enhancedPaymentData);
            jsonGeneratorInstance.writeEndObject(); // additionalData
        }

        jsonGeneratorInstance.writeEndObject(); // paymentMethod

        // Recurring / shopper configuration
        jsonGeneratorInstance.writeStringField('shopperInteraction', 'ContAuth');
        jsonGeneratorInstance.writeStringField('recurringProcessingModel', 'UnscheduledCardOnFile');
        jsonGeneratorInstance.writeStringField('shopperReference', shopperReference);

        // Immediate capture
        jsonGeneratorInstance.writeNumberField('captureDelayHours', 0);

        jsonGeneratorInstance.writeEndObject(); // root

        return jsonGeneratorInstance.getAsString();
    }

    /**
     * Populates Level 2 and Level 3 enhanced scheme data.
     *
     * @param jsonGeneratorInstance JSON generator
     * @param enhancedPaymentData Enhanced payment data input
     */
    private void populateEnhancedSchemeData(JSONGenerator jsonGeneratorInstance,
                                            commercepayments.EnhancedPaymentDataInput enhancedPaymentData) {

        // -------- Level 2 fields --------

        if (enhancedPaymentData.totalTaxAmount != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.totalTaxAmount',
                toMinorUnits(enhancedPaymentData.totalTaxAmount)
            );
        }

        if (enhancedPaymentData.shippingAmount != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.freightAmount',
                toMinorUnits(enhancedPaymentData.shippingAmount)
            );
        }

        if (enhancedPaymentData.discountAmount != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.discountAmount',
                toMinorUnits(enhancedPaymentData.discountAmount)
            );
        }

        if (enhancedPaymentData.invoiceNumber != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.customerReference',
                enhancedPaymentData.invoiceNumber
            );
        }

        // -------- Level 3 fields (line items) --------

        if (enhancedPaymentData.lineItems != null) {
            Integer index = 1;

            for (commercepayments.LineItemInput item : enhancedPaymentData.lineItems) {
                populateLineItemData(
                    jsonGeneratorInstance,
                    item,
                    'enhancedSchemeData.itemDetailLine' + index + '.'
                );
                index++;
            }
        }

        // Shipping / destination info
        if (enhancedPaymentData.shipFromZip != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.shipFromPostalCode',
                enhancedPaymentData.shipFromZip
            );
        }

        if (enhancedPaymentData.shipToZip != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.destinationPostalCode',
                enhancedPaymentData.shipToZip
            );
        }

        if (enhancedPaymentData.shipToCountry != null) {
            jsonGeneratorInstance.writeStringField(
                'enhancedSchemeData.destinationCountryCode',
                enhancedPaymentData.shipToCountry
            );
        }
    }

    /**
     * Populates Level 3 line item data.
     *
     * @param jsonGeneratorInstance JSON generator
     * @param item Line item input
     * @param prefix Field prefix for indexed items
     */
    private void populateLineItemData(JSONGenerator jsonGeneratorInstance,
                                      commercepayments.LineItemInput item,
                                      String prefix) {

        if (item.sku != null) {
            jsonGeneratorInstance.writeStringField(prefix + 'productCode', item.sku);
        }

        if (item.name != null) {
            jsonGeneratorInstance.writeStringField(prefix + 'description', item.name);
        }

        if (item.quantity != null) {
            jsonGeneratorInstance.writeStringField(prefix + 'quantity', String.valueOf(item.quantity));
        }

        // Unit price is always written
        jsonGeneratorInstance.writeStringField(
            prefix + 'unitPrice',
            toMinorUnits(item.unitPrice)
        );

        if (item.taxAmount != null) {
            jsonGeneratorInstance.writeStringField(
                prefix + 'taxAmount',
                toMinorUnits(item.taxAmount)
            );
        }

        if (item.discount != null) {
            jsonGeneratorInstance.writeStringField(
                prefix + 'discountAmount',
                toMinorUnits(item.discount)
            );
        }

        if (item.commodityCode != null) {
            jsonGeneratorInstance.writeStringField(prefix + 'commodityCode', item.commodityCode);
        }

        if (item.uom != null) {
            jsonGeneratorInstance.writeStringField(prefix + 'unitOfMeasure', item.uom);
        }
    }

    /**
     * Converts amount to minor units (e.g., dollars → cents).
     *
     * @param amount Decimal amount
     * @return String representation of minor units
     */
    private static String toMinorUnits(Decimal amount) {
        if (amount == null) return null;

        Decimal value = (amount * 100)
            .setScale(0, System.RoundingMode.HALF_UP);

        return String.valueOf(value.intValue());
    }
```

## See Also

- [SaleRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_constructors)
- [SaleRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_properties)
- [SaleRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_methods)

## SaleRequest Constructors

The following are constructors for `SaleRequest`.

## See Also

- [SaleRequest(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_ctor)

### SaleRequest(amount)

Constructor for defining an amount for the sale request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`global SaleRequest(Double amount)`

#### Parameters

-   **amount**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    Amount of the sale request.
    

## SaleRequest Properties

The following are properties for `SaleRequest`.

## See Also

- [accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_accountId)
- [amount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_amount)
- [comments](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_comments)
- [currencyIsoCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_currencyIsoCode)
- [enhancedPaymentData](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_enhancedPaymentData)
- [paymentInitiationSourceId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_paymentInitiationSourceId)
- [paymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_paymentMethod)
- [paymentMethodData](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_paymentMethodData)
- [submittedByMerchant](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_submittedByMerchant)

### accountId

Customer account ID for the sale request.

#### Signature

`global String accountId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

Amount of the sale request. Can be positive only.

#### Signature

`global Double amount {get; set;}`

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### comments

Additional information about the sale request.

#### Signature

`global String comments {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### currencyIsoCode

Currency code for the sale request.

#### Signature

`global String currencyIsoCode {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### enhancedPaymentData

Represents enhanced payment data, including Level 2 and Level 3 fields.

Supported only for third-party payment gateways; not supported for native payments.

#### Signature

`public commercepayments.EnhancedPaymentDataInput enhancedPaymentData {get; set;}`

#### Property Value

Type: commercepayments.[EnhancedPaymentDataInput](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_EnhancedPaymentDataInput.htm#apex_class_commercepayments_EnhancedPaymentDataInput "Sends enhanced payment data, including Level 2 and Level 3 fields, to the gateway adapter as part of the service call.")

### paymentInitiationSourceId

ID of the source that initiated the payment.

Supported only for third-party payment gateways; not supported for native payments. See [PaymentInitiationSource](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_paymentinitiationsource.htm "HTML (New Window)") object documentation for more information.

#### Signature

`public String paymentInitiationSourceId {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentMethod

Payment method used in the sale request.

#### Signature

`global commercepayments.SaleApiPaymentMethodRequest paymentMethod {get; set;}`

#### Property Value

Type: [SaleApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_class_commercepayments_SaleApiPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a sale service call.")

### paymentMethodData

Payment method data used in the sale request.

This field is populated when `SaleInput` specifies a saved payment method. Accessible using `paymentMethodData` on `SaleRequest`. The map contains these fields from `SavedPaymentMethod`: `GatewayToken`, `Type`, `GatewayReference`, and `StandardEntryCode` for direct gateway interaction without querying the database.

#### Signature

`public Map<String,String> paymentMethodData {get; set;}`

#### Property Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### submittedByMerchant

Indicates whether the sale request is submitted by the marchant (`true`) or not (`false`).

#### Signature

`public Boolean submittedByMerchant {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## SaleRequest Methods

The following are methods for `SaleRequest`.

## See Also

- [equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_equals)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_hashCode)
- [toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_toString)

### equals(obj)

Compares this object with the specified object and returns `true` if both objects are equal; otherwise, returns `false`.

#### Signature

`global Boolean equals(Object obj)`

#### Parameters

-   **obj**:
    
    Type: Object
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type `SaleRequest` by determining the uniqueness of the external object records in a list.

#### Signature

`global Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

`global String toString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
