/* Em Java se eu declarar um array de um tamanho de 5 posições, ele não ultrapassará este valor pois ele é fixo. */

/* Em JavaScript o array é heterogêneo porque não é tipado (não tem tipo nas variáveis) e cresce e diminui o array */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)
console.log(valores)

console.log('\n')
valores.push({id: 3}, false, null, 'teste') // o {id: 3} é um objeto, valor falso, valor nulo e valor texto
console.log(valores) /* O ideal é que eu tenha um array homogêneo (dados iguais) */

console.log(valores.pop()) // pop no último elemento    
delete valores[0]          // Deleto o primeiro índice
console.log(valores)

console.log(typeof valores)