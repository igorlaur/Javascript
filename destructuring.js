// Ele é um operador de desestruturação que tira da estrutura alguma coisa, por exemplo: o que seria um estrutura? um objeto. Uma forma de extrair de dentro do seu objeto os seus atributos. Também posso tirar elementos de um array.

const pessoa = {
    nome: 'Ana', 
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // As chaves Representam um operador de desestruturação.  // Tire de dentro do objeto o atributo "nome e idade" do objeto = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Criei variaveis 
console.log(n, i) 

const { sobrenome, bemHumorada = true} = pessoa // Indefinido. Vou atribuir um valor padrão
console.log (sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)