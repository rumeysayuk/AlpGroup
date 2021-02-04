
$(document).ready(function(){
    var autoplay = 5000;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        watchSlidesProgress: true,
        autoplay: autoplay,
        onProgress: move
    });
    function move() {
        var elem = document.getElementById("progress"); 
        var width = 1;
        var autoplayTime = autoplay / 100;
        var id = setInterval(frame, autoplayTime);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }
    console.log(swiper)

});
