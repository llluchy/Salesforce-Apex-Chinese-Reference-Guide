---
doc_id: "apex_ref_guide"
---

# Apex Reference Guide

Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Salesforce Platform server, in conjunction with calls to the API. This reference guide includes built-in Apex classes, interfaces, enums, and exceptions, grouped by namespace. It also includes Apex DML statements to insert, update, merge, delete, and restore data in Salesforce.

For information on the Apex development process, see [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dev_guide.htm "HTML (New Window)"). 

:::tip Note
In API version 51.0 and earlier, Apex Reference information was included in
                the Apex Developer Guide in the "Apex Language Reference" section.
:::

Keep these guidelines in mind regarding API version usage:

-   Salesforce strongly recommends that you use the latest available API version.
-   If you can't upgrade to the latest version yet, use API versions released in the past three years, for improved performance, security, and compatibility.
-   To reduce complexity, consolidate your Apex codebase to use the minimal number of API versions, ideally, just one API version.

For a non-exhaustive list of major Apex behavior changes across API versions, organized by version number, see [Apex Versioned Behavior Changes](atlas.en-us.apexref.meta/apexref/versioned_behavior_changes.htm "This document includes major Apex behavior changes across API versions, organized by version number for easy lookup. It isn’t an exhaustive list of all versioned Apex behavior. For example, this compilation excludes versioned changes to Connect in Apex and classes in the ConnectApi namespace.").

## See Also

- [Apex Release Notes](atlas.en-us.apexref.meta/apexref/apex_releasenotes.htm)
- [Apex DML Operations](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_section)
- [ApexPages Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)
- [AppLauncher Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_applauncher.htm)
- [Approval Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm)
- [Auth Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- [Cache Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm)
- [Canvas Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Canvas.htm)
- [ChatterAnswers Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ChatterAnswers.htm)
- [CommerceBuyGrp Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceBuyGrp.htm)
- [CommerceExtension Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm)
- [CommerceOrders Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_commerceorders.htm)
- [CommercePayments Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- [CommerceTax Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)
- [ComplianceMgmt Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_compliancemgmt.htm)
- [Compression Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm)
- [ConnectApi Namespace](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- [Context Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_context.htm)
- [Database Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- [Datacloud Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm)
- [DataRetrieval Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_DataRetrieval.htm)
- [DataSource Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- [DataWeave Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_dataweave.htm)
- [Dom Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm)
- [embeddedai Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_embeddedai.htm)
- [EventBus Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- [ExternalService Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ExternalService.htm)
- [Flow Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Flow.htm)
- [Flowtesting Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_flowtesting.htm)
- [flowuiruntime Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_flowuiruntime.htm)
- [FormulaEval Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm)
- [fsccashflow Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_fsccashflow.htm)
- [Functions Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm)
- [ise_bots_apex Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ise_bots_apex.htm)
- [IssueCreditMemo Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_issuecreditmemo.htm)
- [ind_mfg_sample_mgmt_apex Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ind_mfg_sample_mgmt_apex.htm)
- [industriesNlpSvc](atlas.en-us.apexref.meta/apexref/apex_namespace_industriesNlpSvc.htm)
- [IndustriesDigitalLending Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_industriesDigitalLending.htm)
- [Invocable Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm)
- [InvoiceWriteOff Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_invoicewriteoff.htm)
- [IsvPartners Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_IsvPartners.htm)
- [KbManagement Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_KbManagement.htm)
- [LxScheduler Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- [Messaging Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- [Metadata Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- [PlaceQuote Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_placequote.htm)
- [Pref_center Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- [Process Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm)
- [QuickAction Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- [renew_assets_summary Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_renew_assets_summary.htm)
- [Reports Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- [RevSignaling Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_RevSignaling.htm)
- [RevSalesTrxn Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_revsalestrxn.htm)
- [RichMessaging Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- [RulesAppln Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_rulesappln.htm)
- [runtime_industries_cpq Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_runtime_industries_cpq.htm)
- [runtime_industries_insurance Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_runtime_industries_insurance.htm)
- [Schema Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- [Search Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)
- [setup_flow_performance Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_setup_flow_performance.htm)
- [Sfc Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Sfc.htm)
- [Sfdc_Checkout Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm)
- [Sfdc_Enablement Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm)
- [sfdc_surveys Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_surveys.htm)
- [sfdw Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdw.htm)
- [sfsqlquery Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfsqlquery.htm)
- [Site Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Site.htm)
- [Slack Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Slack.htm)
- [Support Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Support.htm)
- [System Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- [TerritoryMgmt Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_TerritoryMgmt.htm)
- [TxnSecurity Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm)
- [UserProvisioning Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_UserProvisioning.htm)
- [VisualEditor Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm)
- [Wave Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm)
- [Appendices](atlas.en-us.apexref.meta/apexref/apex_appendices.htm)
