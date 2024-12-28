const typed = new Typed('.typed', {

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 400, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1900, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

	document.addEventListener("DOMContentLoaded", function() {
		var whatsappLink = document.getElementById("whatsapp-link");
		var phoneNumber = "+5491139219005"; 
		whatsappLink.href = "https://wa.me/" + phoneNumber;
	});


  var swiper = new Swiper(".cardSwiper", {
	slidesPerView: 1,
	slidesOffsetBetween: 20,
	slidesOffsetAfter: 0,
	speed:800,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	breakpoints: {
		718: {
			slidesPerView: 2,
			slidesOffsetBetween: 30,
		  },	
		780: {
			slidesPerView: 2.2,
			slidesOffsetBetween: 30,
		  },	
		885: {
			slidesPerView: 2.5,
			slidesOffsetBetween: 30,
			slidesOffsetAfter: 100,
		  },	
	  1070: {
		slidesPerView: 3,
		slidesOffsetBetween: 30,
		slidesOffsetAfter: 100,
	  },
	  1280: {
		slidesPerView: 3.7,
		slidesOffsetBetween: 30,
		slidesOffsetAfter: 100,
	  },
	  1560: {
		slidesPerView: 4.4,
		slidesOffsetBetween: 30,
		slidesOffsetAfter: 100,
	  },
	},
  });
	const sliderNav = document.querySelector(".slider-nav");
	const mainMediaLinks = document.querySelector(".main-media-links");



	const modalContainer = document.querySelector(".modal-container");
	const modalBoxes = document.querySelectorAll(".modal-box");
	const modalContents = document.querySelectorAll(".modal-content");

	const readMoreBtns = document.querySelectorAll(".read-more-btn");

	const modalOpen = function(readMoreBtnClick){
	sliderNav.classList.add("hide");
	mainMediaLinks.classList.add("hide");

	modalContainer.classList.add("active");
	modalBoxes[readMoreBtnClick].classList.add("active");

	setTimeout(() => {
	modalContents[readMoreBtnClick].classList.add("active");
	}, 2000);
	}

	readMoreBtns.forEach((readMoreBtn, i) => {
		readMoreBtn.addEventListener("click", () => {
		modalOpen(i);	
		console.log("BIEN HECHO!!!!! YEGUA!!!!!!!!!!!")
		});
	});

	const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

	modalCloseBtns.forEach((modalCloseBtns) => {
		modalCloseBtns.addEventListener("click", ()=> {
			sliderNav.classList.remove("hide");
			mainMediaLinks.classList.remove("hide");

			modalContainer.classList.remove("active");

			modalBoxes.forEach((modalBoxes)=>{
				modalBoxes.classList.remove("active");
			});

			modalContents.forEach((modalContents)=>{
				modalContents.classList.remove("active");
			});
		});
});


const swiperSlides = document.querySelectorAll(".swiper-slide");

	swiperSlides.forEach((swiperSlide) =>{
	const readMoreBtn = swiperSlide.querySelector(".read-more-btn");

	readMoreBtn.addEventListener("click", ()=>{
		function addHideClassWithDelay(elements){
			elements.forEach((element,index)=>{
				const delay = 150;

				setTimeout(() =>{
					element.classList.add("hide");
				}, index * delay);
			})
		}
		const startingElement = document.querySelector(".swiper-slide.swiper-slide-active");

		if(startingElement){
			const elements = document.querySelectorAll("swiper-slide");
			const elementArray = Array.from(elements);
			const startingIndex = elementArray.indexOf(startingElement);
			const elementToHide = elementArray.slice(startingIndex);

			readMoreBtns.forEach((readMoreBtn) => {
				readMoreBtn.addEventListener("click", addHideClassWithDelay(elementToHide));
			});
		}
	});
});


modalBoxes.forEach((modalBox) => {
    const modalCloseBtn = modalBox.querySelector(".modal-close-btn");

    modalCloseBtn.addEventListener("click", () => {
        function removeHideClassWithDelay(elements) {
            elements.forEach((element, index) => {
                const delay = 150;

                setTimeout(() => {
                    element.classList.remove("hide");
                }, index * delay);
            });
        }

        const startingElement = document.querySelector(".swiper-slide.swiper-slide-active");

        if (startingElement) {
            const elements = document.querySelectorAll(".swiper-slide");
            const elementArray = Array.from(elements);
			const startingIndex = elementArray.indexOf(startingElement);
            const elementToShow = elementArray.slice(startingIndex);

            // Envuelve la llamada a removeHideClassWithDelay en una función anónima
            modalCloseBtns.forEach((modalCloseBtn) => {
                modalCloseBtn.addEventListener("click", () => {
                    removeHideClassWithDelay(elementToShow);
                });
            });
        }
    });
});

const rootElement = document.documentElement;
const themeToggleButton = document.getElementById('theme-toggle-button'); // Botón para alternar el tema

// Función para aplicar un tema
function applyTheme(theme) {
  rootElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // Guardar el tema en localStorage
}

// Al cargar la página, aplica el tema guardado o establece uno predeterminado
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = 'dark'; // Tema predeterminado
  applyTheme(savedTheme || defaultTheme); // Aplica el tema guardado o el predeterminado
});

// Alternar entre los temas
themeToggleButton.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
});


//Esta fraccion de codigo es la pasada
// modalBoxes.forEach((modalBox)=>{
// 	const modalCloseBtn = modalBox.querySelector(".modal-close-btn");

// 	modalCloseBtn.addEventListener("click", ()=>{
// 		function removeHideClassWithDelay(elements){
// 			elements.forEach((element, index) =>{
// 				const delay = 150;

// 				setTimeout(()=>{
// 					element.classList.remove("hide");
// 				}, index * delay);
// 			});
// 		}

// 		const startingElement = document.querySelector(".swiper-slide.swiper-slide-active");

// 		if(startingElement){
// 			const elements = document.querySelectorAll("swiper-slide");
// 			const elementArray = Array.from(elements);
// 			const startingIndex = elementArray(startingElement);
// 			const elementToShow = elementArray.slice(startingIndex);

// 			modalCloseBtns.forEach((modalCloseBtn)=>{
// 				modalCloseBtn.addEventListener("click", removeHideClassWithDelay(elementToShow));
// 			});
// 		}
// 	});
// });

//document.addEventListener("DOMContentLoaded", ()=>{
	// const searchInput = Document.querySelector(".search-input");
	// const searchResults = document.querySelector(".search-results");
	// const cardContainer = document.querySelector(".cardContainer");

	// searchInput.addEventListener("input", ()=>{
	// 	const searchTerm = searchInput.value.toLowerCase();
	// 	const marchingCards = Array.from(cardContainer.getElementsByClassName("card")).filter(card => card.dataset.title.toLowerCase().includes(searchTerm));
		
		// Display search result in a dropdown.
	// searchResults.innerHTML = "";

	// marchingCards.forEach(card =>{
	// 	const link = document.createElement("a");

	// 	link.classList.add("search-result-link");
	// 	link.href = "#";
	// 	link.textContent = card.dataset.title;

	// 	link.addEventListener("click", (event)=>{
	// 		event.preventDefault();
	// 		openModal(card.dataset.title);
	// 	});

	// 	searchResults.appendChild(link);
	// });
	// })
//});