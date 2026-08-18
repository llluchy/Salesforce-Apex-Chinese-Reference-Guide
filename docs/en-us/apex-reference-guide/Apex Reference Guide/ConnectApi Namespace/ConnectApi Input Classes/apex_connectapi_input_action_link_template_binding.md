---
doc_id: "apex_connectapi_input_action_link_template_binding"
---

# ConnectApi.ActionLinkTemplateBindingInput

A key-value pair to fill in a binding variable value from an action link template.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `key` | String | The name of the binding variable key specified in the action link template in Setup. For example, if the binding variable in the template is `{!Binding.firstName}`, the key is `firstName` | Required | 33.0 |
| `value` | String | The value of the binding variable key. For example, if the key is `firstName`, this value could be `Joan`. | Required | 33.0 |

## See Also

- [ConnectApi.ActionLinkGroupDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm)
