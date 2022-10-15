var numerosPrimos = '';
var qtdPrimos = 0;

for (var i = 2; i<=1000; i++){
    var primo = true;
    for (var j = 2; j<=999; j++){
        if (i%j == 0 && i!=j) {
            primo = false;
        }
    }
    if (primo) {
        qtdPrimos++;
        numerosPrimos += ` ${i},`;
    }
}

alert(`Quantidade de números primos: ${qtdPrimos} \nNúmeros primos: ${numerosPrimos}`);