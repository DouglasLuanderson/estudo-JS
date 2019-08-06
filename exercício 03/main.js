
let name = window.prompt("Qual o seu nome ?")
document.write(' Olá,' + name + ' seu nome tem ' + name.length + ' letras <br><br>')

n = 1280.5
n.toFixed(2)
n.toFixed(2).replace('.', ',')
n.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})

document.write(n)
//Anotaçoẽs

//n.toFixed(2) funciona para definir 2 casas decimais depois da vírgula.
//n.toFixed.replace('.',',') funciona para alterar o ponto por virgula (replace altera valores)