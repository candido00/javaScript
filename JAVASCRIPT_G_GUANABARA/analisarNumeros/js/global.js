//criando variavel global para retorno de elemento
let $ = function(elem) {
    return document.querySelector(elem);
}
//adicionando evento de click botao
let btnAd = $('#btnAd');
btnAd.addEventListener('click', adicionar);
let btnFin = $('#btnFin');
btnFin.addEventListener('click', finalizar);
let btnEnter = $('#geral');
btnEnter.addEventListener('keypress', acEnter);
let nums = [];
//função para adicionar valores no select
function adicionar() {
    div.innerHTML = '';
    let txtN1 = $('#txtN1');
    let selVal = $('#selVal');
    let n1 = Number(txtN1.value);
    //validação básica para impedir a entrada de valores
    if(n1 < 1 || n1 > 100 || txtN1.value.length == 0 || nums.indexOf(n1) > -1){
        alert('Valor inválido ou já está na lista!');
    }else{
        nums.push(n1);
        let opt = document.createElement('option');
        opt.text = `Valor ${n1} inserido`;
        //anexando filho ao pai
        selVal.appendChild(opt);    
    }
    txtN1.value = '';
    txtN1.focus();
}
//retornando elementos e criando variaveis
let qtdElem, maior, menor, media, resultado;
let div = document.createElement('div');
div.setAttribute('id', 'divRes');
//funcao para resultado final
function finalizar() {
    if(nums.length == 0){
        alert('Adicione valores antes de finalizar!');
    }else{    
        let soma = 0;
        resultado = $('#resultado');
        //calculando soma
        for(let num in nums){
            soma += nums[num];
        }
        //calculando tamanho, maior, menor e média do array
        qtdElem = nums.length;
        maior = Math.max.apply(null, nums);
        menor = Math.min.apply(null, nums);
        media = (soma / qtdElem).toFixed(2);
        //inserindo resultado final na div criada dinamicamente
        div.innerHTML = ` <p>Ao todo, temos ${qtdElem} numeros cadastrados</p>
                          <p>O maior valor informado foi ${maior}</p>
                          <p>O menor valor informado foi ${menor}</p>
                          <p>Somando todos os valores temos ${soma}</p>
                          <p>A média dos valores digitados é ${media}</p>`;
        //anexando filho ao pai
        resultado.appendChild(div);
    }
}
function acEnter(e){
    if(e.which == 13){
        adicionar();
    }
}