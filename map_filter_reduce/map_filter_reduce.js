/* Listas - map, filter, reduce */

const numbers = [1, 2, 3, 4, 5] 

// A função map() realiza uma operação/mudança/função em cada item de uma lista
// utilizando a função map para multiplicar cada item da lista por 2
const numbersMultipliedByTwo = numbers.map(function(number) { // Essa função não tem nome, ela é anônima
    return number * 2
}) // A função map recebe uma função e a função number retorna o parametro dela  * 2

console.log(numbersMultipliedByTwo) // exibindo a variavel que guarda a nova lista

// A função filter() filtra uma lista com base em nossas instruções e depois retorna uma lista
const ages = [23, 20, 46, 43]

// A variavel evenAges vai receber o resultado de uma função que verifica quais idades são pares
const evenAges = ages.filter(function(age){ // Essa função não tem nome, ela é anônima
    return age % 2 === 0 // Retorna o valor do resto da divisão de age divido por 2
}) // o sinal de === compara valores sem tentar converter os tipos

console.log(evenAges) // Exibindo variável que guarda os números pares

// A função reduce ajuda reduzir todos os valores de uma lista para um só (a soma deles)
const sunOfAges = ages.reduce(function(age, accumulator){ // ela recebe duas funções, a lista e o acumulador
    return accumulator + age; // O acumulador sempre vai estar sendo somado a age 
 
}, 0); // Esse 0 é o valor inicial (quando não fizemos nenhuma operação) (podemos adicionar outro valor inicial)
// A partir do primeiro momento em que ele começar a acumulador o age vira 23, depois a soma de 23 + 20 e vai seguindo assim

console.log(sunOfAges); // Exibindo a soma de todos os valores

// Mais funções de arrays em mdn web docs