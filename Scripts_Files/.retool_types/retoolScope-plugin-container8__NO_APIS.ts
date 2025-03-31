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
