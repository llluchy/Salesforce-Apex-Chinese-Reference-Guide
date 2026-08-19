---
doc_id: "apex_deploying_metadataAPI"
---

# Deploy Apex Using Metadata API

Use Metadata API to deploy customization information, such as custom object definitions for your org.

To deploy custom metadata, use the `Metadata.Operations.enqueueDeployment()` method to asynchronously deploy metadata to the current org. For more information, see [Operations Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_Metadata_Operations.htm).

:::tip Note
If a single deployment has over 2,000 Apex classes, [ApexCodeCoverage](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm) objects for the
   deployed classes are deleted even if the deployment fails or is rolled back.
   ApexCodeCoverageAggregate objects aren’t affected.
:::

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_deploying_ide.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_deploying_toolingAPI.htm)

#### See Also

-   [*Metadata API Developer Guide*: deploy()](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_deploy.htm "Metadata API Developer Guide: deploy() - HTML (New Window)")
    
-   [*Using Salesforce Features with Apex*: Metadata](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_metadata.htm "Using Salesforce Features with Apex: Metadata - HTML (New Window)")
