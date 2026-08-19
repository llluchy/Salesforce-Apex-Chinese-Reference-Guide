---
doc_id: "langCon_apex_expressions_operators_precedence"
---

# Operator Precedence

Operators are interpreted in order, according to rules.

Apex uses the following operator precedence rules:

| Precedence | Operators | Description |
| --- | --- | --- |
| 1 | `{} () ++ --` | Grouping and prefix increments and decrements |
| 2 | `~ ! -x +x (type) new` | Unary operators, additive operators, type cast and object creation |
| 3 | `* /` | Multiplication and division |
| 4 | `+ -` | Addition and subtraction |
| 5 | `<< >> >>>` | Shift Operators |
| 6 | `< <= > >= instanceof` | Greater-than and less-than comparisons, reference tests |
| 7 | `== !=` | Comparisons: equal and not-equal |
| 8 | `&` | Bitwise AND |
| 9 | `^` | Bitwise XOR |
| 10 | `|` | Bitwise OR |
| 11 | `&&` | Logical AND |
| 12 | `||` | Logical OR |
| 13 | `??` | Null Coalescing |
| 14 | `?:` | Ternary |
| 15 | `= += -= *= /= &= <<= >>= >>>=` | Assignment operators |
