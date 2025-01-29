let nomes = [];
let nomesSorteados = [];
let numAleatorio;

function limparCampo(tag) {
    let input = document.querySelector(tag);
    input.value = ''; 
}
function atualizarLista(id) {
    let lista = document.getElementById(id);
    lista.innerHTML = ''; 
}

function adicionarAmigo(){
    let txtLista ="";
    let count = 0;
    let nome = document.getElementById('amigo');

    
    if(nome.value == ''){
        alert('Digite um nome');
        return;
    }else if(nomes.includes(nome.value)){
        alert('Nome já cadastrado');
        return;
    }else{
        nomes.push(nome.value);
    }

    nomes.forEach(nome => {
        txtLista += `- ${nomes[count]}` + `</br>`;
        count++;
    });

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = " ";
    listaAmigos.innerHTML = `${txtLista}`;
    limparCampo('input');
    atualizarLista('resultado')
}

function sortearAmigo(){

    numAleatorio = parseInt(Math.random() * nomes.length + 1);

    let resultado = document.getElementById('resultado');

    if(nomes.length < 2){
        alert('Digite mais nomes');
    }else{
        resultado.innerHTML = `O vencedor é ${nomes[numAleatorio - 1]}`;
        nomes = [];
        listaAmigos.innerHTML = ``;
        numAleatorio = 0;
        atualizarLista('listaAmigos');

    }
}
