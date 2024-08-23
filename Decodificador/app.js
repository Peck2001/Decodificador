let titulo = document.querySelector('h1');
titulo.innerHTML = 'Decodificador de Texto';
texto=0;

function exibir (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function cripotografar(){
    let texto = document.querySelector('textarea').value;
    if(texto!=0){
    texto=texto.replace(/e/g,"enter");
    texto=texto.replace(/i/g,"imes");
    texto=texto.replace(/a/g,"ai");
    texto=texto.replace(/o/g,"ober");
    texto=texto.replace(/u/g,"ufat");
    document.getElementById('apagar').style.display = "none";
    exibir('p1', texto);

    }
}

function descripotografar(){
    let texto = document.querySelector('textarea').value;
    texto=texto.replace(/enter/g,"e");
    texto=texto.replace(/imes/g,"i");
    texto=texto.replace(/ai/g,"a");
    texto=texto.replace(/ober/g,"o");
    texto=texto.replace(/ufat/g,"u");
    if(texto!=0){
    document.getElementById('apagar').style.display = "none";
    exibir('p1', texto);
    }
}