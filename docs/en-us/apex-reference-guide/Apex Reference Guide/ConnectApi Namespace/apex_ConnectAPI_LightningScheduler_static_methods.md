---
doc_id: "apex_ConnectAPI_LightningScheduler_static_methods"
---

# LightningScheduler Class

Create and update service appointments.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## LightningScheduler Methods

These methods are for `LightningScheduler`. All methods are static.

## See Also

- [createServiceAppointment(createServiceAppointmentInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_LightningScheduler_static_methods.htm#apex_ConnectAPI_LightningScheduler_createServiceAppointment_2)
- [updateServiceAppointment(updateServiceAppointmentInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_LightningScheduler_static_methods.htm#apex_ConnectAPI_LightningScheduler_updateServiceAppointment_1)

### createServiceAppointment(createServiceAppointmentInput)

Create a service appointment.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ServiceAppointmentOutput createServiceAppointment(ConnectApi.CreateServiceAppointmentInput createServiceAppointmentInput)`

#### Parameters

createServiceAppointmentInput

Type: `ConnectApi.CreateServiceAppointmentInput`

Input parameters to create a service appointment.

#### Return Value

Type: `ConnectApi.ServiceAppointmentOutput`

#### Usage

Considerations for using engagement channel types with the `service-appointments` resource:

-   Enable **Schedule Appointments Using Engagement Channels** in Salesforce Scheduler Settings in your Salesforce org.
-   When you create or modify appointments, shifts must be defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

:::tip Note
Engagement channel types are not supported with
                     operating hours rules in the scheduling policy.
:::

-   When you use engagement channel type and shifts to create a service appointment, Salesforce Scheduler considers the default value for the Appointment Type (if not specified). However, Salesforce Scheduler only considers the engagement channel type and Appointment Type is ignored.

#### Example

For an account (existing user):

```apex
ConnectApi.ExtendedFieldInput extendedFieldEmail = new ConnectApi.ExtendedFieldInput();
extendedFieldEmail.name = 'Email';
extendedFieldEmail.value = 'rachael.adams@salesforce.com';

ConnectApi.ExtendedFieldInput extendedFieldPhone = new ConnectApi.ExtendedFieldInput();
extendedFieldPhone.name = 'Phone';
extendedFieldPhone.value = '1234567890';

List extendedFieldList = new List();
extendedFieldList.add(extendedFieldEmail);
extendedFieldList.add(extendedFieldPhone);

ConnectApi.ServiceAppointmentInput serviceAppInput = new ConnectApi.ServiceAppointmentInput();
serviceAppInput.extendedFields = extendedFieldList;
serviceAppInput.engagementChannelTypeId = '0eFRM00000000Bv2AI';
serviceAppInput.serviceTerritoryId = '0Hhxx0000004C92CAE';
serviceAppInput.workTypeId = '08qxx0000004C92AAE';
serviceAppInput.parentRecordId = '001xx000003GYR1AAO';
serviceAppInput.schedStartTime = DateTime.valueOf('2021-05-28 12:15:00');
serviceAppInput.schedEndTime = DateTime.valueOf('2021-05-28 12:45:00');
serviceAppInput.appointmentMode = 'Group';
serviceAppInput.attendeeLimit = 20;

ConnectApi.AssignedResourcesInput asResourceInput = new ConnectApi.AssignedResourcesInput();
asResourceInput.serviceResourceId = '0Hnxx0000004CAiCAM';
asResourceInput.isRequiredResource = true;
asResourceInput.isPrimaryResource = true;

List asResourceInputList = new List();
asResourceInputList.add(asResourceInput);

ConnectApi.CreateServiceAppointmentInput createInput = new ConnectApi.CreateServiceAppointmentInput();
createInput.serviceAppointment = serviceAppInput;
createInput.assignedResources = asResourceInputList;

try{
   ConnectApi.ServiceAppointmentOutput appointmentResult = ConnectApi.LightningScheduler.createServiceAppointment(createInput);
   String serviceAppointmentId = appointmentResult.result.serviceAppointmentId;
   ListString> assignedResourceIds = appointmentResult.result.assignedResourceIds;
}catch(ConnectApi.ConnectApiException ex){
   //Handle Exception
}
```

For a lead (authenticated guest user):

```apex
ConnectApi.LeadInput leadInput = new ConnectApi.LeadInput();
leadInput.firstName = 'Rachel';
leadInput.lastName = 'Adams';
leadInput.phone = '012-345-6789';
leadInput.email = 'rachel.adams@salesforce.com';
leadInput.company = 'Salesforce';

ConnectApi.ExtendedFieldInput extendedFieldEmail = new ConnectApi.ExtendedFieldInput();
extendedFieldEmail.name = 'Email';
extendedFieldEmail.value = 'rachael.adams@salesforce.com';

ConnectApi.ExtendedFieldInput extendedFieldPhone = new ConnectApi.ExtendedFieldInput();
extendedFieldPhone.name = 'Phone';
extendedFieldPhone.value = '1234567890';

List extendedFieldList = new List();
extendedFieldList.add(extendedFieldEmail);
extendedFieldList.add(extendedFieldPhone);

ConnectApi.ServiceAppointmentInput serviceAppInput = new ConnectApi.ServiceAppointmentInput();
serviceAppInput.extendedFields = extendedFieldList;
serviceAppInput.engagementChannelTypeId = '0eFRM00000000Bv2AI';
serviceAppInput.serviceTerritoryId = '0Hhxx0000004C92CAE';
serviceAppInput.workTypeId = '08qxx0000004C92AAE';
serviceAppInput.schedStartTime = DateTime.valueOf('2021-05-28 12:15:00');
serviceAppInput.schedEndTime = DateTime.valueOf('2021-05-28 12:45:00');

ConnectApi.AssignedResourcesInput asResourceInput = new ConnectApi.AssignedResourcesInput();
asResourceInput.serviceResourceId = '0Hnxx0000004CAiCAM';
asResourceInput.isRequiredResource = true;
asResourceInput.isPrimaryResource = true;

List asResourceInputList = new List();
asResourceInputList.add(asResourceInput);

ConnectApi.CreateServiceAppointmentInput createInput = new ConnectApi.CreateServiceAppointmentInput();
createInput.serviceAppointment = serviceAppInput;
createInput.assignedResources = asResourceInputList;
createInput.lead = leadInput;

try{
   ConnectApi.ServiceAppointmentOutput appointmentResult = ConnectApi.LightningScheduler.createServiceAppointment(createInput);
   String serviceAppointmentId = appointmentResult.result.serviceAppointmentId;
   ListString> assignedResourceIds = appointmentResult.result.assignedResourceIds;
}catch(ConnectApi.ConnectApiException ex){
   //Handle Exception
}
```

## See Also

- [Service Appointments](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/connect_resources_service_appointments.htm)

### updateServiceAppointment(updateServiceAppointmentInput)

Update a service appointment.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.ServiceAppointmentOutput updateServiceAppointment(ConnectApi.UpdateServiceAppointmentInput updateServiceAppointmentInput)`

#### Parameters

updateServiceAppointmentInput

Type: `ConnectApi.UpdateServiceAppointmentInput`

Input parameters to update a service appointment.

#### Return Value

Type: `ConnectApi.ServiceAppointmentOutput`

#### Usage

Considerations for using engagement channel types with the `service-appointments` resource:

-   Enable **Schedule Appointments Using Engagement Channels** in Salesforce Scheduler Settings in your Salesforce org.
-   When you create or modify appointments, shifts must be defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

:::tip Note
Engagement channel
                                                  types are not supported with operating hours rules
                                                  in the scheduling policy.
:::

-   When you use engagement channel type and shifts to modify an appointment, Salesforce Scheduler considers the default value for the Appointment Type (if not specified). However, Salesforce Scheduler only considers the engagement channel type and Appointment Type is ignored.

#### Example

```apex
ConnectApi.ExtendedFieldInput extendedFieldEmail = new ConnectApi.ExtendedFieldInput();
extendedFieldEmail.name = 'Email';
extendedFieldEmail.value = 'rachel.adams@salesforce.com.example';

ConnectApi.ExtendedFieldInput extendedFieldPhone = new ConnectApi.ExtendedFieldInput();
extendedFieldPhone.name = 'Phone';
extendedFieldPhone.value = '0123456789';

ConnectApi.ExtendedFieldInput extendedFieldStatus = new ConnectApi.ExtendedFieldInput();
extendedFieldStatus.name = 'Status';
extendedFieldStatus.value = 'None';

List extendedFieldList = new List();
extendedFieldList.add(extendedFieldEmail);
extendedFieldList.add(extendedFieldPhone);
extendedFieldList.add(extendedFieldStatus);

ConnectApi.ServiceAppointmentInput serviceAppInput = new ConnectApi.ServiceAppointmentInput();
serviceAppInput.extendedFields = extendedFieldList;
serviceAppInput.serviceTerritoryId = '0Hhxx0000004C92CAE';
serviceAppInput.workTypeId = '08qxx0000004C92AAE';
serviceAppInput.schedStartTime = DateTime.valueOf('2021-05-28 12:15:00');
serviceAppInput.schedEndTime = DateTime.valueOf('2021-05-28 12:45:00');

ConnectApi.AssignedResourcesInput asResourceInput = new ConnectApi.AssignedResourcesInput();
asResourceInput.serviceResourceId = '0Hnxx0000004CAiCAM';
asResourceInput.isRequiredResource = true;
asResourceInput.isPrimaryResource = true;

//Multi-resource
ConnectApi.AssignedResourcesInput asResourceInputReq = new ConnectApi.AssignedResourcesInput();
asResourceInputReq.serviceResourceId = '0Hnxx0000004CAgCAM';
asResourceInputReq.isRequiredResource = true;
asResourceInputReq.isPrimaryResource = false;

List asResourceInputList = new List();
asResourceInputList.add(asResourceInput);
asResourceInputList.add(asResourceInputReq);

ConnectApi.UpdateServiceAppointmentInput updateInput = new ConnectApi.UpdateServiceAppointmentInput();
updateInput.serviceAppointment = serviceAppInput;
updateInput.assignedResources = asResourceInputList;
updateInput.serviceAppointmentId = '08pxx0000004CYqAAM';

try{
   ConnectApi.ServiceAppointmentOutput appointmentResult = ConnectApi.LightningScheduler.updateServiceAppointment(updateInput);
   String serviceAppointmentId = appointmentResult.result.serviceAppointmentId;
   ListString> assignedResourceIds = appointmentResult.result.assignedResourceIds;
}catch(ConnectApi.ConnectApiException ex){
   //Handle Exception
}
```

## See Also

- [Service Appointments](https://developer.salesforce.com/docs/atlas.en-us.262.0.chatterapi.meta/chatterapi/connect_resources_service_appointments.htm)
