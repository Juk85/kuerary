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

		$('#form').on("submit", function(event) {
			event.preventDefault ();
		var name = $("#form-name").val();
		var mail = $("#form-mail").val();
		var nameIsString = /[A-Za-z\ ]+/.test(name);
		var mailIsValid = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(mail);

		if (!name || !nameIsString){
			$("#form-name").addClass("rojo");
			$("#form-name").val("");
			$("#dat-obli").css({display: "block"});
		}
		else {
			$("#dat-obli").css({display: "none"});
		}
		if (!mail || !mailIsValid){
			$("#form-mail").addClass("rojo");
			$("#form-mail").val("");
			$(".incorrecto").css({display: "block"});
			$(".vacio").css({display: "none"});
			$(".correcto").css({display: "none"});
			$("#dat-obli").css({display: "block"});
			return false;
		}else {
			$(".correcto").css({display: "block"});
			$(".vacio").css({display: "none"});
			$(".incorrecto").css({display: "none"});
			$("#dat-obli").css({display: "none"});
		}	
	});
});