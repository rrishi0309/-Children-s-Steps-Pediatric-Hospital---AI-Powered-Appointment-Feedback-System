const text4 = {
  "_selector": ["text4"] as const,
  "_isPlugin": true,
  "id": "text4",
  "pluginType": "TextWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "center",
  /** Whether the component is visible. */
  "hidden": false,
  /** Whether images are cropped to fit or scaled to fill the width of the component. */
  "imageWidth": "fit",
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The vertical alignment of the contents. */
  "verticalAlign": "center",
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The current value. */
  "value": "About Us",
  "style": {
    "_selector": ["text4","style"] as const,
    "fontSize": "h1Font",
    "fontWeight": "h1Font",
    "fontFamily": "h1Font"
  } as const,
  /** Whether to disable Markdown rendering and display plain text. */
  "disableMarkdown": false,
  /** The overflow behavior when the contents exceeds the height of the component. Either `scroll` to display a scrollbar or `hidden` to clip the contents. */
  "overflowType": "scroll",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
