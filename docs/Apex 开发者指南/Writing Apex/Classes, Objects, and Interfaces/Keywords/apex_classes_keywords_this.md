---
doc_id: "apex_classes_keywords_this"
---

# Using the this Keyword

There are two different ways of using the `this` keyword.

You can use the `this` keyword in dot notation, without parenthesis, to represent the current instance of the class in which it appears. Use this form of the `this` keyword to access instance variables and methods. For example:

```apex
public class myTestThis {

string s;
  {
      this.s = 'TestString';
  }
}
```

In the above example, the class `myTestThis` declares an instance variable `s`. The initialization code populates the variable using the `this` keyword.

Or you can use the `this` keyword to do constructor chaining, that is, in one constructor, call another constructor. In this format, use the `this` keyword with parentheses. For example:

```apex
public class testThis {

// First constructor for the class. It requires a string parameter.
   public testThis(string s2) {
   }

// Second constructor for the class. It does not require a parameter.
// This constructor calls the first constructor using the this keyword.
   public testThis() {
       this('None');
   }
}
```

When you use the `this` keyword in a constructor to do constructor chaining, it must be the first statement in the constructor.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_super.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm)
