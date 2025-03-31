const _LEVEL_1 = {
  "_container8_viewKeys": ["View 1"] as const,
  "_container8_views": [{
      "_selector": ["container8","views","0"] as const,
      "key": "View 1",
      "label": "",
      "tooltip": "",
      /** Whether the component is visible. */
      "hidden": false,
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      "icon": "",
      "iconPosition": "left"
    } as const] as const,
}
const container8 = {
  "_selector": ["container8"] as const,
  "_isPlugin": true,
  "id": "container8",
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
  * Set the current view of the container by key. No-op if the key is not valid.
  * @example setCurrentView("View 1")
  * @param viewKey
  **/
  setCurrentView: (viewKey: boolean | string | number | void): unknown => undefined as unknown,
  /**
  * Set the current view of the container by index. No-op if the index is out of bounds.
  * @example setCurrentViewIndex(1)
  * @param viewIndex
  **/
  setCurrentViewIndex: (viewIndex: number): unknown => undefined as unknown,
  /**
  * Show the previous view of the container. Does nothing if the current view is the first view.
  * @example showPreviousView()
  * @param wrap
  **/
  showPreviousView: (wrap: boolean | void): unknown => undefined as unknown,
  /**
  * Show the previous view of the container. Does nothing if the current view is the first view.
  * @example showPreviousVisibleView()
  * @param wrap
  **/
  showPreviousVisibleView: (wrap: boolean | void): unknown => undefined as unknown,
  /**
  * Show the next view of the container. Does nothing if the current view is the last view.
  * @example showNextView()
  * @param wrap
  **/
  showNextView: (wrap: boolean | void): unknown => undefined as unknown,
  /**
  * Show the next visible view of the container. Does nothing if the current view is the last view.
  * @example showNextVisibleView()
  * @param wrap
  **/
  showNextVisibleView: (wrap: boolean | void): unknown => undefined as unknown,
  "pluginType": "ContainerWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "static",
  /** An array of all view keys */
  "viewKeys": _LEVEL_1["_container8_viewKeys"] as RetoolArrayWrapper<["container8","viewKeys"], typeof _LEVEL_1["_container8_viewKeys"], 1>,
  /** The key of the currently selected view */
  "currentViewKey": "View 1",
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether the component has an enabled **Click** event handler. */
  "clickable": false,
  /** The amount of padding used within the header. */
  "headerPadding": "4px 12px",
  /** Whether to show the border above the footer area. */
  "showFooterBorder": true,
  /** Whether the container is in full bleed mode, where it can only contain a single component which expands to fit the available space. */
  "enableFullBleed": false,
  /** Whether to show the border around the component. */
  "showBorder": true,
  /** Whether the component is visible. */
  "hidden": false,
  /** Whether to display the header area of the component. */
  "showHeader": false,
  /** Whether to display a loading indicator whenever nested components are fetching data. */
  "hoistFetching": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Settings for each view. All properties except `key` are used by linked components that control this container, such as Tabs. */
  "views": _LEVEL_1["_container8_views"] as RetoolArrayWrapper<["container8","views"], typeof _LEVEL_1["_container8_views"], 1>,
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The amount of padding used within the container. */
  "padding": "12px",
  "style": {
    "_selector": ["container8","style"] as const,
    "boxShadow": "highElevation"
  } as const,
  /** The index of the currently selected view */
  "currentViewIndex": 0,
  /** The transition animation to use when switching views */
  "transition": "none",
  /** Whether to show the border under the header area. */
  "showHeaderBorder": true,
  /** The amount of padding used within the footer. */
  "footerPadding": "4px 12px",
  /** Whether to display the footer area of the component. */
  "showFooter": false,
  /** Whether the component is currently hovered. */
  "hovered": false,
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The overflow behavior when the contents exceeds the height of the component. Either `scroll` to display a scrollbar or `hidden` to clip the contents. */
  "overflowType": "scroll",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false,
  /** Whether to display the body of the component if `heightType` is `auto`. */
  "showBody": true
} as const
