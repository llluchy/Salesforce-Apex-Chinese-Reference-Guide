---
doc_id: "apex_feedItem_triggers"
---

# Moderate Feed Items with Triggers

Write a trigger for FeedItem to automate the moderation of posts in an org or Experience Cloud site. Use triggers to ensure that posts conform to your company’s communication policies and don’t contain unwanted words or phrases.

<table class="editionTable" border="0" summary="Salesforce editions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="subHead">Available in: <strong class="ph b">Enterprise</strong>, <strong class="ph b">Performance</strong>, <strong class="ph b">Unlimited</strong>, and <strong class="ph b">Developer</strong> Editions</td></tr></tbody></table>

  

<table class="permTable sort_table" border="0" summary="Permissions needed for the documented functionality" width="100%"><tbody class="tbody"><tr><td class="permRowLeft">User permissions needed to save Apex triggers for FeedItem:</td><td class="permRowRight">Author Apex</td></tr></tbody></table>

Write an Apex *before insert* trigger to review the feed item body and change the status of the feed item if it contains a blocklisted phrase. To create a trigger for feed items from Setup, enter FeedItem Triggers in the Quick Find box, then select **FeedItem Triggers**. Alternatively, you can create a trigger from the Developer Console by clicking **File** | **New** | **Apex Trigger** and selecting FeedItem from the **sObject** drop-down list.

This example shows a *before insert* trigger on FeedItem that is used to review each new post. If the post contains the unwanted phrase, the trigger also sets the status of the post to `PendingReview`.

```apex
trigger ReviewFeedItem on FeedItem (before insert) {
    for (Integer i = 0; itrigger.new.size(); i++) {

        // We don't want to leak "test phrase" information.

        if (trigger.new[i].body.containsIgnoreCase('test phrase')) {
            trigger.new[i].status = 'PendingReview'; 
            System.debug('caught one for pendingReview');
        }
    }
}
```
