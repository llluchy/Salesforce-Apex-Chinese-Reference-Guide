---
doc_id: "apex_customsettings"
---

# Custom Settings

Custom settings are similar to custom objects. Application developers can create custom sets of data and associate custom data for an organization, profile, or specific user. All custom settings data is exposed in the application cache, which enables efficient access without the cost of repeated queries to the database. Formula fields, validation rules, flows, Apex, and SOAP API can then use this data.

:::tip Warning
Protection
      only applies to custom settings that are marked protected and installed to a subscriber
      organization as part of a managed package. Otherwise, they are treated as public custom
      settings and are readable for all profiles, including the guest user. Do not store secrets,
      personally identifying information, or any private data in these settings. Use protected
      custom settings only in managed packages. Outside of a managed package, use named credentials
      or encrypted custom fields to store secrets like OAuth tokens, passwords, and other
      confidential material.
:::

:::tip Note
While custom settings data is included in sandbox copies, it is treated as data for the
      purposes of Apex test isolation. Apex tests must use `SeeAllData=true` to see existing custom settings data in the organization. As a
      best practice, create the required custom settings data in your test setup.
:::

There are two types of custom settings.

-   **List Custom Settings:** A type of custom setting that provides a reusable set of static data that can be accessed across your organization. If you use a particular set of data frequently within your application, putting that data in a list custom setting streamlines access to it. Data in list settings doesn’t vary with profile or user, but is available organization-wide. Examples of list data include two-letter state abbreviations, international dialing prefixes, and catalog numbers for products. Because the data is cached, access is low-cost and efficient: you don't have to use SOQL queries that count against your governor limits.
-   **HierarchyCustom Settings:** A type of custom setting that uses a built-in hierarchical logic that lets you personalize settings for specific profiles or users. The hierarchy logic checks the organization, profile, and user settings for the current user and returns the most specific, or “lowest,” value. In the hierarchy, settings for an organization are overridden by profile settings, which, in turn, are overridden by user settings.

To get custom setting data set record based on the lowest level fields defined in the hierarchy, use the [`getinstance()`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getInstance) instance method for hierarchy custom settings.

The following examples illustrate how you can use custom settings.

-   A shipping application requires users to fill in the country codes for international deliveries. By creating a list setting of all country codes, users have quick access to this data without needing to query the database.
-   An application displays a map of account locations, the best route to take, and traffic conditions. This information is useful for sales reps, but account executives only want to see account locations. By creating a hierarchy setting with custom checkbox fields for route and traffic, you can enable this data for just the “Sales Rep” profile.

You can create a custom setting in the Salesforce user interface: from Setup, enter Custom Settings in the Quick Find box, then select **Custom Settings**. After creating a custom setting and you’ve added fields, provide data to your custom setting by clicking **Manage** from the detail page. Identify each data set with a name.

For example, if you have a custom setting named Foundation\_Countries\_\_c with one text field Country\_Code\_\_c, your data sets can look like the following:

<table class="featureTable sort_table" summary=""><tbody class="tbody"><tr><td class="entry">Data Set Name</td><td class="entry">Country Code Field Value</td></tr><tr><td class="entry">United States</td><td class="entry">USA</td></tr><tr><td class="entry">Canada</td><td class="entry">CAN</td></tr><tr><td class="entry">United Kingdom</td><td class="entry">GBR</td></tr></tbody></table>

You can also include a custom setting in a package. The visibility of the custom setting in the package depends on the Visibility setting.

:::tip Note
Only custom settings definitions are included in packages, not data. To include data, you
        must populate the custom settings using Apex code run by the subscribing organization after
        they’ve installed the package.
:::

Apex can access both custom setting types—list and hierarchy. 

:::tip Note
If
          **Privacy** for a custom setting is Protected and
        the custom setting is contained in a managed package, the subscribing organization can’t
        edit the values or access them using Apex.
:::

## Accessing a List Custom Setting

The following example returns a map of custom settings data. The `getAll` method returns values for all custom fields associated with the list setting.

```apex
MapString_dataset_name, CustomSettingName__c> mcs = CustomSettingName__c.getAll();
```

The following example uses the `getValues` method to return all the field values associated with the specified data set. This method can be used with both list and hierarchy custom settings, using different parameters.

```apex
CustomSettingName__c mc = CustomSettingName__c.getValues(data_set_name);
```

## Accessing a Hierarchy Custom Setting

The following example uses the `getOrgDefaults` method to return the data set values for the organization level: 

```apex
CustomSettingName__c mc = CustomSettingName__c.getOrgDefaults();
```

 The following example uses the `getInstance` method to return the data set values for the specified profile. The `getInstance` method can also be used with a user ID. 

```apex
CustomSettingName__c mc = CustomSettingName__c.getInstance(Profile_ID);
```

## See Also

- [Apex Reference Guide: Custom Settings Methods](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_custom_settings.htm)
