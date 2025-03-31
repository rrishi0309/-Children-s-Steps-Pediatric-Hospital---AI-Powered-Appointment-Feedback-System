const image4 = {
  "_selector": ["image4"] as const,
  "_isPlugin": true,
  "id": "image4",
  "pluginType": "ImageWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** Toggles the dropdown between Retool Storage files and legacy uploaded files. */
  "retoolStorageShowLegacyFiles": false,
  /** The horizontal alignment of the image when `fit` is `contain` */
  "horizontalAlign": "center",
  /** The width of the source image. */
  "srcWidth": null,
  /** Whether the component has an enabled **Click** event handler. */
  "clickable": false,
  /** Whether the image is flipped vertically. */
  "flipVertical": false,
  /** The source URL. */
  "src": "https://picsum.photos/id/1025/800/600",
  /** A file representation that is shared by components on Retool. */
  "retoolFileObject": {
    "_selector": ["image4","retoolFileObject"] as const
  } as const,
  /** The id of the uploaded image when `srcType` is `retoolStorageFileId`. */
  "retoolStorageFileId": "e67ad06d-5711-462f-a881-aaa76cc79569",
  /** Whether the component is visible. */
  "hidden": false,
  /** The height of the source image. */
  "srcHeight": null,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** Whether the image is cropped to fit (`cover`) or scaled to fill (`contain`) the width of the component if `heightType` is `fixed`. */
  "fit": "cover",
  /** Whether the image is flipped horizontally. */
  "flipHorizontal": false,
  /** The aspect ratio with which to display the image if `heightType` is `auto`. */
  "aspectRatio": null,
  /** The ID of the uploaded image when `srcType` is `storageBlobId`. */
  "storageBlobId": "",
  /** An accessible image description for screen readers. */
  "altText": "",
  /** Self-hosted Retool deployments only. The ID of the uploaded image when `srcType` is `dbBlobId`. */
  "dbBlobId": "",
  /** Whether the input for `retoolStorageFileId` is dynamic. */
  "retoolStorageDynamicInput": false,
  /** The type of the image source. Either `src`, `dbBlobId`, or `storageBlobId`. */
  "srcType": "retoolStorageFileId",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
