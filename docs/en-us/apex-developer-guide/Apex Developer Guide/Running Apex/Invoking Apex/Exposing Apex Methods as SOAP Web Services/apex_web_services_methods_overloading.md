---
doc_id: "apex_web_services_methods_overloading"
---

# Overloading Web Service Methods

SOAP and WSDL do not provide good support for overloading methods. Consequently, Apex does not allow two methods marked with the `webservice` keyword to have the same name. Web service methods that have the same name in the same class generate a compile-time error.
