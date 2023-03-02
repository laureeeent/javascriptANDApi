

setInterval(() => {
    $.ajax({
            url: "http://api.open-notify.org/iss-now.json",
            method: "GET",  }
        ).done((donnees) =>
            $('#latitude').text(donnees.iss_position.latitude)
    ).done(
        () => {
            $.ajax({
                url: "http://api.open-notify.org/iss-now.json",
                method: "GET",  }
            ).done((donnees) =>
                $('#longitude').text(donnees.iss_position.longitude)
            );
        }
    );
    }
);



let map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\'', {
    maxZoom: 19,
}).addTo(map);


var myIcon = L.icon({
    iconUrl: 'iss_2.png',
    iconSize: [50, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
let marker = L.marker([51, -115], {icon : myIcon}).addTo(map);

setInterval(() => {
        $.ajax({
            url: "http://api.open-notify.org/iss-now.json",
            method: "GET",  }
        ).done((donnees) =>{
            marker.setLatLng([donnees.iss_position.latitude, donnees.iss_position.longitude]);
            map.setView([donnees.iss_position.latitude, donnees.iss_position.longitude]);
        }

        );
    }, 1000
);

window.onload = function () {
    Particles.init( {
        selector : '.background'
    });
};

