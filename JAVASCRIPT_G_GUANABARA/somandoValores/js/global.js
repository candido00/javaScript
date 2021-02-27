var somVal = document.querySelector('input#btnS');
somVal.addEventListener('click', somar);

function somar(){
    var txtn1 = document.querySelector('input#txtn1');
    var txtn2 = document.querySelector('input#txtn2');
    var res = document.querySelector('div#res');
    var num1 = Number(txtn1.value);
    var num2 = Number(txtn2.value);
    var soma = num1 + num2;
    res.innerHTML = `A soma entre ${num1} e ${num2} = <strong>${soma}</strong>`;
}
