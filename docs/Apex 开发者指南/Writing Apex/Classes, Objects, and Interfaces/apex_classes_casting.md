---
doc_id: "apex_classes_casting"
---

# Classes and Casting

In general, all type information is available at run time. This means that Apex enables **casting**, that is, a data type of one class can be assigned to a data type of another class, but only if one class is a subclass of the other class. Use casting when you want to convert an object from one data type to another.

In the following example, `CustomReport` extends the class `Report`. Therefore, it is a subclass of that class. This means that you can use casting to assign objects with the parent data type (`Report`) to the objects of the subclass data type (`CustomReport`).

```apex
public virtual class Report {
}
```

 

```apex
public class CustomReport extends Report {
}
```

In the following code segment, a custom report object is first added to a list of report objects. Then the custom report object is returned as a report object, which is then cast back into a custom report object.

```apex
...
  // Create a list of report objects
  Report[] Reports = new Report[5];

  // Create a custom report object
  CustomReport a = new CustomReport();

  // Because the custom report is a sub class of the Report class,
  // you can add the custom report object a to the list of report objects
  Reports.add(a);

  // The following is not legal:
  // CustomReport c = Reports.get(0);
  // because the compiler does not know that what you are
  // returning is a custom report. 

  // You must use cast to tell it that you know what
  // type you are returning. Instead, get the first item in the list
  // by casting it back to a custom report object
  CustomReport c = (CustomReport) Reports.get(0);
...
```

Casting Example ![A flowchart of the Apex casting process](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fapex%2Fimages%2Fcasting.jpg&folder=apexcode)

In addition, an interface type can be cast to a sub-interface or a class type that implements that interface.

:::tip Tip
To verify if a class is a specific type of class, use the `instanceOf` keyword. For more information, see [Using the `instanceof` Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm).
:::

## See Also

- [Classes and Collections](atlas.en-us.apexcode.meta/apexcode/apex_classes_collections.htm)
- [Collection Casting](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting_collections.htm)
- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_java_diffs.htm)
