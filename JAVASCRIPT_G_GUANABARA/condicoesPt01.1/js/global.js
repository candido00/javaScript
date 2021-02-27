var botao = document.querySelector('input#btnVer');
botao.addEventListener('click', verificar);

function verificar(){
    var txtpais = document.querySelector('input#txtPais');
    var pais = txtpais.value.trim().toUpperCase();
    var resul = document.querySelector('div#resul');
    if (pais) {
        if (pais == 'BRASIL') {
            resul.innerHTML = `<p>Você é Brasileiro!</p>`;
        }else{
            resul.innerHTML = `<p>Você é Estrangeiro</p>`
        }
        
    }else{
        alert('Informe um nome de País');
    }
    
}