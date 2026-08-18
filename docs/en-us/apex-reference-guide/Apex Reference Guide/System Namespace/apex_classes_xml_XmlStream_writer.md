---
doc_id: "apex_classes_XmlStream_writer"
---

# XmlStreamWriter Class

The `XmlStreamWriter` class provides methods for writing XML data.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

You can use the `XmlStreamWriter` class to programmatically construct an XML document, then use HTTP classes to send the document to an external server.

The `XmlStreamWriter` class is similar to the XMLStreamWriter utility class from StAX (Streaming API for XML). StAX is an API to read and write XML documents, originating from the Java programming language community.

:::tip Note
The `XmlStreamWriter` class in Apex is
                based on its counterpart in Java. See [Java XMLStreamWriter
                        class](http://docs.oracle.com/javase/6/docs/api/javax/xml/stream/XMLStreamWriter.html).
:::

## See Also

- [XmlStreamWriter Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_constructors)
- [XmlStreamWriter Methods](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_methods)
- [Http Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm#apex_classes_restful_http_http)

-   [HttpRequest Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.")
    
-   [HttpResponse Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")
    

## XmlStreamWriter Constructors

The following are constructors for `XmlStreamWriter`.

## See Also

- [XmlStreamWriter()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_ctor)

### XmlStreamWriter()

Creates a new instance of the `XmlStreamWriter` class.

#### Signature

`public XmlStreamWriter()`

## XmlStreamWriter Methods

The following are methods for `XmlStreamWriter`. All are instance methods.

## See Also

- [close()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_close)
- [getXmlString()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_getXmlString)
- [setDefaultNamespace(uri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_setDefaultNamespace)
- [writeAttribute(prefix, namespaceUri, localName, value)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeAttribute)
- [writeCData(data)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeCData)
- [writeCharacters(text)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeCharacters)
- [writeComment(comment)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeComment)
- [writeDefaultNamespace(namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeDefaultNamespace)
- [writeEmptyElement(prefix, localName, namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeEmptyElement)
- [writeEndDocument()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeEndDocument)
- [writeEndElement()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeEndElement)
- [writeNamespace(prefix, namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeNamespace)
- [writeProcessingInstruction(target, data)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeProcessingInstruction)
- [writeStartDocument(encoding, version)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeStartDocument)
- [writeStartElement(prefix, localName, namespaceUri)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_System_XmlStreamWriter_writeStartElement)

### close()

Closes this instance of an XmlStreamWriter and free any resources associated with it.

#### Signature

`public Void close()`

#### Return Value

Type: Void

### getXmlString()

Returns the XML written by the XmlStreamWriter instance.

#### Signature

`public String getXmlString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDefaultNamespace(uri)

Binds the specified URI to the default namespace. This URI is bound in the scope of the current START\_ELEMENT – END\_ELEMENT pair.

#### Signature

`public Void setDefaultNamespace(String uri)`

#### Parameters

-   **uri**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeAttribute(prefix, namespaceUri, localName, value)

Writes an attribute to the output stream.

#### Signature

`public Void writeAttribute(String prefix, String namespaceUri, String localName, String value)`

#### Parameters

-   **prefix**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **namespaceUri**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **localName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Specifies the name of the attribute.
    
-   **value**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeCData(data)

Writes the specified CData to the output stream.

#### Signature

`public Void writeCData(String data)`

#### Parameters

-   **data**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeCharacters(text)

Writes the specified text to the output stream.

#### Signature

`public Void writeCharacters(String text)`

#### Parameters

-   **text**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeComment(comment)

Writes the specified comment to the output stream.

#### Signature

`public Void writeComment(String comment)`

#### Parameters

-   **comment**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeDefaultNamespace(namespaceUri)

Writes the specified namespace to the output stream.

#### Signature

`public Void writeDefaultNamespace(String namespaceUri)`

#### Parameters

-   **namespaceUri**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeEmptyElement(prefix, localName, namespaceUri)

Writes an empty element tag to the output stream.

#### Signature

`public Void writeEmptyElement(String prefix, String localName, String namespaceUri)`

#### Parameters

-   **prefix**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **localName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    Specifies the name of the tag to be written.
    
-   **namespaceUri**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeEndDocument()

Closes any start tags and writes corresponding end tags to the output stream.

#### Signature

`public Void writeEndDocument()`

#### Return Value

Type: Void

### writeEndElement()

Writes an end tag to the output stream, relying on the internal state of the writer to determine the prefix and local name.

#### Signature

`public Void writeEndElement()`

#### Return Value

Type: Void

### writeNamespace(prefix, namespaceUri)

Writes the specified namespace to the output stream.

#### Signature

`public Void writeNamespace(String prefix, String namespaceUri)`

#### Parameters

-   **prefix**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **namespaceUri**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeProcessingInstruction(target, data)

Writes the specified processing instruction.

#### Signature

`public Void writeProcessingInstruction(String target, String data)`

#### Parameters

-   **target**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **data**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeStartDocument(encoding, version)

Writes the XML Declaration using the specified XML encoding and version.

#### Signature

`public Void writeStartDocument(String encoding, String version)`

#### Parameters

-   **encoding**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **version**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

### writeStartElement(prefix, localName, namespaceUri)

Writes the start tag specified by localName to the output stream.

#### Signature

`public Void writeStartElement(String prefix, String localName, String namespaceUri)`

#### Parameters

-   **prefix**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **localName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **namespaceUri**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void
