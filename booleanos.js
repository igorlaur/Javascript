let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Negação é !. Se eu negar duas vezes, ele volta a ser o mesmo, o valor anterior, ou seja, verdadeiro.

console.log('\nTeste')
console.log(!!true) // Verdadeiro
console.log(!true)  // Falso
console.log(true)   // Verdadeiro

console.log('\n')
console.log(!!null)
console.log(!!NaN) // Se for algo que não é um número 
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!'')

console.log('\n')
console.log(!!('' || null || 0 || ''))

console.log('\n')
let nome = 'Igor'
console.log(nome || 'Desconhecido') // Caso o nome esteja vazio, imprimo nome: Desconhecido // Caso não esteja vazio, imprimo o nome que eu declarar acima:

