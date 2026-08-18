---
doc_id: "apex_class_sfdc_enablement_LearningEvaluation"
---

# LearningEvaluation Class

Contains methods to retrieve and update details that are required to evaluate a learning item.

## Namespace

[sfdc\_enablement](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm "The sfdc_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.")

## Usage

Pass this class as input to the [sfdc\_enablement.LearningEvaluationResult](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_class_sfdc_enablement_LearningEvaluationResult "Represents a user’s progress and progress status of a custom exercise in an Enablement program.") class.

## Example

See example code in [sfdc\_enablement.LearningItemEvaluationHandler](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_class_sfdc_enablement_LearningItemEvaluationHandler "Contains methods to customize the evaluation process of a learning item.").

## See Also

- [LearningEvaluation Methods](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_sfdc_enablement_LearningEvaluation_methods)

## LearningEvaluation Methods

The following are methods for `LearningEvaluation`.

## See Also

- [getDetails()](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_sfdc_enablement_LearningEvaluation_getDetails)
- [getLearningItemId()](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_sfdc_enablement_LearningEvaluation_getLearningItemId)
- [setDetails(details)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_sfdc_enablement_LearningEvaluation_setDetails)
- [setLearningItemId(learningItemId)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_sfdc_enablement_LearningEvaluation_setLearningItemId)

### getDetails()

Retrieves the details associated with the learning evaluation instance.

#### Signature

`public Map<String,Object> getDetails()`

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Object](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_class_System_Object "Contains methods that are implemented by all Apex types.")\>

### getLearningItemId()

Retrieves the record ID of the learning item that's associated with this learning evaluation instance.

#### Signature

`public String getLearningItemId()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDetails(details)

Sets or updates the details of the learning item record for this learning evaluation instance.

#### Signature

`public void setDetails(Map<String,Object> details)`

#### Parameters

-   **details**:
    
    Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Object](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_class_System_Object "Contains methods that are implemented by all Apex types.")\>
    
    The details of the learning item record that you get by calling [evaluateLearningItem API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-evaluate-learning-item.html).
    

#### Return Value

Type: void

### setLearningItemId(learningItemId)

Sets or updates the learning item record ID for this learning evaluation instance.

#### Signature

`public void setLearningItemId(String learningItemId)`

#### Parameters

-   **learningItemId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: void
