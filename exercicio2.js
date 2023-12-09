const peso = 80;
const altura = 1.75;
let IMC = peso / Math.pow(altura,2);

if(IMC< 18.5){
    console.log('abaixo do peso');
} else if (IMC>= 18.5 && IMC<25){ 
    console.log('peso normal');
}
else if (IMC>=25 && IMC<30){
    console.log('acima do peso');
}
else if (IMC>=30 && IMC<40){
    console.log('obeso');
}
else{ console.log('obesidade grave');}