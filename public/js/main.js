$(document).on("ready",
	function(){
		$(".menu-icono").on("click",
			function(){
				TweenLite.to(".menu-desplegado", 1, { ease: Expo.easeOut, y: 300, opacity: 1});
					$(".menu-desplegado").css({display: "block"});
			});
		$(".cerrar").on("click",
			function(){
				TweenLite.to(".menu-desplegado", 1, { ease: Back.easeIn, y: -300, opacity: 0, onComplete: function(){
					$(".menu-desplegado").css({display: "none"});		
				}});
		});
		$('li a').on('click', function(){
			TweenLite.to(".menu-desplegado", 1, { ease: Back.easeIn, y: -300, opacity: 0, onComplete: function(){
				$(".menu-desplegado").css({display: "none"});		
			}});
		});
		$('#contact').on('click', function(e){
			e.preventDefault ();
			var top = $('.contacto').offset().top;
			TweenLite.to(window, 2, {scrollTo:{y: top}, ease:Power2.easeOut});
		});
});