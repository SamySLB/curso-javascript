function EscrevaMeuNome(nome){
  return ('Meu nome é '+ nome);
}

function VerifiqueIdade(idade){
    if (idade >= 18) { 
        console.log( EscrevaMeuNome('Vitor')+ ' E sou maior de idade');
    }
    else {
        console.log('Você é de menor');
    }
}

VerifiqueIdade(18);



