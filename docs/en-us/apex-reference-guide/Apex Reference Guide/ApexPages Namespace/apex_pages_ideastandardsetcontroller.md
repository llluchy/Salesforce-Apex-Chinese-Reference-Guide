---
doc_id: "apex_pages_ideastandardsetcontroller"
---

# IdeaStandardSetController Class

`IdeaStandardSetController` objects offer Ideas-specific functionality in addition to what is provided by the `StandardSetController`.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

## Usage

:::tip Note
The `IdeaStandardSetController` and `IdeaStandardController` classes are currently
                available through a limited release program. For information on enabling these
                classes for your organization, contact your Salesforce representative.
:::

In addition to the method listed above, the `IdeaStandardSetController` class inherits the methods associated with the `StandardSetController`. 

:::tip Note
The methods
inherited from the `StandardSetController` cannot be used to affect the list of ideas returned by the `getIdeaList` method.
:::

## Instantiation

An IdeaStandardSetController object cannot be instantiated. An instance can be obtained through a constructor of a custom extension controller when using the standard list controller for ideas.

## Example: Displaying a Profile Page

The following example shows how an IdeaStandardSetController object can be used in the constructor for a custom list controller:

```apex
public class MyIdeaProfileExtension {
    private final ApexPages.IdeaStandardSetController ideaSetController;
    
    public MyIdeaProfileExtension(ApexPages.IdeaStandardSetController controller) {
        ideaSetController = (ApexPages.IdeaStandardSetController)controller;
    }
    
    public List getModifiedIdeas() {
        Idea[] ideas = ideaSetController.getIdeaList();
        // modify ideas here
        return ideas;
    }
    
}
```

The following Visualforce markup shows how the IdeaStandardSetController example shown above and the `<ideas:profileListOutputLink>` component can display a profile page that lists the recent replies, submitted ideas, and votes associated with a user. Because this example does not identify a specific user ID, the page automatically shows the profile page for the current logged in user. This page must be named profilePage in order for this example to work:

```VisualForce
standardController="Idea" extensions="MyIdeaProfileExtension" recordSetVar="ideaSetVar">
     >
         sort="recentReplies" page="profilePage">
          Recent Replies>
        | 
         sort="ideas" page="profilePage">Ideas Submitted
        >
        | 
         sort="votes" page="profilePage">Ideas Voted
        >
    >
     >
         value="{!modifiedIdeas}" var="ideadata">
             ideaId="{!ideadata.id}" page="viewPage">
             {!ideadata.title}>
        >
    >    
>
```

In the previous example, the `<ideas:detailoutputlink>` component links to the following Visualforce markup that displays the detail page for a specific idea. This page must be named viewPage in order for this example to work:

```VisualForce
standardController="Idea">
     title="Idea Section">
         page="viewPage" ideaId="{!idea.id}">{!idea.title}
        >
        >>
        >{!idea.body}>
    >
>
```

## Example: Displaying a List of Top, Recent, and Most Popular Ideas and Comments

The following example shows how an IdeaStandardSetController object can be used in the constructor for a custom list controller:

:::tip Note
You must have created at least
one idea for this example to return any ideas.
:::

```apex
public class MyIdeaListExtension {
    private final ApexPages.IdeaStandardSetController ideaSetController; 

    public MyIdeaListExtension (ApexPages.IdeaStandardSetController controller) {
        ideaSetController = (ApexPages.IdeaStandardSetController)controller;
    }

    public List getModifiedIdeas() {
        Idea[] ideas = ideaSetController.getIdeaList();
        // modify ideas here
        return ideas;
    }
}
```

The following Visualforce markup shows how the IdeaStandardSetController example shown above can be used with the `<ideas:listOutputLink>` component to display a list of recent, top, and most popular ideas and comments. This page must be named listPage in order for this example to work:

```VisualForce
standardController="Idea" extensions="MyIdeaListExtension" recordSetVar="ideaSetVar">
     >
         sort="recent" page="listPage">Recent Ideas
        >
        | 
         sort="top" page="listPage">Top Ideas
        >
        | 
         sort="popular" page="listPage">Popular Ideas
        >
        | 
         sort="comments" page="listPage">Recent Comments
        >
    >
     >
         value="{!modifiedIdeas}" var="ideadata">
             ideaId="{!ideadata.id}" page="viewPage">
             {!ideadata.title}>
        >
    >
>
```

In the previous example, the `<ideas:detailoutputlink>` component links to the following Visualforce markup that displays the detail page for a specific idea. This page must be named viewPage.

```VisualForce
standardController="Idea">
     title="Idea Section">
         page="viewPage" ideaId="{!idea.id}">{!idea.title}
        >
        >>
        >{!idea.body}>
    >
>
```

## See Also

- [StandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_pages_standardsetcontroller)

## IdeaStandardSetController Methods

The following are instance methods for `IdeaStandardSetController`.

## See Also

- [getIdeaList()](atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardsetcontroller.htm#apex_ApexPages_IdeaStandardSetController_getIdeaList)

### getIdeaList()

Returns the list of read-only ideas in the current page set.

#### Signature

`public Idea[] getIdeaList()`

#### Return Value

Type: Idea\[\]

#### Usage

You can use the `<ideas:listOutputLink>`, `<ideas:profileListOutputLink>`, and `<ideas:detailOutputLink>` components to display profile pages as well as idea list and detail pages (see the examples below). The following is a list of properties returned by this method:

-   `Body`
-   `Categories`
-   `Category`
-   `CreatedBy.CommunityNickname`
-   `CreatedBy.Id`
-   `CreatedDate`
-   `Id`
-   `LastCommentDate`
-   `LastComment.Id`
-   `LastComment.CommentBody`
-   `LastComment.CreatedBy.CommunityNickname`
-   `LastComment.CreatedBy.Id`
-   `NumComments`
-   `Status`
-   `Title`
-   `VoteTotal`
