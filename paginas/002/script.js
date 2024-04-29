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


function entrou(){
   if(preco.style.display!='none'){
    preco.style.display='none';
    msg.style.display='block';
}
}
function saiu(){
    if(preco.style.display='none'){
     preco.style.display='block';
     msg.style.display='none';
 }
}

