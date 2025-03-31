const _LEVEL_1 = {
  "_select1_imageByIndex": ["","","",""] as const,
  "_select1_iconByIndex": ["","","",""] as const,
  "_select1_values": ["UI/UX","AI Output","Suggestions","General Comment"] as const,
  "_select1_captionByIndex": ["","","",""] as const,
  "_select1_disabledByIndex": [false,false,false,false] as const,
  "_select1_hiddenByIndex": [false,false,false,false] as const,
  "_select1_labels": ["","","",""] as const,
  "_select1_tooltipByIndex": ["","","",""] as const,
  "_select1_colorByIndex": ["","","",""] as const,
  "_select1_fallbackTextByIndex": ["","","",""] as const,
  "_select1_data": [{
      "_selector": ["select1","data","0"] as const,
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
      "value": "UI/UX"
    } as const,{
      "_selector": ["select1","data","1"] as const,
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
      "value": "AI Output"
    } as const,{
      "_selector": ["select1","data","2"] as const,
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
      "value": "Suggestions"
    } as const,{
      "_selector": ["select1","data","3"] as const,
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
      "value": "General Comment"
    } as const] as const,
  "_select1_deprecatedLabels": [] as const,
  "_select1_disabledValues": [] as const,
}
const select1 = {
  "_selector": ["select1"] as const,
  "_isPlugin": true,
  "id": "select1",
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
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "static",
  /** A list of images for each item, by index. */
  "imageByIndex": _LEVEL_1["_select1_imageByIndex"] as RetoolArrayWrapper<["select1","imageByIndex"], typeof _LEVEL_1["_select1_imageByIndex"], 4>,
  /** Whether to display an icon next to a selected item. */
  "showSelectionIndicator": true,
  /** A list of icons for each item, by index. */
  "iconByIndex": _LEVEL_1["_select1_iconByIndex"] as RetoolArrayWrapper<["select1","iconByIndex"], typeof _LEVEL_1["_select1_iconByIndex"], 4>,
  /** A list of possible values. */
  "values": _LEVEL_1["_select1_values"] as RetoolArrayWrapper<["select1","values"], typeof _LEVEL_1["_select1_values"], 4>,
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
  "captionByIndex": _LEVEL_1["_select1_captionByIndex"] as RetoolArrayWrapper<["select1","captionByIndex"], typeof _LEVEL_1["_select1_captionByIndex"], 4>,
  /** A list of boolean values for each item, by index, that reflect whether they are disabled. */
  "disabledByIndex": _LEVEL_1["_select1_disabledByIndex"] as RetoolArrayWrapper<["select1","disabledByIndex"], typeof _LEVEL_1["_select1_disabledByIndex"], 4>,
  /** A list of boolean values for each item, by index, that reflect whether they are hidden. */
  "hiddenByIndex": _LEVEL_1["_select1_hiddenByIndex"] as RetoolArrayWrapper<["select1","hiddenByIndex"], typeof _LEVEL_1["_select1_hiddenByIndex"], 4>,
  /** A list of labels for each item. Falls back to the corresponding `value` if no label is provided. */
  "labels": _LEVEL_1["_select1_labels"] as RetoolArrayWrapper<["select1","labels"], typeof _LEVEL_1["_select1_labels"], 4>,
  /** A list of tooltips for each item, by index. */
  "tooltipByIndex": _LEVEL_1["_select1_tooltipByIndex"] as RetoolArrayWrapper<["select1","tooltipByIndex"], typeof _LEVEL_1["_select1_tooltipByIndex"], 4>,
  /** A list of colors for each item, by index. */
  "colorByIndex": _LEVEL_1["_select1_colorByIndex"] as RetoolArrayWrapper<["select1","colorByIndex"], typeof _LEVEL_1["_select1_colorByIndex"], 4>,
  /** A list of values to use as fallback text for each option. Only the first two characters are displayed. If multiple words are provided, the first letter of each word is used. */
  "fallbackTextByIndex": _LEVEL_1["_select1_fallbackTextByIndex"] as RetoolArrayWrapper<["select1","fallbackTextByIndex"], typeof _LEVEL_1["_select1_fallbackTextByIndex"], 4>,
  /** The source data for the component. */
  "data": _LEVEL_1["_select1_data"] as RetoolArrayWrapper<["select1","data"], typeof _LEVEL_1["_select1_data"], 4>,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** The type of search to perform. */
  "searchMode": "fuzzy",
  /** Whether to hide the validation message if the `invalid` is `true`. */
  "hideValidationMessage": false,
  /** The text to display before the primary content. */
  "textBefore": "",
  /** The current value. */
  "value": null,
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
  "formDataKey": "select1",
  /** The additional text to display with the label. */
  "labelCaption": "",
  /** The label width, in the unit specified in `labelWidthUnit`. */
  "labelWidth": 33,
  /**  */
  "deprecatedLabels": _LEVEL_1["_select1_deprecatedLabels"] as RetoolArrayWrapper<["select1","deprecatedLabels"], typeof _LEVEL_1["_select1_deprecatedLabels"], 0>,
  /** The text to display in the input field when empty. */
  "placeholder": "Select feedback type",
  /** The adornment size. */
  "itemAdornmentSize": "auto",
  /** The text to display as a label for the input field. */
  "label": "Type of Feedback:",
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
  "disabledValues": _LEVEL_1["_select1_disabledValues"] as RetoolArrayWrapper<["select1","disabledValues"], typeof _LEVEL_1["_select1_disabledValues"], 0>,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
