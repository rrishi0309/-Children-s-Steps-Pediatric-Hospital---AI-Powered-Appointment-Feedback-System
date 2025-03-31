const formButton1 = {
  "_selector": ["formButton1"] as const,
  "_isPlugin": true,
  "id": "formButton1",
  "pluginType": "ButtonWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "stretch",
  /** Whether the button submits the form specified in `submitTargetId` on click. */
  "submit": true,
  /** The form to submit when `submit` is `true`. */
  "submitTargetId": "form2",
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether the component has an enabled **Click** event handler. */
  "clickable": false,
  /** The icon to display after the primary content. */
  "iconAfter": "",
  /** Whether the component is visible. */
  "hidden": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** An accessible description of the component for screen readers. */
  "ariaLabel": "",
  /** The primary text content. */
  "text": "Submit",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** Whether content can wrap to multiple lines. */
  "allowWrap": true,
  /** The current variant used to style the component. */
  "styleVariant": "solid",
  /** The icon to display before the primary content. */
  "iconBefore": "",
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The position of the loading indicator if `loading` is `true`. */
  "loaderPosition": "auto",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
