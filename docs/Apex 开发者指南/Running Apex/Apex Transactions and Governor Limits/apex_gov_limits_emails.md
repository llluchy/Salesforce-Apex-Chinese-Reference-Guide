---
doc_id: "apex_gov_limits_emails"
---

# Set Up Governor Limit Email Warnings

You can specify users in your organization to receive an email notification when they invoke Apex code that surpasses 50% of allocated governor limits. Only per-request limits are checked for sending email warnings; per-org limits like concurrent long-running requests are not checked. These email notifications do not count against the daily single email limit.

:::tip Important
System-generated emails from an unverified email-sending domain aren’t delivered, even if
        the From email address is verified. See [Requirements to Send Email from Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_email_verification_requirements.htm&language=en_US&type=5).
:::

1.  Log in to Salesforce as an administrator user.
2.  From Setup, enter Users in the Quick Find box, then select **Users**.
3.  Click **Edit** next to the name of the user to receive the email notifications.

:::tip Note
Only users with Author Apex permission can receive email
          notifications.
:::

4.  Select the Send Apex Warning Emails option.

:::tip Note
Only users with
          Author Apex permission can view and update this option.
:::

5.  Click **Save**.

:::tip Note
These limits are currently checked for sending email warnings.Total number of SOQL
        queries issued

Total number of records retrieved by SOQL queries

Total number of
        SOSL queries issued

Total number of DML statements issued

Total number of
        records processed as a result of DML statements, `Approval.process`, or `database.emptyRecycleBin`

Total heap size

Total number of callouts
        (HTTP requests or Web services calls) in a transaction

Total number of `sendEmail` methods allowed

Maximum number of methods
        with the `future` annotation allowed per Apex
        invocation

Maximum number of Apex jobs added to the queue with `System.enqueueJob`

Total number of records retrieved
        by `Database.getQueryLocator`

Total number of
        mobile Apex push calls
:::
