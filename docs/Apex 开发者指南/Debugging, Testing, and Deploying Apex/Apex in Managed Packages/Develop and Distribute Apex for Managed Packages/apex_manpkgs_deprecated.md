---
doc_id: "apex_manpkgs_deprecated"
---

# Deprecate Managed Apex

Use the `@Deprecated` annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.

Apex identifiers include methods, classes, exceptions, enums, interfaces, and variables. After you upload another package version as Managed — Released, new subscribers that install the latest package version can’t see the deprecated identifiers. However, the identifiers still function for existing subscribers and API integrations. As the package developer, you can still reference deprecated identifiers internally.

:::tip Note
You can’t use the `@Deprecated` annotation in Apex classes or triggers in unmanaged packages.
:::

You can use Managed — Beta package versions for evaluation and feedback with a pilot set of users in different Salesforce orgs. If you deprecate an Apex identifier, and then upload a version of the package as Managed — Beta, subscribers that install the package version still see the deprecated identifier in that package version. If the package developer then uploads a Managed — Released package version, subscribers will no longer see the deprecated identifier in the package version after they install it.

## See Also

- [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
