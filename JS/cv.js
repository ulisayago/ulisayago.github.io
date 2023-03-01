
let d = new Date();

document.getElementById('contenedorfecha').innerHTML = "FECHA: " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();


document.getElementById('ContenedorClick').addEventListener('click',
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('contenedorPosicion').innerHTML = "Geolocation is not supported by this browser.";
    }
})

function showPosition(position) {
    document.getElementById('contenedorPosicion').innerHTML = "Latitude: " + position.coords.latitude + " / Longitude: " + position.coords.longitude;
}

