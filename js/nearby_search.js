$(function() {
        var DEFAULT_ZOOM = 15;
        
        function initMap() {
                var position = {lat: 37.773972, lng: -122.43129};
                var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: DEFAULT_ZOOM,
                        center: {
                                lat: position.lat,
                                lng: position.lng
                        }
                });
                var marker = new google.maps.Marker({
                        position: position,
                        map: map
                });
        }
        initMap();
});
