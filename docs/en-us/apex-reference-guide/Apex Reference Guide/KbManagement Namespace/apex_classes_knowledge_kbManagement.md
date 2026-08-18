---
doc_id: "apex_classes_knowledge_kbManagement"
---

# PublishingService Class

Use the methods in the `KbManagement.PublishingService` class to manage the lifecycle of an article and its translations.

## Namespace

[KbManagement](atlas.en-us.apexref.meta/apexref/apex_namespace_KbManagement.htm "The KbManagement namespace provides a class for managing knowledge articles.")

## Usage

Use the methods in the `KbManagement.PublishingService` class to manage the following parts of the lifecycle of an article and its translations:

-   Publishing
-   Updating
-   Retrieving
-   Deleting
-   Submitting for translation
-   Setting a translation to complete or incomplete status
-   Archiving
-   Assigning review tasks for draft articles or translations

:::tip Note
Date values are based on GMT.
:::

To use the methods in this class, you must enable Salesforce Knowledge.

## PublishingService Methods

The following are methods for `PublishingService`. All methods are static.

## See Also

- [archiveOnlineArticle(articleId, scheduledDate)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_archiveOnlineArticle)
- [assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_assignDraftArticleTask)
- [assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_assignDraftTranslationTask)
- [cancelScheduledArchivingOfArticle(articleId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_cancelScheduledArchivingOfArticle)
- [cancelScheduledPublicationOfArticle(articleId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_cancelScheduledPublicationOfArticle)
- [completeTranslation(articleVersionId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_completeTranslation)
- [deleteArchivedArticle(articleId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_deleteArchivedArticle)
- [deleteArchivedArticleVersion(articleId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_deleteArchivedArticleVersion)
- [deleteDraftArticle(articleId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_deleteDraftArticle)
- [deleteDraftTranslation(articleVersionId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_deleteDraftTranslation)
- [editArchivedArticle(articleId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_editArchivedArticle)
- [editOnlineArticle(articleId, unpublish)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_editOnlineArticle)
- [editPublishedTranslation(articleId, language, unpublish)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_editPublishedTranslation)
- [publishArticle(articleId, flagAsNew)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_publishArticle)
- [restoreOldVersion(articleId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_restoreOldVersion)
- [scheduleForPublication(articleId, scheduledDate)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_scheduleForPublication)
- [setTranslationToIncomplete(articleVersionId)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_setTranslationToIncomplete)
- [submitForTranslation(articleId, language, assigneeId, dueDate)](atlas.en-us.apexref.meta/apexref/apex_classes_knowledge_kbManagement.htm#apex_KbManagement_PublishingService_submitForTranslation)

### archiveOnlineArticle(articleId, scheduledDate)

Archives an online version of an article. If the specified scheduledDate is null, the article is archived immediately. Otherwise, it archives the article on the scheduled date.

#### Signature

`public static Void archiveOnlineArticle(String articleId, Datetime scheduledDate)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **scheduledDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
Datetime scheduledDate = Datetime.newInstanceGmt(2012, 12,1,13,30,0);
KbManagement.PublishingService.archiveOnlineArticle(articleId, scheduledDate);
```

### assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification)

Assigns a review task related to a draft article.

#### Signature

`public static Void assignDraftArticleTask(String articleId, String assigneeId, String instructions, Datetime dueDate, Boolean sendEmailNotification)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **assigneeId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **instructions**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **dueDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
-   **sendEmailNotification**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
String assigneeId = '';
String instructions = 'Please review this draft.';
Datetime dueDate = Datetime.newInstanceGmt(2012, 12, 1);
KbManagement.PublishingService.assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, true);
```

### assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification)

Assigns a review task related to a draft translation.

#### Signature

`public static Void assignDraftTranslationTask(String articleVersionId, String assigneeId, String instructions, Datetime dueDate, Boolean sendEmailNotification)`

#### Parameters

-   **articleVersionId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **assigneeId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **instructions**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **dueDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    
-   **sendEmailNotification**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
String assigneeId = 'Insert assignee ID';
String instructions = 'Please review this draft.';
Datetime dueDate = Datetime.newInstanceGmt(2012, 12, 1);
KbManagement.PublishingService.assignDraftTranslationTask(articleId, assigneeId, instructions, dueDate, true);
```

### cancelScheduledArchivingOfArticle(articleId)

Cancels the scheduled archiving of an online article.

#### Signature

`public static Void cancelScheduledArchivingOfArticle(String articleId)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
KbManagement.PublishingService.cancelScheduledArchivingOfArticle (articleId);
```

### cancelScheduledPublicationOfArticle(articleId)

Cancels the scheduled publication of a draft article.

#### Signature

`public static Void cancelScheduledPublicationOfArticle(String articleId)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
KbManagement.PublishingService.cancelScheduledPublicationOfArticle (articleId);
```

### completeTranslation(articleVersionId)

Puts a translation in a completed state that is ready to publish.

#### Signature

`public static Void completeTranslation(String articleVersionId)`

#### Parameters

-   **articleVersionId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleVersionId = 'Insert article ID';
KbManagement.PublishingService.completeTranslation(articleVersionId);
```

### deleteArchivedArticle(articleId)

Deletes an archived article.

#### Signature

`public static Void deleteArchivedArticle(String articleId)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
KbManagement.PublishingService.deleteArchivedArticle(articleId);
```

### deleteArchivedArticleVersion(articleId, versionNumber)

Deletes a specific archived version of a published article.

#### Signature

`public static Void deleteArchivedArticleVersion(String articleId, Integer versionNumber)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **versionNumber**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
Integer versionNumber = 1;
KbManagement.PublishingService.deleteArchivedArticleVersion(articleId, versionNumber);
```

### deleteDraftArticle(articleId)

Deletes a draft article.

#### Signature

`public static Void deleteDraftArticle(String articleId)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
KbManagement.PublishingService.deleteDraftArticle(articleId);
```

### deleteDraftTranslation(articleVersionId)

Deletes a draft translation.

#### Signature

`public static Void deleteDraftTranslation(String articleVersionId)`

#### Parameters

-   **articleVersionId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleVersionId = 'Insert article ID';
KbManagement.PublishingService.deleteDraftTranslation (articleVersionId);
```

### editArchivedArticle(articleId)

Creates a draft article from the archived primary version and returns the new draft primary version ID of the article.

#### Signature

`public static String editArchivedArticle(String articleId)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String articleId = 'Insert article ID';
String id = KbManagement.PublishingService.editArchivedArticle(articleId);
```

### editOnlineArticle(articleId, unpublish)

Creates a draft article from the online version and returns the new draft primary version ID of the article. Also, unpublishes the online article, if unpublish is set to `true`.

#### Signature

`public static String editOnlineArticle(String articleId, Boolean unpublish)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **unpublish**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String articleId = 'Insert article ID';
String id = KbManagement.PublishingService.editOnlineArticle (articleId, true);
```

### editPublishedTranslation(articleId, language, unpublish)

Creates a draft version of the online translation for a specific language and returns the new draft primary version ID of the article. Also, unpublishes the article, if set to `true`.

#### Signature

`public static String editPublishedTranslation(String articleId, String language, Boolean unpublish)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **language**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **unpublish**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String articleId = 'Insert article ID';
String language = 'fr';
String id = KbManagement.PublishingService.editPublishedTranslation(articleId, language, true);
```

### publishArticle(articleId, flagAsNew)

Publishes an article. If flagAsNew is set to `true`, the article is published as a major version.

#### Signature

`public static Void publishArticle(String articleId, Boolean flagAsNew)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **flagAsNew**:
    
    Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
KbManagement.PublishingService.publishArticle(articleId, true);
```

### restoreOldVersion(articleId, versionNumber)

Creates a draft article from an existing online article based on the specified archived version of the article and returns the article version ID.

#### Signature

`public static String restoreOldVersion(String articleId, Integer versionNumber)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **versionNumber**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String articleId = 'Insert article ID';
String id = KbManagement.PublishingService.restoreOldVersion (articleId, 1);
```

### scheduleForPublication(articleId, scheduledDate)

Schedules the article for publication as a major version. If the specified date is null, the article is published immediately.

#### Signature

`public static Void scheduleForPublication(String articleId, Datetime scheduledDate)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **scheduledDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleId = 'Insert article ID';
Datetime scheduledDate = Datetime.newInstanceGmt(2012, 12,1,13,30,0);
KbManagement.PublishingService.scheduleForPublication(articleId, scheduledDate);
```

### setTranslationToIncomplete(articleVersionId)

Sets a draft translation that is ready for publication back to “in progress” status.

#### Signature

`public static Void setTranslationToIncomplete(String articleVersionId)`

#### Parameters

-   **articleVersionId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: Void

#### Example

```apex
String articleVersionId = 'Insert article ID';
KbManagement.PublishingService.setTranslationToIncomplete(articleVersionId);
```

### submitForTranslation(articleId, language, assigneeId, dueDate)

Submits an article for translation to the specified language. Also assigns the specified user and due date to the submittal and returns new ID of the draft translation.

#### Signature

`public static String submitForTranslation(String articleId, String language, String assigneeId, Datetime dueDate)`

#### Parameters

-   **articleId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **language**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **assigneeId**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **dueDate**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String articleId = 'Insert article ID';
String language = 'fr';
String assigneeId = 'Insert assignee ID';
Datetime dueDate = Datetime.newInstanceGmt(2012, 12,1);
String id = KbManagement.PublishingService.submitForTranslation(articleId, language, assigneeId, dueDate);
```
