function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // Desestrututei e: O que é mínimo passa a ser máximo e o que é maximo passa a ser mínimo e depois crio novo array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // intervalo até 1000
console.log(rand([, 10])) // passo intervalo máximo até 10
console.log(rand([])) // 0 e 1000

