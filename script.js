// // Função para sumir incremento

function desaparecer(){
var cifraDeCesar = document.getElementById('radio-cifra')
var base64 = document.getElementById('radio-base64')
var incremento = document.getElementById('incremento')
    if(cifraDeCesar.checked){
        incremento.style.display="inline"
    } else if(base64.checked){
        incremento.style.display="none"
    }
}


// // Função para trocar texto do botao

function troca(){
var botao = document.getElementById('botao');
var codificar = document.getElementById('codificador');
var decodificar = document.getElementById('decodificador');
    if(decodificar.checked){
        botao.innerText ='Decodificando'
    } else if(codificar.checked){
        botao.innerText='Codificando'
    }
}

// Função para pegar mensagem inserida

function mensagem(){
    var mensagem = document.getElementById('message')
    document.write.innerText(mensagem.value)
}