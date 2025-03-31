const _LEVEL_1 = {
  "_insert_query_feedback_changeset": [{
      "_selector": ["insert_query_feedback","changeset","0"] as const,
      "key": "feedback_name",
      "value": ""
    } as const,{
      "_selector": ["insert_query_feedback","changeset","1"] as const,
      "key": "feedback_rating",
      "value": "4"
    } as const,{
      "_selector": ["insert_query_feedback","changeset","2"] as const,
      "key": "feedback_type",
      "value": ""
    } as const,{
      "_selector": ["insert_query_feedback","changeset","3"] as const,
      "key": "feedback_message",
      "value": ""
    } as const] as const,
}
const insert_query_feedback = {
  "_selector": ["insert_query_feedback"] as const,
  "_isPlugin": true,
  "id": "insert_query_feedback",
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
  "query": "INSERT INTO \"feedback_neuralnexus\" (\n    \"feedback_name\",\n    \"feedback_rating\",\n    \"feedback_type\",\n    \"feedback_message\"\n  )\nVALUES\n  (\n    ,\n    4,\n    ,\n    \n  );",
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
  "editorMode": "gui",
  /** How long the query took to execute */
  "queryRunTime": null,
  "actionType": "INSERT",
  "changesetObject": ", 4, , ",
  "shouldUseLegacySql": false,
  "offlineOptimisticResponse": null,
  "errorTransformer": "return data.error",
  /** The time in milliseconds when the query finished executing. */
  "finished": null,
  "databaseNameOverride": "",
  "confirmationMessage": null,
  "isFetching": false,
  "changeset": _LEVEL_1["_insert_query_feedback_changeset"] as RetoolArrayWrapper<["insert_query_feedback","changeset"], typeof _LEVEL_1["_insert_query_feedback_changeset"], 4>,
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
  "isMultiplayerEdited": false,
  "tableName": "feedback_neuralnexus",
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
