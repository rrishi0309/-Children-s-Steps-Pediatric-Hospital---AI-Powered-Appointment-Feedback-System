const _LEVEL_1 = {
  "_table1_sortArray": [{
      "_selector": ["table1","sortArray","0"] as const,
      "columnId": "c8541",
      "direction": "asc"
    } as const] as const,
  "_table1_groupByColumns": [] as const,
  "_table1_events": [{
      "_selector": ["table1","events","0"] as const,
      "event": "clickToolbar",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "select_feedback_all",
      "targetId": "4d",
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["table1","events","1"] as const,
      "event": "clickToolbar",
      "type": "util",
      "method": "exportData",
      "pluginId": "",
      "targetId": "3c",
      "params": {
        "_selector": ["table1","events","1","params"] as const,
        "fileType": "xlsx",
        "options": {
          "_selector": ["table1","events","1","params","options"] as const,
          "sheetName": "Summary_Feedback"
        } as const,
        "fileName": "summary_feedback_3/30/2025"
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["table1","events","2"] as const,
      "event": "save",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "select_feedback_stars",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
  "_table1_newRows": [] as const,
}
const table1 = {
  "_selector": ["table1"] as const,
  "_isPlugin": true,
  "id": "table1",
  "pluginType": "TableWidget2",
  /** The search term currently filtering items. */
  "searchTerm": "",
  /** The type of search to perform. */
  "searchMode": "disabled",
  /** A list of column IDs and sort direction. */
  "sortArray": _LEVEL_1["_table1_sortArray"] as RetoolArrayWrapper<["table1","sortArray"], typeof _LEVEL_1["_table1_sortArray"], 1>,
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** Whether to automatically set column widths */
  "autoColumnWidth": false,
  /** Whether to perform case-sensitive filtering. */
  "caseSensitiveFiltering": false,
  /** Which columns the Table is currently grouped by. */
  "groupByColumns": _LEVEL_1["_table1_groupByColumns"] as RetoolArrayWrapper<["table1","groupByColumns"], typeof _LEVEL_1["_table1_groupByColumns"], 0>,
  /** The minimum width of the overflow actions overlay. */
  "overflowActionsOverlayMinWidth": null,
  /** Whether the component is visible. */
  "hidden": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** A list of filters that currently apply and the operator to which they evaluate. */
  "filterStack": undefined,
  "style": {
    "_selector": ["table1","style"] as const,
    "boxShadow": "highElevation"
  } as const,
  /** The maximum height of the overflow actions overlay. */
  "overflowActionsOverlayMaxHeight": null,
  "events": _LEVEL_1["_table1_events"] as RetoolArrayWrapper<["table1","events"], typeof _LEVEL_1["_table1_events"], 3>,
  /** An array of the newly added rows. Each new row is an object with an entry for each edited cell. */
  "newRows": _LEVEL_1["_table1_newRows"] as RetoolArrayWrapper<["table1","newRows"], typeof _LEVEL_1["_table1_newRows"], 0>,
  /** The message to display if no value is set. */
  "emptyMessage": "No rows found",
  /** The current pagination state. Includes `currentPage`, `offset`, and `pageSize` values, and whether `serverPaginated` is `true`. */
  "pagination": {
    "_selector": ["table1","pagination"] as const,
    "currentPage": 0,
    "pageSize": 15,
    "serverPaginated": false
  } as const,
  /** The overflow behavior when the contents exceeds the height of the component. Either `scroll` to display a scrollbar or `hidden` to clip the contents. */
  "overflowType": "pagination",
  /** The currently selected cell. */
  "selectedCell": null,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
