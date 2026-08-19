---
doc_id: "DataWeaveInApex_limitations"
---

# Limitations of DataWeave in Apex

DataWeave in Apex has these limitations.

-   The DataWeave Java bridge, that is, the ability to bind to static Java methods is disabled. See [Introduction to Mule 4](https://docs.mulesoft.com/mule-runtime/4.2/intro-java-integration "HTML (New Window)"). Features that interact with the environment such as the `readURL` and `envVar` functions are also disabled. These checks are done at script creation time instead of at runtime.
-   You must specify an encoding for binary input (Apex Blobs) to be coerced to strings: `binaryVariable as String {encoding: 'utf8' }"`.
-   DataWeave is constrained to disallow the loading of additional libraries. Therefore, scripts must be self-contained.
-   DataWeave modules and importing other scripts aren’t supported. For example, `import modules::MyMapping` as per [Using a Mapping File](https://docs.mulesoft.com/dataweave/2.4/dataweave-create-module#using-a-mapping-file-in-a-dataweave-script "HTML (New Window)") in a DataWeave Script isn’t supported. 

:::tip Note
The feature supports
                    built-in modules. See  [DataWeave Reference](https://docs.mulesoft.com/dataweave/2.3/dw-functions).
:::

-   DataWeave in Apex doesn’t support these content types.
    -   [Flat File Format](https://docs.mulesoft.com/dataweave/2.4/dataweave-formats-flatfile "HTML (New Window)") (`application/flatfile`)
    -   [Excel](https://docs.mulesoft.com/dataweave/2.4/dataweave-formats-excel "HTML (New Window)") (`application/xlsx`)
    -   [Avro](https://docs.mulesoft.com/dataweave/2.4/dataweave-formats-avro "HTML (New Window)") (`application/avro`)
-   Apex classes must be at API version 53.0 or later to access DataWeave integration methods.
-   There’s a maximum of 50 DataWeave scripts per org.
-   The maximum body size of one DataWeave script is 100,000 (one hundred thousand) characters.

:::tip Note
XML Entity Expansion isn’t supported, either currently or in the future, as a guard
            against denial of service attacks.
:::
