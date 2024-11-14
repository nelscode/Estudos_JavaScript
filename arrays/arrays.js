/* listas (arrays) */

const lista = [1, 2, 3, 4] // é uma variável que pode guardar vários valores
let nomes2 = ['Nelson', 'Maria', 'Amélie', 'Levi'] // os valores podem ser de qualquer tipo 
// const nomesNumeros = ['Nelson', 1, 'Maria', 2] // Misturando: Mas só é aconselhado em typescript

// Toda lista começa com a posição 0, logo, a primeira posição na verdade é a segunda
console.log(nomes2[1]) // Exibindo a posição 1 da lista

nomes2.push('Anélie') // Utilizamos a função push para adicionar elementos no final da lista
nomes2.push(22)
nomes2.unshift(20, 21) // Adicionando um item no inicio da lista

console.log(nomes2) // Mostrando lista atualizada

nomes2.shift(20) 
nomes2.shift(21) // Removendo itens 20 e 21 da lista
nomes2.pop() // Remove o ultimo item da lista (22)

console.log(nomes2) // Mostrando lista atualizada

nomes2[1] = 'Maria Eduarda' // Modificando um valor da lista 
console.log('Mudança da lista ' + nomes2[1])

console.log(nomes2.indexOf('Maria Eduarda')) // Descobrindo a posição de um dos elementos na lista

const ordemAlfabetica = nomes2.sort() // a função sorted() deixa os itens da lista em ordem alfabetica
console.log(ordemAlfabetica) // exibindo lista em ordem alfabetica

console.log(nomes2.length) // Verificando quantos itens a lista possui
console.log(Array.isArray(nomes2)) // Verificando se a variável é de fato uma lista (resultado: true)

// Mais funções de arrays em mdn web docs