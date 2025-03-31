const _LEVEL_1 = {
  "_select3_imageByIndex": ["","",""] as const,
  "_select3_iconByIndex": ["","",""] as const,
  "_select3_values": ["355 W 400 S, Salt Lake City, UT 84101","135 E 200 N, Provo, UT 84606","188 E 300 S, St. George, UT 84770"] as const,
  "_select3_captionByIndex": ["","",""] as const,
  "_select3_disabledByIndex": [false,false,false] as const,
  "_select3_hiddenByIndex": [false,false,false] as const,
  "_select3_labels": ["","",""] as const,
  "_select3_tooltipByIndex": ["","",""] as const,
  "_select3_colorByIndex": ["","",""] as const,
  "_select3_fallbackTextByIndex": ["","",""] as const,
  "_select3_data": [{
      "_selector": ["select3","data","0"] as const,
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
      "value": "355 W 400 S, Salt Lake City, UT 84101"
    } as const,{
      "_selector": ["select3","data","1"] as const,
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
      "value": "135 E 200 N, Provo, UT 84606"
    } as const,{
      "_selector": ["select3","data","2"] as const,
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
      "value": "188 E 300 S, St. George, UT 84770"
    } as const] as const,
  "_select3_deprecatedLabels": [] as const,
  "_select3_disabledValues": [] as const,
}
const select3 = {
  "_selector": ["select3"] as const,
  "_isPlugin": true,
  "id": "select3",
    /**
  * Set the current value.
  * @example setValue('left')
  * @param value
  * @param strict Enforce that `value` exists in the select's options.
  **/
  setValue: (value: boolean | string | number | void, strict: boolean): unknown => undefined as unknown,
  /**
  * Clear the current value.
  **/
  clearValue: (): unknown => undefined as unknown,
  /**
  * Scrolls the canvas or parent container so that the selected component appears in the visible area.
  * @param options
  * @param options.block **Nearest:** Scrolls only the minimum amount required for the component to appear in the visible area. Scrolling does not occur if the component is already in view.
  * 
  * **Start:** Scrolls to position the component at the top of the visible area.
  * 
  * **Center:** Scrolls to position the component in the middle of the visible area.
  * 
  * **End:** Scrolls to position the component at the bottom of the visible area.
  * @param options.behavior When off, scrolls instantly to the required position.
  * 
  * When on, scrolls with a smooth animation to the required position.
  **/
  scrollIntoView: (options: {block: 'nearest'|'start'|'center'|'end', behavior: 'auto' | 'smooth'}): void => undefined,
  /**
  * Validates the value of the input field.
  **/
  validate: (): unknown => undefined as unknown,
  /**
  * Clear the validation message from the input field.
  **/
  clearValidation: (): unknown => undefined as unknown,
  /**
  * Set the `hidden` value to toggle whether the component is visible. Defaults to `true` without a parameter.
  * @param hidden
  **/
  setHidden: (hidden: boolean): unknown => undefined as unknown,
  /**
  * Set the `disabled` value to toggle whether the input field is disabled. Defaults to `true` without a parameter.
  * @param disabled
  **/
  setDisabled: (disabled: boolean): unknown => undefined as unknown,
  /**
  * Reset `value` to the default value.
  **/
  resetValue: (): unknown => undefined as unknown,
  /**
  * Set focus on the input field.
  **/
  focus: (): unknown => undefined as unknown,
  /**
  * Removes focus on the input field.
  **/
  blur: (): unknown => undefined as unknown,
  "pluginType": "SelectWidget2",
  /** The current value. */
  "value": null,
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "static",
  /** A list of images for each item, by index. */
  "imageByIndex": _LEVEL_1["_select3_imageByIndex"] as RetoolArrayWrapper<["select3","imageByIndex"], typeof _LEVEL_1["_select3_imageByIndex"], 3>,
  /** Whether to display an icon next to a selected item. */
  "showSelectionIndicator": true,
  /** A list of icons for each item, by index. */
  "iconByIndex": _LEVEL_1["_select3_iconByIndex"] as RetoolArrayWrapper<["select3","iconByIndex"], typeof _LEVEL_1["_select3_iconByIndex"], 3>,
  /** A list of possible values. */
  "values": _LEVEL_1["_select3_values"] as RetoolArrayWrapper<["select3","values"], typeof _LEVEL_1["_select3_values"], 3>,
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
  "captionByIndex": _LEVEL_1["_select3_captionByIndex"] as RetoolArrayWrapper<["select3","captionByIndex"], typeof _LEVEL_1["_select3_captionByIndex"], 3>,
  /** A list of boolean values for each item, by index, that reflect whether they are disabled. */
  "disabledByIndex": _LEVEL_1["_select3_disabledByIndex"] as RetoolArrayWrapper<["select3","disabledByIndex"], typeof _LEVEL_1["_select3_disabledByIndex"], 3>,
  /** A list of boolean values for each item, by index, that reflect whether they are hidden. */
  "hiddenByIndex": _LEVEL_1["_select3_hiddenByIndex"] as RetoolArrayWrapper<["select3","hiddenByIndex"], typeof _LEVEL_1["_select3_hiddenByIndex"], 3>,
  /** A list of labels for each item. Falls back to the corresponding `value` if no label is provided. */
  "labels": _LEVEL_1["_select3_labels"] as RetoolArrayWrapper<["select3","labels"], typeof _LEVEL_1["_select3_labels"], 3>,
  /** A list of tooltips for each item, by index. */
  "tooltipByIndex": _LEVEL_1["_select3_tooltipByIndex"] as RetoolArrayWrapper<["select3","tooltipByIndex"], typeof _LEVEL_1["_select3_tooltipByIndex"], 3>,
  /** A list of colors for each item, by index. */
  "colorByIndex": _LEVEL_1["_select3_colorByIndex"] as RetoolArrayWrapper<["select3","colorByIndex"], typeof _LEVEL_1["_select3_colorByIndex"], 3>,
  /** A list of values to use as fallback text for each option. Only the first two characters are displayed. If multiple words are provided, the first letter of each word is used. */
  "fallbackTextByIndex": _LEVEL_1["_select3_fallbackTextByIndex"] as RetoolArrayWrapper<["select3","fallbackTextByIndex"], typeof _LEVEL_1["_select3_fallbackTextByIndex"], 3>,
  /** The source data for the component. */
  "data": _LEVEL_1["_select3_data"] as RetoolArrayWrapper<["select3","data"], typeof _LEVEL_1["_select3_data"], 3>,
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
  "formDataKey": "select3",
  /** The additional text to display with the label. */
  "labelCaption": "",
  /** The label width, in the unit specified in `labelWidthUnit`. */
  "labelWidth": 33,
  /**  */
  "deprecatedLabels": _LEVEL_1["_select3_deprecatedLabels"] as RetoolArrayWrapper<["select3","deprecatedLabels"], typeof _LEVEL_1["_select3_deprecatedLabels"], 0>,
  /** The text to display in the input field when empty. */
  "placeholder": "Select Location",
  /** The adornment size. */
  "itemAdornmentSize": "auto",
  /** The text to display as a label for the input field. */
  "label": "Location:",
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
  "disabledValues": _LEVEL_1["_select3_disabledValues"] as RetoolArrayWrapper<["select3","disabledValues"], typeof _LEVEL_1["_select3_disabledValues"], 0>,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
