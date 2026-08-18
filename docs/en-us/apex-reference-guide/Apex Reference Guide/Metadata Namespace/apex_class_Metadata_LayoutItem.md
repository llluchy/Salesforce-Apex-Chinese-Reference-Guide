---
doc_id: "apex_class_Metadata_LayoutItem"
---

# LayoutItem Class

Represents the valid values that define a layout item.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [`Metadata.Layout`](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “LayoutItem” in the *[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm)*.

## See Also

- [LayoutItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_properties)
- [LayoutItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_methods)

## LayoutItem Properties

The following are properties for `LayoutItem`.

## See Also

- [analyticsCloudComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_analyticsCloudComponent)
- [behavior](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_behavior)
- [canvas](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_canvas)
- [component](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_component)
- [customLink](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_customLink)
- [emptySpace](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_emptySpace)
- [field](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_field)
- [height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_height)
- [page_x](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_page_x)
- [reportChartComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_reportChartComponent)
- [scontrol](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_scontrol)
- [showLabel](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_showLabel)
- [showScrollbars](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_showScrollbars)
- [width](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_width)

### analyticsCloudComponent

A Wave Analytics dashboard component on a page.

#### Signature

`public Metadata.AnalyticsCloudComponentLayoutItem analyticsCloudComponent {get; set;}`

#### Property Value

Type: [Metadata.AnalyticsCloudComponentLayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_class_Metadata_AnalyticsCloudComponentLayoutItem "Represents the settings for a Wave Analytics dashboard on a standard or custom page.")

### behavior

Determines the field behavior.

#### Signature

`public Metadata.UiBehavior behavior {get; set;}`

#### Property Value

Type: [Metadata.UiBehavior](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_UiBehavior.htm#apex_enum_Metadata_UiBehavior "Describes the behavior for a layout item on a layout page.")

### canvas

References a canvas app.

#### Signature

`public String canvas {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### component

References a component.

#### Signature

`public String component {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### customLink

The custom link reference.

#### Signature

`public String customLink {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### emptySpace

Controls if this layout item is a blank space.

#### Signature

`public Boolean emptySpace {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### field

The field name reference, relative to the layout, for example “Description” or “MyField\_\_c”.

#### Signature

`public String field {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### height

For s-controls and pages only, the height in pixels.

#### Signature

`public Integer height {get; set;}`

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### page\_x

Reference to a Visualforce page.

#### Signature

`public String page_x {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### reportChartComponent

Refers to a report chart that you can add to a standard or custom object page.

#### Signature

`public Metadata.ReportChartComponentLayoutItem reportChartComponent {get; set;}`

#### Property Value

Type: [Metadata.ReportChartComponentLayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_class_Metadata_ReportChartComponentLayoutItem "Represents the settings for a report chart on a standard or custom page.")

### scontrol

Reference to an s-control.

#### Signature

`public String scontrol {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### showLabel

For s-control and pages only, whether to show the label.

#### Signature

`public Boolean showLabel {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showScrollbars

For s-control and pages only, whether to show scrollbars.

#### Signature

`public Boolean showScrollbars {get; set;}`

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### width

For s-control and pages only, the width in pixels or percent. Pixel values are simply the number of pixels, for example, 500. Percentage values must include the percent sign, for example, 20%.

#### Signature

`public String width {get; set;}`

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## LayoutItem Methods

The following are methods for `LayoutItem`.

## See Also

- [clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_clone)

### clone()

Makes a duplicate copy of the `Metadata.LayoutItem`.

#### Signature

`public Object clone()`

#### Return Value

Type: Object
