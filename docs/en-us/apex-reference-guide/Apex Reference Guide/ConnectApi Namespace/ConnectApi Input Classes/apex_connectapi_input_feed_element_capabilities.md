---
doc_id: "apex_connectapi_input_feed_element_capabilities"
---

# ConnectApi.FeedElementCapabilitiesInput

A container for all capabilities that can be included when creating a feed element.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `associated​Actions` | `ConnectApi.​AssociatedActions​CapabilityInput` | Describes actions added to the feed element. | Optional | 33.0 |
| `bookmarks` | `ConnectApi.​BookmarksCapability​Input` | Describes bookmarks added to the feed element. | Optional | 32.0 |
| `canvas` | `ConnectApi.​CanvasCapability​Input` | Describes a canvas app added to the feed element. | Optional | 32.0 |
| `content` | `ConnectApi.​ContentCapability​Input` | Describes content added to the feed element. **Important:** This class isn’t available for feed posts in version 36.0 and later. In version 36.0 and later, use [ConnectApi.FilesCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element."). | Optional | 32.0–35.0 |
| `directMessage` | `ConnectApi.​DirectMessage​CapabilityInput` | Describes the direct message. | Optional | 39.0 |
| `extensions` | `ConnectApi.​ExtensionsCapability​Input` | Describes the extensions associated with the feed element. | Optional | 40.0 |
| `feedEntityShare` | `ConnectApi.​FeedEntityShare​CapabilityInput` | Describes the feed entity shared with the feed element. | Optional | 39.0 |
| `files` | `ConnectApi.​FilesCapability​Input` | Describes files attached to the feed element. | Optional | 36.0 |
| `link` | `ConnectApi.​LinkCapability​Input` | Describes a link added to the feed element. | Optional | 32.0 |
| `poll` | `ConnectApi.​PollCapability​Input` | Describes a poll added to the feed element. | Optional | 32.0 |
| `questionAnd​Answers` | `ConnectApi.​QuestionAndAnswers​CapabilityInput` | Describes a question and answer capability added to the feed element. | Optional | 32.0 |
| `status` | `ConnectApi.​StatusCapability​Input` | Describes the status of the feed element. | Optional | 44.0 |
| `topics` | `ConnectApi.​TopicsCapability​Input` | Describes topics assigned to the feed element. | Optional | 38.0 |

## See Also

- [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm)
