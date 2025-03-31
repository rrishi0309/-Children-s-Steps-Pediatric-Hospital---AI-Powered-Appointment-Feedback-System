const _LEVEL_1 = {
  "_button2_events": [{
      "_selector": ["button2","events","0"] as const,
      "event": "click",
      "type": "script",
      "method": "run",
      "pluginId": "",
      "targetId": null,
      "params": {
        "_selector": ["button2","events","0","params"] as const,
        "src": "utils.showNotification({\n  title: \"✅ Thanks!\",\n  description: \"Your feedback has been received.\",\n  notificationType: \"success\"\n});"
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["button2","events","1"] as const,
      "event": "click",
      "type": "widget",
      "method": "hide",
      "pluginId": "modalFrame1",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["button2","events","2"] as const,
      "event": "click",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "insert_query_feedback",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["button2","events","3"] as const,
      "event": "click",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "select_feedback_all",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["button2","events","4"] as const,
      "event": "click",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "select_feedback_stars",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
}
const button2 = {
  "_selector": ["button2"] as const,
  "_isPlugin": true,
  "id": "button2",
  "pluginType": "ButtonWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "stretch",
  "events": _LEVEL_1["_button2_events"] as RetoolArrayWrapper<["button2","events"], typeof _LEVEL_1["_button2_events"], 5>,
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
  "ariaLabel": "",
  /** The primary text content. */
  "text": "Send Feedback",
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
