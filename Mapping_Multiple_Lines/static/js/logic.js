// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([36.1263, -86.6774], 4);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.7749, -122.4194], //SFO Airport
    [30.2672, -97.7431], //AUS Airport
    [36.1263, -86.6774], //BNA Airport
    [43.6532, -79.3832], //YYZ Airport
    [40.6413, -73.7781] //JFK Airport
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: "5,5",
    weight: 4,
    opacity: 0.5
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);