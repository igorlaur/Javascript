let valor // não inicializada
console.log(valor)

valor = null // ausência de valor // Sempre que eu quiser zerar o valor de uma variável, declaro-a nula
console.log(valor)
//console.log(valor.toString()) // Erro! Estou tentando acessar um valor nulo

const produto = {}
console.log(produto.preco) // indefinido. Tenho o produto definido mas não tenho o preço definido, então o resultado é UNDEFINED
console.log(produto) // Vazio

produto.preco = 3.50
console.log(produto) // Agora sim tem um atributo

console.log("\n")

produto.preco = undefined // Não recomendado. Evite atribuir undefined. // Quando eu quiser limpar o valor da variável, eu prefiro colocar 0 ou nulo.
console.log(!!produto.preco)
console.log(produto)

console.log("\n")

produto.preco = undefined // Não recomendado. Evite atribuir undefined. // Quando eu quiser limpar o valor da variável, eu prefiro colocar 0 ou nulo.
console.log(!!produto.preco)
delete produto.preco // Se eu quiser tirar o atributo de um objeto
console.log(produto)

produto.preco = null // sem preço. Quando quero botar preço 0 como preço válido, quando quero doar
console.log(!!produto.preco)
console.log(produto)