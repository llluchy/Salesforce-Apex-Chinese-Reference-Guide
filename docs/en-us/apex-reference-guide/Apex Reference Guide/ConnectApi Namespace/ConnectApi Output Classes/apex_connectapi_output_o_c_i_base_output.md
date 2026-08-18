---
doc_id: "apex_connectapi_output_o_c_i_base_output"
---

# ConnectApi.OCIBaseOutputRepresentation

Base Omnichannel Inventory output class.

This class is abstract.

Superclass of:

-   [ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_get_inventory_availability_output.htm "Response to a request for inventory availability data.")
-   [ConnectApi.OCIPublishLocationStructureOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_output.htm "Response to a publish location structure request.")
-   [ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_status_output.htm "Detailed status of a publish location structure job.")
-   [ConnectApi.OCIUploadInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_upload_inventory_availability_output.htm "Response to an upload inventory availability job.")
-   [ConnectApi.OCIUploadInventoryAvailabilityStatusOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_upload_inventory_availability_status_output.htm "Detailed status of an upload inventory availability job.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `errors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ErrorResponse`\> | Any errors that were returned. | 51.0 |
| `success` | Boolean | Indicates whether the request was successful. | 51.0 |
