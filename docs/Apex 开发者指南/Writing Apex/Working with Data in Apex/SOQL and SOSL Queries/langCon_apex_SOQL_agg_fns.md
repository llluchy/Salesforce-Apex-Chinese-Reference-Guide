---
doc_id: "langCon_apex_SOQL_agg_fns"
---

# Working with SOQL Aggregate Functions

Aggregate functions in SOQL, such as `SUM()` and `MAX()`, allow you to roll up and summarize your data in a query.

For more information on aggregate functions, see *Aggregate Functions* in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "HTML (New Window)").

You can use aggregate functions without using a `GROUP BY` clause. For example, you could use the `AVG()` aggregate function to find the average Amount for all your opportunities.

```apex
AggregateResult[] groupedResults
  = [SELECT AVG(Amount)aver FROM Opportunity WITH USER_MODE];
Object avgAmount = groupedResults[0].get('aver');
```

Note that any query that includes an aggregate function returns its results in an array of AggregateResult objects. AggregateResult is a read-only sObject and is only used for query results.

Aggregate functions become a more powerful tool to generate reports when you use them with a `GROUP BY` clause. For example, you could find the average Amount for all your opportunities by campaign.

```apex
AggregateResult[] groupedResults
  = [SELECT CampaignId, AVG(Amount)
      FROM Opportunity
      WITH USER_MODE 
      GROUP BY CampaignId ];
for (AggregateResult ar : groupedResults)  {
    System.debug('Campaign ID' + ar.get('CampaignId'));
    System.debug('Average amount' + ar.get('expr0'));
}
```

Any aggregated field in a `SELECT` list that does not have an alias automatically gets an implied alias with a format `expri`, where i denotes the order of the aggregated fields with no explicit aliases. The value of i starts at 0 and increments for every aggregated field with no explicit alias. For more information, see *Using Aliases with `GROUP BY`* in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

:::tip Note
Queries that include aggregate functions are still subject to the limit on total number of
        query rows. All aggregate functions other than `COUNT()` or `COUNT(fieldname)` include each
        row used by the aggregation as a query row for the purposes of limit tracking. 

      For `COUNT()` or `COUNT(fieldname)` queries, limits are counted as one query row, unless the query
        contains a GROUP BY clause, in which case one query row per grouping is consumed.

      For information about the limits that apply to queries with `for` loop, see [SOQL For Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm).
:::

## See Also

- [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_foreign_key.htm)
- [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm)
