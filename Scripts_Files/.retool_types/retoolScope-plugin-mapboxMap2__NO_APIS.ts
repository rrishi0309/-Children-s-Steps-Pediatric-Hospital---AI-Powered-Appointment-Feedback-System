const _LEVEL_5 = {
  "_mapboxMap2_geoJson_features_0_geometry_coordinates": [-111.65621983645335,40.236709152508894] as const,
}
const _LEVEL_2 = {
  "_mapboxMap2_geoJson_features": [{
        "_selector": ["mapboxMap2","geoJson","features","0"] as const,
        "type": "Feature",
        "geometry": {
          "_selector": ["mapboxMap2","geoJson","features","0","geometry"] as const,
          "type": "Point",
          "coordinates": _LEVEL_5["_mapboxMap2_geoJson_features_0_geometry_coordinates"] as RetoolArrayWrapper<["mapboxMap2","geoJson","features","0","geometry","coordinates"], typeof _LEVEL_5["_mapboxMap2_geoJson_features_0_geometry_coordinates"], 2>
        } as const,
        "properties": {
          "_selector": ["mapboxMap2","geoJson","features","0","properties"] as const,
          "title": "Children’s Steps Pediatric Hospital"
        } as const
      } as const] as const,
}
const _LEVEL_1 = {
  "_mapboxMap2_points": [{
      "_selector": ["mapboxMap2","points","0"] as const,
      /**  */
      "latitude": 40.236709152508894,
      /**  */
      "longitude": -111.65621983645335,
      "title": "Children’s Steps Pediatric Hospital"
    } as const] as const,
  "_mapboxMap2_visiblePoints": [] as const,
}
const mapboxMap2 = {
  "_selector": ["mapboxMap2"] as const,
  "_isPlugin": true,
  "id": "mapboxMap2",
  "pluginType": "MapWidget",
  /**  */
  "hoveredOverPoint": null,
  /**  */
  "pointValue": "🏥",
  /**  */
  "points": _LEVEL_1["_mapboxMap2_points"] as RetoolArrayWrapper<["mapboxMap2","points"], typeof _LEVEL_1["_mapboxMap2_points"], 1>,
  /**  */
  "latitude": 40.236709152508894,
  /**  */
  "onPointSelected": "",
  /**  */
  "latitudeColumnName": "latitude",
  /**  */
  "longitude": -111.656,
  /**  */
  "longitudeColumnName": "longitude",
  /**  */
  "zoom": 15,
  /**  */
  "onViewportChange": "",
  /**  */
  "selectedPoint": null,
  /**  */
  "visiblePoints": _LEVEL_1["_mapboxMap2_visiblePoints"] as RetoolArrayWrapper<["mapboxMap2","visiblePoints"], typeof _LEVEL_1["_mapboxMap2_visiblePoints"], 0>,
  /**  */
  "showCurrentLngLat": false,
  /**  */
  "fitBoundsToGeoJson": false,
  /**  */
  "geoJsonLayerStyle": "",
  /**  */
  "geoJson": {
    "_selector": ["mapboxMap2","geoJson"] as const,
    "type": "FeatureCollection",
    "features": _LEVEL_2["_mapboxMap2_geoJson_features"] as RetoolArrayWrapper<["mapboxMap2","geoJson","features"], typeof _LEVEL_2["_mapboxMap2_geoJson_features"], 1>
  } as const,
  /**  */
  "onPointHoveredOverEnd": "",
  /**  */
  "onPointHoveredOver": ""
} as const
