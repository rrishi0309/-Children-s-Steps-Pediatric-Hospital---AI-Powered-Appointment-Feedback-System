const _LEVEL_1 = {
  "_tabs1_data": [{
      "_selector": ["tabs1","data","0"] as const,
      /** The current value. */
      "value": "View 1",
      "label": "Salt Lake City",
      "tooltip": "",
      /** Whether the component is visible. */
      "hidden": false,
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      "icon": "",
      "iconPosition": "left"
    } as const,{
      "_selector": ["tabs1","data","1"] as const,
      /** The current value. */
      "value": "View 2",
      "label": "Provo",
      "tooltip": "",
      /** Whether the component is visible. */
      "hidden": false,
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      "icon": "",
      "iconPosition": "left"
    } as const,{
      "_selector": ["tabs1","data","2"] as const,
      /** The current value. */
      "value": "View 3",
      "label": "St. George",
      "tooltip": "",
      /** Whether the component is visible. */
      "hidden": false,
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      "icon": "",
      "iconPosition": "left"
    } as const] as const,
  "_tabs1_iconByIndex": ["","",""] as const,
  "_tabs1_values": ["View 1","View 2","View 3"] as const,
  "_tabs1_hiddenByIndex": [false,false,false] as const,
  "_tabs1_tooltipByIndex": ["","",""] as const,
  "_tabs1_labels": ["Salt Lake City","Provo","St. George"] as const,
  "_tabs1_iconPositionByIndex": ["left","left","left"] as const,
  "_tabs1_disabledByIndex": [false,false,false] as const,
}
const tabs1 = {
  "_selector": ["tabs1"] as const,
  "_isPlugin": true,
  "id": "tabs1",
  "pluginType": "TabsWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "static",
  /** Whether the component is linked to a container for navigation. */
  "navigateContainer": true,
  /** The ID of the Container component when `navigateContainer` is `true`. */
  "targetContainerId": "tabbedContainer1",
  /** The source data for the component. */
  "data": _LEVEL_1["_tabs1_data"] as RetoolArrayWrapper<["tabs1","data"], typeof _LEVEL_1["_tabs1_data"], 3>,
  /** A list of icons for each item, by index. */
  "iconByIndex": _LEVEL_1["_tabs1_iconByIndex"] as RetoolArrayWrapper<["tabs1","iconByIndex"], typeof _LEVEL_1["_tabs1_iconByIndex"], 3>,
  /** A list of possible values. */
  "values": _LEVEL_1["_tabs1_values"] as RetoolArrayWrapper<["tabs1","values"], typeof _LEVEL_1["_tabs1_values"], 3>,
  /** The horizontal alignment of the contents. */
  "alignment": "left",
  /** Whether the component is visible. */
  "hidden": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** The current value. */
  "value": "View 1",
  /** The currently selected value, by index. */
  "selectedIndex": 0,
  /** The currently selected item. */
  "selectedItem": {
    "_selector": ["tabs1","selectedItem"] as const,
    /** The current value. */
    "value": "View 1",
    "label": "Salt Lake City",
    "tooltip": "",
    /** Whether the component is visible. */
    "hidden": false,
    /** Whether user input, interaction, or selection is disabled. */
    "disabled": false,
    "icon": "",
    "iconPosition": "left"
  } as const,
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** A list of boolean values for each item, by index, that reflect whether they are hidden. */
  "hiddenByIndex": _LEVEL_1["_tabs1_hiddenByIndex"] as RetoolArrayWrapper<["tabs1","hiddenByIndex"], typeof _LEVEL_1["_tabs1_hiddenByIndex"], 3>,
  /** The current variant used to style the component. */
  "styleVariant": "pill",
  /** A list of tooltips for each item, by index. */
  "tooltipByIndex": _LEVEL_1["_tabs1_tooltipByIndex"] as RetoolArrayWrapper<["tabs1","tooltipByIndex"], typeof _LEVEL_1["_tabs1_tooltipByIndex"], 3>,
  /** A list of labels for each item. Falls back to the corresponding `value` if no label is provided. */
  "labels": _LEVEL_1["_tabs1_labels"] as RetoolArrayWrapper<["tabs1","labels"], typeof _LEVEL_1["_tabs1_labels"], 3>,
  /** The label of the currently selected value, by index. */
  "selectedLabel": "Salt Lake City",
  /** A list of icon positions for each item, by index, relative to labels. */
  "iconPositionByIndex": _LEVEL_1["_tabs1_iconPositionByIndex"] as RetoolArrayWrapper<["tabs1","iconPositionByIndex"], typeof _LEVEL_1["_tabs1_iconPositionByIndex"], 3>,
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** The line position. */
  "linePosition": "bottom",
  /** A list of boolean values for each item, by index, that reflect whether they are disabled. */
  "disabledByIndex": _LEVEL_1["_tabs1_disabledByIndex"] as RetoolArrayWrapper<["tabs1","disabledByIndex"], typeof _LEVEL_1["_tabs1_disabledByIndex"], 3>,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
