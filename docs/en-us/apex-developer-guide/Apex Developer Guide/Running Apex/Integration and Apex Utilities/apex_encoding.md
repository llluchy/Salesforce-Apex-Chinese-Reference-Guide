---
doc_id: "apex_encoding"
---

# Encoding Your Data

You can encode and decode URLs and convert strings to hexadecimal format by using the methods provided by the `EncodingUtil` class.

This example shows how to URL encode a timestamp value in UTF-8 by calling `urlEncode`.

```apex
DateTime d = System.now();
String timestamp = ''+ d.year() + '-' +
    d.month() + '-' +
    d.day() + '\'T\'' +
    d.hour() + ':' +
    d.minute() + ':' +
    d.second() + '.' +
    d.millisecond() + '\'Z\'';
System.debug(timestamp);
String urlEncodedTimestamp = EncodingUtil.urlEncode(timestamp, 'UTF-8');
System.debug(urlEncodedTimestamp);
```

This next example shows how to use `convertToHex` to compute a client response for HTTP Digest Authentication (RFC2617).

```apex
@isTest
private class SampleTest {
   static testmethod void testConvertToHex() {
      String myData = 'A Test String';
      Blob hash = Crypto.generateDigest('SHA1',Blob.valueOf(myData));
      String hexDigest = EncodingUtil.convertToHex(hash);
      System.debug(hexDigest);  
    } 
}
```

## See Also

- [Apex Reference Guide: EncodingUtil Class](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm)
