---
doc_id: "apex_cache_namespace_overview"
---

# Platform Cache

The Lightning Platform Cache layer provides faster performance and better reliability when caching Salesforce session and org data. Specify what to cache and for how long without using custom objects and settings or overloading a Visualforce view state. Platform Cache improves performance by distributing cache space so that some applications or operations don’t steal capacity from others.

Because Apex runs in a multi-tenant environment with cached data living alongside internally cached data, caching involves minimal disruption to core Salesforce processes.

## See Also

- [Platform Cache Features](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_features.htm)
- [Platform Cache Considerations](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limitations.htm)
- [Platform Cache Limits](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limits.htm)
- [Platform Cache Partitions](atlas.en-us.apexcode.meta/apexcode/apex_cache_partition_setup.htm)
- [Platform Cache Internals](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_internals.htm)
- [Store and Retrieve Values from the Session Cache](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_session_examples.htm)
- [Store and Retrieve Values from the Org Cache](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_org_examples.htm)
- [Use a Visualforce Global Variable for the Platform Cache](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_global_variable.htm)
- [Safely Cache Values with the CacheBuilder Interface](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_builder.htm)
- [Platform Cache Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_best_practices.htm)
