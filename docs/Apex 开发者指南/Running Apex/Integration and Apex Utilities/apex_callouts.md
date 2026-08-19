---
doc_id: "apex_callouts"
---

# Invoking Callouts Using Apex

An Apex callout enables you to tightly integrate your Apex with an external service by making a call to an external Web service or sending a HTTP request from Apex code and then receiving the response. Apex provides integration with Web services that utilize SOAP and WSDL, or HTTP services (RESTful services).

:::tip Note
Before any Apex callout can call an external site, that site
        must be registered in the Remote Site Settings page, or the callout fails. Salesforce
        prevents calls to unauthorized network addresses.If the callout specifies a named
          credential as the endpoint, you don’t need to configure remote site settings. A named
          credential specifies the URL of a callout endpoint and its required authentication
          parameters in one definition. To set up named credentials, see “Define a Named Credential”
          in the Salesforce Help.
:::

To learn more about the types of callouts, see:

-   [SOAP Services: Defining a Class from a WSDL Document](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm)
-   [Invoking HTTP Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm)
-   [Asynchronous Callouts for Long-Running Requests](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm "Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.")

:::tip Tip
Callouts enable Apex to invoke external web or HTTP services. [Apex Web services](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm) allow an external application to invoke Apex methods
      through Web services.
:::

 

## See Also

- [Adding Remote Site Settings](atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm)
- [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
- [SOAP Services: Defining a Class from a WSDL Document](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm)
- [Invoking HTTP Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm)
- [Using Certificates](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm)
- [Callout Limits and Limitations](atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm)
- [Make Long-Running Callouts with Continuations](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm)
