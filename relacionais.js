console.log('01)', '1' == 1) 
console.log('02)', '1' === 1) // Deu falso porque um é string e outro number. Portanto os dois deveriam ser do mesmo tipo
console.log('03)', '3' != 3) // Diferente
console.log('04)', '3' !== 3) // Diferente de tipos. String e Number

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 0 significa data de referência. 1º janeiro 1970            // Padrão de linguagens
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // Como são Numbers são iguais e mesmo se eu colocasse == daria verdadeiro porque possui o mesmo valor

console.log('12)', undefined == null)
console.log('13)', undefined === null) // Sempre recomendado utilizar "===" 3 iguais porque ele não ignora os tipos.