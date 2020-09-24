const slides = document.querySelector(".container").children;
	
const prev = document.querySelector(".control-prev");

const next = document.querySelector(".control-next");

let index = 0;

	prev.addEventListener('click', function(){
		prevSlide()
	});

	next.addEventListener('click', function(){
		nextSlide()
	});

	function prevSlide(argument) {
		if (index == 0) {
			index=slides.length-1;
		} else {
			index--;
		}
		changeSlide()
	}


	function nextSlide(argument) {
		if (index==slides.length-1) {
			index=0;
		} else {
			index++;
		}
		changeSlide()
	}

		
	// trying a new method for changing slides
/*	var type = document.querySelectorAll('.control-prev, control-next');
	console.log(type)


	function newSlide() {
	switch (type){
		case 'img.control-prev':
		Index == 0? (Index = slides.length-1): Index--;
		break;

		case 'img.control-next':
		Index == slides.length-1? (Index = 0): Index++;
		break;
	}
		changeSlide();
	}
		I couldn't figure this method out so I left it.
		If you can, feel free to help.
	*/

	function changeSlide(argument) {
		for(let i=0; i<slides.length; i++){
			slides[i].classList.remove('active');
		}
		slides[index].classList.add('active');
	}

	function autoPlay(argument) {
		nextSlide();
	}

	let timer =  setInterval(autoPlay, 4000);
	



