---
doc_id: "apex_connectapi_output_recommended_object"
---

# ConnectApi.RecommendedObject

A recommended object, such as a custom or static recommendation.

Subclass of [ConnectApi.Actor](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm "Actor.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `idOrEnum` | String | ID of a recommendation definition for a custom recommendation or the enum value `Today` for static recommendations that don’t have an ID (version 35.0 and later). | 34.0 |
| `motif` | [`ConnectApi.Motif`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm#apex_connectapi_output_motif "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.") | Motif of the recommended object. | 34.0 |
