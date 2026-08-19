---
doc_id: "apex_classes_pattern_and_matcher_regions"
---

# Using Regions

A Matcher object finds matches in a subset of its input string called a **region**. The default region for a Matcher object is always the entirety of the input string. However, you can change the start and end points of a region by using the `region` method, and you can query the region's end points by using the `regionStart` and `regionEnd` methods.

The `region` method requires both a start and an end value. The following examples show how to set one value without setting the other.

## Set the start of the region explicitly; leave end unchanged.

```apex
MyMatcher.region(start, MyMatcher.regionEnd());
```

## Leave start unchanged; set the end of the region explicitly.

```apex
MyMatcher.region(MyMatcher.regionStart(), end);
```

## Reset start to the default; set the end of the region explicitly.

```apex
MyMatcher.region(0, end);
```
