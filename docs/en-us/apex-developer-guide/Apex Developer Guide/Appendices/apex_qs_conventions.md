---
doc_id: "apex_qs_conventions"
---

# Documentation Typographical Conventions

Apex and Visualforce documentation uses these typographical conventions.

| Convention | Description |
| --- | --- |
| `Courier font` | In descriptions of syntax, a monospace font indicates items that you should type as shown, except for brackets. For example: `Public class HelloWorld` |
| Italics | In descriptions of syntax, italics represent variables. You supply the actual value. In the following example, three values must be supplied: datatype variable\_name \[ = value\];
If the syntax is bold and italic, the text represents a code element that needs a value supplied by you, such as a class name or variable value:

`public static class YourClassHere { ... }` |
| `Bold Courier font` | In code samples and syntax descriptions, a bold courier font emphasizes a portion of the code or syntax. |
| < > | In descriptions of syntax, less-than and greater-than symbols (< >) are typed exactly as shown. For an example, see [Angle brackets (< >) typed exactly as shown](#ex_angle_brackets). |
| { } | In descriptions of syntax, braces ({ }) are typed exactly as shown. For an example, see [Braces ({ }) typed exactly as shown](#ex_braces). |
| \[ \] | In descriptions of syntax, anything included in brackets is optional. In the following example, specifying `value` is optional. For an example, see [Brackets (\[ \]) indicating optional items](#ex_brackets). |
| | | In descriptions of syntax, the pipe sign means “or”. You can do one of the following (not all). In the following example, you can create a new unpopulated set in one of two ways, or you can populate the set. For an example, see [Pipe symbol (|) meaning “or”](#ex_pipe). |

## Angle brackets (< >) typed exactly as shown

```VisualForce
value="{!account.Contacts}" var="contact">
    value="{!contact.Name}"/>
    value="{!contact.MailingCity}"/>
    value="{!contact.Phone}"/>
>
```

## Braces ({ }) typed exactly as shown

```VisualForce
>
    Hello {!$User.FirstName}!
>
```

## Brackets (\[ \]) indicating optional items

```apex
data_type variable_name [ = value];
```

## Pipe symbol (|) meaning "or"

```apex
Setdata_type> set_name 
   [= new Setdata_type>();] |
   [= new Setdata_type{value [, value2. . .] };] |
   ;
```
