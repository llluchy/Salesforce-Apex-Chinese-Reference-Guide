---
doc_id: "apex_classes_annotation_TearDown"
---

# TearDown Annotation (Developer Preview)

Use the `TearDown` annotation to mark a cleanup method that runs after the test completes, regardless of pass or fail.

:::tip Note
The Apex Integration Tests feature is available as a developer preview in scratch orgs
        in Summer ’26 (API version 67.0). The feature isn’t generally available unless or until
        Salesforce announces its general availability in documentation or in press releases or
        public statements. All commands, parameters, and other features are subject to change or
        deprecation at any time, with or without notice. Don't implement functionality developed
        with these commands or tools in your production package.
:::

The annotation is applied to a static method that runs after the integration test completes, regardless of whether the test passed, failed, or threw an exception. Use this annotation to clean up committed test data. The teardown transaction auto-commits at the end of the execution.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testsetup.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm)
