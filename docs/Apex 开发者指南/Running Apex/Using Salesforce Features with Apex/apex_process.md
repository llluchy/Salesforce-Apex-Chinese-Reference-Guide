---
doc_id: "apex_process"
---

# Approval Processing

An approval process automates how records are approved in Salesforce. An approval process specifies each step of approval, including from whom to request approval and what to do at each point of the process.

-   Use the Apex process classes to create approval requests and process the results of those requests:
    -   [ProcessRequest Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ProcessRequest.htm)
    -   [ProcessResult Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ProcessResult.htm)
    -   [ProcessSubmitRequest Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ProcessSubmitRequest.htm)
    -   [ProcessWorkItemRequest Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm)
-   Use the `Approval.process` method to submit an approval request and approve or reject existing approval requests. For more information, see [Approval Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_methods_system_approval.htm).

:::tip Note
The `process` method counts against the DML limits
      for your organization. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm).
:::

For more information about approval processes, see “Set Up an Approval Process” in the Salesforce online help.

## See Also

- [Apex Approval Processing Example](atlas.en-us.apexcode.meta/apexcode/apex_process_example.htm)
