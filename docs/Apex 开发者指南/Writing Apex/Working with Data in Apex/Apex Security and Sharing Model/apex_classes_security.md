---
doc_id: "apex_classes_security"
---

# Class Security

You can specify which users can execute methods in top-level classes or Apex transaction entry points based on their user profile or permission sets. You can only set security on Apex classes, not on triggers.

## Class Security Usage

Class security applies to methods that are in top-level Apex classes. For example, class A calls class B. User X has a profile that can access class A but not class B. User X can execute the code in class B, but only through class A; user X cannot invoke class B directly.

Class security also applies to methods that are in Apex transaction entry points, such as:

-   Aura component controllers
-   `@AuraEnabled` methods called from Lightning web components
-   Visualforce controllers
-   Apex REST services
-   Asynchronous Apex classes

For example, if a Lightning web component calls an Apex class, security is only verified for that primary class. If that class calls a secondary class the user doesn’t have explicit permission to access, the user can still execute that code in the secondary class, but only through the primary class.

## Set Apex Class Security

To set Apex class security from the class list page, see [Set Apex Class Access from the Class List Page](https://help.salesforce.com/s/articleView?id=platform.code_apex_access_via_list.htm&type=5&language=en_US)

To set Apex class security from the class detail page, see [Set Apex Class Access from the Class List Page](https://help.salesforce.com/s/articleView?id=platform.code_apex_access_via_detail.htm&type=5&language=en_US)

To set Apex class security from a permission set:

1.  From Setup, enter Permission Sets in the Quick Find box, then select **Permission Sets**.
2.  Select a permission set.
3.  Click **Apex Class Access**.
4.  Click **Edit**.
5.  Select the Apex classes that you want to enable from the Available Apex Classes list and click **Add**, or select the Apex classes that you want to disable from the Enabled Apex Classes list and click **Remove**.
6.  Click **Save**.

To set Apex class security from a profile:

1.  From Setup, enter Profiles in the Quick Find box, then select **Profiles**.
2.  Select a profile.
3.  In the Apex Class Access page or related list, click **Edit**.
4.  Select the Apex classes that you want to enable from the Available Apex Classes list and click **Add**, or select the Apex classes that you want to disable from the Enabled Apex Classes list and click **Remove**.
5.  Click **Save**.
