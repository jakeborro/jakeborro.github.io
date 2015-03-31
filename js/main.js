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

(function(window){

  var nav = document.querySelector("nav.cmn-tile-nav"),
      nav_toggle = document.querySelector("a.nav-toggle");

  nav_toggle.addEventListener("click", function(e){
    e.preventDefault();
    classie.toggle(nav, "open");
  });

})(window);
