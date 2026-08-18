---
doc_id: "apex_namespace_formulaeval"
---

# FormulaEval Namespace

The FormulaEval namespace provides classes and methods to evaluate dynamic formulas for SObjects and Apex objects. Use the methods to avoid unnecessary DML statements to recalculate formula field values or evaluate dynamic formula expressions.

When using a formula against an SObject or Apex object as the context object, the class methods or properties referenced by the formula must be global.

```apex
Account myAcc = new Account(Name='123');
       FormulaEval.FormulaInstance ff = Formula.builder()
           .withType(Schema.Account.class)
           .withReturnType(FormulaEval.FormulaReturnType.STRING)
           .withFormula('name & " (" & website & ")"')
           .build();
 
//Use the list of field names returned by the getReferenced method to generate dynamic soql
       String fieldNameList = String.join(ff.getReferencedFields(),',');
       String queryStr = 'SELECT ' + fieldNameList + ' FROM Account LIMIT 1'; //select name, website from Account
       Account s = Database.query(queryStr, AccessLevel.USER_MODE);
       System.debug(ff.evaluate(s));
```

For usage notes, see [Formula Evaluation in Apex](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_formulaeval.htm "HTML (New Window)").

The following are the classes and enums in the `FormulaEval` namespace.

## See Also

- [FormulaBuilder Class](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_class_formulaeval_FormulaBuilder)
- [FormulaGlobal Enum](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaGlobal.htm)
- [FormulaInstance Class](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_class_formulaeval_FormulaInstance)
- [FormulaReturnType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaReturnType.htm)
