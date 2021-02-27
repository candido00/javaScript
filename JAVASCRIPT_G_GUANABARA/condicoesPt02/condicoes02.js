var horar = new Date();
var hora = horar.getHours();
var minu = horar.getMinutes();
var segu = horar.getSeconds();
console.log(`São Exatamente ${hora}:${minu}:${segu}`)
if (hora < 12) {
    console.log(`Bom dia!`);
}else if(hora <= 18){
    console.log(`Boa tarde!`);
}else{
    console.log(`Boa noite!`);
}
