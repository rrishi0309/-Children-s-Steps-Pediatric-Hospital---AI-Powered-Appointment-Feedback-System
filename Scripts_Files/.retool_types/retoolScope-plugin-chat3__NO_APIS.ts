const _LEVEL_1 = {
  "_chat3_data": [] as const,
  "_chat3_messageHistory": [] as const,
  "_chat3_events": [{
      "_selector": ["chat3","events","0"] as const,
      "type": "util",
      "waitMs": 0,
      "waitType": "debounce",
      "event": "clickAction",
      "method": "copyToClipboard",
      "pluginId": "chat3",
      "targetId": "1a",
      "params": {
        "_selector": ["chat3","events","0","params"] as const,
        /** The current value. */
        "value": undefined
      } as const
    } as const,{
      "_selector": ["chat3","events","1"] as const,
      "type": "widget",
      "waitMs": 0,
      "waitType": "debounce",
      "event": "clickHeader",
      "method": "exportData",
      "pluginId": "chat3",
      "targetId": "2b"
    } as const,{
      "_selector": ["chat3","events","2"] as const,
      "type": "widget",
      "waitMs": 0,
      "waitType": "debounce",
      "event": "clickHeader",
      "method": "clearHistory",
      "pluginId": "chat3",
      "targetId": "3c"
    } as const] as const,
}
const chat3 = {
  "_selector": ["chat3"] as const,
  "_isPlugin": true,
  "id": "chat3",
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
  "data": _LEVEL_1["_chat3_data"] as RetoolArrayWrapper<["chat3","data"], typeof _LEVEL_1["_chat3_data"], 0>,
  /** Whether to display a header. */
  "showHeader": true,
  /** The title to display when there are no messages in the chat. */
  "emptyTitle": "No messages here yet",
  /** The avatar source URL. */
  "avatarSrc": "",
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** A list of messages passed to the query. */
  "messageHistory": _LEVEL_1["_chat3_messageHistory"] as RetoolArrayWrapper<["chat3","messageHistory"], typeof _LEVEL_1["_chat3_messageHistory"], 0>,
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
    "_selector": ["chat3","style"] as const,
    "background": "automatic"
  } as const,
  /** The avatar icon to display. */
  "avatarIcon": "",
  /** The text to display in the input field when empty. */
  "placeholder": "Ask about appointments or feedback",
  /** The ID of the query to send `messageHistory` to */
  "queryTargetId": "chat3_query1",
  /** Whether to display the avatar. */
  "showAvatar": true,
  /** Last message sent by the AI */
  "lastResponse": "",
  /** The title of the chat widget */
  "title": "Chat",
  "events": _LEVEL_1["_chat3_events"] as RetoolArrayWrapper<["chat3","events"], typeof _LEVEL_1["_chat3_events"], 3>,
  /** Whether to display a timestamp. */
  "showTimestamp": true,
  /** The fallback text to display if there is no image or icon. Only the first two characters are displayed. If multiple words are provided, the first letter of each word is used. */
  "avatarFallback": "Rishi Ramesh",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
