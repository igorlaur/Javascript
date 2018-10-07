let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // Estou exportando o valor para fora desse arquivo
console.log(module.exports === this)
console.log(module.exports)

// criando um variavel maluca: sem var e let
abc = 3 // Não fazer isso pois estou colocando variável local em Node
console.log(global.abc)

