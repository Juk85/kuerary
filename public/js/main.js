$(document).on("ready",
	function(){
		$(".menu-icono").on("click",
			function(){
				$(".menu-desplegado").css({display: "block",});
			});
		$(".cerrar").on("click",
			function(){
				$(".menu-desplegado").css({display: "none"});
		});
});