// Até onde minha variável é acessível?  
{ 
    {
        {
            {
                 var sera = 'Será???' 
            }
        }
    }
}
console.log(sera) // Em outras linguagens a variável seria visível apenas em um bloco. No JS ela ficará visível em todo local.


function teste(){
    var local = 123
}
teste()
console.log(local) // Neste caso ela não fica visível fora do escopo {}. Variável dentro de função não fica visível fora da função. // ERRO
// Nunca deixar escopo global
// Variável só tem 2 escopos = Nível global (visível p todos) ou escopo de função, fora de uma função, igual o primeiro exemplo.