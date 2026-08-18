---
doc_id: "apex_classes_namespaces_and_invoking_methods"
---

# Using the System Namespace

The `System` namespace is the default namespace in Apex. This means that you can omit the namespace when creating a new instance of a system class or when calling a system method. For example, because the built-in URL class is in the `System` namespace, both of these statements to create an instance of the `URL` class are equivalent:

```apex
System.URL url1 = new System.URL('https://MyDomainName.my.salesforce.com/');
```

And:

```apex
URL url1 = new URL('https://MyDomainName.my.salesforce.com/');
```

Similarly, to call a static method on the `URL` class, you can write either of the following:

```apex
System.URL.getCurrentRequestUrl();
```

Or:

```apex
URL.getCurrentRequestUrl();
```

 

:::tip Note
In addition to the `System` namespace, there is a built-in `System` class in the `System` namespace,
which provides methods like `assertEquals` and `debug`. Don’t
get confused by the fact that both the namespace and the class have
the same name in this case. The `System.debug('debug
message');` and `System.System.debug('debug
message');` statements are equivalent.
:::

## Using the System Namespace for Disambiguation

It is easier to not include the `System` namespace when calling static methods of system classes, but there are situations where you must include the `System` namespace to differentiate the built-in Apex classes from custom Apex classes with the same name. If your organization contains Apex classes that you’ve defined with the same name as a built-in class, the Apex runtime defaults to your custom class and calls the methods in your class. Let’s take a look at the following example.

Create this custom Apex class:

```apex
public class Database {
    public static String query() {
       return 'wherefore art thou namespace?';
    }
}
```

Execute this statement in the Developer Console:

```apex
sObject[] acct = Database.query('SELECT Name FROM Account LIMIT 1');
System.debug(acct[0].get('Name'));
```

When the `Database.query` statement executes, Apex looks up the query method on the custom `Database` class first. However, the query method in this class doesn’t take any parameters and no match is found, hence you get an error. The custom `Database` class overrides the built-in `Database` class in the `System` namespace. To solve this problem, add the `System` namespace prefix to the class name to explicitly instruct the Apex runtime to call the query method on the built-in Database class in the `System` namespace:

```apex
sObject[] acct = System.Database.query('SELECT Name FROM Account LIMIT 1');
System.debug(acct[0].get('Name'));
```

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_schema_namespace_using.htm)

#### See Also

-   [Using the Schema Namespace](atlas.en-us.apexcode.meta/apexcode/apex_classes_schema_namespace_using.htm "The Schema namespace provides classes and methods for working with schema metadata information. We implicitly import Schema.*, but you must fully qualify your uses of Schema namespace elements when they have naming conflicts with items in your unmanaged code. If your org contains an Apex class that has the same name as an sObject, add the Schema namespace prefix to the sObject name in your code.")
