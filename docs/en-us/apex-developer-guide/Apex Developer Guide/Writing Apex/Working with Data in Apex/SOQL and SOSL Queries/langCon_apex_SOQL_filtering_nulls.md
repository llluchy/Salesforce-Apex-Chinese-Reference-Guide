---
doc_id: "langCon_apex_SOQL_filtering_nulls"
---

# Improve Performance by Avoiding Null Values

In your SOQL and SOSL queries, explicitly filtering out null values in the WHERE clause allows Salesforce to improve query performance. In the following example, any records where the `Thread__c` value is null are eliminated from the search.

```apex
Public class TagWS {

/* getThreadTags
*
* a quick method to pull tags not in the existing list
*
*/
   public static webservice ListString> 
   getThreadTags(String threadId, ListString> tags) {

      system.debug(LoggingLevel.Debug,tags);

      ListString> retVals = new ListString>();
      SetString> tagSet = new SetString>();
      SetString> origTagSet = new SetString>();
      origTagSet.addAll(tags);

// Note WHERE clause optimizes search where Thread__c is not null

      for(CSO_CaseThread_Tag__c t : 
         [SELECT Name FROM CSO_CaseThread_Tag__c 
         WHERE Thread__c = :threadId AND
         Thread__c != null]) 

      {
         tagSet.add(t.Name);
      }
      for(String x : origTagSet) { 
   // return a minus version of it so the UI knows to clear it
         if(!tagSet.contains(x)) retVals.add('-' + x);
      }
      for(String x : tagSet) { 
   // return a plus version so the UI knows it's new
         if(!origTagSet.contains(x)) retvals.add('+' + x);
      }

      return retVals;
   }
}
```

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm)
