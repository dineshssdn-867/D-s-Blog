!function(e){"use strict";var l=e("header").height();if(e(".header_area").length&&e(window).scroll(function(){e(window).scrollTop()>=l?e(".header_area").addClass("navbar_fixed"):e(".header_area").removeClass("navbar_fixed")}),e(".bg-parallax").parallax(),e(".post_slider_inner").length&&e(".post_slider_inner").owlCarousel({loop:!0,margin:0,items:4,nav:!1,autoplay:!1,smartSpeed:1500,dots:!1,responsiveClass:!0,responsive:{0:{items:1},576:{items:2},1200:{items:4}}}),e("#mc_embed_signup").find("form").ajaxChimp(),e("select").niceSelect(),e(".imageGallery1 .light").simpleLightbox(),e("#mapBox").length){var t=e("#mapBox").data("lat"),a=e("#mapBox").data("lon"),r=e("#mapBox").data("zoom");e("#mapBox").data("marker"),e("#mapBox").data("info"),e("#mapBox").data("mlat"),e("#mapBox").data("mlon"),new GMaps({el:"#mapBox",lat:t,lng:a,scrollwheel:!1,scaleControl:!0,streetViewControl:!1,panControl:!0,disableDoubleClickZoom:!0,mapTypeControl:!1,zoom:r,styles:[{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#dcdfe6"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#dcdfe6"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}]})}}(jQuery);