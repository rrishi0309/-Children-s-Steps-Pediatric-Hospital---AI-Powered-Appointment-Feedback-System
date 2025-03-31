const modalFrame1 = {
  "_selector": ["modalFrame1"] as const,
  "_isPlugin": true,
  "id": "modalFrame1",
    /**
  * Set showHeader value for the container
  * @example setshowHeader(false)
  * @param showHeader
  **/
  setShowHeader: (showHeader: boolean): unknown => undefined as unknown,
  /**
  * Set showFooter value for the container
  * @example setshowFooter(false)
  * @param showFooter
  **/
  setShowFooter: (showFooter: boolean): unknown => undefined as unknown,
  /**
  * Set the `hidden` value to toggle whether the component is visible. Defaults to `true` without a parameter.
  * @param hidden
  **/
  setHidden: (hidden: boolean): unknown => undefined as unknown,
  /**
  * Set the `hidden` value to false, so the component is visible. 
  **/
  show: (): unknown => undefined as unknown,
  /**
  * Set the `hidden` value to true, so the component is not visible. 
  **/
  hide: (): unknown => undefined as unknown,
  /**
  * Toggles the `hidden` value to show or hide the component. 
  **/
  toggleHidden: (): unknown => undefined as unknown,
  "pluginType": "ModalFrameWidget",
  /** The size of this Frame */
  "size": "small",
  /** Allow pressing escape to close the Frame */
  "hideOnEscape": true,
  /** Allow clicking on the overlay to close the Frame */
  "overlayInteraction": true,
  /** The amount of padding used within the header. */
  "headerPadding": "8px 12px",
  /** Whether to show the border above the footer area. */
  "showFooterBorder": true,
  /** Whether the container is in full bleed mode, where it can only contain a single component which expands to fit the available space. */
  "enableFullBleed": false,
  /** True if this Frame should not be rendered on Desktop viewport */
  "isHiddenOnDesktop": false,
  /** Whether to show the border around the component. */
  "showBorder": true,
  /** Whether the component is visible. */
  "hidden": true,
  /** Whether to display the header area of the component. */
  "showHeader": true,
  /** The amount of padding used within the container. */
  "padding": "8px 12px",
  /** Show a darkened overlay on the rest of the canvas when the Frame is open */
  "showOverlay": true,
  /** True if this Frame should not be rendered on Mobile viewport */
  "isHiddenOnMobile": true,
  /** Whether to show the border under the header area. */
  "showHeaderBorder": true,
  /** The amount of padding used within the footer. */
  "footerPadding": "8px 12px",
  /** Whether to display the footer area of the component. */
  "showFooter": false,
  /** Whether to display a loading indicator. */
  "loading": false
} as const
