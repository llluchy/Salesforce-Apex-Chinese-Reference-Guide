---
doc_id: "apex_connectapi_input_feed_stream"
---

# ConnectApi.ChatterStreamInput

A Chatter feed stream.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `description` | String | Description of the stream, up to 1,000 characters. | Optional | 39.0 |
| `name` | String | Name of the stream, up to 120 characters. | Required when creating a stream
Optional when updating a stream

 | 39.0 |
| `subscriptions​ToAdd` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​Stream​Subscription​Input`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_stream_subscription.htm#apex_connectapi_input_stream_subscription "An entity to subscribe to for a Chatter feed stream.")\> | List of up to 25 entities whose feeds are included in the stream.

Adding an entity that is already added results in no operation. Including the same entity in `subscriptionsToAdd` and `subscriptionsToRemove` results in no operation.

 | Optional | 39.0 |
| `subscriptions​ToRemove` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​Stream​Subscription​Input`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_stream_subscription.htm#apex_connectapi_input_stream_subscription "An entity to subscribe to for a Chatter feed stream.")\> | List of entities whose feeds are removed from the stream.

Removing an entity that is already removed results in no operation. Including the same entity in `subscriptionsToAdd` and `subscriptionsToRemove` results in no operation.

 | Optional when updating a stream

Not supported when creating a stream

 | 39.0 |
