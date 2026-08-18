---
doc_id: "apex_connectapi_output_submit_return_output"
---

# ConnectApi.SubmitReturnOutputRepresentation

ID of the change order created for a return action, and a set of its financial values.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `changeBalances` | `ConnectApi.​ChangeItem​OutputRepresentation` | Financial values resulting from the return. | 48.0 |
| `changeOrderId` | String | ID of the change order created for the returned order items and shipping charges. Use this change order to create a credit memo. | 48.0 |
| `feeChangeOrderId` | String | ID of the change order created by returning order items with associated return fees. Use this change order to create an invoice. | 57.0 |
