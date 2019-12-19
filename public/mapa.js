
    // obtener los valores
    const lat = document.querySelector('#lat').value,
          lng = document.querySelector('#lng').value,
          descripcion = document.querySelector('#descripcion').value;

          console.log(lat);
          console.log(lng);
          console.log(descripcion);

const map = L.map('ubicacion-mapa').setView([lat, lng], 13);
//const map = L.map('mapa');
let marker;
let mk;


document.addEventListener('DOMContentLoaded', () => {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([lat, lng]).addTo(map)
        .bindPopup("Emergencia")
        .openPopup();
    
})


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

