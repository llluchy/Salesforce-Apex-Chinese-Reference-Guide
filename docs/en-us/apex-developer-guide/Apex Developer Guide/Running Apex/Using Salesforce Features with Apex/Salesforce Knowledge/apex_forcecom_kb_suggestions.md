---
doc_id: "apex_forcecom_kb_suggestions"
---

# Suggest Salesforce Knowledge Articles

Provide users with shortcuts to navigate to relevant articles before they perform a search. Call `Search.suggest(searchText, objectType, options)` to return a list of Salesforce Knowledge articles whose titles match a user’s search query string.

To return suggestions, enable Salesforce Knowledge.

This Visualforce page has an input field for searching articles or accounts. When the user presses the Suggest button, suggested records are displayed. If there are more than five results, the More results button appears. To display more results, click the button. 

```VisualForce
controller="SuggestionDemoController">
     >
         mode="edit" id="block">
            >Article and Record Suggestions>
             >
                 >
                     >
                         >
                             value="{!objectType}" size="1">
                                 itemLabel="Account" itemValue="Account" />
                                 itemLabel="Article" itemValue="KnowledgeArticleVersion" />
                                 event="onchange" rerender="block"/>
                            >
                        >
                         >
                             id="nbResult" value="{!nbResult}" />
                             for="searchText">Search Text>
                             
                             id="searchText" value="{!searchText}"/>
                             id="suggestButton" value="Suggest" action="{!doSuggest}" 
                                                rerender="block"/>
                             id="suggestMoreButton" value="More results..." action="{!doSuggestMore}" 
                                                rerender="block" style="{!IF(hasMoreResults, '', 'display: none;')}"/>
                        >
                    >
                >
            >
             title="Results" id="results" columns="1" rendered="{!results.size>0}">
                 value="{!results}" var="w" type="1">
                    Id: {!w.SObject['Id']}
                     />
                     rendered="{!objectType=='KnowledgeArticleVersion'}">
                        Title: {!w.SObject['Title']}
                    >
                     rendered="{!objectType!='KnowledgeArticleVersion'}">
                        Name: {!w.SObject['Name']}
                    >
                     />
                >
            >
             id="noresults" rendered="{!results.size==0}">
                No results
            >
             rendered="{!LEN(searchText)>0}">
                Search text: {!searchText}
            >
        >
    >
>
```

This code is the custom Visualforce controller for the page:

```apex
public class SuggestionDemoController {
    
    public String searchText;
    public String language = 'en_US';
    public String objectType = 'Account';
    public Integer nbResult = 5;
    public Transient Search.SuggestionResults suggestionResults;

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String s) {
        searchText = s;
    }
    
    public Integer getNbResult() {
        return nbResult;
    }

    public void setNbResult(Integer n) {
        nbResult = n;
    }
    
    public String getLanguage() {
        return language;
    }
    
    public void setLanguage(String language) {
        this.language = language;
    }
            
    public String getObjectType() {
        return objectType;
    }
    
    public void setObjectType(String objectType) {
        this.objectType = objectType;
    }

    public List getResults() {
        if (suggestionResults == null) {
            return new List();
        }
        
        return suggestionResults.getSuggestionResults();
    }
    
    public Boolean getHasMoreResults() {
        if (suggestionResults == null) {
            return false;
        }
        return suggestionResults.hasMoreResults();
    }
    
    public PageReference doSuggest() {
        nbResult = 5;
        suggestAccounts();
        return null;
    }
    
    public PageReference doSuggestMore() {
        nbResult += 5;
        suggestAccounts();
        return null;
    }
    
    private void suggestAccounts() {
        Search.SuggestionOption options = new Search.SuggestionOption();
        Search.KnowledgeSuggestionFilter filters = new Search.KnowledgeSuggestionFilter();
        if (objectType=='KnowledgeArticleVersion') {
            filters.setLanguage(language);
            filters.setPublishStatus('Online');
        }
        options.setFilter(filters);
        options.setLimit(nbResult);
        suggestionResults = Search.suggest(searchText, objectType, options);
    }
}
```

## See Also

- [Search.suggest(searchQuery,sObjectType,suggestions)](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_search.htm)
