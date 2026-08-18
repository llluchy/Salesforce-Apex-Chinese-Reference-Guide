---
doc_id: "langCon_apex_loops_for_traditional"
---

# Traditional For Loops

The traditional `for` loop in Apex corresponds to the traditional syntax used in Java and other languages. Its syntax is:

```apex
for (init_stmt; exit_condition; increment_stmt) {
    code_block
}
```

When executing this type of `for` loop, the Apex runtime engine performs the following steps, in order:

1.  Execute the `init_stmt` component of the loop. Note that multiple variables can be declared and/or initialized in this statement, separated by commas.
2.  Perform the `exit_condition` check. If true, the loop continues. If false, the loop exits.
3.  Execute the `code_block`.
4.  Execute the `increment_stmt` statement.
5.  Return to Step 2.

As an example, the following code outputs the numbers 1 - 10 into the debug log. Note that an additional initialization variable, `j`, is included to demonstrate the syntax: 

```apex
for (Integer i = 0, j = 0; i < 10; i++) {
    System.debug(i+1);
}
```
