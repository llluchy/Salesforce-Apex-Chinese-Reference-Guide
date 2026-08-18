---
doc_id: "apex_class_sfdc_enablement_LearningEvaluationResult"
---

# LearningEvaluationResult Class

Represents a user’s progress and progress status of a custom exercise in an Enablement program.

## Namespace

[sfdc\_enablement](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm "The sfdc_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.")

## Usage

To calculate the user’s progress through an exercise as a percentage and return the progress status, use the `sfdc_enablement.LearningEvaluationResult` class inside the [sfdc\_enablement.LearningItemEvaluationHandler](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_class_sfdc_enablement_LearningItemEvaluationHandler "Contains methods to customize the evaluation process of a learning item."). In your custom code, set the percentages to correspond to these [sfdc\_enablement.LearningItemProgressStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm "Represents the status of a user’s progress for a learning item in an Enablement program.") enum values.

-   `NotStarted` is equal to 0.00
-   `InProgress` is from 0.01 through 99.99
-   `Completed` is equal to 100.00

## Example

See example code in [sfdc\_enablement.LearningItemEvaluationHandler](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_class_sfdc_enablement_LearningItemEvaluationHandler "Contains methods to customize the evaluation process of a learning item.").

## See Also

- [LearningEvaluationResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_methods)

## LearningEvaluationResult Methods

The following are methods for `LearningEvaluationResult`.

## See Also

- [getLearningItemProgress()](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_getLearningItemProgress)
- [getLearningItemProgressStatus()](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_getLearningItemProgressStatus)
- [setLearningItemProgress(learningItemProgress)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_setLearningItemProgress)
- [setLearningItemProgressStatus(learningItemProgressStatus)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_setLearningItemProgressStatus)

### getLearningItemProgress()

Returns the progress percentage of the learning item.

#### Signature

`public Double getLearningItemProgress()`

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The progress percentage is formatted to two decimal places.

### getLearningItemProgressStatus()

Retrieves the progress status of the learning item.

#### Signature

`public sfdc_enablement.LearningItemProgressStatus getLearningItemProgressStatus()`

#### Return Value

Type: [sfdc\_enablement.LearningItemProgressStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm "Represents the status of a user’s progress for a learning item in an Enablement program.")

### setLearningItemProgress(learningItemProgress)

Sets the progress percentage of the learning item.

#### Signature

`public void setLearningItemProgress(Double learningItemProgress)`

#### Parameters

-   **learningItemProgress**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    
    The progress in percentage formatted to two decimal places.
    

#### Return Value

Type: void

### setLearningItemProgressStatus(learningItemProgressStatus)

Sets the progress status of the learning item.

#### Signature

`public void setLearningItemProgressStatus(sfdc_enablement.LearningItemProgressStatus learningItemProgressStatus)`

#### Parameters

-   **learningItemProgressStatus**:
    
    Type: [Sfdc\_enablement.LearningItemProgressStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm "Represents the status of a user’s progress for a learning item in an Enablement program.")
    

#### Return Value

Type: void
