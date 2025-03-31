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
  * Set showBody value for the container
  * @example setshowBody(false)
  * @param showBody
  **/
  setShowBody: (showBody: boolean): unknown => undefined as unknown,
  /**
  * Set showHeader value for the container
  * @example setshowHeader(false)
  * @param showHeader
  **/
  setShowHeader: (showHeader: boolean): unknown => undefined as unknown,
  /**
  * Set showFooter value for the container
  * @example setshowFooter(false)
  * @param showFooter
  **/
  setShowFooter: (showFooter: boolean): unknown => undefined as unknown,
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
  * Submit the form
  * @example `form.submit()`
  **/
  submit: (): unknown => undefined as unknown,
  /**
  * Set the values of all child inputs
  * @example `form.setData({ input1: "abc" })`
  * @param data
  **/
  setData: (data: any): unknown => undefined as unknown,
  /**
  * Clear the current values of all child components.
  * @example `form.clear()`
  **/
  clear: (): unknown => undefined as unknown,
  /**
  * Reset all child inputs with `formDataKey` to their default values or clears them if no default value is set
  * @example `form.reset()`
  **/
  reset: (): unknown => undefined as unknown,
  /**
  * Validate the form.
  * @example `form.validate()`
  **/
  validate: (): unknown => undefined as unknown,
  /**
  * Clear the validation state of the form.
  * @example `form.clearValidation()`
  **/
  clearValidation: (): unknown => undefined as unknown,
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
