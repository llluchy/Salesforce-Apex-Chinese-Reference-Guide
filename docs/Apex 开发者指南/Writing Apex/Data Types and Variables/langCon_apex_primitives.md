---
doc_id: "langCon_apex_primitives"
---

# Primitive Data Types

Apex uses the same primitive data types as SOAP API, except for higher-precision Decimal type in certain cases.

All Apex variables, whether they’re class member variables or method variables, are initialized to `null`. Make sure that you initialize your variables to appropriate values before using them. For example, initialize a Boolean variable to `false`.

Apex primitive data types include:

| Data Type | Description |
| --- | --- |
| Blob | A collection of binary data stored as a single object. You can convert this data type to String or from String using the `toString` and `valueOf` methods, respectively. Blobs can be accepted as Web service arguments, stored in a document (the body of a document is a Blob), or sent as attachments. For more information, see [Crypto Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_restful_crypto.htm). Salesforce supports Blob manipulation only with Apex class methods that are supplied by Salesforce. |
| Boolean | A value that can only be assigned `true`, `false`, or `null`. For example: `Boolean isWinner = true;` |
| Date | A value that indicates a particular day. Unlike Datetime values, Date values contain no information about time. Always create date values with a system static method.
You can add or subtract an Integer value from a Date value, returning a Date value. Addition and subtraction of Integer values are the only arithmetic functions that work with Date values. You can’t perform arithmetic functions that include two or more Date values. Instead, use the [Date methods](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_date.htm).

Use the `String.valueOf()` method to obtain the date without an appended timestamp. Using an implicit string conversion with a Date value results in the date with the timestamp appended.

 |
| Datetime | A value that indicates a particular day and time, such as a timestamp. Always create datetime values with a system static method.

You can add or subtract an Integer or Double value from a Datetime value, returning a Date value. Addition and subtraction of Integer and Double values are the only arithmetic functions that work with Datetime values. You can’t perform arithmetic functions that include two or more Datetime values. Instead, use the [Datetime methods](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_datetime.htm).

 |
| Decimal | A number that includes a decimal point. Decimal is an arbitrary precision number. Currency fields are automatically assigned the type Decimal.

If you don’t explicitly set the number of decimal places for a Decimal, the item from which the Decimal is created determines the Decimal’s scale. **Scale** is a count of decimal places. Use the `setScale` method to set a Decimal’s scale.

-   If the Decimal is created as part of a query, the scale is based on the scale of the field returned from the query.
-   If the Decimal is created from a String, the scale is the number of characters after the decimal point of the String.
-   If the Decimal is created from a non-decimal number, the number is first converted to a String. The scale is then set using the number of characters after the decimal point.

Two Decimal objects that are numerically equivalent but differ in scale (such as 1.1 and 1.10) generally don’t have the same hashcode. Use caution when such Decimal objects are used in Sets or as Map keys.

 |
