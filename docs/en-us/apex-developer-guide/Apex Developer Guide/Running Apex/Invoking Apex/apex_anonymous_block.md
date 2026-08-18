---
doc_id: "apex_anonymous_block"
---

# Anonymous Blocks

An anonymous block is Apex code that doesn’t get stored in the metadata, but that you can compile and execute.

<table class="featureTable sort_table" summary=""><tbody class="tbody"><tr><td class="entry">User permissions needed to execute anonymous Apex:<p class="p">(Anonymous Apex execution through the API allows restricted access without the “Author Apex” permission.)</p></td><td class="entry">“API Enabled” and “Author Apex”</td></tr><tr><td class="entry">User permissions needed if an anonymous Apex callout references a named credential as the endpoint:</td><td class="entry">Customize Application</td></tr></tbody></table>

Compile and execute anonymous blocks by using one of these Salesforce development tools.

-   [Web Console (Beta)](https://developer.salesforce.com/docs/platform/webconsole/overview)
-   [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/docs/platform/sfvscode-extensions/overview)
-   [Agentforce Vibes IDE](https://developer.salesforce.com/docs/platform/code-builder/overview)
-   Developer Console

You can also execute anonymous blocks by using the [`executeAnonymous()`](https://developer.salesforce.com/docs/atlas.en-us.262.0.api.meta/api/sforce_api_calls_executeanonymous.htm) SOAP API call.

```apex
ExecuteAnonymousResult executeAnonymous(String code)
```

 

:::tip Important
Every time you run an anonymous block, the code and its references
            are compiled. For repetitive calls, we strongly recommend that you use compiled classes,
            such as Apex REST endpoints.
:::

Note the following about the content of an anonymous block.

-   The anonymous block can include user-defined methods and exceptions.
-   User-defined methods can’t include the keyword `static`.
-   You don’t have to commit any database changes manually .
-   If an Apex trigger within an anonymous block completes successfully, the changes are committed to the database only after all operations in the block finish executing successfully. If your Apex trigger doesn’t complete successfully, any changes made to the database in the anonymous block are rolled back.
-   Anonymous blocks run as the current user and can fail to compile if the code violates the user’s object- and field-level permissions.
-   The content in the anonymous block has a local scope. For example, although it’s legal to use the `global` access modifier, it has no meaning. The scope of the method is limited to the anonymous block.
-   When you define a class or interface (a custom type) in an anonymous block, it’s considered virtual by default when the anonymous block executes. This fact is true even if your custom type isn’t defined with the `virtual` modifier.
-   Classes and interfaces defined in an anonymous block aren’t saved to your org.

Even though a user-defined method can refer to itself or later methods without the need for forward declarations, variables can’t be referenced before their actual declaration. In this example, the Integer `int` must be declared while `myProcedure1` doesn’t:

```apex
Integer int1 = 0;

void myProcedure1() {
    myProcedure2();
}

void myProcedure2() {
    int1++;
}

myProcedure1();
```

The returned result for anonymous blocks includes:

-   Status information for the compile and execute phases of the call, including any errors that occur
-   The debug log content, including the output of any calls to the `System.debug` method (see [Debug Log](atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm))
-   The Apex stack trace of any uncaught code execution exceptions, including the class, method, and line number for each call stack element

:::tip Important
Salesforce blocks anonymous Apex code invoked from managed packages. Managed packages
                can’t use [`UserInfo.getSessionId()`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getSessionId) to obtain a session ID and then use
                the session ID to execute anonymous Apex.

            This restriction applies to new managed packages with namespaces created in Summer
                ’26 and later. For existing managed packages with namespaces created in Spring ’26
                and earlier, this restriction is enforced as a release update. The release update
                available to package subscribers starting in Summer ’26 and is enforced in Summer
                ’27. See [Block Execute Anonymous from Managed Packages (Release Update)](https://help.salesforce.com/s/articleView?id=release-notes.rn_apex_block_exec_anon_ru.htm&type=5&language=en_US).
:::

## Executing Anonymous Apex Through the API and the Author Apex Permission

To run any Apex code with the `executeAnonymous()` API call, including Apex methods saved in the org, users must have the Author Apex permission. For users who don’t have the Author Apex permission, the API allows restricted execution of anonymous Apex. This exception applies only when users execute anonymous Apex through the API or through a developer tool that uses the API. Such users are allowed to run the following in an anonymous block.

-   Code that they write in the anonymous block
-   Web service methods (methods declared with the `webservice` keyword) that are saved in the org
-   Any built-in Apex methods that are part of the Apex language

Running any other Apex code is blocked if the user doesn’t have the Author Apex permission. For example, calling methods of custom Apex classes that are saved in the org isn’t allowed nor is using custom classes as arguments to built-in methods.

When users without the Author Apex permission run DML statements in an anonymous block, triggers can get fired as a result.

## See Also

- [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)

#### See Also

-   [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.")
