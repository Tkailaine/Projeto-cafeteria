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

