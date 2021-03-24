//Recursividade
function fatorial(num) {
    if(num == 1){
        return 1;
    }else{
        return num * fatorial(num-1);
    }
}
let resul = fatorial(6);
console.log(resul);

//num! = num x (num-1)!