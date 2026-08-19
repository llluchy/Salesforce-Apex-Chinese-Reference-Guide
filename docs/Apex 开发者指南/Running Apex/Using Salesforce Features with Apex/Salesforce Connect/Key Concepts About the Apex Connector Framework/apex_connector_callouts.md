---
doc_id: "apex_connector_callouts"
---

# Callouts for Salesforce Connect Custom Adapters

Just like any other Apex code, a Salesforce Connect custom adapter can make callouts. If the connection to the external system requires authentication, incorporate the authentication parameters into the callout.

Authentication parameters are encapsulated in a `ConnectionParams` object and provided to your `DataSource.Connection` class’s constructor.

For example, if your connection requires an OAuth access token, use code similar to the following.

```apex
public HttpResponse getResponse(String url) {
    Http httpProtocol = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndPoint(url);
    request.setMethod('GET');
    request.setHeader('Authorization', 'Bearer ' + 
            this.connectionInfo.oauthToken);
    HttpResponse response = httpProtocol.send(request);
    return response;
}
```

If your connection requires basic password authentication, use code similar to the following.

```apex
public HttpResponse getResponse(String url) {
    Http httpProtocol = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndPoint(url);
    request.setMethod('GET');
    string encodedHeaderValue = EncodingUtil.base64Encode(Blob.valueOf(
            this.connectioninfo.username + ':' + 
            this.connectionInfo.password));
    request.setHeader('Authorization', 'Basic ' + encodedHeaderValue);
    HttpResponse response = httpProtocol.send(request);
    return response;
}
```

## Named Credentials as Callout Endpoints for Salesforce Connect Custom Adapters

A Salesforce Connect custom adapter obtains the relevant credentials that are stored in Salesforce whenever they’re needed. However, your Apex code must apply those credentials to all callouts, except those that specify named credentials as the callout endpoints. A named credential lets Salesforce handle the authentication logic for you so that your code doesn’t have to.

If all your custom adapter’s callouts use named credentials, you can set the external data source’s Authentication Protocol field to **No Authentication**. The named credentials add the appropriate certificates and can add standard authorization headers to the callouts. You also don’t need to define a remote site for an Apex callout endpoint that’s defined as a named credential.

## See Also

- [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
