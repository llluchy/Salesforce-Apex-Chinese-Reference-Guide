---
doc_id: "apex_connectapi_output_file_preview"
---

# ConnectApi.FilePreview

A file preview.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `format` | [`ConnectApi.​FilePreviewFormat`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum) | The format of the preview. Values are:
-   `Audio`—Preview format is MP3.
-   `Jpg`—Preview format is JPG.
-   `Pdf`—Preview format is PDF.
-   `Svg`—Preview format is compressed SVG.
-   `Thumbnail`—Preview format is 240 x 180 PNG.
-   `ThumbnailBig`—Preview format is 720 x 480 PNG.
-   `ThumbnailTiny`—Preview format is 120 x 90 PNG.
-   `Video`—Preview format is MP4.

 | 39.0 |
| `previewUrlCount` | Integer | The total number of preview URLs for this preview format. | 39.0 |
| `previewUrls` | [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[`ConnectApi.​FilePreviewUrl`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_url.htm#apex_connectapi_output_file_preview_url "A URL to a file preview.")\> | A list of file preview URLs. | 39.0 |
| `status` | [`ConnectApi.​FilePreviewStatus`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewStatus_enum) | The availability status of the preview. Values are:

-   `Available`—Preview is available.
-   `InProgress`—Preview is being processed.
-   `NotAvailable`—Preview is unavailable.
-   `NotScheduled`—Generation of the preview isn’t scheduled yet.

 | 39.0 |
| `url` | String | The URL for the file preview. | 39.0 |

## See Also

- [ConnectApi.FilePreviewCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_collection.htm)
