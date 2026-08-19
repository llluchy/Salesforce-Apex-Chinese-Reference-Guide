---
doc_id: "langCon_apex_loops_for"
---

# For Loops

Apex supports three variations of the `for` loop:

-   The traditional `for` loop:

```apex
for (init_stmt; exit_condition; increment_stmt) {
    code_block
}
```

-   The list or set iteration `for` loop:

```apex
for (variable : list_or_set) {
    code_block
}
```

 where `variable` must be of the same primitive or sObject type as `list_or_set`.
    
-   The SOQL `for` loop:

```apex
for (variable : [soql_query]) {
    code_block
}
```

 or

```apex
for (variable_list : [soql_query]) {
    code_block
}
```

 Both `variable` and `variable_list` must be of the same sObject type as is returned by the `soql_query`.

:::tip Note
Curly braces (`{}`) are required around a
                `code_block` only if the block contains more than one
            statement.
:::

Each is discussed further in the sections that follow.

## See Also

- [Traditional For Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_traditional.htm)
- [List or Set Iteration for Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_lists.htm)
- [Iterating Collections](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_iterating.htm)
- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_while.htm)
