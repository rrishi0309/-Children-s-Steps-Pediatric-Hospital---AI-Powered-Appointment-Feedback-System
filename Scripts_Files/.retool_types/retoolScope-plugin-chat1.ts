const _LEVEL_1 = {
  "_chat1_data": [] as const,
  "_chat1_messageHistory": [] as const,
  "_chat1_events": [{
      "_selector": ["chat1","events","0"] as const,
      "type": "util",
      "waitMs": 0,
      "waitType": "debounce",
      "event": "clickAction",
      "method": "copyToClipboard",
      "pluginId": "chat1",
      "targetId": "1a",
      "params": {
        "_selector": ["chat1","events","0","params"] as const,
        /** The current value. */
        "value": undefined
      } as const
    } as const,{
      "_selector": ["chat1","events","1"] as const,
      "type": "widget",
      "waitMs": 0,
      "waitType": "debounce",
      "event": "clickHeader",
      "method": "exportData",
      "pluginId": "chat1",
      "targetId": "2b"
    } as const,{
      "_selector": ["chat1","events","2"] as const,
      "type": "widget",
      "waitMs": 0,
      "waitType": "debounce",
      "event": "clickHeader",
      "method": "clearHistory",
      "pluginId": "chat1",
      "targetId": "3c"
    } as const] as const,
}
const chat1 = {
  "_selector": ["chat1"] as const,
  "_isPlugin": true,
  "id": "chat1",
    /**
  * Set the current value.
  * @example setValue('Hello world')
  * @param value
  **/
  setValue: (value: boolean | string | number | void): unknown => undefined as unknown,
  /**
  * Clear the current value.
  **/
  clearValue: (): unknown => undefined as unknown,
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
  * Set showHeader value for the container
  * @example setshowHeader(false)
  * @param showHeader
  **/
  setShowHeader: (showHeader: boolean): unknown => undefined as unknown,
  /**
  * Set the `hidden` value to toggle whether the component is visible. Defaults to `true` without a parameter.
  * @param hidden
  **/
  setHidden: (hidden: boolean): unknown => undefined as unknown,
  /**
  * Reset `value` to the default value.
  **/
  resetValue: (): unknown => undefined as unknown,
  /**
  * Exports `data` as a file in a CSV, TSV, JSON, or Excel format.
  * @param options
  * @param options.fileName The downloaded file's name without an extension.
  * @param options.fileType
  **/
  /**
  * Delete all messages in the chat history. Works only when chatting with AI.
  **/
  clearHistory: (): unknown => undefined as unknown,
  /**
  * Submit a message to the chat.
  * @param options
  * @param options.message The message to send to the chat.
  * @param options.username The name of the sender. Works only when chatting with AI.
  **/
  sendMessage: (options: {message: string, username: string}): unknown => undefined as unknown,
  "pluginType": "ChatWidget",
  /** Whether to disable the input area and submit button. */
  "disableSubmit": false,
  /** Whether to display text when there are no messages in the chat. */
  "showEmptyState": true,
  /** The size of the avatar image, in pixels. */
  "avatarImageSize": 32,
  /** The name of the assistant. */
  "assistantName": "Ken AI",
  /** Whether the component is visible. */
  "hidden": false,
  /** The source data for the component. */
  "data": _LEVEL_1["_chat1_data"] as RetoolArrayWrapper<["chat1","data"], typeof _LEVEL_1["_chat1_data"], 0>,
  /** Whether to display a header. */
  "showHeader": true,
  /** The title to display when there are no messages in the chat. */
  "emptyTitle": "No messages here yet",
  /** The avatar source URL. */
  "avatarSrc": "",
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** A list of messages passed to the query. */
  "messageHistory": _LEVEL_1["_chat1_messageHistory"] as RetoolArrayWrapper<["chat1","messageHistory"], typeof _LEVEL_1["_chat1_messageHistory"], 0>,
  /** The description to display when there are no messages in the chat. */
  "emptyDescription": "Send a message to chat with AI",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The last message sent by the user. */
  "lastMessage": "",
  /** The current value. */
  "value": "",
  "style": {
    "_selector": ["chat1","style"] as const,
    "background": "automatic"
  } as const,
  /** The avatar icon to display. */
  "avatarIcon": "",
  /** The text to display in the input field when empty. */
  "placeholder": "Feel free to message me",
  /** The ID of the query to send `messageHistory` to */
  "queryTargetId": "chat1_query1",
  /** Whether to display the avatar. */
  "showAvatar": true,
  /** Last message sent by the AI */
  "lastResponse": "",
  /** The title of the chat widget */
  "title": "Chat",
  "events": _LEVEL_1["_chat1_events"] as RetoolArrayWrapper<["chat1","events"], typeof _LEVEL_1["_chat1_events"], 3>,
  /** Whether to display a timestamp. */
  "showTimestamp": true,
  /** The fallback text to display if there is no image or icon. Only the first two characters are displayed. If multiple words are provided, the first letter of each word is used. */
  "avatarFallback": "Rishi Ramesh",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
