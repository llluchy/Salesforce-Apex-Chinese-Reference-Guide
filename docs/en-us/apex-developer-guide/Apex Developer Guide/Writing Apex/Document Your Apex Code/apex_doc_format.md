---
doc_id: "apex_doc_format"
---

# ApexDoc Comment Structure and Tags

To promote consistency and parsability, ApexDoc comments have a defined structure and syntax. Each ApexDoc comment consists of a main description and a set of block and inline tags that provide information about the documented code element.

:::tip Important
Although the Apex compiler enforces existing [Apex
          comment syntax](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_comments.htm), it doesn’t enforce the ApexDoc syntax or check comment accuracy in
        relation to corresponding Apex code.
:::

## Basic Comment Format

ApexDoc comments are distinguished from [other Apex comments](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_comments.htm "Both single and multiline comments are supported in Apex code.") by their starting delimiter. Whereas other multiline comments demarcate the beginning and end of the comment block with `/*` and `*/`, ApexDoc comments begin with /\*\* and end with \*/.

An ApexDoc comment immediately precedes the class, interface, enum, method, constructor, or property declaration that it documents. No other code or comments are between the ApexDoc comment block and the element that it describes.

If an ApexDoc comment spans multiple lines, each subsequent line begins with an asterisk (`*`). Documentation parsers ignore the leading asterisk and any whitespace that precedes it on the line.

```apex
/**
 * This is a simple ApexDoc comment.
 */
public with sharing class MyClass {
    //...
}
```

## Main Description

The main description is the first block of text within an ApexDoc comment. It doesn’t have an explicit tag. It provides a concise summary of the documented element.

In the main description, first include a one-sentence summary of the element. Documentation generation tools often extract this first sentence to use in summary tables or indexes. End the summary sentence with a period.

After the summary sentence, include any additional context about the element. For example, explain pre- or post- conditions, link to relevant documents, or describe variable constraints.

## Block and Inline Tags

Block tags and inline tags provide structured information about the element.

Use block tags after the main description of the ApexDoc comment. Block tags begin with the `@` symbol followed by the tag name, such as `@param`, `@return`, and `@author`. Each block tag appears on a new line, and the information associated with a block tag follows the tag name on the same line or subsequent lines.

Use inline tags within the main description or within the description of a block tag. Inline tags also begin with the `@` symbol followed by the tag name, but the tags are enclosed in curly braces (`{@...}`).

This table provides a comprehensive ApexDoc tag reference. For usage examples of each tag, see the examples following this table.

Table 1. ApexDoc Tags
| Tag | Applicable Apex Elements | Description and Example |
| --- | --- | --- |
| `@author value` | Class, Interface, Enum | Specifies the author or authors of the element code. Multiple `@author` tags are allowed. |
| `@deprecated description` | All | Marks an element as deprecated. In the tag description, provide a reason and an alternative. |
| `@example example` | All | Provides a usage example. The example is formatted as code if the `{@code … }` inline tag is used. |
| `@group groupName` | Class, Interface, Enum, Method, Property, Variable | Specifies the element’s group in documentation. Grouping elements is useful for generated documentation. |
| `@param paramName` | Method, Constructor | Describes a method or constructor parameter. It must match the parameter order and name. |
| `@return description` | Method | Describes the return value of a method. Don’t use the `@return` tag for void methods or constructors. |
| `@see reference` | All | 
Adds a reference in the See Also section of the documentation.

The `@see` tag allows these syntaxes.

-   `@see class#member`
-   `@see "text-string"`
-   `@see <a href="URL">label</a>`

For the `@see class#member` syntax:

`class`—The fully-qualified name of the class or interface that you want to link to.

`#member`—The specific member within a class that you want to link to. For example,

-   For fields or properties, use `#fieldName`.
-   For constructors, use `#ClassName(parameterTypes)`.
-   For methods, use `#methodName(parameterTypes)`. The `parameterTypes` are important to distinguish overloaded methods. Use the fully-qualified name for the parameter types if they’re from a different package.

 |
| `@since value` | All | Indicates the version or date that the element was introduced. This tag is particularly useful for package authors. |
| `@throws exceptionType description` | Method, Constructor | Documents an exception that can be thrown. |
| `@version value` | Class, Interface, Enum | Specifies the version of the element. |
| `{@code text}` | ApexDoc comment | Formats comment text as inline code. |
| `{@hidden text}` | All | Prevents an element from appearing in generated docs. |
| `{@link reference}` | ApexDoc comment | Creates an inline link to another element.

The `@link` tag allows these syntaxes.

-   `@link class#member`
-   `@link "text-string"`
-   `@link <a href="URL">label</a>`

For the `@link class#member` syntax:

`class`—The fully-qualified name of the class or interface that you want to link to.

`#member`—The specific member within a class that you want to link to. For example,

-   For fields or properties, use `#fieldName`.
-   For constructors, use `#ClassName(parameterTypes)`.
-   For methods, use `#methodName(parameterTypes)`. The `parameterTypes` are important to distinguish overloaded methods. Use the fully-qualified name for the parameter types if they’re from a different package.

 |
| `{@literal text}` | ApexDoc comment | Shows text literally without HTML tag interpretation. |

## Example: @author tag

```apex
* @author Marie Hill
* @author Ben Stuar
```

## Example: @deprecated tag

```apex
* @deprecated in 1.3.2.
* Use {@link #newFieldName} instead.
```

## Example: @example tag with {@code}

```apex
* @example
 * {@code
 * Account a;
 * try {
 *  a = new AccountManager().createAccount('Acme', 'Agriculture');
 * } catch (AccountManager.AccountException caught) {
 *   LOGGER.log(caught);
 *   // further exception handling
 * }
 * }
```

## Example: @group tag

```apex
* @group Account
```

## Example: @param tag

```apex
* @param accountName The desired name for the new 
* account. Cannot be null or empty.
```

## Example: @return tag

```apex
* @return The newly created Account sObject with its
* ID populated.
```

## Example: @see tag

```apex
* @see GeolocationService#GeocodingException
```

## Example: @since tag

```apex
* @since 0.1.0
```

## Example: @throws tag

```apex
* @throws AccountManager.AccountException if 
* accountName is invalid or if DML operation fails.
```

## Example: @version tag

```apex
* @version 0.2.0
```

## Example: {@code} inline tag

```apex
* {@code
 * Account a;
 * try {
 *  a = new AccountManager().createAccount('Acme', 'Agriculture');
 * } catch (AccountManager.AccountException caught) {
 *   LOGGER.log(caught);
 *   // further exception handling
 * }
 * }
```

## Example: {@hidden} tag

```apex
* {@hidden NOTE TO MAINTAINERS: Update this method
* if new security threats are identified. 
* The current regex is designed to handle common XSS
* patterns but may not be exhaustive. 
* The last major update was in v2.1.}
```

## Example: {@link} tag

```apex
* Populated after using the {@link AccountService}.
```

## Example: {@literal} tag

```apex
* This string might contain malicious or unexpected characters,
 * like a {@literal } tag or a backslash {@literal \}.
```

## See Also

- [Document Apex Constructs and Features](atlas.en-us.apexcode.meta/apexcode/apex_doc_constructs.htm)

-   [ApexDoc Examples](atlas.en-us.apexcode.meta/apexcode/apex_doc_examples.htm "See practical examples of ApexDoc comments applied to various Apex constructs.")
