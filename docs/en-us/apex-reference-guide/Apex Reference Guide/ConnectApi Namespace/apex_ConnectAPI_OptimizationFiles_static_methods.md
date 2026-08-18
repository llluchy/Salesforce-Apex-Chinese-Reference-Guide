---
doc_id: "apex_ConnectAPI_OptimizationFiles_static_methods"
---

# OptimizationFiles Class

Fetch files associated with optimization requests for Enhanced Scheduling and Optimization. Requires Field Service to be enabled for the org and the running user to have Field Service enabled.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## OptimizationFiles Methods

These methods are for `OptimizationFiles`. All methods are static.

## See Also

- [FetchOptimizationFiles(fetchFilesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OptimizationFiles_static_methods.htm#apex_ConnectAPI_OptimizationFiles_FetchOptimizationFiles_1)

### FetchOptimizationFiles(fetchFilesInput)

Fetch the files generated for an optimization request in Enhanced Scheduling and Optimization.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.FetchFilesOutputRepresentation FetchOptimizationFiles(ConnectApi.fetchFilesInput fetchFilesInput)`

#### Parameters

fetchFilesInput

Type: [`ConnectApi.fetchFilesInput`](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fetch_files.htm "Input representation for a fetch optimization files operation.")

The input representation containing the ID of the optimization request for which to retrieve the associated files.

#### Return Value

Type: [`ConnectApi.FetchFilesOutputRepresentation`](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fetch_files.htm "Output representation returned by ConnectApi.OptimizationFiles.FetchOptimizationFiles(). Contains a map of the Content Version files created in the org for the optimization request.")

#### Usage

Use FetchOptimizationFiles to retrieve the Content Version files produced for a completed optimization request. Each file in the response corresponds to a file created in the org and is keyed by filename in the returned map.

#### Example

```apex
ConnectApi.fetchFilesInput input = new ConnectApi.fetchFilesInput();
      input.optimizationRequestId = '0XxXXXXXXXXXXXXX';
      
      ConnectApi.FetchFilesOutputRepresentation output =
      ConnectApi.OptimizationFiles.FetchOptimizationFiles(input);
      
      MapString, ConnectApi.CreatedFile> files = output.createdFiles;
      
      for (String fileName : files.keySet()) {
      ConnectApi.CreatedFile file = files.get(fileName);
      System.debug(fileName + ': id=' + file.contentVersionId + ', success=' + file.success);
      }
```
