import {OpenStreetMapProvider} from 'leaflet-geosearch';

const map = L.map('mapa').setView([-17.7862892, -63.1811714], 13);
let marker;
let mk;

document.addEventListener('DOMContentLoaded',()=>{ 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    


     // Buscador de direccion
     const buscador = document.querySelector('#formbuscador');
     buscador.addEventListener('input', buscarDireccion);
    



});
function agregarMarcador(lat,lng,des){
      // agregar el pin
      mk= new L.marker([lat,lng],{
        draggable : true,
        autoPan : true,
    }).addTo(map).bindPopup(des);
}

// Obtener mensajes del servidor

await fetch('https://proysig.herokuapp.com/getSolicitud',{ 
    method: 'GET'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   //   alert(JSON.stringify(myJson));
    myJson.forEach( item => 
       agregarMarcador(item.ubicacion.coordinates[0], item.ubicacion.coordinates[1], item.descripcion ));
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