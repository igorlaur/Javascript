// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => { // A seta substitui o nome FUNCTION
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito     // Função com uma única linha     // Utilizar o retorno sem precisar colocar a palavra RETURN
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Constante de único parâmetro
const imprimir2 = a => console.log(a)
imprimir2("Legal!")