---
doc_id: "apex_connectapi_output_insights_output"
---

# ConnectApi.InsightsOutputRepresentation

Insight details for a business objective, or goal.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `dashboardUrl` | String | URL to the dashboard where the insight can be viewed. | 62.0 |
| `insightSummaryText` | String | A localized, human-readable summary of the insight value's performance, including the change from the previous value. | 62.0 |
| `name` | String | Name of the insight. | 62.0 |
| `values` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​InsightsValues​OutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_insight_values_output.htm "Insight value details for a business objective, or goal.")\> | List of insight categories. | 62.0 |
