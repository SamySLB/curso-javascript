const pessoa = {
    nome: 'Samara Barcelos',
    idade: 20,

    descrever: function(){
        console.log(`My name is ${this.nome} and I'm ${this.idade} years old.`);
}
};

const atributo = 'idade';
console.log (pessoa[atributo]);


