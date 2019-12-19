import {OpenStreetMapProvider} from 'leaflet-geosearch';

const map = L.map('mapa').setView([-17.7862892, -63.1811714], 13);
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


fetch('https://proysig.herokuapp.com/getUbicacionPersonal',{ 
    method: 'GET'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   //   alert(JSON.stringify(myJson));
    myJson.forEach( item => {
        var greenIcon;
        if(item.descripcion == "ambulancia"){
            greenIcon = new L.Icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });
        }
        if(item.descripcion == "policia"){
            greenIcon = new L.Icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });
        }
        if(item.descripcion == "bombero"){
            greenIcon = new L.Icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });
        }
         
          
        mk= new L.marker([item.ubicacion.coordinates[0],item.ubicacion.coordinates[1]],{
            icon: greenIcon,
            draggable : true,
            autoPan : true,
        }).addTo(map).bindPopup(item.idpersonal);
    });
  });

// Obtener mensajes del servidor

 fetch('https://proysig.herokuapp.com/getSolicitud',{ 
    method: 'GET'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   //   alert(JSON.stringify(myJson));
    myJson.forEach( item => {
        var greenIcon;
        if(item.descripcion == "ambulancia"){
            greenIcon = new L.Icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });
        }
        if(item.descripcion == "policia"){
            greenIcon = new L.Icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });
        }
        if(item.descripcion == "bombero"){
            greenIcon = new L.Icon({
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });
        }
         
          
        mk= new L.marker([item.ubicacion.coordinates[0],item.ubicacion.coordinates[1]],{
            icon: greenIcon,
            draggable : true,
            autoPan : true,
        }).addTo(map).bindPopup("Emergemcia "+item.descripcion);
    });
  });

// L.marker([-17.796067, -63.183873]).addTo(map).bindPopup('estadio');




function buscarDireccion(e){
    if(e.target.value.length > 8){
        //utilizar el provider
        const provider = new OpenStreetMapProvider();
        provider.search({query: e.target.value}).then((res)=>{
                    // mostrar el mapa
                map.setView(res[0].bounds[0],15);

                    // agregar el pin
                    marker= new L.marker(res[0].bounds[0],{
                        draggable : true,
                        autoPan : true,
                    }).addTo(map).bindPopup(res[0].label).openPopup();

        })


    }


}