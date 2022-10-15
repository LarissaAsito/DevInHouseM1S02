var num = parseInt(prompt("Digite um número:"));
var texto = '';

for (var i = 0; i<=10; i++) {
    texto = texto + `${num} x ${i} = ${num*i} \n`;
}

alert(texto);