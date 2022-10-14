// Declarando variáveis e constantes

const alfabeto = ['.','é','ú','ó','á','í','ã','ç','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var cifraDeCesar = document.getElementById('radio-cifra');
var base64 = document.getElementById('radio-base64');
var incremento = document.getElementById('incremento');
var botao = document.getElementById('botao');
var codificar = document.getElementById('codificador');
var decodificar = document.getElementById('decodificador');
var m = document.getElementById('message');
var mensagemCaixa = document.getElementById('messagebox')
var botaoMostra = document.getElementById('botaoMostra')


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

// Função para codificar

function codificando() {
    var mensagem = m.value;
    var mensagemM = mensagem.toLowerCase();
    var numeroTroca = (Number(incremento.value) % 26);
    var mensagemCripto = '';

        if(cifraDeCesar.checked && codificar.checked){
            for(var i = 0; i < mensagemM.length; i++){
                for(var j =0; j < alfabeto.length; j++){
                    if(mensagemM[i] == alfabeto[j]){
                    mensagemCripto += alfabeto [j + numeroTroca]
                    break;
                    } else if (mensagemM[i] == ' '){
                    mensagemCripto += ' ';
                    break;
                    }
                    }
            }
             return mensagemCaixa.innerHTML=mensagemCripto

        }else if (cifraDeCesar.checked && decodificar.checked){
        
            for(var i = 0; i < mensagemM.length; i++){
                for(var j = alfabeto.length - 1; j >= 0; j--){
                    if(mensagemM[i] == alfabeto[j]){
                    mensagemCripto += alfabeto [j - numeroTroca]
                    break;
                    } else if (mensagemM[i] == ' ') {
                    mensagemCripto += ' ';
                    break;
                    }
                }
        }
            return mensagemCaixa.innerHTML=mensagemCripto

        } else if(base64.checked && codificar.checked){
            var emBase64=btoa(mensagemM)
            return mensagemCaixa.innerHTML = emBase64

        } else if(base64.checked && decodificar.checked){
            var emBase64 = atob(mensagem)
            return mensagemCaixa.innerHTML = emBase64
    }
}



