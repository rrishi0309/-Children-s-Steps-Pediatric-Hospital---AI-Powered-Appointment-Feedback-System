const query2 = {
  "_selector": ["query2"] as const,
  "_isPlugin": true,
  "id": "query2",
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
  "pluginType": "JavascriptQuery",
  "queryRefreshTime": "",
  "streamResponse": false,
  /** The time in milliseconds when the query was last received from the resource (not the cache). */
  "lastReceivedFromResourceAt": null,
  "isFunction": false,
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
  "query": "const message = chat2.messageHistory\n  ?.slice()\n  .reverse()\n  .find(m => m.role === \"assistant\" && m.content.includes(\"Confirming Appointment\"))?.content;\n\nif (!message) {\n  utils.showNotification({...",
  "playgroundQueryUuid": "",
  "playgroundQueryId": null,
  /** If the query encountered an error while running, this field will be populated with the error message. */
  "error": null,
  "workflowRunBodyType": "raw",
  "queryRunOnSelectorUpdate": false,
  "runWhenPageLoadsDelay": "",
  /** You can use the `.data` property to refer to the result of this query. */
  "data": null,
  "isImported": false,
  "showSuccessToaster": false,
  "cacheKeyTtl": "",
  /** The time the query request was sent. */
  "requestSentTimestamp": null,
  "metadata": null,
  /** How long the query took to execute */
  "queryRunTime": null,
  "changesetObject": "",
  "offlineOptimisticResponse": null,
  "errorTransformer": "return data.error",
  /** The time in milliseconds when the query finished executing. */
  "finished": null,
  "confirmationMessage": null,
  "isFetching": false,
  "changeset": "",
  "rawData": null,
  "queryTriggerDelay": 0,
  "resourceTypeOverride": null,
  "enableErrorTransformer": false,
  "showLatestVersionUpdatedWarning": false,
  "timestamp": 0,
  "enableTransformer": false,
  "showUpdateSetValueDynamicallyToggle": true,
  "overrideOrgCacheForUserCache": false,
  /** Boolean indicating whether this query auto runs on page load. */
  "runWhenPageLoads": false,
  "transformer": "return data",
  "queryTimeout": 10000,
  "workflowId": null,
  "requireConfirmation": false,
  "queryFailureConditions": "",
  "changesetIsObject": false,
  "enableCaching": false,
  "offlineQueryType": "None",
  "queryThrottleTime": 750,
  "updateSetValueDynamically": false,
  "notificationDuration": 4.5
} as const
