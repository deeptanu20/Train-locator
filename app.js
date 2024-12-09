const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright"> Deeptanu Bhatta';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

function generateList() {
    const ul = document.querySelector('.list');
    trainList.forEach((train) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const p = document.createElement('p');
        a.addEventListener('click', () => {
            flyToTrain(train);
        });
        div.classList.add('train-item');
        a.innerText = `${train.properties.trainNo} - ${train.properties.trainName}`;
        a.href = '#';
        p.innerText = `From: ${train.properties.stationFrom} To: ${train.properties.stationTo}`;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

generateList();

function makePopupContent(train) {
    return `
    <div>
        <h4>${train.properties.trainName}</h4>
        <p><strong>Train No:</strong> ${train.properties.trainNo}</p>
        <p><strong>From:</strong> ${train.properties.stationFrom}</p>
        <p><strong>To:</strong> ${train.properties.stationTo}</p>
        <p><strong>Arrival:</strong> ${train.properties.arrivalTime}</p>
        <p><strong>Departure:</strong> ${train.properties.departureTime}</p>
    </div>
  `;
}

function onEachFeature(feature, layer) {
    layer.bindPopup(makePopupContent(feature), { closeButton: false, offset: L.point(0, -8) });
}

var trainIcon = L.icon({
    iconUrl: './marker.png', // Update this to the correct marker image path
    iconSize: [30, 40]
});

const trainsLayer = L.geoJSON(trainList, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: trainIcon });
    }
});
trainsLayer.addTo(myMap);

function flyToTrain(train) {
    const lat = train.geometry.coordinates[1];
    const lng = train.geometry.coordinates[0];
    myMap.flyTo([lat, lng], 14, {
        duration: 3
    });
    setTimeout(() => {
        L.popup({ closeButton: false, offset: L.point(0, -8) })
            .setLatLng([lat, lng])
            .setContent(makePopupContent(train))
            .openOn(myMap);
    }, 3000);
}
