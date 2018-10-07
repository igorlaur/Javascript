const nome = 'Igor'
const concatenacao = 'Olá, ' + nome + '!'
const template = ` 
    Olá
    ${nome}!`

console.log(concatenacao, template)

//expressões 
console.log(`1 + 1 =  ${1 + 1}`)

const up = texto => texto.toUpperCase() // Converte as letras para maiúsculo
console.log(`Ei... ${up('Cuidado')}!`)