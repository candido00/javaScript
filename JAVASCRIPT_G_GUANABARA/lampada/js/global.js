var $ = function(elemento){
    return document.querySelector(elemento);
}
var acesa = false;
var lampada = $(".img_Lamp");
var interruptor = $("#img_Int");
var botao = $("#btn");

botao.addEventListener('click', function(e){
    if(acesa){
        acesa = false;
        lampada.src = "img/apagada.jpg";
        interruptor.src = "img/int_Desligado.jpg";
        botao.innerText = ("Ligar");
    }else{
        acesa = true;
        lampada.src = "img/acesa.jpg";
        interruptor.src = "img/int_Ligado.jpg";
        botao.innerText = ("Desligar");
    }
});