---
doc_id: "apex_connectapi_output_submit_cancel_output"
---

# ConnectApi.SubmitCancelOutputRepresentation

ID of the change order created for a cancel action, and a set of its financial values.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `changeBalances` | `ConnectApi.​ChangeItem​OutputRepresentation` | Financial values resulting from the cancel. | 48.0 |
| `changeOrderId` | String | ID of the change order created for the canceled order items and shipping charges. Use this change order to create a credit memo. | 48.0 |
| `feeChangeOrderId` | String | ID of the change order created by canceling order items with associated cancel fees. Use this change order to create an invoice. | 57.0 |
