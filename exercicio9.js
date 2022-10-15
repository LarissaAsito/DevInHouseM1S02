var num = parseInt(prompt("Digite o número inicial:"));
var raiz = parseInt(prompt("Digite a raiz:"));
var result = '';
var element = num;

for (var i = 0; i<10; i++) {
    result += `${element}${(i==9)?'':', '}`;
    element += raiz;
}

alert(`${result}`);