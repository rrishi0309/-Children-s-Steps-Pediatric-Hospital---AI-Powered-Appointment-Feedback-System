const _LEVEL_5 = {
  "_mapboxMap3_geoJson_features_0_geometry_coordinates": [-113.57971673522671,37.10237143211986] as const,
}
const _LEVEL_2 = {
  "_mapboxMap3_geoJson_features": [{
        "_selector": ["mapboxMap3","geoJson","features","0"] as const,
        "type": "Feature",
        "geometry": {
          "_selector": ["mapboxMap3","geoJson","features","0","geometry"] as const,
          "type": "Point",
          "coordinates": _LEVEL_5["_mapboxMap3_geoJson_features_0_geometry_coordinates"] as RetoolArrayWrapper<["mapboxMap3","geoJson","features","0","geometry","coordinates"], typeof _LEVEL_5["_mapboxMap3_geoJson_features_0_geometry_coordinates"], 2>
        } as const,
        "properties": {
          "_selector": ["mapboxMap3","geoJson","features","0","properties"] as const,
          "title": "hildren’s Steps Pediatric Hospital"
        } as const
      } as const] as const,
}
const _LEVEL_1 = {
  "_mapboxMap3_points": [{
      "_selector": ["mapboxMap3","points","0"] as const,
      /**  */
      "latitude": 37.10237143211986,
      /**  */
      "longitude": -113.57971673522671,
      "title": "Children’s Steps Pediatric Hospital"
    } as const] as const,
  "_mapboxMap3_visiblePoints": [] as const,
}
const mapboxMap3 = {
  "_selector": ["mapboxMap3"] as const,
  "_isPlugin": true,
  "id": "mapboxMap3",
  "pluginType": "MapWidget",
  /**  */
  "hoveredOverPoint": null,
  /**  */
  "pointValue": "🏥",
  /**  */
  "points": _LEVEL_1["_mapboxMap3_points"] as RetoolArrayWrapper<["mapboxMap3","points"], typeof _LEVEL_1["_mapboxMap3_points"], 1>,
  /**  */
  "latitude": 37.10237143211986,
  /**  */
  "onPointSelected": "",
  /**  */
  "latitudeColumnName": "latitude",
  /**  */
  "longitude": -113.57971673522671,
  /**  */
  "longitudeColumnName": "longitude",
  /**  */
  "zoom": 15,
  /**  */
  "onViewportChange": "",
  /**  */
  "selectedPoint": null,
  /**  */
  "visiblePoints": _LEVEL_1["_mapboxMap3_visiblePoints"] as RetoolArrayWrapper<["mapboxMap3","visiblePoints"], typeof _LEVEL_1["_mapboxMap3_visiblePoints"], 0>,
  /**  */
  "showCurrentLngLat": false,
  /**  */
  "fitBoundsToGeoJson": false,
  /**  */
  "geoJsonLayerStyle": "",
  /**  */
  "geoJson": {
    "_selector": ["mapboxMap3","geoJson"] as const,
    "type": "FeatureCollection",
    "features": _LEVEL_2["_mapboxMap3_geoJson_features"] as RetoolArrayWrapper<["mapboxMap3","geoJson","features"], typeof _LEVEL_2["_mapboxMap3_geoJson_features"], 1>
  } as const,
  /**  */
  "onPointHoveredOverEnd": "",
  /**  */
  "onPointHoveredOver": ""
} as const
