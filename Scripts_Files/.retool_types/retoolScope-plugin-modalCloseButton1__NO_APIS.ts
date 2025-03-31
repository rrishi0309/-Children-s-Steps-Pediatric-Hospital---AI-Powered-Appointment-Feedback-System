const _LEVEL_1 = {
  "_modalCloseButton1_events": [{
      "_selector": ["modalCloseButton1","events","0"] as const,
      "event": "click",
      "type": "widget",
      "method": "setHidden",
      "pluginId": "modalFrame1",
      "params": {
        "_selector": ["modalCloseButton1","events","0","params"] as const,
        /** Whether the component is visible. */
        "hidden": true
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
}
const modalCloseButton1 = {
  "_selector": ["modalCloseButton1"] as const,
  "_isPlugin": true,
  "id": "modalCloseButton1",
  "pluginType": "ButtonWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "right",
  "events": _LEVEL_1["_modalCloseButton1_events"] as RetoolArrayWrapper<["modalCloseButton1","events"], typeof _LEVEL_1["_modalCloseButton1_events"], 1>,
  /** Whether the button submits the form specified in `submitTargetId` on click. */
  "submit": false,
  /** The form to submit when `submit` is `true`. */
  "submitTargetId": "",
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether the component has an enabled **Click** event handler. */
  "clickable": true,
  /** The icon to display after the primary content. */
  "iconAfter": "",
  /** Whether the component is visible. */
  "hidden": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** An accessible description of the component for screen readers. */
  "ariaLabel": "Close",
  /** The primary text content. */
  "text": "",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  "style": {
    "_selector": ["modalCloseButton1","style"] as const,
    "border": "success"
  } as const,
  /** Whether content can wrap to multiple lines. */
  "allowWrap": true,
  /** The current variant used to style the component. */
  "styleVariant": "outline",
  /** The icon to display before the primary content. */
  "iconBefore": "bold/interface-delete-1",
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The position of the loading indicator if `loading` is `true`. */
  "loaderPosition": "auto",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
