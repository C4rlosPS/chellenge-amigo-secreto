let nomes = [];
let numerosSorteados = [];
let nomesSorteados = [];
let numAleatorio;

function limparCampo(tag) {
    let input = document.querySelector(tag);
    input.value = ''; 
}

function adicionarAmigo(){
    let txtLista ="";
    let count = 0;
    let nome = document.getElementById('amigo');

    nomes.push(nome.value);

    nomes.forEach(nome => {
        txtLista += `- ${nomes[count]}` + `</br>`;
        count++;
    });

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = " ";
    listaAmigos.innerHTML = `${txtLista}`;
    limparCampo('input');
}

function sortearAmigo(){

    do{
        numAleatorio = parseInt(Math.random() * nomes.length + 1);
    }while(numerosSorteados.includes(numAleatorio))

    numerosSorteados.push(numAleatorio);

    if(nomesSorteados.includes(nomes[numAleatorio - 1])){
        sortearAmigo();
    }else{
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O vencedor é ${nomes[numAleatorio - 1]}`;
    }

    nomesSorteados.push(nomes[numAleatorio - 1]);
}