| Double | A 64-bit number that includes a decimal point. Doubles have a minimum value of -263 and a maximum value of 263\-1. For example, see [Double declaration](#ex_double). Scientific notation (e) for Doubles isn’t supported. |
| ID | Any valid 18-character Lightning Platform record identifier. For example: `ID id='00300000003T2PGAA0';`

If you set `ID` to a 15-character value, Apex converts the value to its 18-character representation. All invalid `ID` values are rejected with a runtime exception.

 |
| Integer | A 32-bit number that doesn’t include a decimal point. Integers have a minimum value of \-2,147,483,648 and a maximum value of 2,147,483,647. For example: `Integer i = 1;` |
| Long | A 64-bit number that doesn’t include a decimal point. Longs have a minimum value of -263 and a maximum value of 263\-1. Use this data type when you need a range of values wider than the range provided by Integer. For example: `Long l = 2147483648L;` |
| Object | 

Any data type that is supported in Apex. Apex supports primitive data types (such as Integer), user-defined custom classes, the sObject generic type, or an sObject specific type (such as Account). All Apex data types inherit from Object.

You can cast an object that represents a more specific data type to its underlying data type. For examples—including casting to a user-defined class named `MyApexClass`—see [Casting an Object to an Integer](#ex_obj_int) and [Casting an Object to a user-defined class (MyApexClass)](#ex_obj_class).

 |
| String | Any set of characters surrounded by single quotes. For example, `String s = 'The quick brown fox jumped over the lazy dog.';`

**String size**: The limit on the number of characters is governed by the [heap size limit](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

**Empty Strings and Trailing Whitespace**: sObject String field values follow the same rules as in SOAP API: they can never be empty (only `null`), and they can never include leading and trailing whitespace. These conventions are necessary for database storage.

Conversely, Strings in Apex can be `null` or empty and can include leading and trailing whitespace, which can be used to construct a message.

**EscapeSequences**: All Strings in Apex use the same escape sequences as SOQL strings: `\b` (backspace), `\t` (tab), `\n` (line feed), `\f` (form feed), `\r` (carriage return),`\s` (space),`\"` (double quote), `\'` (single quote), and `\\` (backslash).

**Comparison Operators**: Unlike Java, Apex Strings support using the comparison operators `==`, `!=`, `<`, `<=`, `>`, and `>=`. Because Apex uses SOQL comparison semantics, results for Strings are collated according to the context user’s locale and aren’t case-sensitive. For more information, see [Expression Operators](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm).

**String Methods**: As in Java, Strings can be manipulated with several standard methods. For more information, see [String Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_string.htm).

**Multiline Strings**: To represent a block of text that spans multiple lines, use a multiline string. A multiline string starts with three single quotes (`'''`) immediately followed by a new line. To terminate a multiline string, use three single quotes (`'''`). For example. For more information, see [Multiline String declaration](#ex_multiline) and the [Multiline String Usage](#apex_langCon_apex_primitives_multiline_str) section.

 |
| Time | A value that indicates a particular time. Always create time values with a system static method. See [Time Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_time.htm). |

## Double data type declaration

```apex
Double pi = 3.14159;
Double e = 2.7182818284D;
```

## Casting an Object to an Integer

```apex
Object obj = 10;
// Cast the object to an integer.
Integer i = (Integer)obj;
Assert.areEqual(10, i);
```

## Casting an Object to a user-defined class (MyApexClass)

```apex
Object obj = new MyApexClass();
// Cast the object to the MyApexClass custom type.
MyApexClass mc = (MyApexClass)obj;
// Access a method on the user-defined class.
mc.someClassMethod();
```

## Multiline String declaration

```apex
String multilineStr = '''
{
    "Name" : "John Doe",
    "Type" : "New Customer"
}''';
```

In addition, two non-standard primitive data types can’t be used as variable or method types, but do appear in system static methods:

-   AnyType. The `valueOf` static method converts an sObject field of type AnyType to a standard primitive. AnyType is used within the Lightning Platform database exclusively for sObject fields in field history tracking tables.
-   Currency. The `Currency.newInstance` static method creates a literal of type Currency. This method is for use solely within SOQL and SOSL `WHERE` clauses to filter against sObject currency fields. You can’t instantiate Currency in any other type of Apex.

For more information on the AnyType data type, see [Field Types](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/field_types.htm "html (New Window)") in the *Object Reference for Salesforce*.

## Multiline String Usage

Line Breaks: Line breaks are automatically translated into newline sequences in the resulting string.

Whitespace: Any whitespace before the leftmost non-whitespace character of the string is stripped. Trailing whitespace on each line is also stripped. During compilation, whitespace stripping occurs before escape sequences are processed.

In this example, the initial eight whitespace characters, represented as periods, on each line are stripped. This removal occurs because the `<` character is the leftmost non-whitespace character in the string. The trailing whitespace characters found on the first, third, and fifth lines of the string are also stripped.

```apex
String str = '''
. . . . . . . .  . . .
. . . . . . . . . . . . 
. . . . . . . . . . . . . . . . Hello, world . . .
. . . . . . . . . . . . 
. . . . . . . .  . . .
. . . . . . . .''';
```

Escape Sequences: Multiline strings support the same escape sequences as regular Apex strings.

Use the `\s` escape sequence at the end of a line to create intentional trailing whitespace. In this example, three trailing whitespace characters are preserved on the first and fifth lines of the string. The trailing whitespace on the third line of the string is stripped.

```apex
String str = '''
. . . . . . . .  . . . . \s
. . . . . . . . . . . . 
. . . . . . . . . . . . . . . . Hello, world . . . .
. . . . . . . . . . . . 
. . . . . . . .  . . . . \s
. . . . . . . .''';
```

Multiline strings additionally support the `\` (concatenate) sequence at the end of lines. The `\` escape sequence concatenates multiple lines and prevents the insertion of a newline sequence between them. For example, this multiline string compiles as one line.

```apex
String str = '''
    This is a string that doesn't fit on one line \
    but I don't want it to contain newlines \
....so I am using this escape sequence to \
....prevent them from being inserted''';
```

Unlike regular Apex strings, multiline strings also support unescaped single quotes (`'`). However, to use a single quote directly before the closing single quotes ( `'''`), first escape the single quote. (`\''''`). For example, the second single quote in this multiline string requires an escape character, whereas the first one doesn’t.

```apex
String str = '''
    I want a single quote here '
    And also right before the string ends\'''';
```

**SOQL Queries**: In SOQL and SOSL queries, you can use multiline strings stored in variables. However, unlike regular string literals, you can’t use multiline literals in SOQL or SOSL queries, except in bind expressions. For example, this pattern is unsupported.

```apex
// Unsupported SOQL Query
List accs = [SELECT Id FROM Account 
                      WHERE Name = '''
                                   ExampleOne
                                   '''
                      WITH USER_MODE
                     ];
```

Otherwise, you can use multiline literals anywhere you can use regular string literals, such as annotation parameters, variable assignments, and method argument values.

## Versioned Behavior Changes

In API version 16.0 and later, Apex uses the higher-precision Decimal data type in certain types such as currency.

In API version 15.0 and later, Apex classes and triggers produce a runtime error if you assign a String value that is too long for the field.

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_data_types.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections.htm)

#### See Also

-   [Expression Operators](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm "Expressions can be joined to one another with operators to create compound expressions.")
    
-   [Class Methods](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm "Learn how to define Apex methods. Understand the differences between passing method arguments by value and passing method arguments by reference.")
    
-   [*Object Reference for the Salesforce Platform*: Primitive Data Types](https://developer.salesforce.com/docs/atlas.en-us.262.0.object_reference.meta/object_reference/primitive_data_types.htm "Object Reference for the Salesforce Platform: Primitive
    Data Types - HTML (New Window)")
