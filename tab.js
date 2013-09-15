var closeall = function() {
	$("#home").hide();
	$("#research").hide();
	$("#cv").hide();
	$("#contact").hide();
	$("#ps").hide();
	$("#future").hide();
}
$(document).ready(function(){
		$(".hometab").click(function(){
			closeall();
			$("#home").toggle();
		})
		
		$(".cvtab").click(function() {
			closeall();
			$("#cv").toggle();
		})
		$(".researchtab").click(function() {
			closeall();
			$("#research").toggle();
		})
		$(".contacttab").click(function() {
			closeall();
			$("#contact").toggle();
		})
		$(".pstab").click(function() {
			closeall();
			$("#ps").toggle();
		})
		$(".futuretab").click(function() {
			closeall();
			$("#future").toggle();
		})
		})
