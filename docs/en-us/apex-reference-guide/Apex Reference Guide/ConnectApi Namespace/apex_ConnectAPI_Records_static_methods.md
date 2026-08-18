---
doc_id: "apex_ConnectAPI_Records_static_methods"
---

# Records Class

Access information about record motifs, which are small icons used to distinguish record types in the Salesforce UI.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Records Methods

These methods are for `Records`. All methods are static.

## See Also

- [getMotif(communityId, idOrPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm#apex_ConnectAPI_Records_getMotif)
- [getMotifBatch(communityId, idOrPrefixList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm#apex_ConnectAPI_Records_getMotifBatch)

### getMotif(communityId, idOrPrefix)

Get a motif that contains the URLs for a set of small, medium, and large motif icons for a record. It can also contain a base color for the record.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.Motif getMotif(String communityId, String idOrPrefix)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

idOrPrefix

Type: String

An ID or key prefix.

#### Return Value

Type: `ConnectApi.​Motif`

#### Usage

Each Salesforce record type has its own set of motif icons.

### getMotifBatch(communityId, idOrPrefixList)

Get a motif for a list of objects.

#### API Version

31.0

#### Requires Chatter

No

#### Signature

`public static ConnectApi.BatchResult[] getMotifBatch(String communityId, List<String> idOrPrefixList)`

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, `internal`, or `null`.

idOrPrefixList

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<String>

A list of object IDs or prefixes.

#### Return Value

Type: `ConnectApi.BatchResult`\[\]

The `ConnectApi.BatchResult.getResult()` method returns a `ConnectApi.Motif` object and errors for motifs that didn’t load.

#### Example

```apex
String communityId = null;
ListString> prefixIds = new ListString> { '001', '01Z', '069' };

// Get info about the motifs of all records in the list.
ConnectApi.BatchResult[] batchResults = ConnectApi.Records.getMotifBatch(communityId, prefixIds);
    
for (ConnectApi.BatchResult batchResult : batchResults) {
    if (batchResult.isSuccess()) {
        // Operation was successful. 
        // Print the color of each motif.
        ConnectApi.Motif motif;
        if(batchResult.getResult() instanceof ConnectApi.Motif) {
            motif = (ConnectApi.Motif) batchResult.getResult();
        }
        System.debug('SUCCESS');
        System.debug(motif.color);
    }
    else {
        // Operation failed. Print errors.
        System.debug('FAILURE');
        System.debug(batchResult.getErrorMessage());
    }
}
```
