const rating1 = {
  "_selector": ["rating1"] as const,
  "_isPlugin": true,
  "id": "rating1",
    /**
  * Set the current value.
  * @example setValue(3.14)
  * @param value
  **/
  setValue: (value: string | number): unknown => undefined as unknown,
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
  "pluginType": "RatingWidget2",
  /** This determines the size of the Rating icon. */
  "size": "default",
  /** The maximum value to allow. */
  "max": 5,
  /** Whether the component is visible. */
  "hidden": false,
  "customValidation": "",
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether to hide the validation message if the `invalid` is `true`. */
  "hideValidationMessage": false,
  /** The current value. */
  "value": 4,
  /** Whether the input is required for validation. */
  "required": false,
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** The validation message to display if the input is invalid. */
  "validationMessage": "",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The horizontal alignment of the label. */
  "labelAlign": "left",
  /** The key used by a Form component to assign default values to input fields using `form.initialData`, and to construct the `form.data` property. */
  "formDataKey": "rating1",
  /** The additional text to display with the label. */
  "labelCaption": "",
  /** The label width, in the unit specified in `labelWidthUnit`. */
  "labelWidth": 33,
  /** The text to display as a label for the input field. */
  "label": "How helpful is this app?",
  /** The specified units for `labelWidth`. */
  "labelWidthUnit": "%",
  /** Whether the current value has failed any validation rules. */
  "invalid": false,
  /** The icons to display. */
  "icons": "stars",
  /** Whether to allow half values to be selected. */
  "allowHalf": false,
  /** The position of the label relative to the input field. */
  "labelPosition": "left",
  /** Whether the label can wrap to multiple lines. */
  "labelWrap": false,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
