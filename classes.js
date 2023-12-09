class pessoa{
nome;
idade;
anoDeNascimento;

constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
}

descrever(){
    console.log(`My name is ${this.nome} and I'm ${this.idade} years old.`);
}
}

const Samara = new pessoa('samara',20);
const rena = new pessoa('renan',30);

Samara.descrever();
rena.descrever();