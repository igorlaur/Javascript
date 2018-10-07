const escola = "Cod3r"

console.log(escola.charAt(4)) // Pega a 4º letra
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Valor dentro da tabela ask (Código relacionado a tabela Unicode)
console.log(escola.indexOf('3')) // Digito 3 dentro da palavra da "escola"

console.log(escola.substring(1)) // A partir do digito 1
console.log(escola.substring(0, 3)) // Do digito 0 ao 3

console.log('Escola '.concat(escola).concat("!")) // 1º
console.log('Escola' + escola + "!") // 2º maneira de fazer
console.log(escola.replace(/\d/, 'e')) // Aqui eu digo "Substitua todos os digitos depois da letra 'd' e antes da letra 'r' por letra 'e'."

console.log('Ana, Maria, Pedro'.split(',')) //Converter string em array, uso o 'split'