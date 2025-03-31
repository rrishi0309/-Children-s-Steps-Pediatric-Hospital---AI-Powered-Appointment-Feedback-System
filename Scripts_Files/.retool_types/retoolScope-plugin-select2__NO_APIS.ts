const _LEVEL_1 = {
  "_select2_imageByIndex": ["","","","","",""] as const,
  "_select2_iconByIndex": ["","","","","",""] as const,
  "_select2_values": ["Primary Care","Pediatric Cancer","Autism","Heart and Vascular Care","Neonatology","Pediatric Neurology"] as const,
  "_select2_captionByIndex": ["","","","","",""] as const,
  "_select2_disabledByIndex": [false,false,false,false,false,false] as const,
  "_select2_hiddenByIndex": [false,false,false,false,false,false] as const,
  "_select2_labels": ["","","","","",""] as const,
  "_select2_tooltipByIndex": ["","","","","",""] as const,
  "_select2_colorByIndex": ["","","","","",""] as const,
  "_select2_fallbackTextByIndex": ["","","","","",""] as const,
  "_select2_data": [{
      "_selector": ["select2","data","0"] as const,
      "caption": "",
      "color": "",
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      /** Whether the component is visible. */
      "hidden": false,
      "icon": "",
      "image": "",
      /** The text to display as a label for the input field. */
      "label": "",
      "fallbackText": "",
      "tooltip": "",
      /** The current value. */
      "value": "Primary Care"
    } as const,{
      "_selector": ["select2","data","1"] as const,
      "caption": "",
      "color": "",
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      /** Whether the component is visible. */
      "hidden": false,
      "icon": "",
      "image": "",
      /** The text to display as a label for the input field. */
      "label": "",
      "fallbackText": "",
      "tooltip": "",
      /** The current value. */
      "value": "Pediatric Cancer"
    } as const,{
      "_selector": ["select2","data","2"] as const,
      "caption": "",
      "color": "",
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      /** Whether the component is visible. */
      "hidden": false,
      "icon": "",
      "image": "",
      /** The text to display as a label for the input field. */
      "label": "",
      "fallbackText": "",
      "tooltip": "",
      /** The current value. */
      "value": "Autism"
    } as const,{
      "_selector": ["select2","data","3"] as const,
      "caption": "",
      "color": "",
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      /** Whether the component is visible. */
      "hidden": false,
      "icon": "",
      "image": "",
      /** The text to display as a label for the input field. */
      "label": "",
      "fallbackText": "",
      "tooltip": "",
      /** The current value. */
      "value": "Heart and Vascular Care"
    } as const,{
      "_selector": ["select2","data","4"] as const,
      "caption": "",
      "color": "",
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      /** Whether the component is visible. */
      "hidden": false,
      "icon": "",
      "image": "",
      /** The text to display as a label for the input field. */
      "label": "",
      "fallbackText": "",
      "tooltip": "",
      /** The current value. */
      "value": "Neonatology"
    } as const,{
      "_selector": ["select2","data","5"] as const,
      "caption": "",
      "color": "",
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      /** Whether the component is visible. */
      "hidden": false,
      "icon": "",
      "image": "",
      /** The text to display as a label for the input field. */
      "label": "",
      "fallbackText": "",
      "tooltip": "",
      /** The current value. */
      "value": "Pediatric Neurology"
    } as const] as const,
  "_select2_deprecatedLabels": [] as const,
  "_select2_disabledValues": [] as const,
}
const select2 = {
  "_selector": ["select2"] as const,
  "_isPlugin": true,
  "id": "select2",
  "pluginType": "SelectWidget2",
  /** The current value. */
  "value": null,
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "static",
  /** A list of images for each item, by index. */
  "imageByIndex": _LEVEL_1["_select2_imageByIndex"] as RetoolArrayWrapper<["select2","imageByIndex"], typeof _LEVEL_1["_select2_imageByIndex"], 6>,
  /** Whether to display an icon next to a selected item. */
  "showSelectionIndicator": true,
  /** A list of icons for each item, by index. */
  "iconByIndex": _LEVEL_1["_select2_iconByIndex"] as RetoolArrayWrapper<["select2","iconByIndex"], typeof _LEVEL_1["_select2_iconByIndex"], 6>,
  /** A list of possible values. */
  "values": _LEVEL_1["_select2_values"] as RetoolArrayWrapper<["select2","values"], typeof _LEVEL_1["_select2_values"], 6>,
  /** Whether the value is read only and cannot be modified. */
  "readOnly": false,
  /** Whether to reset inputValue to an empty string when the input is blurred or an option is selected. */
  "clearInputValueOnChange": false,
  /** The icon to display after the primary content. */
  "iconAfter": "",
  /** The minimum width of the dropdown, in `px`. */
  "overlayMinWidth": null,
  /** Whether to allow deselection of an item. */
  "allowDeselect": false,
  /** The current or most recently entered value of the input field. */
  "inputValue": "",
  /** Whether the component is visible. */
  "hidden": false,
  "customValidation": "",
  /** A list of captions for each item, by index. */
  "captionByIndex": _LEVEL_1["_select2_captionByIndex"] as RetoolArrayWrapper<["select2","captionByIndex"], typeof _LEVEL_1["_select2_captionByIndex"], 6>,
  /** A list of boolean values for each item, by index, that reflect whether they are disabled. */
  "disabledByIndex": _LEVEL_1["_select2_disabledByIndex"] as RetoolArrayWrapper<["select2","disabledByIndex"], typeof _LEVEL_1["_select2_disabledByIndex"], 6>,
  /** A list of boolean values for each item, by index, that reflect whether they are hidden. */
  "hiddenByIndex": _LEVEL_1["_select2_hiddenByIndex"] as RetoolArrayWrapper<["select2","hiddenByIndex"], typeof _LEVEL_1["_select2_hiddenByIndex"], 6>,
  /** A list of labels for each item. Falls back to the corresponding `value` if no label is provided. */
  "labels": _LEVEL_1["_select2_labels"] as RetoolArrayWrapper<["select2","labels"], typeof _LEVEL_1["_select2_labels"], 6>,
  /** A list of tooltips for each item, by index. */
  "tooltipByIndex": _LEVEL_1["_select2_tooltipByIndex"] as RetoolArrayWrapper<["select2","tooltipByIndex"], typeof _LEVEL_1["_select2_tooltipByIndex"], 6>,
  /** A list of colors for each item, by index. */
  "colorByIndex": _LEVEL_1["_select2_colorByIndex"] as RetoolArrayWrapper<["select2","colorByIndex"], typeof _LEVEL_1["_select2_colorByIndex"], 6>,
  /** A list of values to use as fallback text for each option. Only the first two characters are displayed. If multiple words are provided, the first letter of each word is used. */
  "fallbackTextByIndex": _LEVEL_1["_select2_fallbackTextByIndex"] as RetoolArrayWrapper<["select2","fallbackTextByIndex"], typeof _LEVEL_1["_select2_fallbackTextByIndex"], 6>,
  /** The source data for the component. */
  "data": _LEVEL_1["_select2_data"] as RetoolArrayWrapper<["select2","data"], typeof _LEVEL_1["_select2_data"], 6>,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** The type of search to perform. */
  "searchMode": "fuzzy",
  /** Whether to hide the validation message if the `invalid` is `true`. */
  "hideValidationMessage": false,
  /** The text to display before the primary content. */
  "textBefore": "",
  /** Whether to allow custom values that do not already exist in `values`. */
  "allowCustomValue": false,
  /** The currently selected value, by index. */
  "selectedIndex": null,
  /** The currently selected item. */
  "selectedItem": null,
  /** Whether the input is required for validation. */
  "required": false,
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** The validation message to display if the input is invalid. */
  "validationMessage": "",
  /** Whether to automatically assign a color to each item. */
  "automaticItemColors": false,
  /** The adornment shape. */
  "itemAdornmentShape": "circle",
  /** The text to display after the primary content. */
  "textAfter": "",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** Whether to display a button to clear the current value of the input field. */
  "showClear": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The horizontal alignment of the label. */
  "labelAlign": "left",
  /** The key used by a Form component to assign default values to input fields using `form.initialData`, and to construct the `form.data` property. */
  "formDataKey": "select2",
  /** The additional text to display with the label. */
  "labelCaption": "",
  /** The label width, in the unit specified in `labelWidthUnit`. */
  "labelWidth": 33,
  /**  */
  "deprecatedLabels": _LEVEL_1["_select2_deprecatedLabels"] as RetoolArrayWrapper<["select2","deprecatedLabels"], typeof _LEVEL_1["_select2_deprecatedLabels"], 0>,
  /** The text to display in the input field when empty. */
  "placeholder": "Select Service",
  /** The adornment size. */
  "itemAdornmentSize": "auto",
  /** The text to display as a label for the input field. */
  "label": "Type of Service:",
  /** The specified units for `labelWidth`. */
  "labelWidthUnit": "%",
  /** Whether the current value has failed any validation rules. */
  "invalid": false,
  /** The icon to display before the primary content. */
  "iconBefore": "",
  /** The label of the currently selected value, by index. */
  "selectedLabel": null,
  /** The message to display if no value is set. */
  "emptyMessage": "No options",
  /** The maximum height of the dropdown, in `px`. */
  "overlayMaxHeight": 375,
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The position of the label relative to the input field. */
  "labelPosition": "left",
  /** Whether the label can wrap to multiple lines. */
  "labelWrap": false,
  /** A list of values not available for selection. */
  "disabledValues": _LEVEL_1["_select2_disabledValues"] as RetoolArrayWrapper<["select2","disabledValues"], typeof _LEVEL_1["_select2_disabledValues"], 0>,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
