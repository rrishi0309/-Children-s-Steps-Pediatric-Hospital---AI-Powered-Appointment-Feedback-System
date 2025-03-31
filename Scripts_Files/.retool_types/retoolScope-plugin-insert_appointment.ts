const insert_appointment = {
  "_selector": ["insert_appointment"] as const,
  "_isPlugin": true,
  "id": "insert_appointment",
    /**
  * Declare cached results invalid. Next request will retrieve fresh results.
  **/
  invalidateCache: (): unknown => undefined as unknown,
  /**
  * Trigger query run. Returns a Promise that resolves to the query's `.data` property.
  * @param options
  * @param options.onSuccess Function to call after query successfully returns.
  * @param options.onFailure Function to call on query failure.
  * @param options.additionalScope Additional context to pass to query.
  **/
  trigger: (options: {onSuccess: any, onFailure: any, additionalScope: any}): Promise<unknown> => undefined as unknown as Promise<unknown>,
  /**
  * Clear the `.data` and `.error` properties of the query.
  **/
  reset: (): unknown => undefined as unknown,
  "pluginType": "SqlQueryUnified",
  "queryRefreshTime": "",
  "streamResponse": false,
  "records": "",
  /** The time in milliseconds when the query was last received from the resource (not the cache). */
  "lastReceivedFromResourceAt": null,
  "isFunction": false,
  "databasePasswordOverride": "",
  "functionParameters": null,
  "queryDisabledMessage": "",
  /** Boolean indicating whether query results were returned from cache. */
  "servedFromCache": false,
  "offlineUserQueryInputs": "",
  "functionDescription": null,
  "successMessage": "",
  /** Boolean indicating whether this query is disabled. */
  "queryDisabled": "",
  "playgroundQuerySaveId": "latest",
  "workflowParams": null,
  "resourceNameOverride": "",
  /** Boolean indicating whether the query automatically runs when parameters change. */
  "runWhenModelUpdates": false,
  "workflowRunExecutionType": "sync",
  "showFailureToaster": true,
  "query": "INSERT INTO appointment_bookings (\n  patient_name,\n  service_type,\n  location,\n  appointment_time,\n  message\n)\nVALUES (\n  ,\n  ,\n  ,\n  2025-03-30T19:46:39.330-0600,\n  \n);",
  "playgroundQueryUuid": "",
  "playgroundQueryId": null,
  /** If the query encountered an error while running, this field will be populated with the error message. */
  "error": null,
  "workflowRunBodyType": "raw",
  "queryRunOnSelectorUpdate": false,
  "runWhenPageLoadsDelay": "",
  /** You can use the `.data` property to refer to the result of this query. */
  "data": null,
  "recordId": "",
  "isImported": false,
  "showSuccessToaster": true,
  "cacheKeyTtl": "",
  "filterBy": "",
  /** The time the query request was sent. */
  "requestSentTimestamp": null,
  "databaseHostOverride": "",
  "metadata": null,
  "editorMode": "sql",
  /** How long the query took to execute */
  "queryRunTime": null,
  "actionType": "",
  "changesetObject": "",
  "shouldUseLegacySql": false,
  "offlineOptimisticResponse": null,
  "errorTransformer": "return data.error",
  /** The time in milliseconds when the query finished executing. */
  "finished": null,
  "databaseNameOverride": "",
  "confirmationMessage": null,
  "isFetching": false,
  "changeset": "",
  "rawData": null,
  "queryTriggerDelay": 0,
  "resourceTypeOverride": null,
  "enableErrorTransformer": false,
  "databaseWarehouseOverride": "",
  "enableBulkUpdates": false,
  "showLatestVersionUpdatedWarning": false,
  "timestamp": 0,
  "enableTransformer": false,
  "showUpdateSetValueDynamicallyToggle": true,
  "overrideOrgCacheForUserCache": false,
  "bulkUpdatePrimaryKey": "",
  /** Boolean indicating whether this query auto runs on page load. */
  "runWhenPageLoads": false,
  "transformer": "return data",
  "events": null,
  "isMultiplayerEdited": false,
  "tableName": "",
  "queryTimeout": 10000,
  "workflowId": null,
  "requireConfirmation": false,
  "queryFailureConditions": "",
  "changesetIsObject": false,
  "enableCaching": false,
  "databaseUsernameOverride": "",
  "databaseRoleOverride": "",
  "shouldEnableBatchQuerying": false,
  "doNotThrowOnNoOp": false,
  "offlineQueryType": "None",
  "queryThrottleTime": 750,
  "updateSetValueDynamically": false,
  "notificationDuration": ""
} as const
