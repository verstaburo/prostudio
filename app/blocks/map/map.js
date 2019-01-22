/* eslint-disable */
// http://leafletjs.com
// Для кластеров использовать: https://github.com/Leaflet/Leaflet.markercluster
import L from 'leaflet';

const $ = window.$;

export default function maps() {
  if (!$('#map_piter').length) {
    return;
  }

  if (!$('#map_moscow').length) {
    return;
  }

  const map = L.map('map_piter', {
    zoomControl: false,
  }).setView([59.851, 30.300], 15);

  const mapMoscow = L.map('map_moscow', {
    zoomControl: false,
  }).setView([55.673813, 37.505184], 15);

  if ($(window).width() < 1600) {
    map.setView([59.852, 30.293], 15);
    mapMoscow.setView([55.674, 37.500], 15);
  }

  if ($(window).width() < 768) {
    map.setView([59.8557, 30.2997], 15);
    mapMoscow.setView([55.678577, 37.505184], 15);
  }

  if ($(window).width() < 480) {
    map.setView([59.8557, 30.301], 15);
    mapMoscow.setView([55.678577, 37.505184], 15);
  }

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.light',
    style: 'mapbox://styles/mapbox/light-v9',
    accessToken: 'pk.eyJ1IjoidGhldmVydmVyeTEiLCJhIjoiY2lzZXdzaXZ4MDBjaTJudm93dDI4MGVrMCJ9.Z8KKk0M_lpDTPB6_JtJBxg',
  }).addTo(map);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    // id: 'mapbox.streets',
    id: 'mapbox.light',
    style: 'mapbox://styles/mapbox/light-v9',
    accessToken: 'pk.eyJ1IjoidGhldmVydmVyeTEiLCJhIjoiY2lzZXdzaXZ4MDBjaTJudm93dDI4MGVrMCJ9.Z8KKk0M_lpDTPB6_JtJBxg',
  }).addTo(mapMoscow);

  const officeIcon = L.icon({
    iconUrl: './assets/images/marker.png',
    iconSize: [62, 53],
    iconAnchor: [60, 26],
  });

  const metroIcon = L.icon({
    iconUrl: './assets/images/metro.png',
    iconSize: [166, 34],
    iconAnchor: [0, 26],
  });

  const marker = L.marker([55.673813, 37.505184], {
    icon: officeIcon,
  }).addTo(mapMoscow);

  const markerMoscow = L.marker([59.851422, 30.300983], {
    icon: officeIcon,
  }).addTo(map);

  const metro = L.marker([59.851319, 30.322130], {
    icon: metroIcon,
  }).addTo(map);

  // marker.bindPopup('Кастомный HTML-попап');
}
/* eslint-enable */
