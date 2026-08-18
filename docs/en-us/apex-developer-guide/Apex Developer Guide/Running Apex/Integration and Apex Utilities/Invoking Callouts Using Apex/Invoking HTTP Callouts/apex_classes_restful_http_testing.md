---
doc_id: "apex_classes_restful_http_testing"
---

# Testing HTTP Callouts

To deploy or package Apex, 75% of your code must have test coverage. By default, test methods don’t support HTTP callouts, so tests that perform callouts fail. Enable HTTP callout testing by instructing Apex to generate mock responses in tests, using `Test.setMock`.

Specify the mock response in one of the following ways.

-   [By implementing the `HttpCalloutMock` interface](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm)
-   [By using Static Resources with `StaticResourceCalloutMock` or `MultiStaticResourceCalloutMock`](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_static.htm)

To enable running DML operations before mock callouts in your test methods, see [Performing DML Operations and Mock Callouts](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_dml.htm).

## See Also

- [Testing HTTP Callouts by Implementing the HttpCalloutMock Interface](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm)
- [Testing HTTP Callouts Using Static Resources](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_static.htm)
- [Performing DML Operations and Mock Callouts](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_dml.htm)
- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http.htm)
