const _LEVEL_1 = {
  "_navigation3_data": [{
      "_selector": ["navigation3","data","0"] as const,
      "id": "Home",
      "title": "Home",
      "url": "Home",
      "isCurrentPage": true
    } as const,{
      "_selector": ["navigation3","data","1"] as const,
      "id": "About",
      "title": "About",
      "url": "About",
      "isCurrentPage": false
    } as const,{
      "_selector": ["navigation3","data","2"] as const,
      "id": "Contact",
      "title": "Contact",
      "url": "Contact",
      "isCurrentPage": false
    } as const,{
      "_selector": ["navigation3","data","3"] as const,
      "id": "Patient_Login",
      "title": "Patient Login",
      "url": "Patient_Login",
      "isCurrentPage": false
    } as const,{
      "_selector": ["navigation3","data","4"] as const,
      "id": "Admin_Login",
      "title": "Admin Login",
      "url": "Admin_Login",
      "isCurrentPage": false
    } as const] as const,
  "_navigation3_iconByIndex": ["bold/interface-page-controller-button-loop-2","bold/interface-page-controller-button-loop-2","bold/interface-page-controller-button-loop-2","bold/interface-page-controller-button-loop-2","bold/interface-page-controller-button-loop-2"] as const,
  "_navigation3_screenTargetIdByIndex": ["","","","",""] as const,
  "_navigation3_parentKeyByIndex": ["","","","",""] as const,
  "_navigation3_highlightByIndex": [true,false,false,false,false] as const,
  "_navigation3_appTargetByIndex": ["","","","",""] as const,
  "_navigation3_itemTypeByIndex": ["app","app","app","app","app"] as const,
  "_navigation3_hiddenByIndex": [false,false,false,false,false] as const,
  "_navigation3_captionByIndex": ["","","","",""] as const,
  "_navigation3_tooltipByIndex": ["","","","",""] as const,
  "_navigation3_events": [{
      "_selector": ["navigation3","events","0"] as const,
      "event": "click",
      "type": "util",
      "method": "openPage",
      "pluginId": "",
      "waitType": "debounce",
      "waitMs": 0,
      "params": {
        "_selector": ["navigation3","events","0","params"] as const,
        "pageName": "Home"
      } as const
    } as const] as const,
  "_navigation3_iconPositionByIndex": ["right","right","right","right","right"] as const,
  "_navigation3_keyByIndex": ["","","","",""] as const,
  "_navigation3_disabledByIndex": [false,false,false,false,false] as const,
  "_navigation3_labels": ["Home","About","Contact","Patient Login","Admin Login"] as const,
}
const navigation3 = {
  "_selector": ["navigation3"] as const,
  "_isPlugin": true,
  "id": "navigation3",
  "pluginType": "NavigationWidget2",
  /** Whether to display the menu vertically or horizontally. */
  "orientation": "horizontal",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** Toggles the dropdown between Retool Storage files and legacy uploaded files. */
  "retoolStorageShowLegacyFiles": false,
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "dynamic",
  /** The source data for the component. */
  "data": _LEVEL_1["_navigation3_data"] as RetoolArrayWrapper<["navigation3","data"], typeof _LEVEL_1["_navigation3_data"], 5>,
  /** A list of icons for each item, by index. */
  "iconByIndex": _LEVEL_1["_navigation3_iconByIndex"] as RetoolArrayWrapper<["navigation3","iconByIndex"], typeof _LEVEL_1["_navigation3_iconByIndex"], 5>,
  /** The width of the source image. */
  "srcWidth": null,
  /** A list of screen IDs, by index, for each item. */
  "screenTargetIdByIndex": _LEVEL_1["_navigation3_screenTargetIdByIndex"] as RetoolArrayWrapper<["navigation3","screenTargetIdByIndex"], typeof _LEVEL_1["_navigation3_screenTargetIdByIndex"], 5>,
  /** The source URL of the image when `srcType` is `src`. */
  "src": "",
  /** Control when to show a menu button instead of the full menu. Only available in horizontal mode. */
  "overflowMode": "scroll",
  /** A list of IDs, by index, for each item that reflects the parent menu item. */
  "parentKeyByIndex": _LEVEL_1["_navigation3_parentKeyByIndex"] as RetoolArrayWrapper<["navigation3","parentKeyByIndex"], typeof _LEVEL_1["_navigation3_parentKeyByIndex"], 5>,
  /** The id of the uploaded image when `srcType` is `retoolStorageFileId`. */
  "retoolStorageFileId": "",
  /** A list of boolean values for each item, by index, that reflect whether they are highlighted. */
  "highlightByIndex": _LEVEL_1["_navigation3_highlightByIndex"] as RetoolArrayWrapper<["navigation3","highlightByIndex"], typeof _LEVEL_1["_navigation3_highlightByIndex"], 5>,
  /** A list of app IDs, by index, for each item. */
  "appTargetByIndex": _LEVEL_1["_navigation3_appTargetByIndex"] as RetoolArrayWrapper<["navigation3","appTargetByIndex"], typeof _LEVEL_1["_navigation3_appTargetByIndex"], 5>,
  /** Whether the component is visible. */
  "hidden": false,
  /** The height of the source image. */
  "srcHeight": null,
  /** The amount of margin to render outside of the component. */
  "margin": "0",
  /** A list of strings, by index, that reflect the type of item. */
  "itemTypeByIndex": _LEVEL_1["_navigation3_itemTypeByIndex"] as RetoolArrayWrapper<["navigation3","itemTypeByIndex"], typeof _LEVEL_1["_navigation3_itemTypeByIndex"], 5>,
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  "style": {
    "_selector": ["navigation3","style"] as const,
    "pillRadius": "15px",
    "highlightBackground": "rgba(6, 105, 191, 0.2)"
  } as const,
  /** A list of boolean values for each item, by index, that reflect whether they are hidden. */
  "hiddenByIndex": _LEVEL_1["_navigation3_hiddenByIndex"] as RetoolArrayWrapper<["navigation3","hiddenByIndex"], typeof _LEVEL_1["_navigation3_hiddenByIndex"], 5>,
  /** The ID of the uploaded image when `srcType` is `storageBlobId`. */
  "storageBlobId": "",
  /** A list of captions for each item, by index. */
  "captionByIndex": _LEVEL_1["_navigation3_captionByIndex"] as RetoolArrayWrapper<["navigation3","captionByIndex"], typeof _LEVEL_1["_navigation3_captionByIndex"], 5>,
  /** An accessible image description for screen readers. */
  "altText": "",
  /** Self-hosted Retool deployments only. The ID of the uploaded image when `srcType` is `dbBlobId`. */
  "dbBlobId": "",
  /** A list of tooltips for each item, by index. */
  "tooltipByIndex": _LEVEL_1["_navigation3_tooltipByIndex"] as RetoolArrayWrapper<["navigation3","tooltipByIndex"], typeof _LEVEL_1["_navigation3_tooltipByIndex"], 5>,
  "events": _LEVEL_1["_navigation3_events"] as RetoolArrayWrapper<["navigation3","events"], typeof _LEVEL_1["_navigation3_events"], 1>,
  /** A list of icon positions for each item, by index, relative to labels. */
  "iconPositionByIndex": _LEVEL_1["_navigation3_iconPositionByIndex"] as RetoolArrayWrapper<["navigation3","iconPositionByIndex"], typeof _LEVEL_1["_navigation3_iconPositionByIndex"], 5>,
  /** Whether the input for `retoolStorageFileId` is dynamic. */
  "retoolStorageDynamicInput": false,
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** A list of IDs, by index, for each item. */
  "keyByIndex": _LEVEL_1["_navigation3_keyByIndex"] as RetoolArrayWrapper<["navigation3","keyByIndex"], typeof _LEVEL_1["_navigation3_keyByIndex"], 5>,
  /** The type of the image source. Either `src`, `dbBlobId`, or `storageBlobId`. */
  "srcType": "src",
  /** A list of boolean values for each item, by index, that reflect whether they are disabled. */
  "disabledByIndex": _LEVEL_1["_navigation3_disabledByIndex"] as RetoolArrayWrapper<["navigation3","disabledByIndex"], typeof _LEVEL_1["_navigation3_disabledByIndex"], 5>,
  /** The horizontal alignment of the contents. */
  "horizontalAlignment": "left",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false,
  /** A list of labels for each item. Falls back to the corresponding `value` if no label is provided. */
  "labels": _LEVEL_1["_navigation3_labels"] as RetoolArrayWrapper<["navigation3","labels"], typeof _LEVEL_1["_navigation3_labels"], 5>
} as const
