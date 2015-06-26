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
		$('#form').submit(function(event) {
		var $form	= $(this);
		var name 	= $("#form-name").val();
		var mail 	= $form.find("#form-mail").val();
		var nameIsString	= /[A-Za-z\ ]+/.test(name);
		var emailIsValid	= /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(email);

		if(!name || !nameIsString){
			$("#form-name").addClass("rojo");
			$("form-name").val("");
			$("#dat-obli").css({display: "block"});
			return false;
		}else{
			$("#dat-obli").css({display: "none"});
		}
		if(!email|| !emailIsValid){
			$("#form-mail").addClass("rojo");
			$("#form-mail").val("");
			$(".incorrecto").css({display: "block"});
			$(".vacio").css({display: "none"});
			$(".correcto").css({display: "none"});
			$("#dat-obli").css({display: "block"});
			return false;
		}else{
			$(".correcto").css({display: "block"});
			$(".vacio").css({display: "none"});
			$(".incorrecto").css({display: "none"});
			$("#dat-obli").css({display: "none"});
		}

		$form.find('#boton-enviar').prop('disabled', true);
		return false;
	});
});