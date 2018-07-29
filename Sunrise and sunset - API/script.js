window.onload = htmlOnLoad;
function htmlOnLoad() {
    var addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', function() {
        $.ajax('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400').then(callOnSuccess).then(function(item) {
            console.log('Call on success = ', item);
            var itemRes = item;
            var element = document.getElementById('post');
            var elemResult = document.createElement('div');
            elemResult.innerHTML =
                    '<p>Sunrise: ' + itemRes.sunrise + '</p>' +
                    '<p>Sunset: ' + itemRes.sunset + '</p>' +
                    '<p>Solar noon: ' + itemRes.solar_noon + '</p>' +
                    '<p>Day length: ' + itemRes.day_length + '</p>' +
                    '<p>Civil twilight begin: ' + itemRes.civil_twilight_begin + '</p>' +
                    '<p>Civil twilight end: ' + itemRes.civil_twilight_end + '</p>' +
                    '<p>Nautical twilight begin: ' + itemRes.nautical_twilight_begin + '</p>' +
                    '<p>Nautical twilight end: ' + itemRes.nautical_twilight_end + '</p>' +
                    '<p>Astronomical twilight begin: ' + itemRes.astronomical_twilight_begin + '</p>' +
                    '<p>Astronomical twilight end: ' + itemRes.astronomical_twilight_end + '</p>'
                    element.appendChild(elemResult);
        })  
    })
}
function callOnSuccess(item) {
    var itemResults = item.results;
    return itemResults;
}