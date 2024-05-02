var itens = document.getElementById("itens")
var menu = document.getElementById("divmenu")
var destaque = document.getElementById("destaque")

function fechar(){
    if(itens.style.display!='none'){
        itens.style.display='none';
        menu.style.display='inline-block';
        destaque.style.display='block';
    }
}
function abrir(){
    if(menu.style.display!='none'){
        itens.style.display='inline-block';
        menu.style.display='none';
        destaque.style.display='none';
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(function() {
  plusSlides(1);
}, 3000);

