const _LEVEL_1 = {
  "_modalCloseButton3_events": [{
      "_selector": ["modalCloseButton3","events","0"] as const,
      "event": "click",
      "type": "widget",
      "method": "setHidden",
      "pluginId": "modalFrame2",
      "params": {
        "_selector": ["modalCloseButton3","events","0","params"] as const,
        /** Whether the component is visible. */
        "hidden": true
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
}
const modalCloseButton3 = {
  "_selector": ["modalCloseButton3"] as const,
  "_isPlugin": true,
  "id": "modalCloseButton3",
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
  * Set the `hidden` value to toggle whether the component is visible. Defaults to `true` without a parameter.
  * @param hidden
  **/
  setHidden: (hidden: boolean): unknown => undefined as unknown,
  /**
  * Set the `disabled` value to toggle whether the input field is disabled. Defaults to `true` without a parameter.
  * @param disabled
  **/
  setDisabled: (disabled: boolean): unknown => undefined as unknown,
  "pluginType": "ButtonWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "right",
  "events": _LEVEL_1["_modalCloseButton3_events"] as RetoolArrayWrapper<["modalCloseButton3","events"], typeof _LEVEL_1["_modalCloseButton3_events"], 1>,
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
    "_selector": ["modalCloseButton3","style"] as const,
    "border": "transparent"
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
