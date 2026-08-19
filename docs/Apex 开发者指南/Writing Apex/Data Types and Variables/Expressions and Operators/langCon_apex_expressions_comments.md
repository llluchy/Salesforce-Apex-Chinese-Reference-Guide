---
doc_id: "langCon_apex_expressions_comments"
---

# Comments

Both single and multiline comments are supported in Apex code.

:::tip Tip
We recommend using the standardized ApexDoc comment format to increase code
            readability, collaboration, and long-term maintainability. For the full specifications,
                see[Document Your
                Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_doc_intro.htm).
:::

-   To create a single line comment, use `//`. All characters on the same line to the right of the `//` are ignored by the parser. For example:

```apex
Integer i = 1; // This comment is ignored by the parser
```

-   To create a multiline comment, use `/*` and `*/` to demarcate the beginning and end of the comment block. For example:

```apex
Integer i = 1; /* This comment can wrap over multiple
                  lines without getting interpreted by the 
                  parser. */
```
