let listaDeAmigos = [];
let qtdLista
function textoNaTela (marcador, texto) {
    let campo = document.querySelector(marcador);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    textoNaTela("h2", "Digite o nome dos seus amigos");
    textoNaTela("h1", "Amigo Secreto");
}

mensagemInicial();

function adicionarAmigo () {
    let nomeAmigo = document.querySelector("input").value;
    if (nomeAmigo != ""){
        if (listaDeAmigos.includes(nomeAmigo)){
            alert("Este Amigo já está na lista!");
            limparCampo();
        } else {
            listaDeAmigos.push(nomeAmigo);
            limparCampo(); 
            qtdLista = listaDeAmigos.length; 
            listaNaTela();
            console.log(listaDeAmigos);    
        }
    } else {
        alert("Insira um valor para que possa ser adcionado!");
    }
}

function limparCampo() {
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = "";
}

function listaNaTela () {
    let itemLista = document.getElementById("listaAmigos");
    itemLista.innerHTML = "";
    for (let conta = 0; conta < qtdLista; conta++ ){
        itemLista.innerHTML += `<li>${listaDeAmigos[conta]}</li>`
    }
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    if(qtdLista != undefined){
        let posicaoSorteado = Math.floor(Math.random() * qtdLista);
        resultado.innerHTML = `<p>O amigo sorteado é ${listaDeAmigos[posicaoSorteado]}</p>`
    } else {
        alert("Insira amigos antes de sortear!");
    }
}