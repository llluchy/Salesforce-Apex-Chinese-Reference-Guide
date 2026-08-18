---
doc_id: "apex_classes_email_inbound_binary"
---

# InboundEmail.BinaryAttachment Class

An InboundEmail object stores binary attachments in an InboundEmail.BinaryAttachment object.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Usage

Examples of binary attachments include image, audio, application, and video files.

## See Also

- [InboundEmail.BinaryAttachment Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_InboundEmail_BinaryAttachment_constructors)
- [InboundEmail.BinaryAttachment Properties](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_Properties)

## InboundEmail.BinaryAttachment Constructors

The following are constructors for `InboundEmail.BinaryAttachment`.

## See Also

- [InboundEmail.BinaryAttachment()](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_InboundEmail_BinaryAttachment_ctor)

### InboundEmail.BinaryAttachment()

Creates a new instance of the `Messaging.InboundEmail.BinaryAttachment` class.

#### Signature

`public InboundEmail.BinaryAttachment()`

## InboundEmail.BinaryAttachment Properties

The following are properties for `InboundEmail.BinaryAttachment`.

## See Also

- [body](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_body)
- [fileName](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_fileName)
- [headers](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_headers)
- [mimeTypeSubType](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_mimeTypeSubType)

### body

The body of the attachment.

#### Signature

`public Blob body {get; set;}`

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

### fileName

The name of the attached file.

#### Signature

`public String fileName {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### headers

Any header values associated with the attachment. Examples of header names include `Content-Type`, `Content-Transfer-Encoding`, and `Content-ID`.

#### Signature

`public List<Messaging.InboundEmail.Header> headers {get; set;}`

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Messaging.InboundEmail.Header](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_header.htm#apex_classes_email_inbound_header "An InboundEmail object stores RFC 2822 email header information in an InboundEmail.Header object with the following properties.")\>

### mimeTypeSubType

The primary and sub MIME-type.

#### Signature

`public String mimeTypeSubType {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
