---
doc_id: "apex_classes_xml_dom_document"
---

# Document Class

Use the `Document` class to process XML content. You can parse nested XML content that’s up to 50 nodes deep.

## Namespace

[Dom](atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm "The Dom namespace provides classes and methods for parsing and creating XML content.")

## Usage

One common application is to use it to create the body of a request for [HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.") or to parse a response accessed by [HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.").

## See Also

- [Document Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_constructors)
- [Document Methods](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_methods)
- [Reading and Writing XML Using the DOM](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_xml_dom.htm)

## Document Constructors

The following are constructors for `Document`.

## See Also

- [Document()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_ctor)

### Document()

Creates a new instance of the `Dom.Document` class.

#### Signature

`public Document()`

## Document Methods

The following are methods for `Document`. All are instance methods.

## See Also

- [createRootElement(name, namespace, prefix)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_createRootElement)
- [getRootElement()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_getRootElement)
- [load(xml)](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_load)
- [toXmlString()](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_Dom_Document_toXmlString)

### createRootElement(name, namespace, prefix)

Creates the top-level root element for a document.

#### Signature

`public Dom.XmlNode createRootElement(String name, String namespace, String prefix)`

#### Parameters

-   **name**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **namespace**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
-   **prefix**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Dom.XmlNode](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

#### Usage

For more information about namespaces, see [Reading and Writing XML Using the DOM](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_xml_dom.htm).

Calling this method more than once on a document generates an error as a document can have only one root element.

### getRootElement()

Returns the top-level root element node in the document. If this method returns `null`, the root element has not been created yet.

#### Signature

`public Dom.XmlNode getRootElement()`

#### Return Value

Type: [Dom.XmlNode](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

### load(xml)

Parse the XML representation of the document specified in the xml argument and load it into a document.

#### Signature

`public Void load(String xml)`

#### Parameters

-   **xml**: Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Example

```apex
Dom.Document doc = new Dom.Document();
doc.load(xml);
```

### toXmlString()

Returns the XML representation of the document as a String.

#### Signature

`public String toXmlString()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
