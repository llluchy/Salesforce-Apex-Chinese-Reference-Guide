---
doc_id: "langCon_apex_if_else"
---

# Conditional (If-Else) Statements

The conditional statement in Apex works similarly to Java.

```apex
if ([Boolean_condition]) 
    // Statement 1
else
    // Statement 2
```

The `else` portion is always optional, and always groups with the closest `if`. For example:

```apex
Integer x, sign;
// Your code
if (x if (x == 0) sign = 0; else sign = -1;
```

 is equivalent to:

```apex
Integer x, sign;
// Your code
if (x if (x == 0) {
           sign = 0; 
    } else  {
           sign = -1;
    }
}
```

Repeated `else if` statements are also allowed. For example:

```apex
if (place == 1) {
    medal_color = 'gold';
} else if (place == 2) {
    medal_color = 'silver';
} else if (place == 3) {
    medal_color = 'bronze';
} else {
    medal_color = null;
}
```
