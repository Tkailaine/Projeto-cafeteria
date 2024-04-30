var itens = document.getElementById("itens")
var menu = document.getElementById("divmenu")
var destaque = document.getElementById("destaque")
var preco = document.querySelector(".precoc")
var msg = document.querySelector(".msg")

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


function entrou(elemento) {
    elemento.style.display = 'none';
    elemento.nextElementSibling.style.display = 'block';
}

function saiu(elemento) {
    elemento.style.display = 'block';
    elemento.nextElementSibling.style.display = 'none';
}

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var titulosessao = document.querySelector('.titulosessao');
    var liquido = document.querySelector('.liquido');
    
    // Calcula a quantidade de deslocamento com base na posição de rolagem
    var offset = scrollTop * 0.5;
    
    // Aplica o deslocamento à imagem líquida
    liquido.style.transform = 'translateY(calc(100% + ' + offset + 'px))';
  });
  

