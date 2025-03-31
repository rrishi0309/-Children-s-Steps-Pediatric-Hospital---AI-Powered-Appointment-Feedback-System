const _LEVEL_5 = {
  "_mapboxMap1_geoJson_features_0_geometry_coordinates": [-111.90174986890044,40.76022322538748] as const,
}
const _LEVEL_2 = {
  "_mapboxMap1_geoJson_features": [{
        "_selector": ["mapboxMap1","geoJson","features","0"] as const,
        "type": "Feature",
        "geometry": {
          "_selector": ["mapboxMap1","geoJson","features","0","geometry"] as const,
          "type": "Point",
          "coordinates": _LEVEL_5["_mapboxMap1_geoJson_features_0_geometry_coordinates"] as RetoolArrayWrapper<["mapboxMap1","geoJson","features","0","geometry","coordinates"], typeof _LEVEL_5["_mapboxMap1_geoJson_features_0_geometry_coordinates"], 2>
        } as const,
        "properties": {
          "_selector": ["mapboxMap1","geoJson","features","0","properties"] as const,
          "title": "Children’s Steps Pediatric Hospital"
        } as const
      } as const] as const,
}
const _LEVEL_1 = {
  "_mapboxMap1_points": [{
      "_selector": ["mapboxMap1","points","0"] as const,
      /**  */
      "latitude": 40.76022322538748,
      /**  */
      "longitude": -111.90174986890044,
      "title": "Children’s Steps Pediatric Hospital"
    } as const] as const,
  "_mapboxMap1_visiblePoints": [] as const,
}
const mapboxMap1 = {
  "_selector": ["mapboxMap1"] as const,
  "_isPlugin": true,
  "id": "mapboxMap1",
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
  * Select the specified point using its coordinates
  * @example `map.selectPoint({ longitude: -122.4194, latitude: 37.7949 })`
  * @param point `{ longitude: number | string, latitude: number | string }`
  **/
  selectPoint: (point: object): unknown => undefined as unknown,
  /**
  * Set the map center on the specified point
  * @example `map.setMapCenter({ longitude: -122.4194, latitude: 37.7949 })`
  * @param center `{ longitude: number | string, latitude: number | string }`
  **/
  setMapCenter: (center: object): unknown => undefined as unknown,
  "pluginType": "MapWidget",
  /**  */
  "hoveredOverPoint": null,
  /**  */
  "pointValue": "🏥",
  /**  */
  "points": _LEVEL_1["_mapboxMap1_points"] as RetoolArrayWrapper<["mapboxMap1","points"], typeof _LEVEL_1["_mapboxMap1_points"], 1>,
  /**  */
  "latitude": 40.76022322538748,
  /**  */
  "onPointSelected": "",
  /**  */
  "latitudeColumnName": "latitude",
  /**  */
  "longitude": -111.90174986890044,
  /**  */
  "longitudeColumnName": "longitude",
  /**  */
  "zoom": 15,
  /**  */
  "onViewportChange": "",
  /**  */
  "selectedPoint": null,
  /**  */
  "visiblePoints": _LEVEL_1["_mapboxMap1_visiblePoints"] as RetoolArrayWrapper<["mapboxMap1","visiblePoints"], typeof _LEVEL_1["_mapboxMap1_visiblePoints"], 0>,
  /**  */
  "showCurrentLngLat": false,
  /**  */
  "fitBoundsToGeoJson": false,
  /**  */
  "geoJsonLayerStyle": "",
  /**  */
  "geoJson": {
    "_selector": ["mapboxMap1","geoJson"] as const,
    "type": "FeatureCollection",
    "features": _LEVEL_2["_mapboxMap1_geoJson_features"] as RetoolArrayWrapper<["mapboxMap1","geoJson","features"], typeof _LEVEL_2["_mapboxMap1_geoJson_features"], 1>
  } as const,
  /**  */
  "onPointHoveredOverEnd": "",
  /**  */
  "onPointHoveredOver": ""
} as const
