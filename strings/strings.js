/* Pop Up de alerta */

// alert('Olá, mundo!') // Usado para colocar um pop up de alerta na página

/* Variáveis e tipos de dados */

// var message = "Olá, mundo!"  Podemos criar com var, mas não é mais recomendado usar porque ela pode ser vista fora do escopo de onde ela foi criada, é melhor usar const e let

let message = "Olá, mundo!" // Vísivel apenas dentro do bloco em que ela foi criada, seu valor pode ser atualizado depois
const message2 = "Olá, mundo!" // Vísivel apenas dentro do bloco em que foi criado mas seu valor é constante, não pode ser alterado

console.log(message) // exibindo uma das variaveis
// alert(message2) // Conseguimos exibir ela como pop up do site

/* Strings */

// Tudo em volta de aspas é uma string 

let primeiroNome = 'Nelson' // a variavel string guarda um valor do tipo string
let segundoNome = 'Martins'
let nomes = 'Nelson,Maria,Amélie,Levi' // Exemplo para usar a função split()

console.log(primeiroNome.length, segundoNome.length) // exibe o tamanho de cada string

console.log('Meu nome ' + primeiroNome + ' ' + segundoNome + ' (forma antiga)') // Concatenando strings da forma antiga
console.log(`Meu nome é ${primeiroNome} ${segundoNome} (template string)`) // Concatenando strings com template strings

console.log(primeiroNome.toUpperCase()) // Essa função deixa tudo maiusculo
console.log(segundoNome.toLowerCase()) // Essa função deixa tudo minusculo

console.log(nomes.split(',')) // corta a string em cada virgula a transformando em uma lista
// Se não colocarmos a lista ele corta letra por letra

// mais métodos em mdn web docs