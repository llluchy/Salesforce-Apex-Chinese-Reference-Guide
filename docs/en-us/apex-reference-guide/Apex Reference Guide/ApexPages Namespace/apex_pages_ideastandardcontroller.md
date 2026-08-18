---
doc_id: "apex_pages_ideastandardcontroller"
---

# IdeaStandardController Class

`IdeaStandardController` objects offer Ideas-specific functionality in addition to what is provided by the `StandardController`.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

## Usage

A method in the IdeaStandardController object is called by and operated on a particular instance of an IdeaStandardController.

:::tip Note
The `IdeaStandardSetController` and `IdeaStandardController` classes are currently
                available through a limited release program. For information on enabling these
                classes for your organization, contact your Salesforce representative.
:::

In addition to the methods listed in this class, the `IdeaStandardController` class inherits all the methods associated with the `StandardController` class.

## Instantiation

An IdeaStandardController object cannot be instantiated. An instance can be obtained through a constructor of a custom extension controller when using the standard ideas controller.

## Example

The following example shows how an IdeaStandardController object can be used in the constructor for a custom list controller. This example provides the framework for manipulating the comment list data before displaying it on a Visualforce page.

```apex
public class MyIdeaExtension {
    
    private final ApexPages.IdeaStandardController ideaController;
    
    public MyIdeaExtension(ApexPages.IdeaStandardController controller) {
        ideaController = (ApexPages.IdeaStandardController)controller;
    }
    
    public List getModifiedComments() {
        IdeaComment[] comments = ideaController.getCommentList();
        // modify comments here
        return comments;
    }
    
}
```

The following Visualforce markup shows how the IdeaStandardController example shown above can be used in a page. This page must be named detailPage for this example to work.

:::tip Note
For the Visualforce page to display the idea and its comments, in the following
example you need to specify the ID of a specific idea (for example, `/apex/detailPage?id=<ideaID>`) whose
comments you want to view.
:::

```VisualForce
standardController="Idea" extensions="MyIdeaExtension">
     title="Idea Section">
         page="detailPage" ideaId="{!idea.id}">{!idea.title}
        >
        >>
         >{!idea.body}>
    >
     title="Comments Section">
         var="a" value="{!modifiedComments}" id="list">
            {!a.commentBody}
        >
         page="detailPage" ideaId="{!idea.id}" 
               pageOffset="-1">Prev>
        | 
         page="detailPage" ideaId="{!idea.id}" 
               pageOffset="1">Next>   
    >
>
```

 

## See Also

- [StandardController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_pages_standardcontroller)

## IdeaStandardController Methods

The following are instance methods for `IdeaStandardController`.

## See Also

- [getCommentList()](atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardcontroller.htm#apex_ApexPages_IdeaStandardController_getCommentList)

### getCommentList()

Returns the list of read-only comments from the current page.

#### Signature

`public IdeaComment[] getCommentList()`

#### Return Value

Type: IdeaComment\[\]

This method returns the following comment properties:

-   `id`
-   `commentBody`
-   `createdDate`
-   `createdBy.Id`
-   `createdBy.communityNickname`
