window.onload=function(){
	var peopleMenu = document.getElementById('people-menu');
	var peoples = document.getElementsByClassName('people');
	var lis = document.getElementsByTagName('li');

	peopleMenu.addEventListener('click',function(){
		for (var i = peoples.length - 1; i >= 0; i--) {
			peoples[i].classList.remove('hidden');
		}

	});
}