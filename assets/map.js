let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 51.502949, lng: 0.002369 },
    zoom: 15,
  });
}


initMap();
