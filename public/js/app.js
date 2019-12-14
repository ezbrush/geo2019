var map = L.map('mapa').setView([-17.7862892, -63.1811714], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-17.7862892, -63.1811714]).addTo(map)
    .bindPopup('Ejemplo de marker')
    .openPopup();
