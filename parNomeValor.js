// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1 = é o local no qual a variável foi definida fisicamente no código

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Av. Corifeu",
        numero: 929
    }
}
console.log(saudacao)
console.log(exec())
console.log('\n')
console.log(cliente)