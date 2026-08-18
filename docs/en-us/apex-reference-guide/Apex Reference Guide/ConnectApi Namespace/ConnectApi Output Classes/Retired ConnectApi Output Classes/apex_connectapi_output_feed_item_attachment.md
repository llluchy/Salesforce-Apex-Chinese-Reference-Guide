---
doc_id: "apex_connectapi_output_feed_item_attachment"
---

# ConnectApi.FeedItemAttachment

Feed item attachment.

:::tip Important
This class isn’t available in version 32.0 and later. In version 32.0
        and later, [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm) is used.
:::

This class is abstract.

Subclasses:

-   [ConnectApi.ApprovalAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_attach.htm "Attach an approval to a feed item.")
-   [ConnectApi.BasicTemplateAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_basic_template.htm "Attachments in feed items with type BasicTemplate.")
-   [ConnectApi.CanvasTemplateAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_canvas_template.htm "Attachments in feed items with type CanvasPost.")
-   [Connectapi.EmailMessage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_emailMessage.htm "Email message from a case.")
-   [ConnectApi.CaseComment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment.htm "Attachments in feed items with type CaseCommentPost.")
-   [ConnectApi.ContentAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_attachment.htm "Attachments in feed items with the type ContentPost.")
-   [ConnectApi.DashboardComponentAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dashboard.htm "Attachments in feed items with type DashboardSnapshot.")
-   [ConnectApi.FeedPoll](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FeedPoll.htm "Attachment of ConnectApi.FeedItem objects where the type property is PollPost.")
-   [ConnectApi.LinkAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_attachment.htm "Link attached to a feed item.")
-   [ConnectApi.RecordSnapshotAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot_attachment.htm "Fields of a record at the point in time when the record was created.")
-   [ConnectApi.TrackedChangeAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_TrackedChangeAttachment.htm "Tracked change attachment to a feed item.")

Message segments in a feed item are typed as `ConnectApi.MessageSegment`. Feed item capabilities are typed as `ConnectApi.FeedItemCapability`. Record fields are typed as `ConnectApi.AbstractRecordField`. These classes are all abstract and have several concrete subclasses. At runtime you can use `instanceof` to check the concrete types of these objects and then safely proceed with the corresponding downcast. When you downcast, you must have a default case that handles unknown subclasses.

:::tip Important
The composition of a feed can change between releases. Write your
                code to handle instances of unknown subclasses.
:::
