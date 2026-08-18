---
doc_id: "apex_connectapi_output_o_c_i_upload_inventory_availability_status_output"
---

# ConnectApi.OCIUploadInventoryAvailabilityStatusOutputRepresentation

Detailed status of an upload inventory availability job.

Subclass of [ConnectApi.OCIBaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_base_output.htm "Base Omnichannel Inventory output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `endTimeUTC` | String | The UTC time when the job finished. (for example: "2020-07-06T22:54:08.012Z") | 51.0 |
| `recordsProcessedCount` | Integer | The number of records processed by the job. | 51.0 |
| `recordsReadCount` | Integer | The number of records read by the job. | 51.0 |
| `recordsSkippedCount` | Integer | The number of records skipped by the job. | 51.0 |
| `startTimeUTC` | String | The UTC time when the job started. (for example: "2020-07-06T22:53:06.788Z") | 51.0 |
| `status` | String | The overall status of the inventory availability upload (e.g. "PENDING", "COMPLETED"). | 51.0 |
| `uploadId` | String | Identifier of the job. | 51.0 |
| `validationErrors` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`String`\> | List of any validation errors returned by the job. | 51.0 |
| `validationStatus` | String | The validation status of the job. | 51.0 |
