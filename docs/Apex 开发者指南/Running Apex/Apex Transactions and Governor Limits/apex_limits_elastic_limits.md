---
doc_id: "apex_limits_elastic_limits"
---

# Elastic Limits for Asynchronous Apex Jobs (Beta)

To help avoid disruptions to your workflow, enable elastic limits for asynchronous Apex jobs (beta). The setting supports throttled processing of asynchronous jobs above the standard rolling 24-hour limit, which prevents execution failures and limit exceptions if your org reaches or exceeds this limit.

:::tip Important
Elastic Limits for Queueable Apex and Future Methods is a pilot
                or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot
                Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/?_ga=2.247987783.1372150065.1709219475-629000709.1639001992). Use of this pilot
                or beta service is at the Customer's sole discretion.
:::

## Elastic Limits Overview

:::tip Important
Elastic limits for asynchronous Apex jobs (beta) applies to only
                Queueable Apex and future methods in production and demo orgs. Batch Apex and
                scheduled jobs currently remain capped at the rolling 24-hour asynchronous job
                limit.
:::

If you enable the “Use elastic limits for asynchronous Apex jobs (Beta)” setting, you can enqueue Queueable Apex and future method jobs up to an increased elastic asynchronous job limit. This elastic limit is the org’s rolling 24-hour asynchronous job limit plus either the org’s licensed rolling 24-hour asynchronous job limit (defined as 250,000 jobs or 200 times the number of applicable user licenses, whichever is greater) or 10 million jobs, whichever is less.

In other words, the `DailyAsyncApexElasticExecutions` limit is calculated according to this formula:

```plain
// DailyAsyncApexElasticExecutions limit calculation (pseudocode)
DailyAsyncApexElasticExecutions = DailyAsyncApexExecutions + min(licensed DailyAsyncApexExecutions, 10000000)
```

For example, if an org’s rolling 24-hour asynchronous Apex job limit is 250,000 and the org’s licensed rolling 24-hour asynchronous job limit is 250,000, then the org’s elastic limit is 500,000 jobs (250,000 + 250,000). However, if an org’s rolling 24-hour asynchronous Apex job limit is 12 million and the org’s licensed rolling 24-hour asynchronous job limit is 12 million, then the org’s elastic limit is 22 million jobs (12 million + 10 million).

If an org reaches both the rolling 24-hour asynchronous Apex job limit and the elastic asynchronous job limit, exceptions are thrown for enqueued jobs that exceed the elastic limit.

If the number of asynchronous Apex jobs processed over a rolling 24-hour period exceeds the daily limit, Salesforce processes any additional enqueued asynchronous jobs at a throttled rate of one concurrent job per asynchronous Apex type. Processing resumes the regular, non-throttled concurrency rate only after the number of executed asynchronous jobs in the past 24 hours falls below the daily limit.

## Enable Elastic Limits

To enable elastic limits for asynchronous Apex:

1.  In Setup, in the Quick Find box, enter Apex Settings, and then select **Apex Settings**.
2.  Select **Use elastic limits for asynchronous Apex jobs (Beta)**.
3.  Save your changes.

## Monitor Asynchronous Job Usage

To check your asynchronous job usage against the daily and elastic limits, see the Apex Jobs page in Setup. A banner shows the number of asynchronous jobs processed in the past 24 hours, along with the org’s daily and elastic limits. It also indicates whether asynchronous processing is currently being throttled.

![The Percent of Asynchronous Apex Used banner on the Apex Jobs page when the org reaches its licensed daily limit.](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapex_elastic_async_limits_overage_dev_doc.png&folder=apexcode)

You can also use these methods on the [`OrgLimits`](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_class_System_OrgLimits.htm) class to check asynchronous job usage.

```apex
// Map of OrgLimit instances
MapString,System.OrgLimit> limitsMap = OrgLimits.getMap();

// Daily Limit Methods
System.OrgLimit asyncApexDailyLimit = limitsMap.get('DailyAsyncApexExecutions');
System.debug('Limit Name: ' + asyncApexDailyLimit.getName());

// The total async jobs enqueued in the past 24 hours.
// Gives the same value as asyncApexElasticLimit.getValue()
System.debug('Usage Value: ' + asyncApexDailyLimit.getValue());

// The daily async job limit 
System.debug('Maximum Limit: ' + asyncApexRequestsLimit.getLimit());

// -------------------------------------------------

// Elastic Limit Methods
System.OrgLimit asyncApexElasticLimit = limitsMap.get('DailyAsyncApexElasticExecutions');
System.debug('Limit Name: ' + asyncApexElasticLimit.getName());

// The total async jobs enqueued in the past 24 hours. 
// Gives the same value as the asyncApexDailyLimit.getValue() 
System.debug('Usage Value: ' + asyncApexElasticLimit.getValue()); 

// The sum of the daily limit and the additional jobs allowed up to the elastic limit
System.debug('Maximum Limit: ' + asyncApexElasticLimit.getLimit());
```

For example, let’s say an org’s rolling 24-hour limit is 400,000 asynchronous jobs, and it enqueues 700,000 asynchronous jobs within a 24-hour period. Here’s the org’s `DailyAsyncApexExecutions` and `DailyAsyncApexElasticExecutions` OrgLimits instance values.

```apex
// Example Org Limits for Async Jobs

// Daily Limit Methods
Limit Name: DailyAsyncApexExecutions
Usage Value: 700000
Maximum Limit: 400000

// Elastic Limit Methods
Limit Name: DailyAsyncApexElasticExecutions
Usage Value: 700000
Maximum Limit: 800000
```

When you use the `OrgLimits` class, keep these considerations in mind.

-   If the “Use elastic limits for asynchronous Apex jobs (Beta)” setting isn’t enabled, the `OrgLimits.getMap()` method doesn’t return a `DailyAsyncApexElasticExecutions` key-value pair.
-   The `getValue()` method returns the total number of asynchronous jobs *enqueued* over the last 24 hours, not the number *executed*. Because asynchronous jobs are throttled only when actual executions exceed the rolling 24-hour limit, the enqueued jobs count may surpass the rolling 24-hour limit when asynchronous jobs are still being processed at the regular concurrency rate.
