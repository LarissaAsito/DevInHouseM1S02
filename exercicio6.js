var op = prompt("Digite a operação que deseja fazer (“+”, “-”, “*” ou “/”) :");
var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o primeiro número:"));
var result = 0;

switch (op){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        alert("Operação inválida.");
        break;
}

alert(`O resultado do seu cálculo é: ${result}`);