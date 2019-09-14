/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 1.4
 * Created:October 2014
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

 
// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: -25.344, lng: 131.036};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }


$(window).on("load", function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9wZGV2MDAzIiwiYSI6ImNqcHg1bmw4ODBpN2c0OW9kc2JjZW1zdWoifQ.50gYTaOTgxBYvtIi6eQVGA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-115.21786734110208,36.21985208193739],
        zoom: 9
    });

    var geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-115.21786734110208,36.21985208193739]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        }]
      };
    
    // add markers to map
    geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
  
      
    var $landingWrapper = $(".home-service-wrapper"),
        $landingInnerContent = $(".home-service-list");

    // set initial container to half of .landing-inner-content width
    //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

    // scroll left and right
    $landingInnerContent.on("mousemove touchmove", function(e) {
        if (e.clientX > $landingWrapper.width() / 2) {
        TweenMax.to($landingWrapper, 2, {
            scrollTo: {
            x: "+=175"
            },
            ease: Power2.easeOut
        });
        } else {
        TweenMax.to($landingWrapper, 2, {
            scrollTo: {
            x: "-=175"
            },
            ease: Power2.easeOut
        });
        }
    });

});


      