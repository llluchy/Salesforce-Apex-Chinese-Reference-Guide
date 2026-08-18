---
doc_id: "apex_classes_annotation_http_get"
---

# HttpGet Annotation

The `@HttpGet` annotation is used at the method level and enables you to expose an Apex method as a REST resource. This method is called when an HTTP `GET` request is sent, and returns the specified resource.

These are some considerations when using this annotation:

-   To use this annotation, your Apex method must be defined as global static.
-   Methods annotated with `@HttpGet` are also called if the HTTP request uses the `HEAD` request method.
