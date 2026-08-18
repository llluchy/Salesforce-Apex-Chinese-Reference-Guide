---
doc_id: "langCon_apex_loops_while"
---

# While Loops

The Apex `while` loop repeatedly executes a block of code as long as a particular Boolean condition remains true. Its syntax is:

```apex
while (condition) {
    code_block
}
```

:::tip Note
Curly braces (`{}`) are required around a
                `code_block` only if the block contains more than one
            statement.
:::

Unlike `do-while`, the `while` loop checks the Boolean condition statement before the first loop is executed. Consequently, it is possible for the code block to never execute.

As an example, the following code outputs the numbers 1 - 10 into the debug log:

```apex
Integer count = 1;

while (count < 11) {
    System.debug(count);
    count++;
}
```

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_do_while.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for.htm)
