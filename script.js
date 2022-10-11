// Declarando variáveis e constantes

const alphabet = ['.','é','ú','ó','á','í','ã','ç','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];var cifraDeCesar = document.getElementById('radio-cifra');
var base64 = document.getElementById('radio-base64');
var incremento = document.getElementById('incremento');
var botao = document.getElementById('botao');
var codificar = document.getElementById('codificador');
var decodificar = document.getElementById('decodificador');
var m = document.getElementById('message');
var mensagemCripto = document.getElementById('messagebox')


// // Função para sumir incremento

function desaparecer(){

    if(cifraDeCesar.checked){
        incremento.style.display="inline"
    } else if(base64.checked){
        incremento.style.display="none"
    }
}

// // Função para trocar texto do botao

function troca(){

    if(decodificar.checked){
        botao.innerText ='Decodificando'
    } else if(codificar.checked){
        botao.innerText='Codificando'
    }
}

// Função para pegar mensagem inserida

// function chegouMensagem(){
//     caixa.innerText = mensagem
// }

// Função Cifra de Cesar

function codificando(){
    var arrayNcripto = m.value.split('');
    console.log(arrayNcripto)

}