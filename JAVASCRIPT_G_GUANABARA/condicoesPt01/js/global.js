var botao = document.querySelector('input#btnVer');
botao.addEventListener('click', verificar);

function verificar(){
    var txtveloc = document.querySelector('input#txtVelo');
    var resul = document.querySelector('div#resul');
    var veloc = Number(txtveloc.value);
    resul.innerHTML = `<p>Sua velocidade atual é de ${veloc} km/h</p>`;
    if (veloc > 60) {
        resul.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>`;
    }
    resul.innerHTML += `<p> Dirija sempre com cinto de segurança!</p>`;
}