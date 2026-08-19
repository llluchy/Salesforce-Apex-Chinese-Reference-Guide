---
doc_id: "langCon_apex_loops_do_while"
---

# Do-While Loops

The Apex `do-while` loop repeatedly executes a block of code as long as a particular Boolean condition remains true. Its syntax is:

```apex
do {
   code_block
} while (condition);
```

:::tip Note
Curly braces (`{}`) are
            always required around a `code_block`.
:::

As in Java, the Apex `do-while` loop does not check the Boolean condition statement until after the first loop is executed. Consequently, the code block always runs at least once.

As an example, the following code outputs the numbers 1 - 10 into the debug log:

```apex
Integer count = 1;

do {
    System.debug(count);
    count++;
} while (count < 11);
```

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_while.htm)
