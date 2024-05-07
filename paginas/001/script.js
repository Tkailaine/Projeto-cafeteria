


document.querySelectorAll('.menu a').forEach(link => {

  link.addEventListener('click', function() {

    document.querySelector('.menu').classList.remove('open');
    document.querySelector('.menu-btn').style.opacity = '1';
  });
});

document.querySelector('.menu-btn').addEventListener('click', function() {
 
  document.querySelector('.menu').classList.add('open');
  document.querySelector('.menu-btn').style.opacity = '0';
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.menu').classList.remove('open');
  document.querySelector('.menu-btn').style.opacity = '1';
});


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

