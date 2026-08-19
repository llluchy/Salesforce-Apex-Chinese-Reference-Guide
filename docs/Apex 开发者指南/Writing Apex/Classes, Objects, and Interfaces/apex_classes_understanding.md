---
doc_id: "apex_classes_understanding"
---

# Classes

As in Java, you can create classes in Apex. A **class** is a template or blueprint from which objects are created. An **object** is an instance of a class.

For example, the `PurchaseOrder` class describes an entire purchase order, and everything that you can do with a purchase order. An instance of the `PurchaseOrder` class is a specific purchase order that you send or receive.

All objects have **state** and **behavior**, that is, things that an object knows about itself, and things that an object can do. The state of a PurchaseOrder object—what it knows—includes the user who sent it, the date and time it was created, and whether it was flagged as important. The behavior of a PurchaseOrder object—what it can do—includes checking inventory, shipping a product, or notifying a customer.

A class can contain variables and methods. Variables are used to specify the state of an object, such as the object's `Name` or `Type`. Since these variables are associated with a class and are members of it, they are commonly referred to as **member variables**. Methods are used to control behavior, such as `getOtherQuotes` or `copyLineItems`.

A class can contain other classes, exception types, and initialization code.

An **interface** is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.

For more general information on classes, objects, and interfaces, see [http://java.sun.com/docs/books/tutorial/java/concepts/index.html](http://java.sun.com/docs/books/tutorial/java/concepts/index.html)

In addition to classes, Apex provides triggers, similar to database triggers. A trigger is Apex code that executes before or after database operations. See [Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm "Apex can be invoked by using triggers. Apex triggers enable you to perform custom actions before or after changes to Salesforce records, such as insertions, updates, or deletions.").

## See Also

- [Apex Class Definition](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm)
- [Class Variables](atlas.en-us.apexcode.meta/apexcode/apex_classes_declaring_variables.htm)
- [Class Methods](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm)
- [Using Constructors](atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm)
- [Access Modifiers](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- [Static and Instance Methods, Variables, and Initialization Code](atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm)
- [Apex Properties](atlas.en-us.apexcode.meta/apexcode/apex_classes_properties.htm)
- [Extending a Class](atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm)
- [Extended Class Example](atlas.en-us.apexcode.meta/apexcode/apex_classes_example.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm)
