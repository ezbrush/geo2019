
    // obtener los valores
    const lat = document.querySelector('#lat').value,
          lng = document.querySelector('#lng').value,
          solid = document.querySelector('#soli').value,
          descripcion = document.querySelector('#descripcion').value;

          console.log(lat);
          console.log(lng);
          console.log(solid);

          console.log(descripcion);
const map = L.map('mapa').setView([lat, lng], 15);
//const map = L.map('mapa');
let marker;
let mk;

document.addEventListener('DOMContentLoaded',()=>{ 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    


     // Buscador de direccion
     //const buscador = document.querySelector('#formbuscador');
    // buscador.addEventListener('input', buscarDireccion);
    



});
var greenIcon;
if(descripcion == "ambulancia"){
    greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
}
if(descripcion == "policia"){
    greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
}
if(descripcion == "bombero"){
    greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
}
 
  
mk= new L.marker([lat,lng],{
    icon: greenIcon,
    draggable : true,
    autoPan : true,
}).addTo(map).bindPopup(descripcion).openPopup();




