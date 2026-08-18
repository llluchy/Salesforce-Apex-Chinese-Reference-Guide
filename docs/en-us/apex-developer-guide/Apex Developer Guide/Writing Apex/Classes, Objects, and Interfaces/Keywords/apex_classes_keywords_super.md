---
doc_id: "apex_classes_keywords_super"
---

# Using the super Keyword

The `super` keyword can be used by classes that are extended from virtual or abstract classes. By using `super`, you can override constructors and methods from the parent class.

For example, if you have the following virtual class:

```apex
public virtual class SuperClass {
    public String mySalutation;
    public String myFirstName;
    public String myLastName;

    public SuperClass() {

        mySalutation = 'Mr.';
        myFirstName = 'Carl';
        myLastName = 'Vonderburg';
    }

    public SuperClass(String salutation, String firstName, String lastName) {

        mySalutation = salutation;
        myFirstName = firstName;
        myLastName = lastName;
    }

    public virtual void printName() {

        System.debug('My name is ' + mySalutation + myLastName);
    }

   public virtual String getFirstName() {
       return myFirstName;
   }
}
```

You can create the following class that extends `Superclass` and overrides its `printName` method:

```apex
public class Subclass extends Superclass {
  public override void printName() {
        super.printName();
        System.debug('But you can call me ' + super.getFirstName());
    }
}
```

The expected output when calling `Subclass.printName` is `My name is Mr. Vonderburg. But you can call me Carl.`

You can also use `super` to call constructors. Add the following constructor to `SubClass`: 

```apex
public Subclass() {
    super('Madam', 'Brenda', 'Clapentrap');
}
```

Now, the expected output of `Subclass.printName` is `My name is Madam Clapentrap. But you can call me Brenda.`

## Best Practices for Using the super Keyword

-   Only classes that are extending from `virtual` or `abstract` classes can use `super`.
-   You can only use `super` in methods that are designated with the `override` keyword.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_this.htm)
