var table = ee.FeatureCollection("projects/ee-geospatial-programming/assets/BGD_adm3"),
    geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[91.79335104059882, 22.715764862097732],
          [91.79335104059882, 22.594101239054755],
          [91.89772115778632, 22.594101239054755],
          [91.89772115778632, 22.715764862097732]]], null, false),
    s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED");







print("hello world")

var roi = table.filter(ee.Filter.eq("NAME_3","Ramu"))
print(roi)

var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
          .filterBounds(geometry)
          .mean()
          .select("B4","B3","B2")
           
Map.centerObject(geometry)
print(s2)
Map.addLayer(s2)

print(s2)
// Load the Sentinel-2 Surface Reflectance data
// var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED");

// Define your region of interest (ROI)
// var geometry = ee.Geometry.Point([longitude, latitude]); // Replace with your coordinates

// Filter the image collection by your ROI and select only relevant bands
// var s2_filtered = s2.filterBounds(geometry)
//                   .mean()
//                   .select("B4", "B3", "B2");

// Print the filtered image collection
// print("Filtered Image Collection:", s2_filtered);

// Center the map on your ROI
Map.centerObject(geometry, 10);

// Add the filtered Sentinel-2 image to the map
Map.addLayer(s2_filtered.clip(roi), {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Sentinel-2 Image');

// Print the filtered Sentinel-2 image
print("Filtered Sentinel-2 Image:", s2_filtered);



