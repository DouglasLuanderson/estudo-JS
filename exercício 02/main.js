let numberFirt = Number.parseFloat(window.prompt("digite seu primeiro número da soma")) // caso queira alterar para string pode usar o String(n) ou n.toString
let numberSecond = Number.parseFloat(window.prompt("digite seu segundo número da soma")) // usar apenas o Number no ES6 funciona como int ou float, mas se quiser especificar tem que colocar o parseint ou float.
let result = numberFirt + numberSecond;


let nome = 'Gustavo'
let idade = '20 anos'
let cidade = 'Rio de Janeiro'
let ganha = 'R$2500,00'

document.write(" O trabalhador " +nome+ " de " +idade+ " que mora no " +cidade+ " recebe " + ganha)



window.alert("O resultado da soma é " + result + "!!")


// anotações

//${} significa usar template string, outra forma de somar
// .length funciona para contar quantas strings existem ou tem.