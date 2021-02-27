var txtArea = document.querySelector('div#area');
txtArea.addEventListener('click', clicar);
txtArea.addEventListener('mouseenter', entrar);
txtArea.addEventListener('mouseout', sair);

function clicar(){
    txtArea.innerText = 'Clicou';
    txtArea.style.background = 'red';
}
function entrar(){
    txtArea.innerText = 'Entrou';
    txtArea.style.background = 'blue';
}
function sair(){
    txtArea.innerText = 'Saiu';
    txtArea.style.background = 'green';
}