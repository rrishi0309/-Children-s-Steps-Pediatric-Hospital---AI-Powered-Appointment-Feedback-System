const dateTime1 = {
  "_selector": ["dateTime1"] as const,
  "_isPlugin": true,
  "id": "dateTime1",
    /**
  * Set the current value.
  * @example setValue('2021-10-08T00:00:00.000-0700')
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
  "pluginType": "DateTimeWidget",
  /** The current value. */
  "value": "2025-03-30T19:46:39.330-0600",
  /** The earliest date to allow. */
  "minDate": "",
  /** The step size for time options, in minutes. */
  "minuteStep": 15,
  /** Whether the value is read only and cannot be modified. */
  "readOnly": false,
  /** The icon to display after the primary content. */
  "iconAfter": "",
  /** The displayed time format. */
  "timeFormat": "",
  /** The displayed date format. */
  "dateFormat": "MMM d, yyyy",
  /** The text to display within the input field when empty. */
  "datePlaceholder": "MMM D, YYYY",
  /** The text to display in the input field when empty. */
  "timePlaceholder": "",
  /** The time zone (UTC offset) to encode in `value`. Uses the time zone reported by the browser if set to `local`. */
  "valueTimeZone": "",
  /** Whether the component is visible. */
  "hidden": false,
  "customValidation": "",
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether to hide the validation message if the `invalid` is `true`. */
  "hideValidationMessage": false,
  /** The text to display before the primary content. */
  "textBefore": "",
  /** Whether the input is required for validation. */
  "required": false,
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** The validation message to display if the input is invalid. */
  "validationMessage": "",
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
  "formDataKey": "dateTime1",
  /** The latest time to allow. */
  "maxTime": "",
  /** The additional text to display with the label. */
  "labelCaption": "",
  /** The latest date to allow. */
  "maxDate": "",
  /** The label width, in the unit specified in `labelWidthUnit`. */
  "labelWidth": 33,
  /** The text to display as a label for the input field. */
  "label": "Appointment Time:",
  /** The time zone (UTC offset) that applies to the display value. Uses the time zone reported by the browser if set to `local`. */
  "displayTimeZone": "",
  /** Whether to adjust the value and display value of time zones using `valueTimeZone` and `displayTimeZone` respectively. */
  "manageTimeZone": false,
  /** The selected value in the specified format. */
  "formattedValue": "Mar 30, 2025 7:46 PM",
  /** The specified units for `labelWidth`. */
  "labelWidthUnit": "%",
  /** The first day of the week, by index, with Sunday as `0`. */
  "firstDayOfWeek": 0,
  /** Whether the current value has failed any validation rules. */
  "invalid": false,
  /** The icon to display before the primary content. */
  "iconBefore": "bold/interface-calendar",
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The position of the label relative to the input field. */
  "labelPosition": "left",
  /** Whether the label can wrap to multiple lines. */
  "labelWrap": false,
  /** The earliest time to allow. */
  "minTime": "",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
