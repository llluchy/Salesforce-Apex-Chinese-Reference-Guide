---
doc_id: "apex_xml_dom"
---

# Reading and Writing XML Using the DOM

Apex provides classes that enable you to work with XML content using the DOM (Document Object Model).

DOM classes help you parse or generate XML content. You can use these classes to work with any XML content. One common application is to use the classes to generate the body of a request created by [HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm) or to parse a response accessed by [HttpResponse](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm). The DOM represents an XML document as a hierarchy of nodes. Some nodes may be branch nodes and have child nodes, while others are leaf nodes with no children. You can parse nested XML content that’s up to 50 nodes deep.

The DOM classes are contained in the `Dom` namespace.

Use the [Document Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_xml_dom_document.htm) to process the content in the body of the XML document.

Use the [XmlNode Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm) to work with a node in the XML document.

Use the Document Class class to process XML content. One common application is to use it to create the body of a request for [HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm) or to parse a response accessed by [HttpResponse](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm).

## XML Namespaces

An XML namespace is a collection of names identified by a URI reference and used in XML documents to uniquely identify element types and attribute names. Names in XML namespaces may appear as qualified names, which contain a single colon, separating the name into a namespace prefix and a local part. The prefix, which is mapped to a URI reference, selects a namespace. The combination of the universally managed URI namespace and the document's own namespace produces identifiers that are universally unique.

The following XML element has a namespace of `http://my.name.space` and a prefix of `myprefix`.

```xml
xmlns:myprefix="http://my.name.space" />
```

In the following example, the XML element has two attributes:

-   The first attribute has a key of `dimension`; the value is `2`.
-   The second attribute has a key namespace of http://ns1; the value namespace is http://ns2; the key is `example`; the value is `test`.

```xml
dimension="2" ns1:example="ns2:test" xmlns:ns1="http://ns1" xmlns:ns2="http://ns2" />
```

## Document Example

For the purposes of the sample below, assume that the `url` argument passed into the `parseResponseDom` method returns this XML response:

```xml
>
    >Kirk Stevens>
    >808 State St>
    >Apt. 2>
    >Palookaville>
    >PA>
    >USA>
>
```

The following example illustrates how to use DOM classes to parse the XML response returned in the body of a `GET` request:

```apex
public class DomDocument {
 
    // Pass in the URL for the request
    // For the purposes of this sample,assume that the URL
    // returns the XML shown above in the response body
    public void parseResponseDom(String url){
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        // url that returns the XML in the response body
        req.setEndpoint(url);
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        Dom.Document doc = res.getBodyDocument();
        
        //Retrieve the root element for this document.
        Dom.XMLNode address = doc.getRootElement();
        
        String name = address.getChildElement('name', null).getText();
        String state = address.getChildElement('state', null).getText();
        // print out specific elements
        System.debug('Name: ' + name);
        System.debug('State: ' + state);
        
        // Alternatively, loop through the child elements.
        // This prints out all the elements of the address
        for(Dom.XMLNode child : address.getChildElements()) {
           System.debug(child.getText());
        }
    }
}
```

## Using XML Nodes

Use the `XmlNode` class to work with a node in an XML document. The DOM represents an XML document as a hierarchy of nodes. Some nodes may be branch nodes and have child nodes, while others are leaf nodes with no children.

There are different types of DOM nodes available in Apex. `XmlNodeType` is an enum of these different types. The values are:

-   COMMENT
-   ELEMENT
-   TEXT

It is important to distinguish between elements and nodes in an XML document. The following is a simple XML example:

```xml
>
    >Suvain>
    >Singh>
>
```

This example contains three XML elements: `name`, `firstName`, and `lastName`. It contains five nodes: the three `name`, `firstName`, and `lastName` element nodes, as well as two text nodes—`Suvain` and `Singh`. Note that the text within an element node is considered to be a separate text node.

For more information about the methods shared by all enums, see [Enum Methods](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_enum.htm).

## XmlNode Example

This example shows how to use `XmlNode` methods and namespaces to create an XML request.

```apex
public class DomNamespaceSample
{
    public void sendRequest(String endpoint)
    {
        // Create the request envelope
        DOM.Document doc = new DOM.Document();
        
        String soapNS = 'http://schemas.xmlsoap.org/soap/envelope/';
        String xsi = 'http://www.w3.org/2001/XMLSchema-instance';
        String serviceNS = 'http://www.myservice.com/services/MyService/';
        
        dom.XmlNode envelope
            = doc.createRootElement('Envelope', soapNS, 'soapenv');
        envelope.setNamespace('xsi', xsi);
        envelope.setAttributeNS('schemaLocation', soapNS, xsi, null);
        
        dom.XmlNode body
            = envelope.addChildElement('Body', soapNS, null);
        
        body.addChildElement('echo', serviceNS, 'req').
           addChildElement('category', serviceNS, null).
           addTextNode('classifieds');
        
        System.debug(doc.toXmlString());
        
        // Send the request
        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        req.setEndpoint(endpoint);
        req.setHeader('Content-Type', 'text/xml');
        
        req.setBodyDocument(doc);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.assertEquals(200, res.getStatusCode());
        
        dom.Document resDoc = res.getBodyDocument();
        
        envelope = resDoc.getRootElement();
        
        String wsa = 'http://schemas.xmlsoap.org/ws/2004/08/addressing';
        
        dom.XmlNode header = envelope.getChildElement('Header', soapNS);
        System.assert(header != null);
        
        String messageId
            = header.getChildElement('MessageID', wsa).getText();
        
        System.debug(messageId);
        System.debug(resDoc.toXmlString());
        System.debug(resDoc);
        System.debug(header);
        
        System.assertEquals(
         'http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous',
         header.getChildElement(
           'ReplyTo', wsa).getChildElement('Address', wsa).getText());
        
        
        System.assertEquals(
          envelope.getChildElement('Body', soapNS).
              getChildElement('echo', serviceNS).
              getChildElement('something', 'http://something.else').
              getChildElement(
                'whatever', serviceNS).getAttribute('bb', null),
                'cc');
        
        System.assertEquals('classifieds',
          envelope.getChildElement('Body', soapNS).
              getChildElement('echo', serviceNS).
              getChildElement('category', serviceNS).getText());
    }
}
```

## See Also

- [Apex Reference Guide: Document Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_xml_dom_document.htm)
