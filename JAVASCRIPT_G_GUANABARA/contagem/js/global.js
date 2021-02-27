var $ = function(elemento) {
    return document.querySelector(elemento);
}
//evento de click botao
var botao = $('input#btnC');
botao.addEventListener('click', contar);

function contar(){
    //retornando elementos
    var txtIni = $('input#txtIni');
    var txtFim = $('input#txtFim');
    var txtPas = $('input#txtPas');
    var resul =  $('div#resul').innerHTML = "";
    var resul =  $('div#resul');

    if (txtIni.value.length == 0 || txtFim.value.length == 0 || txtPas.value.length == 0 ) {
        resul.innerHTML = `[ERRO] Prencha todos os dados!`;
    }else{
        //convertendo string para numero
        var ini = Number(txtIni.value);
        var fim = Number(txtFim.value);
        var pas = Number(txtPas.value);
        if(pas <= 0){
            resul.innerHTML += `Valor de "Passo" inválido, considerando "Passo" valor 1 <br>`;
            pas = 1;
        }     
        if(ini < fim){
            //contagem crescente
            for(var count = ini; count <= fim; count += pas){
                resul.innerHTML += `${count} \u{1F449}`;
            }
        }else if(fim < ini){
            //contagem decrescente
            for(var count = ini; count >= fim; count -= pas){
                resul.innerHTML += `${count} \u{1F449}`;
            }
        }
    }
    //adicionando emoticon bandeira final
    resul.innerHTML += `\u{1F3C1}`;
}
    