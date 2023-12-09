const precoNormal = 20.00;
const tipoPagamento = 'debito';

if(tipoPagamento === 'Dinheiro'){
    console.log((precoNormal * 0.15)- precoNormal);
}
else if (tipoPagamento === 'debito'){
    console.log((precoNormal * 0.1)- precoNormal);
}
else if( tipoPagamento === 'pix'){
    console.log((precoNormal * 0.15)- precoNormal);
}
else if(tipoPagamento = precoNormal /2){
console.log(precoNormal);
}
else if(tipoPagamento = 'acima de duas vezes' ){
    console.log(precoNormal + (precoNormal * 0.1));
}