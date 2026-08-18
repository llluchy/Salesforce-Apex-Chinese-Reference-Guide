---
doc_id: "apex_testing"
---

# Testing Apex

Apex provides a testing framework that allows you to write unit tests, run your tests, check test results, and have code coverage results.

Let's talk about unit tests, data visibility for tests, and the tools that are available on the Lightning platform for testing Apex. We'll also describe testing best practices and a testing example.

:::tip Note
To protect the privacy of your data, make sure that test error messages and exception
            details don’t contain any personal data. The Apex exception handler and testing
            framework can’t determine if sensitive data is contained in user-defined messages and
            details. To include personal data in custom Apex exceptions, we recommend that you
            create an Exception subclass with new properties that hold the personal data. Then,
            don’t include subclass property information in the exception's message string.
:::

## See Also

- [Understanding Testing in Apex](atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm)
- [What to Test in Apex](atlas.en-us.apexcode.meta/apexcode/apex_testing_what.htm)
- [What Are Apex Unit Tests?](atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests.htm)
- [Understanding Test Data](atlas.en-us.apexcode.meta/apexcode/apex_testing_data.htm)
- [Run Unit Test Methods](atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm)
- [Testing Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm)
- [Testing Example](atlas.en-us.apexcode.meta/apexcode/apex_testing_example.htm)
- [Testing and Code Coverage](atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm)
- [Code Coverage Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_best_pract.htm)
- [Build a Mocking Framework with the Stub API](atlas.en-us.apexcode.meta/apexcode/apex_testing_stub_api.htm)
- [Apex Integration Tests for Agentforce and Data 360 Services (Developer Preview)](atlas.en-us.apexcode.meta/apexcode/apex_testing_integration_testing.htm)
