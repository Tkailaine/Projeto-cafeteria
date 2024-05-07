
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
