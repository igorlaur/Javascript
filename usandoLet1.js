
var numero = 1 // Let é escopo de bloco. Primordial para criar variável e utilizar a mesma
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)