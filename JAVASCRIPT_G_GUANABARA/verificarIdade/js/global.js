var botao = document.querySelector('input#btnVer');
botao.addEventListener('click', verificar);

function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var txtAno = document.querySelector('input#txtAno');
    var resul = document.querySelector('div#result');
    if (txtAno.value.length == 0 || txtAno.value > ano || txtAno.value <= 0) {
        alert('Verifique os dados e tente novamente!');
    }else{
        var formSex = document.getElementsByName('radSex');
        var idade = (ano - Number(txtAno.value));
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-homem.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-homem.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-homem.jpg');
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso-homem.jpg');
            }
        }else if(formSex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/crianca-mulher.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.jpg');
            }else if(idade < 50){
                //adulta
                img.setAttribute('src', 'img/adulta-mulher.jpg');
            }else{
                //idosa
                img.setAttribute('src', 'img/idosa-mulher.jpg');
            }
        }
        resul.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resul.appendChild(img);
    }
}