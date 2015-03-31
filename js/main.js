(function(){

	var parallax = document.querySelectorAll(".parallax"),
	    speed = 0.5;

	window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){

			  var windowYOffset = window.pageYOffset,
				elBackgroundPos = "50% " + (windowYOffset * speed) + "px";

			el.style.backgroundPosition = elBackgroundPos;	

		});
	};

})();

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();
