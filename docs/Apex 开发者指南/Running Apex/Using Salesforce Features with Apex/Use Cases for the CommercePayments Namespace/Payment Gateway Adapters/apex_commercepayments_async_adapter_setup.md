---
doc_id: "apex_commercepayments_async_adapter_setup"
---

# Set Up an Asynchronous Payment Gateway Adapter

For payments transactions, you can configure Salesforce to interface with an asynchronous payment gateway adapter.

<table class="editionTable" border="0" summary="Salesforce editions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="subHead">Available in: Salesforce Summer ’20 and later</td></tr><tr><td class="subHead">Available in: API 49.0 and later</td></tr></tbody></table>

  

To access the `commercepayments` API, you need the PaymentPlatform org permission.

1.  Create a Salesforce site. From Setup, in the Quick Find box, enter Sites. Under Sites and Domains, select **Sites** see [Set Up Salesforce Sites](https://help.salesforce.com/s/articleView?language=en_US&id=sf.sites_setup_overview.htm).
    
    Set the site’s public access settings to **Guest Access to the Payments API**.
    
2.  Create your payment gateway adapter Apex classes. Asynchronous payment gateways require that you implement an asynchronous and a synchronous adapter. For information about building gateway adapters in Apex, see [Building an Asynchronous Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_async_adapter_concept.htm "In an asynchronous payments configuration, the payments platform first sends transaction information to the gateway. The gateway responds with an acknowledgment that it received the transaction, and then the platform creates a pending transaction. The gateway sends a notification, which contains the final transaction status. The platform then updates the transaction’s status accordingly.") and [Building a Synchronous Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_concept.htm "In synchronous payment configurations, the Salesforce payment platform sends transaction information to the gateway, and then waits for a gateway response that contains the final transaction status. Salesforce creates a transaction only if the transaction is successful in the gateway.").
3.  Create a named credential in the UI.
    1.  From Setup, in the Quick Find box, enter Named Credentials, and then select **New**.
    2.  Complete the required fields. For the URL, enter the URL of your payment gateway.
4.  Create a payment gateway provider. The PaymentGatewayProvider object stores details about the payment gateway that Salesforce Payments communicates with when processing a transaction.
    1.  Generate an access token according to the instructions in [Connect to Connect REST API Using OAuth](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/quickstart_connecting.htm "HTML (New Window)").
        
        The response includes the access token, specified in the `access_token` property, and the server instance, specified in the `instance_url` property. Use this information to make API calls to build the payment gateway provider.
        
    2.  Execute a POST call to the resource using the domain in the `instance_url`. For example, `https://instance_name.my.salesforce.com/services/data/vapi_version/tooling/sobjects/PaymentGatewayProvider`.
        
        Use this payload as the request body, replacing value with the correct data.

```plain
{
  "ApexAdapterId": "value",
  "DeveloperName": "value",
  "MasterLabel": "value",
  "IdempotencySupported": "value",
  "Comments": "value"
}

Example:
{
  "ApexAdapterId": "01pxx0000004UU8AAM",
  "DeveloperName": "MyNewGatewayProvider",
  "MasterLabel": "My New Gateway Provider",
  "IdempotencySupported": "Yes",
  "Comments": "Custom made gateway provider."
}
```

        
5.  Create a payment gateway record. The PaymentGateway object stores information about the connection to an external payment gateway. The record requires these field values.
    -   Payment Gateway Name: Name of the external payment gateway.
    -   Merchant Credential ID: ID of the named credential that you created.
    -   Payment Gateway Provider ID: ID of the payment gateway provider that you created.
    -   Status: Active
6.  Create a webhook by providing a URL in the standard notification transport settings of your external payment gateway. The external payment gateway uses the webhook to send notifications, as HTTP POST messages, to your asynchronous payment gateway adapter.
    
    The webhook is a combination of your site endpoint with the ID of the payment gateway provider.
    
    1.  Use the following URL for your site’s endpoint, replacing `domain` with your site's domain and URL. For example:
        
        `https://MyDomainName.my.salesforce-sites.com/solutions/services/data/v58.0/commerce/payments/notify`

:::tip Note
If
                you’re not using enhanced domains, your org’s Salesforce Sites URL is different. For
                details, see My Domain URL Formats in Salesforce Help.
:::

        

-   Find the ID of your payment gateway provider, and append the `?provider=ID` query parameter to the endpoint. For example, `https://MyDomainName.my.salesforce-sites.com/solutions/services/data/v58.0/commerce/payments/notify?provider=0cJR00000004CEhMAM`
-   Enter the webhook in your external payment gateway’s standard notification settings.

## See Also

- [Object Reference for the Salesforce Platform:
              PaymentGatewayProvider](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_paymentgatewayprovider.htm)

-   [*Object Reference for the Salesforce Platform*: PaymentGateway](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/sforce_api_objects_paymentgateway.htm "Object Reference for the Salesforce Platform: PaymentGateway - HTML (New Window)")
