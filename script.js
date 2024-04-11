var itens = document.getElementById("itens")
var menu = document.getElementById("divmenu")

function fechar(){
    if(itens.style.display!='none'){
        itens.style.display='none';
        menu.style.display='inline-block';
    }
}
function abrir(){
    if(menu.style.display!='none'){
        itens.style.display='inline-block';
        menu.style.display='none';
       
    }
}

