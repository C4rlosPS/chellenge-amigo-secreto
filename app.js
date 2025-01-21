let nomes = [];


function limparCampo() {
    let input = document.querySelector('input');
    input.value = ''; 
}

function adicionarAmigo(){
    let nome = document.getElementById('amigo');
    nomes.push(nome.value);
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = `${nomes} `;

    limparCampo();
}

function sortearAmigo(){
    let numAleatorio = parseInt(Math.random() * nomes.length + 1);
    
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `O vencedor é ${nomes[numAleatorio - 1]}`;
    
}

