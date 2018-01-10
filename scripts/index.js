window.onload=function(){
	var peopleMenu = document.getElementById('people-menu');
	var peoples = document.getElementsByClassName('people');
	var lis = document.getElementsByTagName('li');

	peopleMenu.addEventListener('mouseover',function(){
		for (var i = peoples.length - 1; i >= 0; i--) {
			if (peoples[i].classList.contains('hidden')) {
					peoples[i].classList.remove('hidden');
			}
			else
				peoples[i].classList.add('hidden');
		}
	});



}