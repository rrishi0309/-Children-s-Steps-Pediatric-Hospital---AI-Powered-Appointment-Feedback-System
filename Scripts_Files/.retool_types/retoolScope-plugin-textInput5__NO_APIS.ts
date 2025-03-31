const _LEVEL_1 = {
  "_textInput5_events": [{
      "_selector": ["textInput5","events","0"] as const,
      "method": "setDisabled",
      "enabled": true,
      "params": {
        "_selector": ["textInput5","events","0","params"] as const,
        /** Whether user input, interaction, or selection is disabled. */
        "disabled": false
      } as const,
      "targetId": null,
      "pluginId": "formButton2",
      "waitType": "debounce",
      "event": "change",
      "type": "widget",
      "waitMs": 0
    } as const,{
      "_selector": ["textInput5","events","1"] as const,
      "method": "setDisabled",
      "enabled": false,
      "params": {
        "_selector": ["textInput5","events","1","params"] as const,
        /** Whether user input, interaction, or selection is disabled. */
        "disabled": true
      } as const,
      "targetId": null,
      "pluginId": "formButton2",
      "waitType": "debounce",
      "event": "change",
      "type": "widget",
      "waitMs": 0
    } as const] as const,
}
const textInput5 = {
  "_selector": ["textInput5"] as const,
  "_isPlugin": true,
  "id": "textInput5",
  "pluginType": "TextInputWidget2",
  /** The key used by a Form component to assign default values to input fields using `form.initialData`, and to construct the `form.data` property. */
  "formDataKey": "textInput5",
  /** The current value. */
  "value": "",
  /** Whether the component is visible. */
  "hidden": false,
  "customValidation": "Invalid password. Please enter your correct password",
  /** Whether the input is required for validation. */
  "required": true,
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether the value is read only and cannot be modified. */
  "readOnly": false,
  /** The maximum number of characters to allow. */
  "maxLength": null,
  /** The minimum number of characters to allow. */
  "minLength": null,
  /** A JavaScript regular expression, without forward slashes around the pattern, to validate input if `patternType` is `regex`.` */
  "pattern": "^u\\d+$",
  /** The pattern with which to validate the input. */
  "patternType": "",
  /** Whether to display a character count with the input field. */
  "showCharacterCount": false,
  /** Whether the current value has failed any validation rules. */
  "invalid": false,
  /** Whether the browser can perform spellcheck on the input field. */
  "spellCheck": false,
  /** The icon to display after the primary content. */
  "iconAfter": "",
  /** Whether the browser can perform autocomplete on the input field. */
  "autoComplete": false,
  /** Whether to enforce the maximum length of the input field by preventing the user from typing more. */
  "enforceMaxLength": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether to hide the validation message if the `invalid` is `true`. */
  "hideValidationMessage": false,
  /** The text to display before the primary content. */
  "textBefore": "",
  /** The validation message to display if the input is invalid. */
  "validationMessage": "",
  /** The text to display after the primary content. */
  "textAfter": "",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** Whether to display a button to clear the current value of the input field. */
  "showClear": true,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The horizontal alignment of the label. */
  "labelAlign": "left",
  /** The additional text to display with the label. */
  "labelCaption": "",
  /** The label width, in the unit specified in `labelWidthUnit`. */
  "labelWidth": 33,
  /** The data type of the input field for browsers to autofill if `autoComplete` is `true`. */
  "autoFill": "",
  /** The text to display in the input field when empty. */
  "placeholder": "Enter your password",
  /** The text to display as a label for the input field. */
  "label": "Password",
  /** The specified units for `labelWidth`. */
  "labelWidthUnit": "%",
  /** The icon to display before the primary content. */
  "iconBefore": "",
  /** The tooltip text to display below the input field on focus. */
  "inputTooltip": "",
  "events": _LEVEL_1["_textInput5_events"] as RetoolArrayWrapper<["textInput5","events"], typeof _LEVEL_1["_textInput5_events"], 2>,
  /** Whether the browser can automatically capitalize text in the input field when using virtual or on-screen keyboards. */
  "autoCapitalize": "none",
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The position of the label relative to the input field. */
  "labelPosition": "top",
  /** Whether the label can wrap to multiple lines. */
  "labelWrap": false,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
