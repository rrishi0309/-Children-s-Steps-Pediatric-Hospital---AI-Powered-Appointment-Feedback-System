const _LEVEL_1 = {
  "_table3_sortArray": [{
      "_selector": ["table3","sortArray","0"] as const,
      "columnId": "c8541",
      "direction": "asc"
    } as const] as const,
  "_table3_groupByColumns": [] as const,
  "_table3_events": [{
      "_selector": ["table3","events","0"] as const,
      "event": "clickToolbar",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "select_feedback_all",
      "targetId": "4d",
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["table3","events","1"] as const,
      "event": "clickToolbar",
      "type": "util",
      "method": "exportData",
      "pluginId": "",
      "targetId": "3c",
      "params": {
        "_selector": ["table3","events","1","params"] as const,
        "fileType": "xlsx",
        "options": {
          "_selector": ["table3","events","1","params","options"] as const,
          "sheetName": "Summary_Feedback"
        } as const,
        "fileName": "summary_feedback_3/30/2025"
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const,{
      "_selector": ["table3","events","2"] as const,
      "event": "save",
      "type": "datasource",
      "method": "trigger",
      "pluginId": "select_feedback_stars",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
  "_table3_newRows": [] as const,
}
const table3 = {
  "_selector": ["table3"] as const,
  "_isPlugin": true,
  "id": "table3",
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
  * Clear `changesetArray`, `changesetObject`, and `newRows` values.
  **/
  clearChangeset: (): unknown => undefined as unknown,
  /**
  * Clear the filter with the specified ID. This method will only work when called on a visible Table.
  * @param id The ID associated with the filter to clear.
  **/
  clearFilter: (id: any): unknown => undefined as unknown,
  /**
  * Resets the Table to its default filters. To clear all filters, use `clearFilterStack` instead.
  **/
  resetFilterStack: (): unknown => undefined as unknown,
  /**
  * Clears all filters. To reset to the default filters, use `resetFilterStack` instead.
  **/
  clearFilterStack: (): unknown => undefined as unknown,
  /**
  * Clear the currently selected rows. This method will only work when called on a visible Table.
  **/
  clearSelection: (): unknown => undefined as unknown,
  /**
  * Returns the currently displayed data in Table. Respects filtering and sorting.
  * @param options
  * @param options.includeHiddenColumns
  **/
  getDisplayedData: (options: {includeHiddenColumns: boolean}): unknown => undefined as unknown,
  /**
  * Exports table data as a file in a CSV, TSV, JSON, or Excel format.
  * @param options
  * @param options.fileName The downloaded file's name without an extension.
  * @param options.fileType
  * @param options.includeHiddenColumns
  **/
  /**
  * Trigger all queries that provide data for the table.
  **/
  refresh: (): unknown => undefined as unknown,
  /**
  * Sets filters and operator to apply to the Table This method will only work when called on a visible Table.
  * @example table.setFilterStack({ filters: [{ columnId: 'id', operator: '<', value: 20 }, { columnId: 'id', operator: '=', value: 50 }], operator: 'or' })
  * @param filterStack
  * @param filterStack.filters An array of filters to apply to the data representing the column ID to target, the operator, the targeted value, and an optional ID identifying the filter.
  * @param filterStack.operator
  **/
  setFilterStack: (filterStack: {filters: any, operator: 'and'|'or'}): unknown => undefined as unknown,
  /**
  * Set the current page. This method will only work when called on a visible Table.
  * @param page The page number to jump to.
  **/
  setPage: (page: any): unknown => undefined as unknown,
  /**
  * Reset the `sortArray` value and clear sorting applied to the table. This method will only work when called on a visible Table.
  **/
  clearSort: (): unknown => undefined as unknown,
  /**
  * Selects the previous row based on the visual order in the Table. This method will only work when called on a visible Table.
  **/
  selectPreviousRow: (): unknown => undefined as unknown,
  /**
  * Selects the next row based on the visual order in the Table. This method will only work when called on a visible Table.
  **/
  selectNextRow: (): unknown => undefined as unknown,
  /**
  * Update the value of the linked [Filter](/filter) component.
  * @param filterStack
  * @param filterStack.filters An array of filters to apply to the data representing the column ID to target, the operator, the targeted value, and an optional ID identifying the filter.
  * @param filterStack.operator
  **/
  updateLinkedFilter: (filterStack: {filters: any, operator: 'and'|'or'}): unknown => undefined as unknown,
  /**
  * Update the columns that Table should group by. Accepts a column id, an object of type `{ columnId: string, sortDirection: 'asc' | 'desc' }`, or an array of column ids or objects. Sort direction defaults to ascending.
  * @param grouping The columns the Table should group by. Accepts a column id, an object of type `{ columnId: string, sortDirection: 'asc' | 'desc' }`, or an array of column ids or objects. Sort direction defaults to ascending.
  **/
  setGrouping: (grouping: any): unknown => undefined as unknown,
  /**
  * Get the current column ordering. This method will only work when called on a visible Table.
  **/
  getColumnOrdering: (): unknown => undefined as unknown,
  /**
  * Set the current column ordering. This method will only work when called on a visible Table.
  **/
  setColumnOrdering: (): unknown => undefined as unknown,
  /**
  * Add a filter to the current filter stack. Updates an existing filter if a corresponding ID is provided. This method will only work when called on a visible Table.
  * @param filter
  * @param filter.id The ID associated with the filter to update. If none is provided, the filter will be added to the end of the Table's existing filter stack
  * @param filter.columnId The ID of the column to filter on
  * @param filter.operator The operator to compare cell values against
  * @param filter.value The value to compare cell values against
  **/
  setFilter: (filter: {id: any, columnId: 'submitted_at'|'patient_name'|'service_type'|'location'|'appointment_time'|'message', operator: '<'|'<='|'>'|'>='|'='|'!='|'is'|'isNot'|'includes'|'doesNotInclude'|'isTrue'|'isFalse'|'isEmpty'|'isNotEmpty'|'intersects'|'isOneOf'|'isNoneOf'|'isBefore'|'isAfter', value: any}): unknown => undefined as unknown,
  /**
  * Sort rows by the specified column and direction. Optionally provide an array of objects to sort by multiple columns. This method will only work when called on a visible Table.
  * @example `table.setSort({ columnId: "name", direction: "asc" })` or `table.setSort([{ columnId: "name", direction: "asc" }, { columnId: "role", direction: "desc" }])`
  * @param sort
  * @param sort.columnId The ID of the column to sort on
  * @param sort.direction
  **/
  setSort: (sort: {columnId: 'submitted_at'|'patient_name'|'service_type'|'location'|'appointment_time'|'message', direction: 'asc'|'desc'}): unknown => undefined as unknown,
  /**
  * Expands rows with the specified indexes. This method will only work when called on a visible Table.
  * @param options
  * @param options.mode Controls how rows are targeted.
  * 
  * `index` will target a specific index.
  * 
  * `key` will target the row of the first matching item in the Table's configured primary key column.
  * 
  * `all` will target all rows.
  * @param options.indexType How the index will be interpreted by the Table.
  * 
  * `display` will target the row at the given index(es) in the table's displayed order.
  * 
  * `data` will target the row corresponding to the data at the given index(es), regardless of the table's displayed order.
  * @param options.index When the row is targeted by index, this will be the value used to find matching row(s). Should be an array of values.
  * @param options.key When the row is targeted by key, this will be the value used to find matching row(s). Should be an array of values.
  **/
  expandRows: (options: {mode: 'index'|'key'|'all', indexType: 'display'|'data', index: any, key: any}): unknown => undefined as unknown,
  /**
  * Collapses rows with the specified indexes. This method will only work when called on a visible Table.
  * @param options
  * @param options.mode Controls how rows are targeted.
  * 
  * `index` will target a specific index.
  * 
  * `key` will target the row of the first matching item in the Table's configured primary key column.
  * 
  * `all` will target all rows.
  * @param options.indexType How the index will be interpreted by the Table.
  * 
  * `display` will target the row at the given index(es) in the table's displayed order.
  * 
  * `data` will target the row corresponding to the data at the given index(es), regardless of the table's displayed order.
  * @param options.index When the row is targeted by index, this will be the value used to find matching row(s). Should be an array of values.
  * @param options.key When the row is targeted by key, this will be the value used to find matching row(s). Should be an array of values.
  **/
  collapseRows: (options: {mode: 'index'|'key'|'all', indexType: 'display'|'data', index: any, key: any}): unknown => undefined as unknown,
  /**
  * Scrolls to a specific row. This method will only work when called on a visible Table.
  * @param options
  * @param options.mode Controls how rows are targeted.
  * 
  * `index` will target a specific index.
  * 
  * `key` will target the row of the first matching item in the Table's configured primary key column.
  * 
  * `all` will target all rows.
  * @param options.indexType How the index will be interpreted by the Table.
  * 
  * `display` will target the row at the given index in the table's displayed order.
  * 
  * `data` will target the row corresponding to the data at the given index, regardless of the table's displayed order.
  * @param options.index When the row is targeted by index, this will be the value used to find a matching row.
  * @param options.key When the row is targeted by key, this will be the value used to find a matching row.
  **/
  scrollToRow: (options: {mode: 'index'|'key'|'all', indexType: 'display'|'data', index: number | void, key: number | void}): unknown => undefined as unknown,
  /**
  * Selects a specific row. This method will only work when called on a visible Table.
  * @param options
  * @param options.mode Controls how rows are targeted.
  * 
  * `index` will target a specific index.
  * 
  * `key` will target the row of the first matching item in the Table's configured primary key column.
  * 
  * `all` will target all rows.
  * @param options.indexType How the index will be interpreted by the Table.
  * 
  * `display` will target the row at the given index in the table's displayed order.
  * 
  * `data` will target the row corresponding to the data at the given index, regardless of the table's displayed order.
  * @param options.index When the row is targeted by index, this will be the value used to find a matching row.
  * @param options.key When the row is targeted by key, this will be the value used to find a matching row.
  **/
  selectRow: (options: {mode: 'index'|'key'|'all', indexType: 'display'|'data', index: number | void, key: number | void}): unknown => undefined as unknown,
  "pluginType": "TableWidget2",
  /** The search term currently filtering items. */
  "searchTerm": "",
  /** The type of search to perform. */
  "searchMode": "disabled",
  /** A list of column IDs and sort direction. */
  "sortArray": _LEVEL_1["_table3_sortArray"] as RetoolArrayWrapper<["table3","sortArray"], typeof _LEVEL_1["_table3_sortArray"], 1>,
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** Whether to automatically set column widths */
  "autoColumnWidth": false,
  /** Whether to perform case-sensitive filtering. */
  "caseSensitiveFiltering": false,
  /** Which columns the Table is currently grouped by. */
  "groupByColumns": _LEVEL_1["_table3_groupByColumns"] as RetoolArrayWrapper<["table3","groupByColumns"], typeof _LEVEL_1["_table3_groupByColumns"], 0>,
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
    "_selector": ["table3","style"] as const,
    "boxShadow": "highElevation"
  } as const,
  /** The maximum height of the overflow actions overlay. */
  "overflowActionsOverlayMaxHeight": null,
  "events": _LEVEL_1["_table3_events"] as RetoolArrayWrapper<["table3","events"], typeof _LEVEL_1["_table3_events"], 3>,
  /** An array of the newly added rows. Each new row is an object with an entry for each edited cell. */
  "newRows": _LEVEL_1["_table3_newRows"] as RetoolArrayWrapper<["table3","newRows"], typeof _LEVEL_1["_table3_newRows"], 0>,
  /** The message to display if no value is set. */
  "emptyMessage": "No rows found",
  /** The current pagination state. Includes `currentPage`, `offset`, and `pageSize` values, and whether `serverPaginated` is `true`. */
  "pagination": {
    "_selector": ["table3","pagination"] as const,
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
