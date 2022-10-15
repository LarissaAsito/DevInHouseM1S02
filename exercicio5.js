var num = parseInt(prompt("Digite um número:"));
var pares = 0;
var impares = 0;

for (var i = 0; i<=num; i++) {
    (i%2 == 0)?pares++:impares++;
}

alert(`Quantidade de pares: ${pares} \nQuantidade de impares: ${impares}`);