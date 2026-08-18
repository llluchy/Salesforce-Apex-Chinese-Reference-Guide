---
doc_id: "apex_connectapi_input_update_quote"
---

# ConnectApi.updateQuoteInput

Input representation for updating the quote status and optionally creating an associated note.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| `note` | `ConnectApi.CommerceNoteInputRepresentation` | Note to be added to the quote. | Optional | 67.0 |
| `status` | String | New status to apply to the quote. If not specified, the existing status remains unchanged.
Valid values:

-   `Draft`—Renogiate the quote.
-   `Denied`—Decline the quote.

 | Required | 67.0 |

## See Also

- [updateQuote(webstoreId, quoteId, updateQuoteInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceQuotes_static_methods.htm#apex_ConnectAPI_CommerceQuotes_updateQuote_2)

-   [ConnectApi.UpdateQuoteOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_update_quote_output.htm "Representation of the quote update response.")
