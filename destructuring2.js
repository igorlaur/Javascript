const [a] = [10]// Utilizando operador destructuring
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9 , 8]
console.log(n1, n3, n5, n6) // Tiro da estrutura e atribuo as variáveis

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]// primeiro elemento: ignorei. Segundo elemento é um array que está dentro de um array e não está ignorado
console.log(nota)
