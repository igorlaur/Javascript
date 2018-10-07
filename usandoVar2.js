// Posso ter duas variáveis com valores diferentes, em escopos diferentes. NÃO RECOMENDADO pois pode gerar BUGS
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

