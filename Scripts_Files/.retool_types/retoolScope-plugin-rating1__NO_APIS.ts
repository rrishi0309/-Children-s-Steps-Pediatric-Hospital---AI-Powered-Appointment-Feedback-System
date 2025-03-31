const rating1 = {
  "_selector": ["rating1"] as const,
  "_isPlugin": true,
  "id": "rating1",
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
