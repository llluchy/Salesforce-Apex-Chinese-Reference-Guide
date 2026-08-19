---
doc_id: "apex_callouts_client_certs_soap"
---

# Using Certificates with SOAP Services

To support two-way authentication for a callout to a SOAP web service, generate a certificate in Salesforce or import a key pair from a keystore into Salesforce. Then integrate the certificate with your Apex.

:::tip Important
We recommend storing mutual authentication certificates for external
            web services in a Java keystore. For more information, see [Certificates and Keys](https://help.salesforce.com/articleView?id=security_keys_about.htm&language=en_US).
:::

To integrate the certificate with your Apex:

1.  Receive the WSDL for the web service from the third party, or generate it from the application you want to connect to.
2.  Generate Apex classes from the WSDL for the web service. See [SOAP Services: Defining a Class from a WSDL Document](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm).
3.  The generated Apex classes include a stub for calling the third-party web service represented by the WSDL document. Edit the Apex classes, and assign a value to a `clientCertName_x` variable on an instance of the stub class. The value must match the Unique Name of the certificate that you generated on the Certificate and Key Management page.

This example illustrates editing the Apex classes and works with the sample WSDL file in [Generated WSDL2Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm "You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub."). The example assumes that you generated a certificate with the Unique Name of `DocSampleCert`.

```apex
docSample.DocSamplePort stub = new docSample.DocSamplePort();
stub.clientCertName_x = 'DocSampleCert';
String input = 'This is the input string';
String output = stub.EchoString(input);
```

 

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_generate.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_http.htm)
