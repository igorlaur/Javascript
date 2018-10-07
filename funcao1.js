/* Função é um bloco de código nomeado. Para eu chamar esse bloco de códigos quantas vezes eu quiser. A função recebe os parâmetros de entrada 
que são os ingredientes e eu executo o algoritmo e toda a sentença de código retornará um valor.  A função pode receber nenhum parâmetro (ingrediente),
pode não retornar dado, pode receber dados de entrada, como pode receber e retornar. 
*/

// Recebe dados e não retorna nada / Função Sem retorno.
function imprimirSoma(a, b) {// Passei o parâmetro A e o parâmetro B
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 8, 10) // Ele só vai somar os dois primeiros
imprimirSoma()

console.log("\n")
// Recebe dados e retorna / Função com retorno.
function soma(a, b = 1) {
    return a + b;
}
console.log(soma(2, 3))
console.log(soma(2)) // Retornará o próprio 2 porque declarei que o segundo parâmetro é 0. Caso eu declaro o segundo parâmetro 1, ele retornará 3. Ele pega o valor padrão "A" e soma com "B" A + B = ... 2 + 1 = 3
console.log(soma()) // Não vai ter nada no "A", então vai ser Not a Number