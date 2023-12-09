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
    
   function compararPessoas(p1,p2){
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome}é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade> p1.idade){
        console.log(`${p2.nome}é mais velho(a)que ${p1.nome}`);
    } else{
        console.log(`${p1.nome}e ${p2.nome}tem a mesma idade`);
    }
   }

   const Samara = new pessoa('Samara', 20);
   const Renan = new pessoa('renan', 30);

   compararPessoas(Samara,Renan);
   