const PrecoEtanol = 5.79;
const PrecoGasolina = 6.66;
const KmPorLitros = 10;
const DistanciaEmKm = 100;
const TipoDoCombustivel = 'Etanol';

const litrosConsumidos = DistanciaEmKm / KmPorLitros;

if (TipoDoCombustivel=== 'Gasolina'){
    const valorGasto = litrosConsumidos * PrecoEtanol;
    console.log(valorGasto.toFixed(2));
} else { const valorGasto = litrosConsumidos * PrecoGasolina;
    console.log(valorGasto.toFixed(2)); }




