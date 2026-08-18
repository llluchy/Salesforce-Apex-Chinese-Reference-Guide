---
doc_id: "apex_classes_push_notification"
---

# PushNotification Class

`PushNotification` is used to configure push notifications and send them from an Apex trigger.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Example

This sample Apex trigger sends push notifications to the external client app named Test\_App, which corresponds to a mobile app on iOS mobile clients. The trigger fires after cases have been updated and sends the push notification to two users: the case owner and the user who last modified the case.

```apex
trigger caseAlert on Case (after update) {    
    
    for(Case cs : Trigger.New)  
    {
        // Instantiating a notification
        Messaging.PushNotification msg = 
            new Messaging.PushNotification();

        // Assembling the necessary payload parameters for Apple.
        // Apple params are: 
        // (,,,
        // )
        // This example doesn't use badge count or free-form data.
        // The number of notifications that haven't been acted
        // upon by the intended recipient is best calculated
        // at the time of the push. This timing helps
        // ensure accuracy across multiple target devices.
        MapString, Object> payload = 
            Messaging.PushNotificationPayload.apple(
                'Case ' + cs.CaseNumber + ' status changed to: ' 
                + cs.Status, '', null, null);

        // Adding the assembled payload to the notification
        msg.setPayload(payload);

        // Getting recipient users
        String userId1 = cs.OwnerId;
        String userId2 = cs.LastModifiedById;

        // Adding recipient users to list
        SetString> users = new SetString>();
        users.add(userId1);
        users.add(userId2);                       

        // Sending the notification to the specified app and users.
        // Here we specify the API name of the external client app.  
        msg.send('Test_App', users);
    }
}
```

## See Also

- [PushNotification Constructors](atlas.en-us.apexref.meta/apexref/apex_Messaging_PushNotification_constructors.htm)
- [PushNotification Methods](atlas.en-us.apexref.meta/apexref/apex_Messaging_PushNotification_methods.htm)
