const _LEVEL_1 = {
  "_form3_events": [{
      "_selector": ["form3","events","0"] as const,
      "event": "submit",
      "type": "util",
      "method": "openPage",
      "pluginId": "",
      "targetId": null,
      "params": {
        "_selector": ["form3","events","0","params"] as const,
        "options": {
          "_selector": ["form3","events","0","params","options"] as const,
          "passDataWith": "urlParams"
        } as const,
        "pageName": "Feedback_Dashboard"
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["form3","events","1"] as const,
      "event": "submit",
      "type": "script",
      "method": "run",
      "pluginId": "",
      "targetId": null,
      "params": {
        "_selector": ["form3","events","1","params"] as const,
        "src": "utils.showNotification({\n  title: \"✅ Login Successful\",\n  description: `Welcome! You've been logged into the Admin Portal.`,\n  notificationType: \"success\"\n});\n\n// Optional: Navigate or set user state\n..."
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
}
const form3 = {
  "_selector": ["form3"] as const,
  "_isPlugin": true,
  "id": "form3",
  "pluginType": "FormWidget2",
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether to disable form submission. */
  "disableSubmit": false,
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** The amount of padding used within the header. */
  "headerPadding": "4px 12px",
  /** Whether to show the border above the footer area. */
  "showFooterBorder": true,
  /** Whether to reset input field values using `initialData` after form submission. */
  "resetAfterSubmit": false,
  /** Whether the **Submit** event handler is currently running. */
  "submitting": false,
  /** Whether the container is in full bleed mode, where it can only contain a single component which expands to fit the available space. */
  "enableFullBleed": false,
  /** Whether to show the border around the component. */
  "showBorder": true,
  /** Whether the component is visible. */
  "hidden": false,
  /** The data to populate as default values for input fields, by `formFieldKey`. */
  "initialData": "",
  /** The source data for the component. It contains a key-value list of all current input fields, by `formFieldKey`, and their current values. */
  "data": {
    "_selector": ["form3","data"] as const,
    "textInput5": "",
    "textInput6": ""
  } as const,
  /** Whether to display the header area of the component. */
  "showHeader": true,
  /** Whether to display a loading indicator whenever nested components are fetching data. */
  "hoistFetching": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The amount of padding used within the container. */
  "padding": "12px",
  /** Whether to show the border under the header area. */
  "showHeaderBorder": true,
  /** The amount of padding used within the footer. */
  "footerPadding": "4px 12px",
  /** Whether the current value has failed any validation rules. */
  "invalid": false,
  /** Whether to display the footer area of the component. */
  "showFooter": true,
  "events": _LEVEL_1["_form3_events"] as RetoolArrayWrapper<["form3","events"], typeof _LEVEL_1["_form3_events"], 2>,
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The overflow behavior when the contents exceeds the height of the component. Either `scroll` to display a scrollbar or `hidden` to clip the contents. */
  "overflowType": "scroll",
  /** Whether all input fields must be valid for the form to submit. If `valid` is `false` for any input field, the **Invalid** event handler is triggered instead. */
  "requireValidation": true,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false,
  /** Whether to display the body of the component if `heightType` is `auto`. */
  "showBody": true
} as const
