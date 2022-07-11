// burger 

const burger = document.querySelector('.js-burger'),
		menu = document.querySelector('.js-nav');

burger.addEventListener('click', function(){
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
})

