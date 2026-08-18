---
doc_id: "apex_class_compression_zipreader"
---

# ZipReader Class

Contains methods to get information about zip entries and to extract content for specified zip entries from the zip file.

## Namespace

[Compression](atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm "The Compression namespace provides classes and methods to create and extract zip files.")

## See Also

- [ZipReader Constructors](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_constructors)
- [ZipReader Methods](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_methods)

## ZipReader Constructors

The following are constructors for `ZipReader`.

## See Also

- [ZipReader(data)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_ctor)

### ZipReader(data)

Creates a new instance of the `ZipReader` class using the specified blob data.

#### Signature

`global ZipReader(Blob data)`

#### Parameters

-   **data**: Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.") Apex blob that contains the compressed content.

## ZipReader Methods

The following are methods for `ZipReader`.

## See Also

- [extract(name)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_extract)
- [extract(entry)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_extract_2)
- [getEntries()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntries)
- [getEntriesMap()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntriesMap)
- [getEntry(name)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntry)
- [getEntryNames()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntryNames)

### extract(name)

Extracts the bytes for the specified zip entry name and decompresses the content.

#### Signature

`public blob extract(string name)`

#### Parameters

-   **name**: Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Species the zip entry name to extract and decompress.

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the decompressed content.

### extract(entry)

Extracts the bytes for the specified zip entry and decompresses the content.

#### Signature

`public blob extract(Compression.ZipEntry entry)`

#### Parameters

-   **entry**: Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.") Species the zip entry to extract and decompress.

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the decompressed content.

### getEntries()

Gets a list of all the entries from the zip file.

#### Signature

`public List<compression.ZipEntry> getEntries()`

#### Return Value

Type: List<[Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")\>

### getEntriesMap()

Gets a map of names and the corresponding zip entries from the zip file.

#### Signature

`public Map<String,Compression.ZipEntry> getEntriesMap()`

#### Return Value

Type: Map<[string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")\>

### getEntry(name)

Gets a zip entry for the specified name from the zip file.

#### Signature

`public compression.ZipEntry getEntry(string name)`

#### Parameters

-   **name**: Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.") Name of the zip entry.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Throws a `ZipException` if the specified name isn’t found.

### getEntryNames()

Gets a list of all the zip entry names from the zip file.

#### Signature

`public List<String> getEntryNames()`

#### Return Value

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
