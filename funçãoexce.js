function aplicarDesconto (valor, desconto){
return (valor-( valor * (desconto/100)));
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}
const precoNormal = 20.00;
const tipoPagamento = 4;

if(tipoPagamento === 2){
    console.log(aplicarDesconto(precoNormal,15));
}
else if (tipoPagamento === 1){
    console.log(aplicarDesconto(precoNormal, 10));
}
else if (tipoPagamento === 3){
    console.log(precoNormal);
} else{
    console.log(aplicarJuros(precoNormal, 10));
}

