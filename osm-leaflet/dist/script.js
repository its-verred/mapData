let mapOptions = {
  center: [22.6941587,75.8279695],
  zoom: 5
};

let map = new L.map("map", mapOptions);

let layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
map.addLayer(layer);

let marker1 = new L.Marker([51.958, 9.141]);

Papa.parse("https://raw.githubusercontent.com/its-verred/mapData/main/FormattedHospital.csv", {
  download: true,
  header: true,
	complete: function(result) {
    data = result['data']
    for (var i in data) {
      var row = data[i];
      var marker = L.marker([row.Lat, row.Lon], {
        opacity: 1
      }).bindPopup(row.Hospital_Name);
      
      marker.addTo(map);
    }
	}
});