csvString = 'FormattedHospital.csv'

let mapOptions = {
    center: [51.958, 9.141],
    zoom: 2,
    scrollWheelZoom: false,
    tap: false
  };

let map = new L.map("map", mapOptions);

let layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
map.addLayer(layer);

 // Read markers data from data.csv

  // Use PapaParse to convert string to array of objects
// var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

// // For each row in data, create a marker and add it to the map
// // For each row, columns `Latitude`, `Longitude`, and `Title` are required
// for (var i in data) {
//   console.log(i)
//   var row = data[i];
//   console.log(row)

//   var marker = L.marker([row.Lat, row.Lon], {
//     opacity: 1
//   }).bindPopup(row.Title);
  
//   marker.addTo(map);
// }

// let mapOptions = {
//   center: [51.958, 9.141],
//   zoom: 2
// };

// let map = new L.map("map", mapOptions);

// let layer = new L.TileLayer(
//   "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// );
// map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
let marker1 = new L.Marker([50.958, 9.141]);

marker.addTo(map);
marker1.addTo(map);