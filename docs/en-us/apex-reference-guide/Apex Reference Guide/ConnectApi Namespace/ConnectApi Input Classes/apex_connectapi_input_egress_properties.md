---
doc_id: "apex_connectapi_input_egress_properties"
---

# ConnectApi.EgressPropertiesInput

Represents the input details for egress properties of the activation target.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `childFolder` | String | Path of the child folder. The child folder is created in the parent directory for copying activation files. | Optional | 60.0 |
| `customFilename` | String | Custom name of the output file. Either `customFilename` or `predeterminedFilename` must be present. | Optional | 60.0 |
| `fileNameType` | [`EgressFileNameTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#EgressFileNameTypeEnum) | Type of egress file name.
-   `Custom`
-   `Predetermined`

 | Required | 60.0 |
| `filenameDateSuffixFormat` | String | Date suffix format for the output file name. Use the format `yyyy-MM-dd-HH-mm-ss` or `yyyy-MM-dd-HH-mm-ss-SSS`. | Required | 60.0 |
| `isSubfolderCreationEnabled` | Boolean | Indicates whether subfolder creation is enabled (`true`) or not (`false`). If `true`, a custom subfolder is created. The default is `false`. | Optional | 60.0 |
| `outputCompressionFormat` | [`CompressionFormatEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CompressionFormatEnum) | Compression format for the output file.

-   `Bzip2`
-   `Gzip`
-   `None`\-No compression

 | Required | 60.0 |
| `outputDelimiter` | [`FileDelimiterEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FileDelimiterEnum) | Field delimiter for the output file.

-   `BrokenPipe`
-   `Caret`
-   `Colon`
-   `Comma`
-   `Hash`
-   `Pipe`
-   `Semicolon`
-   `Slash`
-   `Tab`
-   `Tilde`
-   `Underscore`

 | Required | 60.0 |
| `outputFormat` | String | Output format for the activation target. | Required | 60.0 |
| `outputMaxFileSizeMegaBytes` | Long | Maximum size of the output file in megabytes from `1` through `500`. | Required | 60.0 |
| `outputMaxRecordsPerFile` | Long | Maximum number of records in the output file from `1` through `100000`. | Required | 60.0 |
| `predeterminedFilename` | [`PreDeterminedFileNameEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PreDeterminedFileNameEnum) | Predetermined name of the output file. Either `customFilename` or `predeterminedFilename` must be present.

-   `Activation`
-   `Segment`
-   `SegmentActivation`

 | Optional | 60.0 |
