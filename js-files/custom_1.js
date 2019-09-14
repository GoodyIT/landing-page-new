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

jQuery(document).ready(function($){
  "use strict"; 

  var delay=0, setTimeoutConst;
  // Isotope filters
      //-----------------------------------------------
    if ($('.isotope-container').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0) {
      // $(window).on("load", function() {
        $('.masonry-grid').isotope({
          itemSelector: '.masonry-grid-item',
          layoutMode: 'masonry'
        });
        $('.masonry-grid-fitrows').isotope({
          itemSelector: '.masonry-grid-item',
          layoutMode: 'fitRows'
        });
        $('.isotope-container').fadeIn();
        var $container = $('.isotope-container').isotope({
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          transitionDuration: '0.6s',
          filter: "*"
        });
        // filter items on button click
        $('.filters').on( 'click', 'ul.nav li a', function() {
          var filterValue = $(this).attr('data-filter');
          $(".filters").find("li.active").removeClass("active");
          $(this).parent().addClass("active");
          $container.isotope({ filter: filterValue });
          return false;
        });
      // });
    };

    // Magnific popup
		//-----------------------------------------------
		if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
			$(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
			$(".popup-img-single").magnificPopup({
				type:"image",
				gallery: {
					enabled: false,
				}
			});
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

    // Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var item = $(this),
				animationEffect = item.attr("data-animation-effect");

				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					item.appear(function() {
						if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
						setTimeout(function() {
							item.addClass('animated object-visible ' + animationEffect);

						}, item.attr("data-effect-delay"));
					}, {accX: 0, accY: -130});
				} else {
					item.addClass('object-visible');
				}
			});
		};


    // $(window).on("load", function() {
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

    // });
  });

      