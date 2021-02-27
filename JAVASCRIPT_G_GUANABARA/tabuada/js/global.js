//criando variavel global para retorno de elemento
var $ = function(elemento){
    return document.querySelector(elemento);
}
//adicionando evento de click botao
var botao = $('#btnGT');
botao.addEventListener('click', calcular);
//funçao para calcular tabuada
function calcular(){
    //retorno de elementos
    var txtNum1 = $('#num1');
    var num1 = Number(txtNum1.value);
    var tabu = $('#selTab');
    var resul = $('#resul');
    //validacao basica para impedir a entrada de valores vazio
    if(txtNum1.value.length == 0){
        alert('Por favor, digite um numero!');
    }else{
        var count = 1;
        tabu.innerHTML ='';
        //calculando tabuada,criando elemento option dinamicamente com JS e inserindo valores
        for( var i = 1; i <= 10; i++){
            var calcu = (num1 * count);
            var opcao = document.createElement('option');
            opcao.text = `${num1} x ${count} = ${calcu}`;
            opcao.value =`indexTab${count}`;
            count++;
            //anexando filho ao pai
            tabu.appendChild(opcao);
        } 
    }
}
