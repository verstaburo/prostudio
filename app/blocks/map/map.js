/* eslint-disable no-unused-vars */
// http://leafletjs.com
// Для кластеров использовать: https://github.com/Leaflet/Leaflet.markercluster
import L from 'leaflet';

const $ = window.$;

export default function maps() {
  if (!$('#map_piter').length) {
    return;
  }

  const map = L.map('map_piter').setView([59.851, 30.300], 15);
  // 59.851422, 30.300983

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGhldmVydmVyeTEiLCJhIjoiY2lzZXdzaXZ4MDBjaTJudm93dDI4MGVrMCJ9.Z8KKk0M_lpDTPB6_JtJBxg',
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: './assets/images/marker.png',
    iconSize: [62, 53],
    iconAnchor: [60, 46],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
  });

  // const marker = L.marker([59.851, 30.300]).addTo(map);
  const marker = L.marker([59.851, 30.300], { icon: myIcon }).addTo(map);

  // marker.bindPopup('Кастомный HTML-попап');
}
/* eslint-enable no-unused-vars */
