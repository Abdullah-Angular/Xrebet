new Swiper('.slider-container', {
	//Стрелки
	loop:true,
	navigation: {
		nextEl: '.slider__button-next ',
		prevEl: '.slider__button-prev '

	}
})

new Swiper('.slider2-container', {
	//Стрелки
	slidesPerView:4,
	spaceBetween:30,
	loop:true,
	navigation: {
		nextEl: '.slider2__button-next',
		prevEl: '.slider2__button-prev '

	},
	// slidesPerGroup:2, для пролитывания 2 слайдов
});

