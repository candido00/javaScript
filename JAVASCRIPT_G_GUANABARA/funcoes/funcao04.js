function fatorial(num) {
    let fat = 1;
    for(let cont=num; cont>1; cont--){
        fat *= cont;
    }
    return fat;
}
let result = fatorial(170);
console.log(result);

// 5! = 5 x 4 x 3 x 2 x 1
//