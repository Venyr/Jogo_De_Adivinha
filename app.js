let lista_numeros = [];
let tentativas = 1;
let max_numb = 10;
let numero_aleatorio = gerarNumero_aleatorio();

//String template
function exibir_texto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function tela_inicial(){
    exibir_texto('h1', 'jogo do numero secreto');
    exibir_texto('p', 'Escolha um número de 1 a 10');
}

tela_inicial();

function verificar_chute() {
    let plural = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagem_tentaivas = (`Você acertou o número com ${tentativas} ${plural}!`);
    let chute = document.querySelector('input').value;

    if (numero_aleatorio == chute){
        exibir_texto('h1', 'Você acertou!');
        exibir_texto('p', mensagem_tentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numero_aleatorio > chute){
        exibir_texto('h1', 'Tente novamente!');
        exibir_texto('p', 'É um número maior, tente novamente!');
    } else {
        exibir_texto('h1', 'Tente novamente!');
        exibir_texto('p', 'É um número menor, tente novamente!');
    }
    tentativas++;
    limpar_campo();
}

function gerarNumero_aleatorio() {
    let numero_gerado = parseInt(Math.random() * max_numb + 1);
    let quantidade_elementos = lista_numeros.length;

//Zerar a lista quando utilizar todos os números    
    if(quantidade_elementos == max_numb){
        lista_numeros = [];
    }

//Verificar se o número já esta na lista ou não
    if (lista_numeros.includes(numero_gerado)) {
        return gerarNumero_aleatorio();
    } else {
        lista_numeros.push(numero_gerado);
        console.log(lista_numeros);
        return numero_gerado;
    }
}

function limpar_campo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function novo_jogo(){
    tela_inicial();
    limpar_campo();
    numero_aleatorio = gerarNumero_aleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}