---
doc_id: "apex_classes_annotation_JsonAccess"
---

# JsonAccess Annotation

The `@JsonAccess` annotation defined at Apex class level controls whether instances of the class can be serialized or deserialized. If the annotation restricts the JSON or XML serialization and deserialization, a runtime `JSONException` exception is thrown.

The `serializable` and `deserializable` parameters of the `@JsonAccess` annotation enforce the contexts in which Apex allows serialization and deserialization. You can specify one or both parameters, but you can’t specify the annotation with no parameters. The valid values for the parameters to indicate whether serialization and deserialization are allowed:

-   `never`: never allowed
-   `sameNamespace`: allowed only for Apex code in the same namespace
-   `samePackage`: allowed only for Apex code in the same package (impacts only second-generation packages)
-   `always`: always allowed for any Apex code

This example code shows an Apex class marked with the `@JsonAccess` annotation.

```apex
// SomeSerializableClass is serializable in the same package and deserializable in the wider namespace

@JsonAccess(serializable='samePackage' deserializable='sameNamespace')
public class SomeSerializableClass { }

// AlwaysDeserializable class is always deserializable and serializable only in the same namespace (default value from version 49.0 and later)

@JsonAccess(deserializable='always')
public class AlwaysDeserializable { }
```

## JsonAccess Considerations

-   If an Apex class annotated with `JsonAccess` is extended, the extended class doesn’t inherit this property.
-   If the `toString` method is applied on objects that mustn't be serialized, private data can be exposed. You must override the `toString` method on objects whose data must be protected. For example, serializing an object stored as a key in a Map invokes the `toString` method. The generated map includes key (string) and value entries, thus exposing all the fields of the object.

## Versioned Behavior Changes

In versions 48.0 and earlier, the default access for deserialization is `always` and the default access for serialization is `sameNamespace` to preserve the existing behavior. From version 49.0 onwards, the default access for both serialization and deserialization is `sameNamespace`.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
