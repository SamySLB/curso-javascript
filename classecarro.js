/*
1- crie uma classe para representar carros.
os carros possuem uma marca
uma cor
e um gasto medio de combustivel por km rodado.
crie um metodo que dado a quantidade de quilomentros e o preco do combustivel nos dê 
o valor gasto em reais para realizar este percurso.
*/
class Carros {
    marca;
    corDoCarro;
    gastoMedioPorKm;
   

    constructor(marca,corDoCarro,gastoMedioPorKm){
        this.marca = marca;
        this.corDoCarro = corDoCarro;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
calcularGastoDePercurso(distancia,precoCombustivel){
return distancia * this.gastoMedioPorKm * precoCombustivel;
}
}

const uno = new Carros('fiat', 'azul', 1/12);
uno.calcularGastoDePercurso(70,5);
console.log(uno.calcularGastoDePercurso(70,5));
const palio = new Carros('fiat','preto',1/10);
console.log(palio.calcularGastoDePercurso(70,5));
