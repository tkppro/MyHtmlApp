$(document).ready(function() {
	$("#button-eminem").on('click',function(){
		$("#eminem").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-primary");
		$("#anchor-eminem").toggleClass("hidden");
	});
	$("#button-steve-jobs").on('click',function(){
		$("#steve-jobs").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-warning");
		$("#anchor-steve-jobs").toggleClass("hidden");
	});
	$("#button-jack-ma").on('click',function(){
		$("#jack-ma").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-danger");
		$("#anchor-jack-ma").toggleClass("hidden");
	});
	$("#button-faker").on('click',function(){
		$("#faker").toggleClass("hidden");
		$(this).toggleClass("btn-default btn-success");
		$("#anchor-faker").toggleClass("hidden");
	});
	console.log("hello!");
});