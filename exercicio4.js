var num = 0;
var sum = 0;

do {
    sum += num;
    num = parseInt(prompt("Digite um número:"));
} while(num != -1);

alert(`A soma é: ${sum}`);