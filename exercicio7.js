var data = new Date();

var ano = data.getFullYear();
var mes = data.getMonth() + 1;
var dia = data.getDate();

var dataAtual = new Date(`${ano}-${mes}-${dia}`).getTime();

var inicioOutono = new Date(`${ano}-3-22`).getTime();
var fimOutono = new Date(`${ano}-6-21`).getTime();

var inicioInverno = new Date(`${ano}-6-22`).getTime();
var fimInverno = new Date(`${ano}-9-21`).getTime();

var inicioPrimavera = new Date(`${ano}-9-22`).getTime();
var fimPrimavera = new Date(`${ano}-12-21`).getTime();

var result = '';

if (dataAtual >= inicioOutono && dataAtual <= fimOutono) {
  result = 'Outono';
} else if (dataAtual >= inicioInverno && dataAtual <= fimInverno) {
  result = 'Inverno';
} else if (dataAtual >= inicioPrimavera && dataAtual <= fimPrimavera) {
  result = 'Primavera';
} else {
  result = 'Verão';
}

alert(`A estação é: ${result}`);