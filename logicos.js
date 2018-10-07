function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ou
    const comprarTv50 = trabalho1 && trabalho2 // Só vou comprar a tv se os dois trabalhos derem certo
  //const comprarTv32 = !!(trabalhador ^ trabalho2) // ou (bitwise xor)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))