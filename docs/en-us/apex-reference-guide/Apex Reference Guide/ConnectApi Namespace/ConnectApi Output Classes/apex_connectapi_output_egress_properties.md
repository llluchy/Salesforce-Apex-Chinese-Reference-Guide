---
doc_id: "apex_connectapi_output_egress_properties"
---

# ConnectApi.EgressPropertiesRepresentation

Represents the details for egress properties of the activation target.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `childFolder` | String | Path of the child folder. | 60.0 |
| `customFilename` | String | Custom name of the output file. Either `customFilename` or `predeterminedFilename` must be present. | 60.0 |
| `fileNameType` | [`EgressFileNameTypeEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#EgressFileNameTypeEnum) | Type of egress file name.
-   `Custom`
-   `Predetermined`

 | 60.0 |
| `filenameDateSuffixFormat` | String | Date suffix format for the output file name. | 60.0 |
| `isSubfolderCreationEnabled` | Boolean | Indicates whether subfolder creation is enabled (`true`) or not (`false`). | 60.0 |
| `outputCompressionFormat` | [`CompressionFormatEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CompressionFormatEnum) | Compression format for the output file.

-   `Bzip2`
-   `Gzip`
-   `None`\-No compression

 | 60.0 |
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

 | 60.0 |
| `outputFormat` | String | Output format of the activation target. | 60.0 |
| `outputMaxFileSizeMegaBytes` | Long | Maximum size of the output file in megabytes. | 60.0 |
| `outputMaxRecordsPerFile` | Long | Maximum number of records in the output file. | 60.0 |
| `predeterminedFilename` | [`PreDeterminedFileNameEnum`](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PreDeterminedFileNameEnum) | Predetermined name of the output file. Either `customFilename` or `predeterminedFilename` must be present.

-   `Activation`
-   `Segment`
-   `SegmentActivation`

 | 60.0 |
