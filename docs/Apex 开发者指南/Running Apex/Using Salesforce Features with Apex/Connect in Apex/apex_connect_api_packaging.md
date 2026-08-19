---
doc_id: "apex_connect_api_packaging"
---

# Packaging ConnectApi Classes

If you include `ConnectApi` classes in a package, be aware of Chatter dependencies.

If a `ConnectApi` class has a dependency on Chatter, the code can be compiled and installed in orgs that don’t have Chatter enabled. However, if Chatter isn’t enabled, the code throws an error at run time.

```plain
System.NoAccessException: Insufficient Privileges: This feature is not currently enabled for this user.
```

In its reference documentation, every `ConnectApi` method indicates whether or not it supports Chatter.

## See Also

- [Develop and Distribute Apex for Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_chapter.htm)
