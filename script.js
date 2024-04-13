// Função para copiar o menu para dispositivos móveis
function copyMenu() {
	// Copiar o conteúdo de .dpt-cat para .departments
	var dptCategory = document.querySelector(".dpt-cat");
	var dptPlace = document.querySelector(".departments");
	dptPlace.innerHTML = dptCategory.innerHTML;
  
	// Copiar o conteúdo de nav para .off-canvas nav
	var mainNav = document.querySelector(".header-nav nav");
	var navPlace = document.querySelector(".off-canvas nav");
	navPlace.innerHTML = mainNav.innerHTML;
  
	// Copiar .header-top .wrapper para .off-canvas .thetop-nav
	var topNav = document.querySelector(".header-top .wrapper");
	var topPlace = document.querySelector(".off-canvas .thetop-nav");
	topPlace.innerHTML = topNav.innerHTML;
  }
  
  // Chamar a função para copiar o menu
  copyMenu();
  
  // Mostrar o menu móvel ao clicar no botão
  const menuButton = document.querySelector(".trigger");
  const closeButton = document.querySelector(".t-close");
  const addclass = document.querySelector(".site");
  menuButton.addEventListener("click", function () {
	addclass.classList.toggle("showmenu");
  });
  closeButton.addEventListener("click", function () {
	addclass.classList.remove("showmenu");
  });
  
  // Mostrar submenus em dispositivos móveis
  const submenu = document.querySelectorAll(".has-child .icon-small");
  submenu.forEach((menu) => menu.addEventListener("click", toggle));
  
  function toggle(e) {
	e.preventDefault();
	submenu.forEach((item) =>
	  item != this
		? item.closest(".has-child").classList.remove("expand")
		: null
	);
	if (this.closest(".has-child").classList != "expand");
	this.closest(".has-child").classList.toggle("expand");
  }
  
  // Slider
  const swiper = new Swiper(".swiper", {
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	},
  });
  
  // Mostrar campo de busca
  const searchButton = document.querySelector(".t-search");
  const tClose = document.querySelector(".search-close");
  const showClass = document.querySelector(".site");
  searchButton.addEventListener("click", function () {
	showClass.classList.toggle("showsearch");
  });
  tClose.addEventListener("click", function () {
	showClass.classList.remove("showsearch");
  });
  
  // Mostrar menu de departamentos
  const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
  const dptClass = document.querySelector(".site");
  dptButton.addEventListener("click", function () {
	dptClass.classList.toggle("showdpt");
  });
  
  // Slider de imagens do produto
  var productThumb = new Swiper(".small-image", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
	  481: {
		spaceBetween: 32,
	  },
	},
  });
  var productBig = new Swiper(".big-image", {
	loop: true,
	autoHeight: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: productThumb,
	},
  });
  
  // Definir a largura da barra de progresso dos produtos
  var stocks = document.querySelectorAll(".products .stock");
  for (let x = 0; x < stocks.length; x++) {
	let stock = stocks[x].dataset.stock;
	let available = stocks[x].querySelector(".qty-available").innerHTML;
	let sold = stocks[x].querySelector(".qty-sold").innerHTML;
	let percent = (sold * 100) / stock;
  
	stocks[x].querySelector(".available").style.width = percent + "%";
  }
  
  // Mostrar carrinho ao clicar
  const divtoShow = ".mini-cart";
  const divPopup = document.querySelector(divtoShow);
  const divTrigger = document.querySelector(".cart-trigger");
  
  divTrigger.addEventListener("click", () => {
	setTimeout(() => {
	  if (!divPopup.classList.contains("show")) {
		divPopup.classList.add("show");
	  }
	}, 250);
  });
  
  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
	const isClosest = e.target.closest(divtoShow);
	if (!isClosest && divPopup.classList.contains("show")) {
	  divPopup.classList.remove("show");
	}
  });
  
  // Mostrar modal ao carregar
  window.onload = function () {
	document.querySelector(".site").classList.toggle("showmodal");
  };
  document.querySelector(".modalclose").addEventListener("click", function () {
	document.querySelector(".site").classList.remove("showmodal");
  });