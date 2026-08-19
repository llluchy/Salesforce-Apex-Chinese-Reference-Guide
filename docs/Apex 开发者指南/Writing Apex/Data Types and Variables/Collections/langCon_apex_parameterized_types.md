---
doc_id: "langCon_apex_parameterized_types"
---

# Parameterized Typing

Apex, in general, is a statically-typed programming language, which means users must specify the data type for a variable before that variable can be used.

This is legal in Apex:

```apex
Integer x = 1;
```

This is not legal, if `x` has not been defined earlier:

```apex
x = 1;
```

Lists, maps and sets are **parameterized** in Apex: they take any data type Apex supports for them as an argument. That data type must be replaced with an actual data type upon construction of the list, map or set. For example:

```apex
ListString> myList = new ListString>();
```

## Subtyping with Parameterized Lists

In Apex, if type `T` is a subtype of `U`, then `List<T>` would be a subtype of `List<U>`. For example, the following is legal:

```apex
ListString> slst = new ListString> {'alpha', 'beta'};
ListObject> olst = slst;
```
