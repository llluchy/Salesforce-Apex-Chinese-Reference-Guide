---
doc_id: "apex_connectapi_input_change"
---

# ConnectApi.ChangeInputRepresentation

A list of changes to OrderItemSummaries that make up an order change, such as a cancel or return.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `changeItems` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<`ConnectApi.​ChangeItemInput​Representation`\> | List of changes to OrderItemSummaries. | Required | 48.0 |

## See Also

- [previewCancel(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_previewCancel_1)

-   [previewReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_previewReturn_1 "Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.")
    
-   [submitCancel(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitCancel_1 "Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order.")
    
-   [submitReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitReturn_1 "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")
