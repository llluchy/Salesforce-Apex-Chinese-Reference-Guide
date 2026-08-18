---
doc_id: "apex_methods_system_string"
---

# String Class

Contains methods for the String primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

All string method definitions adhere to the [Unicode Standard](https://www.unicode.org/standard/standard.html "HTML (New Window)"). For example, Unicode Roman numerals are classified as a type of number form, not a type of digit. Therefore, string methods such as `isAlphanumeric()` return `false` if used on a String that contains a Roman numeral. For Unicode classifications, see the [Unicode Character Code Charts](https://www.unicode.org/charts/ "HTML (New Window)").

For more information on Strings, see [String Data Type](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## String Methods

The following are methods for `String`.

## See Also

- [abbreviate(maxWidth)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_abbreviate)
- [abbreviate(maxWidth, offset)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_abbreviate_2)
- [capitalize()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_capitalize)
- [center(size)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_center)
- [center(size, paddingString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_center_2)
- [charAt(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_charAt)
- [codePointAt(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_codePointAt)
- [codePointBefore(index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_codePointBefore)
- [codePointCount(beginIndex, endIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_codePointCount)
- [compareTo(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_compareTo)
- [contains(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_contains)
- [containsAny(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsAny)
- [containsIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsIgnoreCase)
- [containsNone(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsNone)
- [containsOnly(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsOnly)
- [containsWhitespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_containsWhitespace)
- [countMatches(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_countMatches)
- [deleteWhitespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_deleteWhitespace)
- [difference(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_difference)
- [endsWith(suffix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_endsWith)
- [endsWithIgnoreCase(suffix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_endsWithIgnoreCase)
- [equals(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_equals)
- [equals(stringOrId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_equals_2)
- [equalsIgnoreCase(secondString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_equalsIgnoreCase)
- [escapeCsv()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeCsv)
- [escapeEcmaScript()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeEcmaScript)
- [escapeHtml3()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeHtml3)
- [escapeHtml4()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeHtml4)
- [escapeJava()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeJava)
- [escapeSingleQuotes(stringToEscape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeSingleQuotes)
- [escapeUnicode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeUnicode)
- [escapeXml()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_escapeXml)
- [format(stringToFormat, formattingArguments)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_format)
- [fromCharArray(charArray)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_fromCharArray)
- [getChars()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getChars)
- [getCommonPrefix(strings)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getCommonPrefix)
- [getLevenshteinDistance(stringToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getLevenshteinDistance)
- [getLevenshteinDistance(stringToCompare, threshold)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_getLevenshteinDistance_2)
- [hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_hashCode)
- [indexOf(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOf)
- [indexOf(substring, index)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOf_2)
- [indexOfAny(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfAny)
- [indexOfAnyBut(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfAnyBut)
- [indexOfChar(character)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfChar)
- [indexOfChar(character, startIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfChar_2)
- [indexOfDifference(stringToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfDifference)
- [indexOfIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfIgnoreCase)
- [indexOfIgnoreCase(substring, startPosition)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_indexOfIgnoreCase_2)
- [isAllLowerCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAllLowerCase)
- [isAllUpperCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAllUpperCase)
- [isAlpha()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlpha)
- [isAlphaSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlphaSpace)
- [isAlphanumeric()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlphanumeric)
- [isAlphanumericSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAlphanumericSpace)
- [isAsciiPrintable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isAsciiPrintable)
- [isBlank(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isBlank)
- [isEmpty(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isEmpty)
- [isNotBlank(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNotBlank)
- [isNotEmpty(inputString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNotEmpty)
- [isNumeric()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNumeric)
- [isNumericSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isNumericSpace)
- [isWhitespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_isWhitespace)
- [join(iterableObj, separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_join)
- [lastIndexOf(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOf)
- [lastIndexOf(substring, endPosition)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOf_2)
- [lastIndexOfChar(character)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfChar)
- [lastIndexOfChar(character, endIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfChar_2)
- [lastIndexOfIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfIgnoreCase)
- [lastIndexOfIgnoreCase(substring, endPosition)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_lastIndexOfIgnoreCase_2)
- [left(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_left)
- [leftPad(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_leftPad)
- [leftPad(length, padStr)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#unique_1496511020)
- [length()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_length)
- [mid(startIndex, length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_mid)
- [normalizeSpace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_normalizeSpace)
- [offsetByCodePoints(index, codePointOffset)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_offsetByCodePoints)
- [remove(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_remove)
- [removeEnd(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeEnd)
- [removeEndIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeEndIgnoreCase)
- [removeStart(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeStart)
- [removeStartIgnoreCase(substring)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_removeStartIgnoreCase)
- [repeat(numberOfTimes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_repeat)
- [repeat(separator, numberOfTimes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_repeat_2)
- [replace(target, replacement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_replace)
- [replaceAll(regExp, replacement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_replaceAll)
- [replaceFirst(regExp, replacement)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_replaceFirst)
- [reverse()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_reverse)
- [right(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_right)
- [rightPad(length)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_rightPad)
- [rightPad(length, padStr)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#unique_2108179977)
- [split(regExp)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_split)
- [split(regExp, limit)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_split_2)
- [splitByCharacterType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_splitByCharacterType)
- [splitByCharacterTypeCamelCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_splitByCharacterTypeCamelCase)
- [startsWith(prefix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_startsWith)
- [startsWithIgnoreCase(prefix)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_startsWithIgnoreCase)
- [stripHtmlTags()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_stripHtmlTags)
- [substring(startIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substring)
- [substring(startIndex, endIndex)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substring_2)
- [substringAfter(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringAfter)
- [substringAfterLast(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringAfterLast)
- [substringBefore(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBefore)
- [substringBeforeLast(separator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBeforeLast)
- [substringBetween(tag)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBetween)
- [substringBetween(open, close)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_substringBetween_2)
- [swapCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_swapCase)
- [toLowerCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toLowerCase)
- [toLowerCase(locale)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toLowerCase_2)
- [toUpperCase()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toUpperCase)
- [toUpperCase(locale)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_toUpperCase_2)
- [template(valueMap)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_template)
- [trim()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_trim)
- [uncapitalize()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_uncapitalize)
- [unescapeCsv()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeCsv)
- [unescapeEcmaScript()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeEcmaScript)
- [unescapeHtml3()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeHtml3)
- [unescapeHtml4()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeHtml4)
- [unescapeJava()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeJava)
- [unescapeUnicode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeUnicode)
- [unescapeXml()](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_unescapeXml)
- [valueOf(dateToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf)
- [valueOf(datetimeToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_2)
- [valueOf(decimalToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_3)
- [valueOf(doubleToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_4)
- [valueOf(integerToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_5)
- [valueOf(longToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_6)
- [valueOf(toConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOf_7)
- [valueOfGmt(datetimeToConvert)](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_valueOfGmt)

### abbreviate(maxWidth)

Returns an abbreviated version of the String, of the specified length and with ellipses appended if the current String is longer than the specified length; otherwise, returns the original String without ellipses.

#### Signature

`public String abbreviate(Integer maxWidth)`

#### Parameters

-   **maxWidth**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    If maxWidth is less than four, this method throws a run-time exception.
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s = 'Hello Maximillian';
String s2 = s.abbreviate(8);
System.assertEquals('Hello...', s2);
System.assertEquals(8, s2.length());
```

### abbreviate(maxWidth, offset)

Returns an abbreviated version of the String, starting at the specified character offset and of the specified length. The returned String has ellipses appended at the start and the end if characters have been removed at these locations.

#### Signature

`public String abbreviate(Integer maxWidth, Integer offset)`

#### Parameters

-   **maxWidth**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    Note that the offset is not necessarily the leftmost character in the returned String or the first character following the ellipses, but it appears somewhere in the result.  Regardless, `abbreviate` won’t return a String of length greater than maxWidth.If maxWidth is too small, this method throws a run-time exception.
    
-   **offset**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s = 'Hello Maximillian';
// Start at M
String s2 = s.abbreviate(9,6);
System.assertEquals('...Max...', s2);
System.assertEquals(9, s2.length());
```

### capitalize()

Returns the current String with the first letter changed to title case.

#### Signature

`public String capitalize()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is based on the [`Character.toTitleCase(char)`](http://docs.oracle.com/javase/6/docs/api/java/lang/Character.html?is-external=true#toTitleCase%28char%29 "HTML (New Window)") Java method.

#### Example

```apex
String s = 'hello maximillian';
String s2 = s.capitalize();
System.assertEquals('Hello maximillian', s2);
```

### center(size)

Returns a version of the current String of the specified size padded with spaces on the left and right, so that it appears in the center. If the specified size is smaller than the current String size, the entire String is returned without added spaces.

#### Signature

`public String center(Integer size)`

#### Parameters

-   **size**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s = 'hello';
String s2 = s.center(9);
System.assertEquals(
   '  hello  ',
   s2);
```

### center(size, paddingString)

Returns a version of the current String of the specified size padded with the specified String on the left and right, so that it appears in the center. If the specified size is smaller than the current String size, the entire String is returned without padding.

#### Signature

`public String center(Integer size, String paddingString)`

#### Parameters

-   **size**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **paddingString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s = 'hello';
String s2 = s.center(9, '-');
System.assertEquals('--hello--', s2);
```

### charAt(index)

Returns the value of the character at the specified index.

#### Signature

`public Integer charAt(Integer index)`

#### Parameters

-   **index**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index of the character to get the value of.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The integer value of the character.

#### Usage

The `charAt` method returns the value of the character pointed to by the specified index. If the index points to the beginning of a surrogate pair (the high-surrogate code point), this method returns only the high-surrogate code point. To return the supplementary code point corresponding to a surrogate pair, call `codePointAt` instead.

#### Example

This example gets the value of the first character at index 0.

```apex
String str = 'Ω is Omega.';
System.assertEquals(937, str.charAt(0));
```

This example shows the difference between `charAt` and `codePointAt`. The example calls these methods on escaped supplementary Unicode characters. `charAt(0)` returns the high surrogate value, which corresponds to \\uD835. `codePointAt(0)` returns the value for the entire surrogate pair.

```apex
String str = '\uD835\uDD0A';
System.assertEquals(55349, str.charAt(0), 
    'charAt(0) didn\'t return the high surrogate.');
System.assertEquals(120074, str.codePointAt(0),
    'codePointAt(0) didn\'t return the entire two-character supplementary value.');
```

### codePointAt(index)

Returns the Unicode code point value at the specified index.

#### Signature

`public Integer codePointAt(Integer index)`

#### Parameters

-   **index**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index of the characters (Unicode code units) in the string. The index range is from zero to the string length minus one.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The Unicode code point value at the specified index.

#### Usage

If the index points to the beginning of a surrogate pair (the high-surrogate code point), and the character value at the following index points to the low-surrogate code point, this method returns the supplementary code point corresponding to this surrogate pair. Otherwise, this method returns the character value at the given index.

For more information on Unicode and surrogate pairs, see [The Unicode Consortium](http://www.unicode.org "HTML (New Window)").

#### Example

This example gets the code point value of the first character at index 0, which is the escaped Omega character. Also, the example gets the code point at index 20, which corresponds to the escaped supplementary Unicode characters (a pair of characters). Finally, it verifies that the escaped and unescaped forms of Omega have the same code point values.

The supplementary characters in this example (\\\\uD835\\\\uDD0A) correspond to mathematical fraktur capital G: ![Mathemtical Fraktur Capital G symbol](/docs/resources/img/en-us/262.0?doc_id=dev_guides%2Fapex%2Fimages%2FfrakturG.png&folder=apexref)

```apex
String str = '\u03A9 is Ω (Omega), and \uD835\uDD0A ' + 
    ' is Fraktur Capital G.';
System.assertEquals(937, str.codePointAt(0));
System.assertEquals(120074, str.codePointAt(20));
// Escaped or unescaped forms of the same character have the same code point
System.assertEquals(str.codePointAt(0), str.codePointAt(5));
```

### codePointBefore(index)

Returns the Unicode code point value that occurs before the specified index.

#### Signature

`public Integer codePointBefore(Integer index)`

#### Parameters

-   **index**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index before the Unicode code point that is to be returned. The index range is from one to the string length.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The character or Unicode code point value that occurs before the specified index.

#### Usage

If the character value at `index-1` is the low-surrogate code point, and `index-2` is not negative and the character at this index location is the high-surrogate code point, this method returns the supplementary code point corresponding to this surrogate pair. If the character value at `index-1` is an unpaired low-surrogate or high-surrogate code point, the surrogate value is returned.

For more information on Unicode and surrogate pairs, see [The Unicode Consortium](http://www.unicode.org "HTML (New Window)").

#### Example

This example gets the code point value of the first character (before index 1), which is the escaped Omega character. Also, the example gets the code point at index 20, which corresponds to the escaped supplementary characters (the two characters before index 22).

```apex
String str = '\u03A9 is Ω (Omega), and \uD835\uDD0A ' + 
    ' is Fraktur Capital G.';
System.assertEquals(937, str.codePointBefore(1));
System.assertEquals(120074, str.codePointBefore(22));
```

### codePointCount(beginIndex, endIndex)

Returns the number of Unicode code points within the specified text range.

#### Signature

`public Integer codePointCount(Integer beginIndex, Integer endIndex)`

#### Parameters

-   **beginIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index of the first character in the range.
    
-   **endIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index after the last character in the range.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of Unicode code points within the specified range.

#### Usage

The specified range begins at beginIndex and ends at `endIndex—1`. Unpaired surrogates within the text range count as one code point each.

#### Example

This example writes the count of code points in a substring that contains an escaped Unicode character and another substring that contains Unicode supplementary characters, which count as one code point.

```apex
String str = '\u03A9 and \uD835\uDD0A characters.';
System.debug('Count of code points for ' + str.substring(0,1) 
             + ': ' + str.codePointCount(0,1));
System.debug('Count of code points for ' + str.substring(6,8) 
             + ': ' + str.codePointCount(6,8));

// Output:
// Count of code points for Ω: 1
// Count of code points for 𝔊: 1
```

### compareTo(secondString)

Compares two strings lexicographically, based on the Unicode value of each character in the Strings.

#### Signature

`public Integer compareTo(String secondString)`

#### Parameters

-   **secondString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The result is:

-   A negative Integer if the String that called the method lexicographically precedes secondString
-   A positive Integer if the String that called the method lexicographically follows compsecondStringString
-   Zero if the Strings are equal

If there is no index position at which the Strings differ, then the shorter String lexicographically precedes the longer String.

Note that this method returns 0 whenever the `equals` method returns true.

#### Example

```apex
String myString1 = 'abcde';
String myString2 = 'abcd';
Integer result = 
   myString1.compareTo(myString2);
System.assertEquals(result, 1);
```

### contains(substring)

Returns `true` if and only if the String that called the method contains the specified sequence of characters in substring.

#### Signature

`public Boolean contains(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String myString1 = 'abcde';
String myString2 = 'abcd';
Boolean result = 
   myString1.contains(myString2);
System.assertEquals(result, true);
```

### containsAny(inputString)

Returns `true` if the current String contains any of the characters in the specified String; otherwise, returns `false`.

#### Signature

`public Boolean containsAny(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s = 'hello';
Boolean b1 = s.containsAny('hx');
Boolean b2 = s.containsAny('x');
System.assertEquals(true, b1);
System.assertEquals(false, b2);
```

### containsIgnoreCase(substring)

Returns `true` if the current String contains the specified sequence of characters without regard to case; otherwise, returns `false`.

#### Signature

`public Boolean containsIgnoreCase(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s = 'hello';
Boolean b = s.containsIgnoreCase('HE');
System.assertEquals(
   true,
   b);
```

### containsNone(inputString)

Returns `true` if the current String doesn’t contain any of the characters in the specified String; otherwise, returns `false`.

#### Signature

`public Boolean containsNone(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    If inputString is an empty string or the current String is empty, this method returns `true`. If inputString is null, this method returns a run-time exception.
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s1 = 'abcde';
System.assert(s1.containsNone('fg'));
```

### containsOnly(inputString)

Returns `true` if the current String contains characters only from the specified sequence of characters and not any other characters; otherwise, returns `false`.

#### Signature

`public Boolean containsOnly(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s1 = 'abba';
String s2 = 'abba xyz';
Boolean b1 = 
   s1.containsOnly('abcd');
System.assertEquals(
   true,
   b1);
Boolean b2 = 
   s2.containsOnly('abcd');
System.assertEquals(
   false,
   b2);
```

### containsWhitespace()

Returns `true` if the current String contains any white space characters; otherwise, returns `false`.

#### Signature

`public Boolean containsWhitespace()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s = 'Hello Jane';
System.assert(s.containsWhitespace()); //true
s = 'HelloJane ';
System.assert(s.containsWhitespace()); //true
s = ' HelloJane';
System.assert(s.containsWhitespace()); //true
s = 'HelloJane';
System.assert(!s.containsWhitespace()); //false
```

### countMatches(substring)

Returns the number of times the specified substring occurs in the current String.

#### Signature

`public Integer countMatches(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String s = 'Hello Jane';
System.assertEquals(1, s.countMatches('Hello'));
s = 'Hello Hello';
System.assertEquals(2, s.countMatches('Hello'));
s = 'Hello hello';
System.assertEquals(1, s.countMatches('Hello'));
```

### deleteWhitespace()

Returns a version of the current String with all white space characters removed.

#### Signature

`public String deleteWhitespace()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = ' Hello Jane ';
String s2 = 'HelloJane';
System.assertEquals(s2, s1.deleteWhitespace());
```

### difference(secondString)

Returns the difference between the current String and the specified String.

#### Signature

`public String difference(String secondString)`

#### Parameters

-   **secondString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    If secondString is an empty string, this method returns an empty string.If secondString is null, this method throws a run-time exception.
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s = 'Hello Jane';
String d1 = 
   s.difference('Hello Max');
System.assertEquals(
   'Max',
   d1);
String d2 = 
   s.difference('Goodbye');
System.assertEquals(
   'Goodbye',
   d2);
```

### endsWith(suffix)

Returns `true` if the String that called the method ends with the specified suffix.

#### Signature

`public Boolean endsWith(String suffix)`

#### Parameters

-   **suffix**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s = 'Hello Jason';
System.assert(s.endsWith('Jason'));
```

### endsWithIgnoreCase(suffix)

Returns `true` if the current String ends with the specified suffix; otherwise, returns `false`.

#### Signature

`public Boolean endsWithIgnoreCase(String suffix)`

#### Parameters

-   **suffix**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s = 'Hello Jason';
System.assert(s.endsWithIgnoreCase('jason'));
```

### equals(secondString)

Deprecated. This method is replaced by `equals(stringOrId)`. Returns `true` if the passed-in string is not null and represents the same binary sequence of characters as the current string. Use this method to perform case-sensitive comparisons.

#### Signature

`public Boolean equals(String secondString)`

#### Parameters

-   **secondString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method returns `true` when the `compareTo` method returns 0.

Use this method to perform case-sensitive comparisons. In contrast, the `==` operator performs case-insensitive string comparisons to match Apex semantics.

#### Example

```apex
String myString1 = 'abcde';
String myString2 = 'abcd';
Boolean result = myString1.equals(myString2);
System.assertEquals(result, false);
```

### equals(stringOrId)

Returns `true` if the passed-in object is not null and represents the same binary sequence of characters as the current string. Use this method to compare a string to an object that represents a string or an ID.

#### Signature

`public Boolean equals(Object stringOrId)`

#### Parameters

-   **stringOrId**:
    
    Type: Object
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If you compare ID values, the lengths of IDs don’t need to be equal. For example, if you compare a 15-character ID string to an object that represents the equivalent 18-character ID value, this method returns `true`. For more information about 15-character and 18-character IDs, see the [ID Data Type](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

Use this method to perform case-sensitive comparisons. In contrast, the `==` operator performs case-insensitive string comparisons to match Apex semantics.

#### Example

These examples show comparisons between different types of variables with both equal and unequal values. The examples also show how Apex automatically converts certain values before comparing them.

```apex
// Compare a string to an object containing a string
Object obj1 = 'abc';
String str = 'abc';
Boolean result1 = str.equals(obj1);
System.assertEquals(true, result1);

// Compare a string to an object containing a number
Integer obj2 = 100;
Boolean result2 = str.equals(obj2);
System.assertEquals(false, result2);

// Compare a string to an ID of the same length.
// 15-character ID
Id idValue15 = '001D000000Ju1zH';
// 15-character ID string value
String stringValue15 = '001D000000Ju1zH';
Boolean result3 = stringValue15.equals(IdValue15);
System.assertEquals(true, result3); 

// Compare two equal ID values of different lengths:
//  15-character ID and 18-character ID
Id idValue18 = '001D000000Ju1zHIAR';
Boolean result4 = stringValue15.equals(IdValue18);
System.assertEquals(true, result4);
```

### equalsIgnoreCase(secondString)

Returns `true` if the secondString isn’t null and represents the same sequence of characters as the String that called the method, ignoring case.

#### Signature

`public Boolean equalsIgnoreCase(String secondString)`

#### Parameters

-   **secondString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

The `String.equalsIgnoreCase()` method ignores the locale of the context user. If you want the string comparison to be performed according to the locale, use the `==` operator instead. The `String.equalsIgnoreCase()` method typically executes faster than the operator because the method ignores the locale.

#### Example

```apex
String myString1 = 'abcd';
String myString2 = 'ABCD';
Boolean result = 
myString1.equalsIgnoreCase(myString2);
System.assertEquals(result, true);
```

### escapeCsv()

Returns a String for a CSV column enclosed in double quotes, if required.

#### Signature

`public String escapeCsv()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the String contains a comma, newline or double quote, the returned String is enclosed in double quotes. Also, any double quote characters in the String are escaped with another double quote.

If the String doesn’t contain a comma, newline or double quote, it is returned unchanged.

#### Example

```apex
String s1 = 'Max1, "Max2"';
String s2 = s1.escapeCsv();
System.assertEquals('"Max1, ""Max2"""', s2);
```

### escapeEcmaScript()

Escapes the characters in the String using EcmaScript String rules.

#### Signature

`public String escapeEcmaScript()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The only difference between Apex strings and EcmaScript strings is that in EcmaScript, a single quote and forward-slash (/) are escaped.

#### Example

```apex
String s1 = '"grade": 3.9/4.0';
String s2 = s1.escapeEcmaScript();
System.debug(s2);
// Output is:
// \"grade\": 3.9\/4.0
System.assertEquals(
   '\\"grade\\": 3.9\\/4.0', 
    s2);
```

### escapeHtml3()

Escapes the characters in a String using HTML 3.0 entities.

#### Signature

`public String escapeHtml3()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 
   '""';
String s2 = 
   s1.escapeHtml3();
System.debug(s2);
// Output:
// "&lt;Black&amp;
// White&gt;"
```

### escapeHtml4()

Escapes the characters in a String using HTML 4.0 entities.

#### Signature

`public String escapeHtml4()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 
   '""';
String s2 = 
   s1.escapeHtml4();
System.debug(s2);
// Output:
// "&lt;Black&amp;
// White&gt;"
```

### escapeJava()

Returns a String whose characters are escaped using Java String rules. Characters escaped include quotes and control characters, such as tab, backslash, and carriage return characters.

#### Signature

`public String escapeJava()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The escaped string.

#### Example

```apex
// Input string contains quotation marks
String s = 'Company: "Salesforce.com"';
String escapedStr = s.escapeJava();
// Output string has the quotes escaped
System.assertEquals('Company: \\"Salesforce.com\\"', escapedStr);
```

### escapeSingleQuotes(stringToEscape)

Returns a String with the escape character (`\`) added before any single quotation mark (`'`) or backslash (`\`) in the String s.

#### Signature

`public static String escapeSingleQuotes(String stringToEscape)`

#### Parameters

-   **stringToEscape**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is useful when creating a dynamic SOQL statement to help prevent SOQL injection. See [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

#### Example

```apex
String s = '\'Hello Jason\'';
system.debug(s); // Outputs 'Hello Jason'
String escapedStr = String.escapeSingleQuotes(s);
system.debug(escapedStr); // Outputs \'Hello Jason\'

// In this assertEquals method, the first string is unescaped, 
// so each \ that precedes the ' and \ characters is removed.
// Therefore, the string is equal to the value of escapedStr, or \'Hello Jason\'. 
system.assertEquals('\\\'Hello Jason\\\'', escapedStr);
```

### escapeUnicode()

Returns a String whose Unicode characters are escaped to a Unicode escape sequence.

#### Signature

`public String escapeUnicode()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The escaped string.

#### Example

```apex
String s = 'De onde você é?';
String escapedStr = s.escapeUnicode();
System.assertEquals('De onde voc\\u00EA \\u00E9?', escapedStr);
```

### escapeXml()

Escapes the characters in a String using XML entities.

#### Signature

`public String escapeXml()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Supports only the five basic XML entities (gt, lt, quot, amp, apos). Does not support DTDs or external entities. Unicode characters greater than 0x7f are not escaped.

#### Example

```apex
String s1 = 
   '""';
String s2 = 
   s1.escapeXml();
System.debug(s2);
// Output:
// "&lt;Black&amp;
// White&gt;"
```

### format(stringToFormat, formattingArguments)

Treat the first argument as a pattern and return a string using the second argument for substitution and formatting. The substitution and formatting are the same as `apex:outputText` and the Java `MessageFormat` class. Non-string types in the second argument’s List are implicitly converted to strings, respecting the toString() method overrides that exist on the type.

#### Signature

`public static String format(String stringToFormat, List<Object> formattingArguments)`

#### Parameters

-   **stringToFormat**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **formattingArguments**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Versioned Behavior Changes

From version 51.0 and later, the `format()` method supports single quotes in the `stringToFormat` parameter and returns a formatted string using the `formattingArguments` parameter. In version 50.0 and earlier, single quotes weren’t supported.

#### Example

```apex
String template = '{0} was last updated {1}';
ListObject> parameters = new ListObject> {'Universal Containers', DateTime.newInstance(2018, 11, 15) };
String formatted = String.format(template, parameters);
System.debug ('Newly formatted string is:' + formatted);
```

### fromCharArray(charArray)

Returns a String from the values of the list of integers.

#### Signature

`public static String fromCharArray(List<Integer> charArray)`

#### Parameters

-   **charArray**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")\>
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
ListInteger> charArr= new Integer[]{74};
String convertedChar = String.fromCharArray(charArr);
System.assertEquals('J', convertedChar);
```

### getChars()

Returns an array of character values that represent the characters in this string.

#### Signature

`public List<Integer> getChars()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")\>

A list of integers, each corresponding to a character value in the string.

#### Example

This sample converts a string to a character array and then gets the first array element, which corresponds to the value of 'J'.

```apex
String str = 'Jane goes fishing.';
Integer[] chars = str.getChars();
// Get the value of 'J'
System.assertEquals(74, chars[0]);
```

#### Usage

If a "/" (slash) character is present in the string, `String.getChars()` unescapes it in the returned character array. This example uses the `String.escapeJava()` method to generate the desired value of "\\\\" in the returned string.

```plain
String doubleSlash = '\\' + '\\'; //doubleSlash is set to "\\"
System.debug(String.fromCharArray(doubleSlash.getChars()));  //Returns "\"
System.debug(String.fromCharArray(doubleSlash.escapeJava().getChars())); //Returns "\\”
```

### getCommonPrefix(strings)

Returns the initial sequence of characters as a String that is common to all the specified Strings.

#### Signature

`public static String getCommonPrefix(List<String> strings)`

#### Parameters

-   **strings**:
    
    Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](#apex_methods_system_string "Contains methods for the String primitive data type.")\>
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
ListString> ls = new ListString>{'SFDCApex', 'SFDCVisualforce'};
String prefix = String.getCommonPrefix(ls);
System.assertEquals('SFDC', prefix);
```

### getLevenshteinDistance(stringToCompare)

Returns the Levenshtein distance between the current String and the specified String.

#### Signature

`public Integer getLevenshteinDistance(String stringToCompare)`

#### Parameters

-   **stringToCompare**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The Levenshtein distance is the number of changes needed to change one String into another. Each change is a single character modification (deletion, insertion or substitution).

#### Example

```apex
String s = 'Hello Joe';
Integer i = s.getLevenshteinDistance('Hello Max');
System.assertEquals(3, i);
```

### getLevenshteinDistance(stringToCompare, threshold)

Returns the Levenshtein distance between the current String and the specified String if it is less than or equal than the given threshold; otherwise, returns -1.

#### Signature

`public Integer getLevenshteinDistance(String stringToCompare, Integer threshold)`

#### Parameters

-   **stringToCompare**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **threshold**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The Levenshtein distance is the number of changes needed to change one String into another. Each change is a single character modification (deletion, insertion or substitution).

Example:

In this example, the Levenshtein distance is 3, but the threshold argument is 2, which is less than the distance, so this method returns -1.

#### Example

```apex
String s = 'Hello Jane';
Integer i = s.getLevenshteinDistance('Hello Max', 2);
System.assertEquals(-1, i);
```

### hashCode()

Returns a hash code value for this string.

#### Signature

`public Integer hashCode()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

This value is based on the hash code computed by the Java [`String.hashCode`](http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#hashCode%28%29 "HTML (New Window)") counterpart method.

You can use this method to simplify the computation of a hash code for a custom type that contains String member variables. You can compute your type’s hash code value based on the hash code of each String variable. For example:

For more details about the use of hash code methods with custom types, see [Using Custom Types in Map Keys and Sets](https://developer.salesforce.com/docs/atlas.en-us.262.0.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm).

#### Example

```apex
public class MyCustomClass {
   String x,y;
   // Provide a custom hash code
   public Integer hashCode() {
    return 
    (31*x.hashCode())^(y.hashCode());
   }
}
```

### indexOf(substring)

Returns the index of the first occurrence of the specified substring. If the substring does not occur, this method returns -1.

#### Signature

`public Integer indexOf(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String myString1 = 'abcde';
String myString2 = 'cd';
Integer result = myString1.indexOf(mystring2);
System.assertEquals(2, result);
```

### indexOf(substring, index)

Returns the zero-based index of the first occurrence of the specified substring from the point of the given index. If the substring does not occur, this method returns -1.

#### Signature

`public Integer indexOf(String substring, Integer index)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **index**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String myString1 = 'abcdabcd';
String myString2 = 'ab';
Integer result = myString1.indexOf(mystring2, 1);
System.assertEquals(4, result);
```

### indexOfAny(substring)

Returns the zero-based index of the first occurrence of any character specified in the substring. If none of the characters occur, returns -1.

#### Signature

`public Integer indexOfAny(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String s1 = 'abcd';
String s2 = 'xc';
Integer result = s1.indexOfAny(s2);
System.assertEquals(2, result);
```

### indexOfAnyBut(substring)

Returns the zero-based index of the first occurrence of a character that is not in the specified substring. Otherwise, returns -1.

#### Signature

`public Integer indexOfAnyBut(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String s1 = 'abcd';
String s2 = 'xc';
Integer result = s1.indexOfAnyBut(s2);
System.assertEquals(0, result);
```

### indexOfChar(character)

Returns the index of the first occurrence of the character that corresponds to the specified character value.

#### Signature

`public Integer indexOfChar(Integer character)`

#### Parameters

-   **character**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The integer value of the character in the string.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the first occurrence of the specified character, -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

```apex
String str = '\\u03A9 is Ω (Omega)';
// Returns 0, which is the first character.
System.debug('indexOfChar(937)=' + str.indexOfChar(937));

// Output:
// indexOfChar(937)=0
```

### indexOfChar(character, startIndex)

Returns the index of the first occurrence of the character that corresponds to the specified character value, starting from the specified index.

#### Signature

`public Integer indexOfChar(Integer character, Integer startIndex)`

#### Parameters

-   **character**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The integer value of the character to look for.
    
-   **startIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index to start the search from.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index, starting from the specified start index, of the first occurrence of the specified character, -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

This example shows different ways of searching for the index of the Omega character. The first call to `indexOfChar` doesn’t specify a start index and therefore the returned index is 0, which is the first occurrence of Omega in the entire string. The subsequent calls specify a start index to find the occurrence of Omega in substrings that start at the specified index.

```apex
String str = 'Ω and \\u03A9 and Ω';
System.debug('indexOfChar(937)=' + str.indexOfChar(937));
System.debug('indexOfChar(937,1)=' + str.indexOfChar(937,1));
System.debug('indexOfChar(937,10)=' + str.indexOfChar(937,10));

// Output:
// indexOfChar(937)=0
// indexOfChar(937,1)=6, (corresponds to the escaped form \\u03A9)
// indexOfChar(937,10)=12
```

### indexOfDifference(stringToCompare)

Returns the zero-based index of the character where the current String begins to differ from the specified String.

#### Signature

`public Integer indexOfDifference(String stringToCompare)`

#### Parameters

-   **stringToCompare**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String s1 = 'abcd';
String s2 = 'abxc';
Integer result = s1.indexOfDifference(s2);
System.assertEquals(2, result);
```

### indexOfIgnoreCase(substring)

Returns the zero-based index of the first occurrence of the specified substring without regard to case. If the substring does not occur, this method returns -1.

#### Signature

`public Integer indexOfIgnoreCase(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String s1 = 'abcd';
String s2 = 'BC';
Integer result = s1.indexOfIgnoreCase(s2, 0);
System.assertEquals(1, result);
```

### indexOfIgnoreCase(substring, startPosition)

Returns the zero-based index of the first occurrence of the specified substring from the point of index i, without regard to case. If the substring does not occur, this method returns -1.

#### Signature

`public Integer indexOfIgnoreCase(String substring, Integer startPosition)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **startPosition**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isAllLowerCase()

Returns `true` if all characters in the current String are lowercase; otherwise, returns `false`.

#### Signature

`public Boolean isAllLowerCase()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String allLower = 'abcde';
System.assert(allLower.isAllLowerCase());
```

### isAllUpperCase()

Returns `true` if all characters in the current String are uppercase; otherwise, returns `false`.

#### Signature

`public Boolean isAllUpperCase()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String allUpper = 'ABCDE';
System.assert(allUpper.isAllUpperCase());
```

### isAlpha()

Returns `true` if all characters in the current String are Unicode letters only; otherwise, returns `false`.

#### Signature

`public Boolean isAlpha()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
// Letters only
String s1 = 'abc';
// Returns true
Boolean b1 = 
   s1.isAlpha();
System.assertEquals(
   true, b1);

// Letters and numbers
String s2 = 'abc 21';
// Returns false
Boolean b2 = 
   s2.isAlpha();
System.assertEquals(
   false, b2);
```

### isAlphaSpace()

Returns `true` if all characters in the current String are Unicode letters or spaces only; otherwise, returns `false`.

#### Signature

`public Boolean isAlphaSpace()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String alphaSpace = 'aA Bb';
System.assert(alphaSpace.isAlphaSpace());
String notAlphaSpace = 'ab 12';
System.assert(!notAlphaSpace.isAlphaSpace());
notAlphaSpace = 'aA$Bb';
System.assert(!notAlphaSpace.isAlphaSpace());
```

### isAlphanumeric()

Returns `true` if all characters in the current String are Unicode letters or digits only; otherwise, returns `false`.

#### Signature

`public Boolean isAlphanumeric()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Unicode Roman numerals are classified as a type of number form, not a type of digit. Therefore, the `isAlphanumeric()` method returns `false` if used on a String that contains a Roman numeral. For Unicode classifications, see the [Unicode Character Code Charts](https://www.unicode.org/charts/ "HTML (New Window)").

#### Example

```apex
// Letters only
String s1 = 'abc';
// Returns true
Boolean b1 = 
   s1.isAlphanumeric();
System.assertEquals(
   true, b1);

// Letters and digits
String s2 = 'abc021';
// Returns true
Boolean b2 = 
   s2.isAlphanumeric();
System.assertEquals(
   true, b2);
```

### isAlphanumericSpace()

Returns `true` if all characters in the current String are Unicode letters, digits, or spaces only; otherwise, returns `false`.

#### Signature

`public Boolean isAlphanumericSpace()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Unicode Roman numerals are classified as a type of number form, not a type of digit. Therefore, the `isAlphanumericSpace()` method returns `false` if used on a String that contains a Roman numeral. For Unicode classifications, see the [Unicode Character Code Charts](https://www.unicode.org/charts/ "HTML (New Window)").

#### Example

```apex
String alphanumSpace = 'AE 86';
System.assert(alphanumSpace.isAlphanumericSpace());
String notAlphanumSpace = 'aA$12';
System.assert(!notAlphanumSpace.isAlphanumericSpace());
```

### isAsciiPrintable()

Returns `true` if the current String contains only ASCII printable characters; otherwise, returns `false`.

#### Signature

`public Boolean isAsciiPrintable()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String ascii = 'abcd1234!@#$%^&*()`~-_+={[}]|:.?';
System.assert(ascii.isAsciiPrintable());
String notAscii = '√';
System.assert(!notAscii.isAsciiPrintable());
```

### isBlank(inputString)

Returns `true` if the specified String is white space, empty (''), or null; otherwise, returns `false`.

#### Signature

`public static Boolean isBlank(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String blank = '';
String nullString = null;
String whitespace = '  ';
System.assert(String.isBlank(blank));
System.assert(String.isBlank(nullString));
System.assert(String.isBlank(whitespace));
String alpha = 'Hello';
System.assert(!String.isBlank(alpha));
```

### isEmpty(inputString)

Returns `true` if the specified String is empty ('') or null; otherwise, returns `false`.

#### Signature

`public static Boolean isEmpty(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String empty = '';
String nullString = null;
System.assert(String.isEmpty(empty));
System.assert(String.isEmpty(nullString));
String whitespace = '  ';
String alpha = 'Hello';
System.assert(!String.isEmpty(whitespace));
System.assert(!String.isEmpty(alpha));
```

### isNotBlank(inputString)

Returns `true` if the specified String is not whitespace, not empty (''), and not null; otherwise, returns `false`.

#### Signature

`public static Boolean isNotBlank(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String alpha = 'Hello world!';
System.assert(String.isNotBlank(alpha));
String blank = '';
String nullString = null;
String whitespace = '  ';
System.assert(!String.isNotBlank(blank));
System.assert(!String.isNotBlank(nullString));
System.assert(!String.isNotBlank(whitespace));
```

### isNotEmpty(inputString)

Returns `true` if the specified String is not empty ('') and not null; otherwise, returns `false`.

#### Signature

`public static Boolean isNotEmpty(String inputString)`

#### Parameters

-   **inputString**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String whitespace = '  ';
String alpha = 'Hello world!';
System.assert(String.isNotEmpty(whitespace));
System.assert(String.isNotEmpty(alpha));
String empty = '';
String nullString = null;
System.assert(!String.isNotEmpty(empty));
System.assert(!String.isNotEmpty(nullString));
```

### isNumeric()

Returns `true` if the current String contains only Unicode digits; otherwise, returns `false`.

#### Signature

`public Boolean isNumeric()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A decimal point (1.2) is not a Unicode digit.

#### Example

```apex
String numeric = '1234567890';
System.assert(numeric.isNumeric());
String alphanumeric = 'R32';
String decimalPoint = '1.2';
System.assert(!alphanumeric.isNumeric());
System.assert(!decimalpoint.isNumeric());
```

### isNumericSpace()

Returns `true` if the current String contains only Unicode digits or spaces; otherwise, returns `false`.

#### Signature

`public Boolean isNumericSpace()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A decimal point (1.2) is not a Unicode digit.

#### Example

```apex
String numericSpace = '1 2 3';
System.assert(numericSpace.isNumericspace());
String notNumericspace = 'FD3S FC3S';
System.assert(!notNumericspace.isNumericspace());
```

### isWhitespace()

Returns `true` if the current String contains only white space characters or is empty; otherwise, returns `false`.

#### Signature

`public Boolean isWhitespace()`

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String whitespace = ' ';
String blank = '';
System.assert(whitespace.isWhitespace());
System.assert(blank.isWhitespace());
String alphanum = 'SIL80';
System.assert(!alphanum.isWhitespace());
```

### join(iterableObj, separator)

Joins the elements of the specified iterable object, such as a List, into a single String separated by the specified separator.

#### Signature

`public static String join(Object iterableObj, String separator)`

#### Parameters

-   **iterableObj**:
    
    Type: Object
    
-   **separator**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

```apex
ListInteger> li = new 
   ListInteger> 
   {10, 20, 30};
String s = String.join(
   li, '/');
System.assertEquals(
   '10/20/30', s);
```

### lastIndexOf(substring)

Returns the index of the last occurrence of the specified substring. If the substring does not occur, this method returns -1.

#### Signature

`public Integer lastIndexOf(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String s1 = 'abcdefgc';
Integer i1 = s1.lastIndexOf('c');
System.assertEquals(7, i1);
```

### lastIndexOf(substring, endPosition)

Returns the index of the last occurrence of the specified substring, starting from the character at index 0 and ending at the specified index.

#### Signature

`public Integer lastIndexOf(String substring, Integer endPosition)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **endPosition**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If the substring doesn’t occur or endPosition is negative, this method returns -1. If endPosition is larger than the last index in the current String, the entire String is searched.

#### Example

```apex
String s1 = 'abcdaacd';
Integer i1 = s1.lastIndexOf('c', 7);
System.assertEquals(6, i1);
Integer i2 = s1.lastIndexOf('c', 3);
System.assertEquals(2, i2);
```

### lastIndexOfChar(character)

Returns the index of the last occurrence of the character that corresponds to the specified character value.

#### Signature

`public Integer lastIndexOfChar(Integer character)`

#### Parameters

-   **character**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The integer value of the character in the string.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index of the last occurrence of the specified character, -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

```apex
String str = '\u03A9 is Ω (Omega)';
// Get the last occurrence of Omega.
System.assertEquals(5, str.lastIndexOfChar(937));
```

### lastIndexOfChar(character, endIndex)

Returns the index of the last occurrence of the character that corresponds to the specified character value, starting from the specified index.

#### Signature

`public Integer lastIndexOfChar(Integer character, Integer endIndex)`

#### Parameters

-   **character**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The integer value of the character to look for.
    
-   **endIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The index to end the search at.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index, starting from the specified start index, of the last occurrence of the specified character. -1 if the character is not found.

#### Usage

The index that this method returns is in Unicode code units.

#### Example

This example shows different ways of searching for the index of the last occurrence of the Omega character. The first call to `lastIndexOfChar` doesn’t specify an end index and therefore the returned index is 12, which is the last occurrence of Omega in the entire string. The subsequent calls specify an end index to find the last occurrence of Omega in substrings.

```apex
String str = 'Ω and \u03A9 and Ω';
System.assertEquals(12, str.lastIndexOfChar(937));
System.assertEquals(6, str.lastIndexOfChar(937,11));
System.assertEquals(0, str.lastIndexOfChar(937,5));
```

### lastIndexOfIgnoreCase(substring)

Returns the index of the last occurrence of the specified substring regardless of case.

#### Signature

`public Integer lastIndexOfIgnoreCase(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If the substring doesn’t occur, this method returns -1.

#### Example

```apex
String s1 = 'abcdaacd';
Integer i1 = s1.lastIndexOfIgnoreCase('DAAC');
System.assertEquals(3, i1);
```

### lastIndexOfIgnoreCase(substring, endPosition)

Returns the index of the last occurrence of the specified substring regardless of case, starting from the character at index 0 and ending at the specified index.

#### Signature

`public Integer lastIndexOfIgnoreCase(String substring, Integer endPosition)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **endPosition**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If the substring doesn’t occur or endPosition is negative, this method returns -1. If endPosition is larger than the last index in the current String, the entire String is searched.

#### Example

```apex
String s1 = 'abcdaacd';
Integer i1 = s1.lastIndexOfIgnoreCase('C', 7);
System.assertEquals(6, i1);
```

### left(length)

Returns the leftmost characters of the current String of the specified length.

#### Signature

`public String left(Integer length)`

#### Parameters

-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If length is greater than the String size, the entire String is returned.

#### Example

```apex
String s1 = 'abcdaacd';
String s2 = s1.left(3);
System.assertEquals('abc', s2);
```

### leftPad(length)

Returns the current String padded with spaces on the left and of the specified length.

#### Signature

`public String leftPad(Integer length)`

#### Parameters

-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Usage

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'abc';
String s2 = s1.leftPad(5);
System.assertEquals('  abc', s2);
```

### leftPad(length, padStr)

Returns the current String padded with String `padStr` on the left and of the specified length.

#### Signature

`public String leftPad(Integer length, String padStr)`

#### Parameters

-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **padStr**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    String to pad with;
    
    if null or empty treated as single blank.
    

#### Usage

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'abc';
String s2 = 'xy';
String s3 = s1.leftPad(7,s2);
System.assertEquals('xyxyabc', s3);
```

### length()

Returns the number of 16-bit Unicode characters contained in the String.

#### Signature

`public Integer length()`

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```apex
String myString = 'abcd';
Integer result = myString.length();
System.assertEquals(result, 4);
```

### mid(startIndex, length)

Returns a new String that begins with the character at the specified zero-based startIndex with the number of characters specified by length.

#### Signature

`public String mid(Integer startIndex, Integer length)`

#### Parameters

-   **startIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    If startIndex is negative, it is considered to be zero.
    
-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    If length is negative or zero, an empty String is returned. If length is greater than the remaining characters, the remainder of the String is returned.
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is similar to the `substring(startIndex)` and `substring(startIndex, endIndex)` methods, except that the second argument is the number of characters to return.

#### Example

```apex
String s = 'abcde';
String s2 = s.mid(2, 3);
System.assertEquals(
   'cde', s2);
```

### normalizeSpace()

Returns the current String with leading, trailing, and repeating white space characters removed.

#### Signature

`public String normalizeSpace()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method normalizes the following white space characters: space, tab (\\t), new line (\\n), carriage return (\\r), and form feed (\\f).

#### Example

```apex
String s1 = 
   'Salesforce \t     force.com';
String s2 = 
   s1.normalizeSpace();
System.assertEquals(
   'Salesforce force.com', s2);
```

### offsetByCodePoints(index, codePointOffset)

Returns the index of the Unicode code point that is offset by the specified number of code points, starting from the given index.

#### Signature

`public Integer offsetByCodePoints(Integer index, Integer codePointOffset)`

#### Parameters

-   **index**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The start index in the string.
    
-   **codePointOffset**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    The number of code points to be offset.
    

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index that corresponds to the start index that is added to the offset.

#### Usage

Unpaired surrogates within the text range that is specified by index and codePointOffset count as one code point each.

#### Example

This example calls `offsetByCodePoints` on a string with a start index of 0 (to start from the first character) and an offset of three code points. The string contains one sequence of supplementary characters in escaped form (a pair of characters). After an offset of three code points when counting from the beginning of the string, the returned code point index is four.

```apex
String str = 'A \uD835\uDD0A BC';
System.assertEquals(4, str.offsetByCodePoints(0,3));
```

### remove(substring)

Removes all occurrences of the specified substring and returns the String result.

#### Signature

`public String remove(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.remove('force');
System.assertEquals(
   'Sales and .com', s2);
```

### removeEnd(substring)

Removes the specified substring only if it occurs at the end of the String.

#### Signature

`public String removeEnd(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.removeEnd('.com');
System.assertEquals(
   'Salesforce and force', s2);
```

### removeEndIgnoreCase(substring)

Removes the specified substring only if it occurs at the end of the String using a case-insensitive match.

#### Signature

`public String removeEndIgnoreCase(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce and force.com';
String s2 = s1.removeEndIgnoreCase('.COM');
System.assertEquals('Salesforce and force', s2);
```

### removeStart(substring)

Removes the specified substring only if it occurs at the beginning of the String.

#### Signature

`public String removeStart(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.removeStart('Sales');
System.assertEquals(
   'force and force.com', s2);
```

### removeStartIgnoreCase(substring)

Removes the specified substring only if it occurs at the beginning of the String using a case-insensitive match.

#### Signature

`public String removeStartIgnoreCase(String substring)`

#### Parameters

-   **substring**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce and force.com';
String s2 = 
   s1.removeStartIgnoreCase('SALES');
System.assertEquals(
   'force and force.com', s2);
```

### repeat(numberOfTimes)

Returns the current String repeated the specified number of times.

#### Signature

`public String repeat(Integer numberOfTimes)`

#### Parameters

-   **numberOfTimes**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'SFDC';
String s2 = s1.repeat(2);
System.assertEquals('SFDCSFDC', s2);
```

### repeat(separator, numberOfTimes)

Returns the current String repeated the specified number of times using the specified separator to separate the repeated Strings.

#### Signature

`public String repeat(String separator, Integer numberOfTimes)`

#### Parameters

-   **separator**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **numberOfTimes**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'SFDC';
String s2 = 
   s1.repeat('-', 2);
System.assertEquals(
   'SFDC-SFDC', s2);
```

### replace(target, replacement)

Replaces each substring of a string that matches the literal target sequence target with the specified literal replacement sequence replacement.

#### Signature

`public String replace(String target, String replacement)`

#### Parameters

-   **target**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **replacement**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'abcdbca';
String target = 'bc';
String replacement = 'xy';
String s2 = s1.replace(target, replacement);
System.assertEquals('axydxya', s2);
```

### replaceAll(regExp, replacement)

Replaces each substring of a string that matches the regular expression regExp with the replacement sequence replacement.

#### Signature

`public String replaceAll(String regExp, String replacement)`

#### Parameters

-   **regExp**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **replacement**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

See the Java [`Pattern`](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html "html (New Window)") class for information on regular expressions.

#### Example

```apex
String s1 = 'a b c 5 xyz';
String regExp = '[a-zA-Z]';
String replacement = '1';
String s2 = s1.replaceAll(regExp, replacement);
System.assertEquals('1 1 1 5 111', s2);
```

### replaceFirst(regExp, replacement)

Replaces the first substring of a string that matches the regular expression regExp with the replacement sequence replacement.

#### Signature

`public String replaceFirst(String regExp, String replacement)`

#### Parameters

-   **regExp**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **replacement**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

See the Java [`Pattern`](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html "html (New Window)") class for information on regular expressions.

#### Example

```apex
String s1 = 'a b c 11 xyz';
String regExp = '[a-zA-Z]{2}';
String replacement = '2';
String s2 = s1.replaceFirst(regExp, replacement);
System.assertEquals('a b c 11 2z', s2);
```

### reverse()

Returns a String with all the characters reversed.

#### Signature

`public String reverse()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

### right(length)

Returns the rightmost characters of the current String of the specified length.

#### Signature

`public String right(Integer length)`

#### Parameters

-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    If length is greater than the String size, the entire String is returned.
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Hello Max';
String s2 = 
   s1.right(3);
System.assertEquals(
   'Max', s2);
```

### rightPad(length)

Returns the current String padded with spaces on the right and of the specified length.

#### Signature

`public String rightPad(Integer length)`

#### Parameters

-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    If length is less than or equal to the current String size, the entire String is returned without space padding.
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'abc';
String s2 = 
   s1.rightPad(5);
System.assertEquals(
   'abc  ', s2);
```

### rightPad(length, padStr)

Returns the current String padded with String `padStr` on the right and of the specified length.

#### Signature

`public String rightPad(Integer length, String padStr)`

#### Parameters

-   **length**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **padStr**:
    
    Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
    String to pad with;
    
    if null or empty treated as single blank.
    

#### Usage

If length is less than or equal to the current String size, the entire String is returned without space padding.

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'abc';
String s2 = 'xy';
String s3 = s1.rightPad(7, s2);
System.assertEquals('abcxyxy', s3);
```

### split(regExp)

Returns a list that contains each substring of the String that is terminated by either the regular expression regExp or the end of the String.

#### Signature

`public String[] split(String regExp)`

#### Parameters

-   **regExp**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

:::tip Note
In API version 34.0 and earlier, a zero-width
                                                regExp value produces an empty
                                        list item at the beginning of the method’s
                                output.
:::

#### Usage

See the Java `Pattern` class for information on regular expressions.

The substrings are placed in the list in the order in which they occur in the String. If regExp does not match any part of the String, the resulting list has just one element containing the original String.

#### Example

In the following example, a string is split using a backslash as a delimiter.

```apex
public String splitPath(String filename) {
    if (filename == null)
        return null;
    ListString> parts = filename.split('\\\\');
    filename = parts[parts.size()-1];
    return filename;
}

// For example, if the file path is e:\\processed\\PPDSF100111.csv
// This method splits the path and returns the last part.
// Returned filename is PPDSF100111.csv
```

### split(regExp, limit)

Returns a list that contains each substring of the String that is terminated by either the regular expression regExp or the end of the String.

#### Signature

`public String[] split(String regExp, Integer limit)`

#### Parameters

-   **regExp**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
    A regular expression.
    
-   **limit**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

:::tip Note
In API version 34.0 and earlier, a zero-width regExp value
                produces an empty list item at the beginning of the method’s output.
:::

#### Usage

The optional limit parameter controls the number of times the pattern is applied and therefore affects the length of the list.

-   If limit is greater than zero:
    -   The pattern is applied a maximum of (limit – 1) times.
    -   The list’s length is no greater than limit.
    -   The list’s last entry contains all input beyond the last matched delimiter.
-   If limit is non-positive, the pattern is applied as many times as possible, and the list can have any length.
-   If limit is zero, the pattern is applied as many times as possible, the list can have any length, and trailing empty strings are discarded.

#### Example

For example, for `String s = 'boo:and:moo'`:

-   `s.split(':', 2)` results in `{'boo', 'and:moo'}`
-   `s.split(':', 5)` results in `{'boo', 'and', 'moo'}`
-   `s.split(':', -2)` results in `{'boo', 'and', 'moo'}`
-   `s.split('o', 5)` results in `{'b', '', ':and:m', '', ''}`
-   `s.split('o', -2)` results in `{'b', '', ':and:m', '', ''}`
-   `s.split('o', 0)` results in `{'b', '', ':and:m'}`

### splitByCharacterType()

Splits the current String by character type and returns a list of contiguous character groups of the same type as complete tokens.

#### Signature

`public List<String> splitByCharacterType()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

For more information about the character types used, see [java.lang.Character.getType(char)](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html#getType%28char%29 "HTML (New Window)").

#### Example

```apex
String s1 = 'Lightning.platform';
ListString> ls = 
   s1.splitByCharacterType();
System.debug(ls);
// Writes this output:
// (L, ightning, ., platform)
```

### splitByCharacterTypeCamelCase()

Splits the current String by character type and returns a list of contiguous character groups of the same type as complete tokens, with the following exception: the uppercase character, if any, immediately preceding a lowercase character token belongs to the following character token rather than to the preceding.

#### Signature

`public List<String> splitByCharacterTypeCamelCase()`

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

For more information about the character types used, see [java.lang.Character.getType(char)](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html#getType%28char%29 "HTML (New Window)").

#### Example

```apex
String s1 = 'Lightning.platform';
ListString> ls = 
   s1.splitByCharacterTypeCamelCase();
System.debug(ls);
// Writes this output:
// (Lightning, ., platform)
```

### startsWith(prefix)

Returns `true` if the String that called the method begins with the specified prefix.

#### Signature

`public Boolean startsWith(String prefix)`

#### Parameters

-   **prefix**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s1 = 'AE86 vs EK9';
System.assert(s1.startsWith('AE86'));
```

### startsWithIgnoreCase(prefix)

Returns `true` if the current String begins with the specified prefix regardless of the prefix case.

#### Signature

`public Boolean startsWithIgnoreCase(String prefix)`

#### Parameters

-   **prefix**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```apex
String s1 = 'AE86 vs EK9';
System.assert(s1.startsWithIgnoreCase('ae86'));
```

### stripHtmlTags()

Removes HTML markup and returns plain text.

#### Signature

`public String stripHtmlTags()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

:::tip Warning
The stripHtmlTags function doesn’t recursively strip tags; therefore,
            tags can still exist in the returned string. Don’t use the stripHtmlTags function to
            sanitize input for inclusion as a raw HTML page. The unescaped output isn’t considered
            safe to include in an HTML document. The function will be deprecated in a future
            release.
:::

#### Example

```apex
String s1 = 'hello world';
String s2 = s1.stripHtmlTags();
System.assertEquals(
   'hello world', s2);
```

### substring(startIndex)

Returns a new String that begins with the character at the specified zero-based startIndex and extends to the end of the String.

#### Signature

`public String substring(Integer startIndex)`

#### Parameters

-   **startIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'hamburger';
System.assertEquals('burger', s1.substring(3));
```

### substring(startIndex, endIndex)

Returns a new String that begins with the character at the specified zero-based startIndex and extends to the character at endIndex - 1.

#### Signature

`public String substring(Integer startIndex, Integer endIndex)`

#### Parameters

-   **startIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    
-   **endIndex**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
'hamburger'.substring(4, 8); 
// Returns "urge"

'smiles'.substring(1, 5);
// Returns "mile"
```

### substringAfter(separator)

Returns the substring that occurs after the first occurrence of the specified separator.

#### Signature

`public String substringAfter(String separator)`

#### Parameters

-   **separator**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringAfter('.');
System.assertEquals(
   'Lightning.platform', s2);
```

### substringAfterLast(separator)

Returns the substring that occurs after the last occurrence of the specified separator.

#### Signature

`public String substringAfterLast(String separator)`

#### Parameters

-   **separator**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringAfterLast('.');
System.assertEquals(
   'platform', s2);
```

### substringBefore(separator)

Returns the substring that occurs before the first occurrence of the specified separator.

#### Signature

`public String substringBefore(String separator)`

#### Parameters

-   **separator**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringBefore('.');
System.assertEquals(
   'Salesforce', s2);
```

### substringBeforeLast(separator)

Returns the substring that occurs before the last occurrence of the specified separator.

#### Signature

`public String substringBeforeLast(String separator)`

#### Parameters

-   **separator**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'Salesforce.Lightning.platform';
String s2 = 
   s1.substringBeforeLast('.');
System.assertEquals(
   'Salesforce.Lightning', s2);
```

### substringBetween(tag)

Returns the substring that occurs between two instances of the specified tag String.

#### Signature

`public String substringBetween(String tag)`

#### Parameters

-   **tag**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'tagYellowtag';
String s2 = s1.substringBetween('tag');
System.assertEquals('Yellow', s2);
```

### substringBetween(open, close)

Returns the substring that occurs between the two specified Strings.

#### Signature

`public String substringBetween(String open, String close)`

#### Parameters

-   **open**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    
-   **close**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'xYellowy';
String s2 = 
   s1.substringBetween('x','y');
System.assertEquals(
   'Yellow', s2);
```

### swapCase()

Swaps the case of all characters and returns the resulting String by using the default (English US) locale.

#### Signature

`public String swapCase()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Upper case and title case converts to lower case, and lower case converts to upper case.

#### Example

```apex
String s1 = 'Force.com';
String s2 = s1.swapCase();
System.assertEquals('fORCE.COM', s2);
```

### toLowerCase()

Converts all of the characters in the String to lowercase using the rules of the default (English US) locale.

#### Signature

`public String toLowerCase()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 'ThIs iS hArD tO rEaD';
System.assertEquals('this is hard to read',
   s1.toLowerCase());
```

### toLowerCase(locale)

Converts all of the characters in the String to lowercase using the rules of the specified locale.

#### Signature

`public String toLowerCase(String locale)`

#### Parameters

-   **locale**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
// Example in Turkish
// An uppercase dotted "i", \u0304, which is İ
// Note this contains both a İ as well as a I
String s1 = 'KIYMETLİ';
String s1Lower = s1.toLowerCase('tr');
// Dotless lowercase "i", \u0131, which is ı
// Note this has both a i and ı
String expected = 'kıymetli';
System.assertEquals(expected, s1Lower);
// Note if this was done in toLowerCase(‘en’), it would output ‘kiymetli’
```

### toUpperCase()

Converts all of the characters in the String to uppercase using the rules of the default (English US) locale.

#### Signature

`public String toUpperCase()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String myString1 = 'abcd';
String myString2 = 'ABCD';
myString1 = 
   myString1.toUpperCase();
Boolean result = 
   myString1.equals(myString2);
System.assertEquals(result, true);
```

### toUpperCase(locale)

Converts all of the characters in the String to the uppercase using the rules of the specified locale.

#### Signature

`public String toUpperCase(String locale)`

#### Parameters

-   **locale**:
    
    Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
// Example in Turkish
// Dotless lowercase "i", \u0131, which is ı
// Note this has both a i and ı
String s1 = 'imkansız';
String s1Upper = s1.toUpperCase('tr');
// An uppercase dotted "i", \u0304, which is İ
// Note this contains both a İ as well as a I
String expected = 'İMKANSIZ';
System.assertEquals(expected, s1Upper);
```

### template(valueMap)

Substitutes variables in a string for their corresponding values in the `valueMap` parameter, and returns the updated string.

#### Signature

`public String template(Map<String, Object> valueMap)`

#### Parameters

-   **valueMap**:
    
    Type: Map<String,Object>
    
    A map in which each key is the variable name specified in the string, and each value is the corresponding value to substitute into the string.
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Both regular and multiline string literals are supported. In the string literal, use the syntax `${variableName}` to represent a placeholder variable. For example:

```apex
String formatted = '${name} was last updated ${date}'.template(new MapString, Object> {
    'name' => 'My class',
    'date' => DateTime.newInstance(2018, 11, 15)
});
```

To include literal text between `${}` in the string, use the `$` character to escape the variable reference. For example:

```apex
String anotherStr = '''
    Escaped: $${hello}
    Unescaped: ${hello}
'''.template(new Map {
        'hello' => 'hi'
});

Assert.areEqual('''
    Escaped: ${hello}
    Unescaped: hi
''', anotherStr);
```

Non-string values in the `valueMap` are implicitly converted to strings by using the `toString()` method overrides that exist on the type.

Default values for missing variables aren’t supported. If a variable is present in the string but not as a key in the `valueMap`, a `StringException` is thrown.

Implicit string formatting lookups, such as date formatting, also aren’t supported as values. Instead, first use the relevant Apex method to apply the formatting, and then pass the result into the `valueMap`.

#### Example

In this example, the multiline string jsonBody has two variables: `sc` and `sn`. The `template` method sets the variables to the values of `schoolCity` and `schoolName`, respectively, and returns the updated string.

```apex
String schoolCity = ExampleClass.getschoolCity(); // "exampleCity"
String schoolName = ExampleClass.getschoolName(); // "exampleSchool"

String jsonBody = '''
{
    "city" : "${sc}",
    "name" : "${sn}"
}
'''.template(new Map {
        'sc' => schoolCity,
        'sn' => schoolName
});

Assert.areEqual(
'''
{
    "city" : "exampleCity",
    "name" : "exampleSchool"
}
''', jsonBody);
```

### trim()

Returns a copy of the string that no longer contains any leading or trailing white space characters.

#### Signature

`public String trim()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Leading and trailing ASCII control characters such as tabs and newline characters are also removed. White space and control characters that aren’t at the beginning or end of the sentence aren’t removed.

#### Example

```apex
String s1 = '   Hello!   ';
String trimmed = s1.trim();
system.assertEquals('Hello!', trimmed);
```

### uncapitalize()

Returns the current String with the first letter in lowercase.

#### Signature

`public String uncapitalize()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 
   'Hello max';
String s2 = 
   s1.uncapitalize();
System.assertEquals(
   'hello max', 
    s2);
```

### unescapeCsv()

Returns a String representing an unescaped CSV column.

#### Signature

`public String unescapeCsv()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the String is enclosed in double quotes and contains a comma, newline or double quote, quotes are removed. Also, any double quote escaped characters (a pair of double quotes) are unescaped to just one double quote.

If the String is not enclosed in double quotes, or is and does not contain a comma, newline or double quote, it is returned unchanged.

#### Example

```apex
String s1 = 
   '"Max1, ""Max2"""';
String s2 = 
   s1.unescapeCsv();
System.assertEquals(
   'Max1, "Max2"', 
    s2);
```

### unescapeEcmaScript()

Unescapes any EcmaScript literals found in the String.

#### Signature

`public String unescapeEcmaScript()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 
   '\"3.8\",\"3.9\"';
String s2 = 
   s1.unescapeEcmaScript();
System.assertEquals(
   '"3.8","3.9"',
   s2);
```

### unescapeHtml3()

Unescapes the characters in a String using HTML 3.0 entities.

#### Signature

`public String unescapeHtml3()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
String s1 = 
   '"&lt;Black&amp;White&gt;"';
String s2 = 
   s1.unescapeHtml3();
System.assertEquals(
   '""',
   s2);
```

### unescapeHtml4()

Unescapes the characters in a String using HTML 4.0 entities.

#### Signature

`public String unescapeHtml4()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If an entity isn’t recognized, it is kept as is in the returned string.

#### Example

```apex
String s1 = 
   '"&lt;Black&amp;White&gt;"';
String s2 = 
   s1.unescapeHtml4();
System.assertEquals(
   '""',
   s2);
```

### unescapeJava()

Returns a String whose Java literals are unescaped. Literals unescaped include escape sequences for quotes (\\\\") and control characters, such as tab (\\\\t), and carriage return (\\\\n).

#### Signature

`public String unescapeJava()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The unescaped string.

#### Example

```apex
String s = 'Company: \\"Salesforce.com\\"';
String unescapedStr = s.unescapeJava();
System.assertEquals('Company: "Salesforce.com"', unescapedStr);
```

### unescapeUnicode()

Returns a String whose escaped Unicode characters are unescaped.

#### Signature

`public String unescapeUnicode()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

The unescaped string.

#### Example

```apex
String s = 'De onde voc\u00EA \u00E9?';
String unescapedStr = s.unescapeUnicode();
System.assertEquals('De onde você é?', unescapedStr);
```

### unescapeXml()

Unescapes the characters in a String using XML entities.

#### Signature

`public String unescapeXml()`

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Supports only the five basic XML entities (gt, lt, quot, amp, apos). Does not support DTDs or external entities.

#### Example

```apex
String s1 = 
   '"&lt;Black&amp;White&gt;"';
String s2 = 
   s1.unescapeXml();
System.assertEquals(
   '""',
   s2);
```

### valueOf(dateToConvert)

Returns a String that represents the specified Date in the standard “yyyy-MM-dd” format.

#### Signature

`public static String valueOf(Date dateToConvert)`

#### Parameters

-   **dateToConvert**:
    
    Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
Date myDate = Date.Today();
String sDate = String.valueOf(myDate);
```

### valueOf(datetimeToConvert)

Returns a String that represents the specified Datetime in the standard “yyyy-MM-dd HH:mm:ss” format for the local time zone.

#### Signature

`public static String valueOf(Datetime datetimeToConvert)`

#### Parameters

-   **datetimeToConvert**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
DateTime dt = datetime.newInstance(1996, 6, 23);
String sDateTime = String.valueOf(dt);
System.assertEquals('1996-06-23 00:00:00', sDateTime);
```

### valueOf(decimalToConvert)

Returns a String that represents the specified Decimal.

#### Signature

`public static String valueOf(Decimal decimalToConvert)`

#### Parameters

-   **decimalToConvert**:
    
    Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
Decimal dec = 3.14159265;
String sDecimal = String.valueOf(dec);
System.assertEquals('3.14159265', sDecimal);
```

### valueOf(doubleToConvert)

Returns a String that represents the specified Double.

#### Signature

`public static String valueOf(Double doubleToConvert)`

#### Parameters

-   **doubleToConvert**:
    
    Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
Double myDouble = 12.34;
String myString = 
   String.valueOf(myDouble);
System.assertEquals(
  '12.34', myString);
```

### valueOf(integerToConvert)

Returns a String that represents the specified Integer.

#### Signature

`public static String valueOf(Integer integerToConvert)`

#### Parameters

-   **integerToConvert**:
    
    Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
Integer myInteger = 22;
String sInteger = String.valueOf(myInteger);
System.assertEquals('22', sInteger);
```

### valueOf(longToConvert)

Returns a String that represents the specified Long.

#### Signature

`public static String valueOf(Long longToConvert)`

#### Parameters

-   **longToConvert**:
    
    Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
Long myLong = 123456789;
String sLong = String.valueOf(myLong);
System.assertEquals('123456789', sLong);
```

### valueOf(toConvert)

Returns a string representation of the specified object argument.

#### Signature

`public static String valueOf(Object toConvert)`

#### Parameters

-   **toConvert**:
    
    Type: Object
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If the argument is not a String, the `valueOf` method converts it into a String by calling the `toString` method on the argument, if available, or any overridden `toString` method if the argument is a user-defined type. Otherwise, if no `toString` method is available, it returns a String representation of the argument.

#### Example

```apex
ListInteger> ls = 
  new ListInteger>();
ls.add(10);
ls.add(20);
String strList = 
   String.valueOf(ls);
System.assertEquals(
  '(10, 20)', strList);
```

### valueOfGmt(datetimeToConvert)

Returns a String that represents the specified Datetime in the standard “yyyy-MM-dd HH:mm:ss” format for the GMT time zone.

#### Signature

`public static String valueOfGmt(Datetime datetimeToConvert)`

#### Parameters

-   **datetimeToConvert**:
    
    Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")
    

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```apex
// For a PST timezone:
DateTime dt = datetime.newInstance(2001, 9, 14);
String sDateTime = String.valueOfGmt(dt);
System.assertEquals('2001-09-14 07:00:00', sDateTime);
```
