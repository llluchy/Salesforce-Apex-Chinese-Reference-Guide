---
doc_id: "apex_class_wave_QueryNode"
---

# QueryNode Class

Define each node of the query - such as projection, groups, order, filters. Execute the query.

## Namespace

wave

## Usage

Refer to the QueryBuilder example.

## See Also

- [QueryNode Methods](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_methods)

## QueryNode Methods

The following are methods for `QueryNode`.

## See Also

- [build(streamName)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_build)
- [foreach(projections)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_foreach)
- [group(groups)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_group)
- [group()](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_group_2)
- [order(orders)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#unique_1778819125)
- [cap(cap)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#unique_672125084)
- [filter(filterCondition)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_filter_2)
- [filter(filterConditions)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_filter)
- [execute(streamName)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#unique_1142062140)

### build(streamName)

Build the query string represented by this QueryNode and assign it to a stream name.

#### Signature

`public String build(String streamName)`

#### Parameters

-   **streamName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The identifier for the stream - for example, “q”.
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SAQL query string represented by the QueryNode.

### foreach(projections)

Applies a set of expressions to every row in a dataset. This action is often referred to as projection.

#### Signature

`public wave.QueryNode foreach(List<wave.ProjectionNode> projections)`

#### Parameters

-   **projections**:
    
    Type: List<[wave.ProjectionNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")\>
    
    A list of ProjectionNodes to be added to this QueryNode.
    

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### group(groups)

Groups matched records (group by specific dataset attributes).

#### Signature

`public wave.QueryNode group(List<String> groups)`

#### Parameters

-   **groups**:
    
    Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    
    A list of expressions.
    

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

#### Example

```plain
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.get('Name'), Wave.QueryBuilder.get('Revenue').sum().alias('REVENUE_SUM')};
ConnectApi.LiteralJson result = Wave.QueryBuilder.load('datasetId', 'datasetVersionId').group(new String[]{'Name'}).foreach(projs).build('q');
```

### group()

Groups matched records (group by all).

#### Signature

`public wave.QueryNode group()`

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

#### Example

```plain
String query = Wave.QueryBuilder.load('datasetId', 'datasetVersionId').group().foreach(projs).build('q');
```

### order(orders)

Sorts in ascending or descending order on one or more fields.

#### Signature

`public wave.QueryNode order(List<List<String>> orders)`

#### Parameters

-   **orders**: Type: List<List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>> A list of column names and associated ascending or descending keywords, for example 

```plain
List>{new List{'Name', 'asc'}, new List{'Revenue', 'desc'}}
```

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### cap(cap)

Limits the number of results that are returned.

#### Signature

`global Wave.QueryNode cap(Integer cap)`

#### Parameters

-   **cap**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The maximum number of rows to return.
    

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### filter(filterCondition)

Selects rows from a dataset based on a filter condition (a predicate).

#### Signature

`public wave.QueryNode filter(String filterCondition)`

#### Parameters

-   **filterCondition**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    For example: `filter('Name != \'My Name\'')`
    

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### filter(filterConditions)

Selects rows from a dataset based on multiple filter conditions (predicates).

#### Signature

`public wave.QueryNode filter(List<String> filterCondition)`

#### Parameters

-   **filterCondition**:
    
    Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    
    A list of filter conditions.
    

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### execute(streamName)

Execute the query and return rows as JSON.

#### Signature

`global ConnectApi.LiteralJson execute(String streamName)`

#### Parameters

-   **streamName**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    The query stream to execute. For example:

```plain
ConnectApi.LiteralJson result = Wave.QueryBuilder.load('datasetId',
      'datasetVersionId').group().foreach(projs).execute('q');
```

    

#### Return Value

Type: ConnectApi.LiteralJson
