---
doc_id: "apex_classes_annotation_IntegrationTest"
---

# IntegrationTest Annotation (Developer Preview)

Use the `IntegrationTest` annotation to mark both classes and methods that are used in integration testing.

:::tip Note
The Apex Integration Tests feature is available as a developer preview in scratch orgs
        in Summer ’26 (API version 67.0). The feature isn’t generally available unless or until
        Salesforce announces its general availability in documentation or in press releases or
        public statements. All commands, parameters, and other features are subject to change or
        deprecation at any time, with or without notice. Don't implement functionality developed
        with these commands or tools in your production package.
:::

A class annotated with @IntegrationTest can only contain integration test methods and @TearDown methods. You can't mix @IntegrationTest and @IsTest annotations on the same class.

Integration test methods cannot be called from non-test contexts or from @IsTest test methods. However, integration tests can call methods in @IsTest utility classes, for example, shared test data factories.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)
