---
doc_id: "apex_class_Datacloud_DuplicateResult"
---

# DuplicateResult Class

Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.

## Namespace

[Datacloud](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm#apex_namespace_datacloud "The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.")

## Usage

The `DuplicateResult` class and its methods are available to organizations that use duplicate rules.

`DuplicateResult` is contained within `DuplicateError`, which is part of `SaveResult`. `SaveResult` is generated when a user attempts to save a record in Salesforce.

## Example

This example shows a custom application that lets users add a contact. When a contact is saved, an alert displays if there are duplicate records.

The sample application consists of a Visualforce page and an Apex controller. The Visualforce page is listed first so that you can see how the page makes use of the Apex controller. Save the Apex class first before saving the Visualforce page.

```VisualForce
controller="ContactDedupeController">
     >
         title="Duplicate Records" rendered="{!hasDuplicateResult}">
             />
             value="{!duplicateRecords}" var="item">
                 >
                     name="header">Name>
                     value="/{!item['Id']}">{!item['Name']}>
                >
                 >
                     name="header">Owner>
                     value="{!item['OwnerId']}"/>
                >
                 >
                     name="header">Last Modified Date>
                     value="{!item['LastModifiedDate']}"/>
                >
            > 
        >
        
         title="Contact" mode="edit">
             >
                 value="Save" action="{!save}"/>
            >         

             >
                 value="{!Contact.FirstName}"/>
                 value="{!Contact.LastName}"/>
                 value="{!Contact.Email}"/>
                 value="{!Contact.Phone}"/>
                 value="{!Contact.AccountId}"/>
            >
        >
    >
>
```

This sample is the Apex controller for the page. This controller contains the action method for the Save button. The `save` method inserts the new contact. If errors are returned, this method iterates through each error, checks if it’s a duplicate error, adds the error message to the page, and returns information about the duplicate records to be displayed on the page.

```apex
public class ContactDedupeController {
    
    // Initialize a variable to hold the contact record you're processing
    private final Contact contact;
    
    // Initialize a list to hold any duplicate records
    private List duplicateRecords;
    
    // Define variable that’s true if there are duplicate records
    public boolean hasDuplicateResult{get;set;}
    
    // Define the constructor
    public ContactDedupeController() {
        
        // Define the values for the contact you’re processing based on its ID
        Id id = ApexPages.currentPage().getParameters().get('id');
        this.contact = (id == null) ? new Contact() : 
            [SELECT Id, FirstName, LastName, Email, Phone, AccountId 
             FROM Contact WHERE Id = :id];
       
        // Initialize empty list of potential duplicate records
        this.duplicateRecords = new List();
        this.hasDuplicateResult = false;
    }
    
    // Return contact and its values to the Visualforce page for display
    public Contact getContact() {
        return this.contact;
    }
    
    // Return duplicate records to the Visualforce page for display
    public List getDuplicateRecords() {
        return this.duplicateRecords;
    }
    
    // Process the saved record and handle any duplicates
    public PageReference save() {
        
        // Optionally, set DML options here, use “DML” instead of “false” 
        //   in the insert()
        // Database.DMLOptions dml = new Database.DMLOptions(); 
        // dml.DuplicateRuleHeader.allowSave = true;
        // dml.DuplicateRuleHeader.runAsCurrentUser = true;
        Database.SaveResult saveResult = Database.insert(contact, false);

        if (!saveResult.isSuccess()) {
            for (Database.Error error : saveResult.getErrors()) {
                // If there are duplicates, an error occurs
                // Process only duplicates and not other errors 
                //   (e.g., validation errors)
                if (error instanceof Database.DuplicateError) {
                    // Handle the duplicate error by first casting it as a 
                    //   DuplicateError class
                    // This lets you use methods of that class 
                    //  (e.g., getDuplicateResult())
                    Database.DuplicateError duplicateError = 
                            (Database.DuplicateError)error;
                    Datacloud.DuplicateResult duplicateResult = 
                            duplicateError.getDuplicateResult();
                    
                    // Display duplicate error message as defined in the duplicate rule
                    ApexPages.Message errorMessage = new ApexPages.Message(
                            ApexPages.Severity.ERROR, 'Duplicate Error: ' + 
                            duplicateResult.getErrorMessage());
                    ApexPages.addMessage(errorMessage);
                    
                    // Get duplicate records
                    this.duplicateRecords = new List();

                    // Return only match results of matching rules that 
                    //  find duplicate records
                    Datacloud.MatchResult[] matchResults = 
                            duplicateResult.getMatchResults();

                    // Just grab first match result (which contains the 
                    //   duplicate record found and other match info)
                    Datacloud.MatchResult matchResult = matchResults[0];

                    Datacloud.MatchRecord[] matchRecords = matchResult.getMatchRecords();

                    // Add matched record to the duplicate records variable
                    for (Datacloud.MatchRecord matchRecord : matchRecords) {
                        System.debug('MatchRecord: ' + matchRecord.getRecord());
                        this.duplicateRecords.add(matchRecord.getRecord());
                    }
                    this.hasDuplicateResult = !this.duplicateRecords.isEmpty();
                }
            }
            
            //If there’s a duplicate record, stay on the page
            return null;
        }
        
        //  After save, navigate to the view page:
        return (new ApexPages.StandardController(contact)).view();
    }
    
}
```

## See Also

- [DuplicateResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_methods)
- [SaveResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult)

-   [DuplicateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_class_Database_DuplicateError "Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.")
    

## DuplicateResult Methods

The following are methods for `DuplicateResult`.

## See Also

- [getDuplicateRule()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_getDuplicateRule)
- [getErrorMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_getErrorMessage)
- [getMatchResults()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_getMatchResults)
- [isAllowSave()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_isAllowSave)

### getDuplicateRule()

Returns the developer name of the executed duplicate rule that returned duplicate records.

#### Signature

`public String getDuplicateRule()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getErrorMessage()

Returns the error message configured by the administrator to warn users they may be creating duplicate records. This message is associated with a duplicate rule.

#### Signature

`public String getErrorMessage()`

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

This example shows the code used to display the error message when duplicates are found while saving a new contact. This code is part of a custom application that lets users add a contact. When a contact is saved, an alert displays if there are duplicate records. Review [DuplicateResult Class](#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```apex
ApexPages.Message errorMessage = new ApexPages.Message(
                            ApexPages.Severity.ERROR, 'Duplicate Error: ' + 
                            duplicateResult.getErrorMessage());
                    ApexPages.addMessage(errorMessage);
```

### getMatchResults()

Returns the duplicate records and match information.

#### Signature

`public List<Datacloud.MatchResult> getMatchResults()`

#### Return Value

Type: List<Datacloud.MatchResult>

#### Example

This example shows the code used to return duplicate record and match information and assign it to the `matchResults` variable. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```apex
Datacloud.MatchResult[] matchResults = 
                            duplicateResult.getMatchResults();
```

### isAllowSave()

Indicates whether the duplicate rule will allow a record that’s identified as a duplicate to be saved. Set to `true` if duplicate rule should allow save; otherwise, `false`.

#### Signature

`public Boolean isAllowSave()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
