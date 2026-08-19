---
doc_id: "langCon_apex_constants"
---

# Constants

Apex constants are variables whose values don’t change after being initialized once. Constants can be defined using the `final` keyword.

The `final` keyword means that the variable can be assigned at most once, either in the declaration itself, or with a static initializer method if the constant is defined in a class. This example declares two constants. The first is initialized in the declaration statement. The second is assigned a value in a static block by calling a static method.

```apex
public class myCls {
   static final Integer PRIVATE_INT_CONST = 200;
   static final Integer PRIVATE_INT_CONST2; 

   public static Integer calculate() {
       return 2 + 7;
   }

   static {
       PRIVATE_INT_CONST2 = calculate();
   }
}
```

For more information, see [Using the `final` Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm).

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions.htm)
