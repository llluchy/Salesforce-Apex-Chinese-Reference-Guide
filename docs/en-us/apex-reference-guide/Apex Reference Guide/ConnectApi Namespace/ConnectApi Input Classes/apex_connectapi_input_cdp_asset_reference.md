---
doc_id: "apex_connectapi_input_cdp_asset_reference"
---

# ConnectApi.CdpAssetReferenceInput

Refernce to the model asset to use for the prediction request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `id` | String | ID of the asset. | One of `id` or `name` is required. | 58.0 |
| `name` | String | Name of the asset. | One of `id` or `name` is required. | 58.0 |
| `namespace` | String | Namespace of the asset. The `default` namespace is used by default. | Optional | 58.0 |
