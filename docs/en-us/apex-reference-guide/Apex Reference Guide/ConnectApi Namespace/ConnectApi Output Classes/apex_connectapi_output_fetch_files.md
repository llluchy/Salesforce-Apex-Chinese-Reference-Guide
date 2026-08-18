---
doc_id: "apex_connectapi_output_fetch_files"
---

# ConnectApi.FetchFilesOutputRepresentation

Output representation returned by ConnectApi.OptimizationFiles.FetchOptimizationFiles(). Contains a map of the Content Version files created in the org for the optimization request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| `createdFiles` | [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String, [ConnectApi.CreatedFile](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CreatedFileRepresentation.htm "Represents a single file created during a FetchOptimizationFiles operation. Contains the ID of the Content Version record created in the org and an indicator of whether the creation succeeded.")\> | A map of filenames to `ConnectApi.CreatedFile` objects. Each key is the name of a file associated with the optimization request, and each value describes the Content Version record created in the org for that file. | 66.0 |

## See Also

- [FetchOptimizationFiles(fetchFilesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OptimizationFiles_static_methods.htm#apex_ConnectAPI_OptimizationFiles_FetchOptimizationFiles_1)
