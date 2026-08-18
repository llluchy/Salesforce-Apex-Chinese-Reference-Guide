---
doc_id: "apex_Messaging_PushNotification_ctor_2"
---

# PushNotification(payload)

Creates a new instance of the `Messaging.PushNotification` class using the specified payload parameters as key-value pairs. When you use this constructor, you don’t need to call `setPayload` to set the payload.

## Signature

```apex
public PushNotification(MapString,Object> payload)
```

## Parameters

-   **payload**:
    
    Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>
    
    The payload, expressed as a map of key-value pairs.
