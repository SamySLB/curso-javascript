/*Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura;
As pessoas devem ter a capacidade de dizer o valor do seu IMC(Imc= peso/9altura*altura);
instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José
para dizer o valor do seu imc */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

  calcularIMc(){
return this.peso / (this.altura * this.altura);
  }  

  classificarimc(){
const IMC = this.calcularIMc();
if(IMC< 18.5){
    return ('abaixo do peso');
} else if (IMC>= 18.5 && IMC<25){ 
    return ('peso normal');
}
else if (IMC>=25 && IMC<30){
    return ('acima do peso');
}
else if (IMC>=30 && IMC<40){
    return('obeso');
}
else{ console.log('obesidade grave');}
  }
}
const jose = new Pessoa('josé', 70, 1.75);
console.log(jose.classificarimc());
const renan = new Pessoa('renan', 63, 1.75);
console.log(renan.classificarimc());
