const image10 = {
  "_selector": ["image10"] as const,
  "_isPlugin": true,
  "id": "image10",
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
  * Set the `flipVertical` value to toggle whether the image is vertically flipped. Defaults to `false` without a parameter
  * @example `image1.setFlipVertical(true)`
  * @param flipVertical
  **/
  setFlipVertical: (flipVertical: boolean): void => undefined,
  /**
  * Set the `flipHorizontal` value to toggle whether the image is horizontally flipped. Defaults to `false` without a parameter.
  * @example `image1.setFlipHorizontal(true)`
  * @param flipHorizontal
  **/
  setFlipHorizontal: (flipHorizontal: boolean): void => undefined,
  /**
  * Set the `src` value to specify the image URL to use.
  * @example `image.setImageUrl('https://retool.com/logo.png')`
  * @param imageUrl
  **/
  setImageUrl: (imageUrl: string): void => undefined,
  "pluginType": "ImageWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
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
    "_selector": ["image10","retoolFileObject"] as const
  } as const,
  /** The id of the uploaded image when `srcType` is `retoolStorageFileId`. */
  "retoolStorageFileId": "aa875cec-239d-4702-9279-ac42de8d193f",
  /** Whether the component is visible. */
  "hidden": false,
  /** The height of the source image. */
  "srcHeight": null,
  /** The amount of margin to render outside of the component. */
  "margin": "0",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** Whether the image is cropped to fit (`cover`) or scaled to fill (`contain`) the width of the component if `heightType` is `fixed`. */
  "fit": "contain",
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
