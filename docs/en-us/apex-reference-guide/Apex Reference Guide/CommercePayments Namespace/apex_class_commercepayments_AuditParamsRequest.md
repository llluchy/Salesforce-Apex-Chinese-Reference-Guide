---
doc_id: "apex_class_commerce_payments_AuditParamsRequest"
---

# AuditParamsRequest

`AuditParamsRequest` is used for audit parameters in a transaction request. This is an abstract request class that is extended by the `BaseRequest` class.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

`AuditParamsRequest` is an abstract class that holds attributes related to audit parameters such as email, IP address, MAC address, and phone number. This class can't be instantiated on its own. All `CommercePayments` request classes extend this class.

## See Also

- [AuditParamsRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_constructors)
- [AuditParamsRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_properties)

## AuditParamsRequest Constructors

The following are constructors for `AuditParamsRequest`.

## See Also

- [AuditParamsRequest(email, macAddress, ipAddress, phone)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_ctor)

### AuditParamsRequest(email, macAddress, ipAddress, phone)

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

`AuditParamsRequest(String email, String macAddress, String ipAddress, String phone)`

#### Parameters

-   **email**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Email of the client that initiated the request.
    
-   **macAddress**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Mac address of the customer’s device. Gateways often use this data in risk checks.
    
-   **ipAddress**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The customer’s IP address. Gateways often use this data in risk checks.
    
-   **phone**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Phone number of the client that initiated the request.
    

## AuditParamsRequest Properties

The following are properties for `AuditParamsRequest`.

## See Also

- [email](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_email)
- [ipAddress](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_ipAddress)
- [macAddress](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_macAddress)
- [phone](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_phone)

### email

Email of the client that initiated the request.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### ipAddress

The customer’s IP address. Gateways often use this data in risk checks.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### macAddress

Mac address of the customer’s device. Gateways often use this data in risk checks.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### phone

Phone number of the client that initiated the request.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
