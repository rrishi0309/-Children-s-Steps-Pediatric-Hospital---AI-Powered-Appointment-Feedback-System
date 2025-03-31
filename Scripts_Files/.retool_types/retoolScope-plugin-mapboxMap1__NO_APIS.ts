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
