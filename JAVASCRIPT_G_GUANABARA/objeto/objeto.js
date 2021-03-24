let pessoa = {
    nome:'Luci',
    peso: 90.5,
    sexo: 'M',
    engordar(p=0){
        console.log('Engordou');
        this.peso += p;
    }
}
pessoa.engordar(-10);
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`);