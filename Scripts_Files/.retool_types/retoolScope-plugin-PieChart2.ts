const _LEVEL_2 = {
  "_PieChart2_gradientColorArray_0": ["0.0","#f6f6f6"] as const,
  "_PieChart2_gradientColorArray_1": ["1.0","#0669bf"] as const,
}
const _LEVEL_1 = {
  "_PieChart2_gradientColorArray": [_LEVEL_2["_PieChart2_gradientColorArray_0"] as RetoolArrayWrapper<["PieChart2","gradientColorArray","0"], typeof _LEVEL_2["_PieChart2_gradientColorArray_0"], 2>,_LEVEL_2["_PieChart2_gradientColorArray_1"] as RetoolArrayWrapper<["PieChart2","gradientColorArray","1"], typeof _LEVEL_2["_PieChart2_gradientColorArray_1"], 2>] as const,
  "_PieChart2_colorArrayDropDown": ["rgba(242, 185, 34, 1)","#4046CA","#8bc34a","#DE3C82","#7E84FA","#f44336","#fcd6bb","#fde68a","#eecff3","#a7f3d0"] as const,
  "_PieChart2_colorArray": ["#2196F3","#8BC34A","#DE3C82","#7E84FA","#FFEB3B"] as const,
  "_PieChart2_selectedPoints": [] as const,
}
const PieChart2 = {
  "_selector": ["PieChart2"] as const,
  "_isPlugin": true,
  "id": "PieChart2",
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
  "pluginType": "ChartWidget2",
  /** JS or dropdown mode */
  "labelDataMode": "source",
  /** The color scale for the chart. */
  "gradientColorArray": _LEVEL_1["_PieChart2_gradientColorArray"] as RetoolArrayWrapper<["PieChart2","gradientColorArray"], typeof _LEVEL_1["_PieChart2_gradientColorArray"], 2>,
  /** The template for the data labels */
  "textTemplate": "%{label} %{percent}",
  /** The color scale for the chart, manually selected */
  "colorArrayDropDown": _LEVEL_1["_PieChart2_colorArrayDropDown"] as unknown as RetoolArrayWrapper<["PieChart2","colorArrayDropDown"], typeof _LEVEL_1["_PieChart2_colorArrayDropDown"], 38>,
  /** The data mode of the chart */
  "datasourceMode": "source",
  /** The mode for the color input */
  "colorInputMode": "colorArrayDropDown",
  /** Whether the component is visible. */
  "hidden": false,
  /** Whether or not the text template is in manual mode */
  "textTemplateMode": "manual",
  /** Whether to clear the chart when the data updates to empty */
  "clearOnEmptyData": false,
  /** The amount of margin to render outside of the component. */
  "margin": "0",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The color of the line between slices */
  "lineColor": "#ffffff",
  /** The position of the data labels */
  "textTemplatePosition": "outside",
  "style": {
    "_selector": ["PieChart2","style"] as const,
    "titleFontSize": "h6Font",
    "titleFontWeight": "h6Font",
    "titleFontFamily": "h6Font",
    "fontSize": "labelEmphasizedFont",
    "fontWeight": "labelEmphasizedFont",
    "fontFamily": "labelEmphasizedFont"
  } as const,
  /** The width of the lines. */
  "lineWidth": 3,
  /** The position of the legend */
  "legendPosition": "none",
  /** The color scale for the chart, input as an array of colors. */
  "colorArray": _LEVEL_1["_PieChart2_colorArray"] as RetoolArrayWrapper<["PieChart2","colorArray"], typeof _LEVEL_1["_PieChart2_colorArray"], 5>,
  /** Specifies hole depth between 0 and 1 */
  "pieDataHole": 0.4,
  /** The template for the hover tooltip labels */
  "hoverTemplate": "",
  /** The type of chart to display */
  "chartType": "pie",
  /** The title of the chart */
  "title": "",
  /** Whether or not the hover tooltip is in manual mode */
  "hoverTemplateMode": "source",
  /** The toolbar configuration */
  "toolbar": {
    "_selector": ["PieChart2","toolbar"] as const,
    /** Whether to show the export to PNG button */
    "showToImage": false
  } as const,
  /** JS or dropdown mode */
  "valueDataMode": "source",
  /** The selected points in the chart. In order to select multiple points, the toolbar addon must be enabled and "box select" or "lasso select" must be active. */
  "selectedPoints": _LEVEL_1["_PieChart2_selectedPoints"] as RetoolArrayWrapper<["PieChart2","selectedPoints"], typeof _LEVEL_1["_PieChart2_selectedPoints"], 0>,
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
