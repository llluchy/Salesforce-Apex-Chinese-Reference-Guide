---
doc_id: "langCon_apex_switch"
---

# Switch Statements

Apex provides a `switch` statement that tests whether an expression matches one of several values and branches accordingly.

The syntax is:

```apex
switch on expression {
    when value1 {		// when block 1
        // code block 1
    }	
    when value2 {		// when block 2
        // code block 2
    }
    when value3 {		// when block 3
        // code block 3
    }
    when else {		  // default block, optional
        // code block 4
    }
}
```

The `when` value can be a single value, multiple values, or sObject types. For example:

```apex
when value1 {
}
```

 

```apex
when value2, value3 {
}
```

 

```apex
when TypeName VariableName {
}
```

The `switch` statement evaluates the expression and executes the code block for the matching `when` value. If no value matches, the `when else` code block is executed. If there isn’t a `when else` block, no action is taken.

:::tip Note
There is no fall-through. After the code block is executed, the `switch` statement exits.
:::

Apex `switch` statement expressions can be one of the following types.

-   Integer
-   Long
-   sObject
-   String
-   Enum

## When Blocks

Each `when` block has a value that the expression is matched against. These values can take one of the following forms.

-   when `literal` {} (a when block can have multiple, comma-separated literal clauses)
-   when SObjectType `identifier` {}
-   when `enum_value` {}

The value `null` is a legal value for all types.

Each `when` value must be unique. For example, you can use the literal x only in one `when` block clause. A `when` block is matched one time at most.

## When Else Block

If no `when` values match the expression, the `when else` block is executed.

:::tip Note
Salesforce recommends including a `when
                    else` block, especially with enum types, although it isn’t required.
                When you build a `switch` statement using enum
                values provided by a managed package, your code might not behave as expected if a
                new version of the package contains additional enum values. You can prevent this
                problem by including a `when else` block to
                handle unanticipated values.
:::

If you include a `when else` block, it must be the last block in the `switch` statement.

## Examples with Literals

You can use literal `when` values for switching on Integer, Long, and String types. String clauses are case-sensitive. For example, “orange” is a different value than “ORANGE.”

**Single Value Example**

The following example uses integer literals for `when` values.

```apex
switch on i {
   when 2 {
       System.debug('when block 2');
   }
   when -3 {
       System.debug('when block -3');
   }
   when else {
       System.debug('default');
   }
}
```

**Null Value Example**

Because all types in Apex are nullable, a `when` value can be `null`.

```apex
switch on i {
   when 2 {
       System.debug('when block 2');
   }
   when null {
       System.debug('bad integer');
   }
   when else {
       System.debug('default ' + i);
   }
}
```

**Multiple Values Examples**

The Apex `switch` statement doesn’t fall-through, but a `when` clause can include multiple literal values to match against. You can also nest Apex `switch` statements to provide multiple execution paths within a `when` clause.

```apex
switch on i {
   when 2, 3, 4 {
       System.debug('when block 2 and 3 and 4');
   }
   when 5, 6 {
       System.debug('when block 5 and 6');
   }
   when 7 {
       System.debug('when block 7');
   }
   when else {
       System.debug('default');
   }
}
```

**Method Example**

Instead of switching on a variable expression, the following example switches on the result of a method call.

```apex
switch on someInteger(i) {
   when 2 {
       System.debug('when block 2');
   }
   when 3 {
       System.debug('when block 3');
   }
   when else {
       System.debug('default');
   }
}
```

## Example with sObjects

Switching on an sObject value allows you to implicitly perform `instanceof` checks and casting. For example, consider the following code that uses if-else statements.

```apex
if (sobject instanceof Account) {
    Account a = (Account) sobject;
    System.debug('account ' + a);
} else if (sobject instanceof Contact) {
    Contact c = (Contact) sobject;
    System.debug('contact ' + c);
} else {
    System.debug('default');
}
```

You can replace and simplify this code with the following `switch` statement.

```apex
switch on sobject {
   when Account a {
       System.debug('account ' + a);
   }
   when Contact c {
       System.debug('contact ' + c);
   }
   when null {
       System.debug('null');
   }
   when else {
       System.debug('default');
   }
}
```

 

:::tip Note
You can use only one sObject type per `when`
                block.
:::

## Example with Enums

A `switch` statement that uses enum `when` values doesn’t require a `when else` block, but it is recommended. You can use multiple enum values per `when` block clause.

```apex
switch on season {
   when WINTER {
       System.debug('boots');
   }
   when SPRING, SUMMER {
       System.debug('sandals');
   }
   when else {
       System.debug('none of the above');
   }
}
```
