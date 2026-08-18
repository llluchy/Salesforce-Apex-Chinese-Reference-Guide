---
doc_id: "apex_callouts_remote_site_settings"
---

# Adding Remote Site Settings

Before any Apex callout can call an external site, that site must be registered in the Remote Site Settings page, or the callout fails. Salesforce prevents calls to unauthorized network addresses.

:::tip Note
If the callout specifies a named credential as the endpoint, you don’t need to configure
      remote site settings. A named credential specifies the URL of a callout endpoint and its
      required authentication parameters in one definition. To set up named credentials, see “Define
      a Named Credential” in the Salesforce Help.
:::

To add a remote site setting:

1.  From Setup, enter Remote Site Settings in the Quick Find box, then select **Remote Site Settings**.
2.  Click **New Remote Site**.
3.  Enter a descriptive term for the Remote Site Name.
4.  Enter the URL for the remote site.
5.  Optionally, enter a description of the site.
6.  Click **Save**.

:::tip Tip
For best performance, verify that your remote HTTPS encrypted sites have OCSP
      (Online Certificate Status Protocol) stapling turned on.
:::

 

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
