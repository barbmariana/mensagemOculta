var metodo = document.getElementsById("metodo");
var value = metodo.value;

var incremento = document.getElementById("incremento");

function desaparecer(){
    if(value=="base64"){
    incremento.style.display="hidden";
}
}

function enviar(){
    console.log(metodo)
}