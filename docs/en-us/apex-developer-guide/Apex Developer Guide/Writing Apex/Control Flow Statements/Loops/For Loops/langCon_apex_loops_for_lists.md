---
doc_id: "langCon_apex_loops_for_lists"
---

# List or Set Iteration for Loops

The list or set iteration `for` loop iterates over all the elements in a list or set. Its syntax is:

```apex
for (variable : list_or_set) {
    code_block
}
```

 where `variable` must be of the same primitive or sObject type as `list_or_set`.

When executing this type of `for` loop, the Apex runtime engine assigns `variable` to each element in `list_or_set`, and runs the `code_block` for each value.

For example, the following code outputs the numbers 1 - 10 to the debug log: 

```apex
Integer[] myInts = new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

for (Integer i : myInts) {
    System.debug(i);
}
```
