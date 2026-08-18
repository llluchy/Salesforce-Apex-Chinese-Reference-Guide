---
doc_id: "apex_connectapi_input_confirm_held_f_o_capacity_request"
---

# ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation

Request to confirm held fulfillment order capacity at one or more locations.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `allOrNothing` | Boolean | Controls whether a single failed request cancels all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 55.0 |
| `capacityRequests` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​CapacityRequest​InputRepresentation`\> | List of requests to confirm held fulfillment order capacity. Each request is for one fulfillment order assigned to one location. | Required | 55.0 |
