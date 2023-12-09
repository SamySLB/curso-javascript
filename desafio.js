const precoCombustivel =5.79;
const consumoKmPorL = 10;
const distanciaKm = 100;

const litrosConsumidos =distanciaKm /  consumoKmPorL;
const valorDaViagem = litrosConsumidos * precoCombustivel;
console.log(valorDaViagem.toFixed(2));


