---
doc_id: "apex_connectapi_output_non_entity_recommendation"
---

# ConnectApi.NonEntityRecommendation

A recommendation for a non-Salesforce entity, such as an application.

Subclass of [ConnectApi.AbstractRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm "A Chatter, custom, or static recommendation.").

:::tip Important
ConnectApi.NonEntityRecommendation isn’t used in version 34.0 and later. In version 34.0
          and later, [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm) is used for all
          recommendations.
:::

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `displayLabel` | String | Localized label of the non-entity object. | 32.0 |
| `motif` | [`ConnectApi.Motif`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.") | Motif for the non-entity object. | 32.0 |
