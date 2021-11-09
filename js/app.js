const navSlide = () => {
  const burger = document.querySelector(".burger");
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav__list");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("change");
    body.classList.toggle("disabled");
  });
};
navSlide();

// nav section active on scroll

const sections = document.querySelectorAll("section");
const navlink = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navlink.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current + "__link")) {
      a.classList.add("active");
    }
  });
});

// Galeria
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav__list")

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

img9.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled");
  burger.classList.add("hide");
  nav.classList.add("hide-nav")
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  body.classList.remove("disabled");
  burger.classList.remove("hide");
  nav.classList.remove("hide-nav")
};

//Animacion
window.addEventListener("scroll", () => {
  let contenedor = document.querySelector(".ul__about")
  let animacion = document.querySelectorAll(".animado")

  let tamañoPantalla = window.innerHeight/1.5

  animacion.forEach(element => {
    if(contenedor.getBoundingClientRect().top < tamañoPantalla){
      element.style.animation = "mover 1s"
      element.classList.remove("opacity0")
      element.classList.add("opacity1")
      
    }
  })
})
