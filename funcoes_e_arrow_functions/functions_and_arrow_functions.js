// Funções e Arrow Functions 
function sum2(a, b){ // a função é criada com o nome function, depois colocamos parenteses por que dentro deles colocamos os parametros da função
    return a + b // retornando o valor de um parametro sendo somado com outro
}

let somando = sum2(2, 2) // chamando a função e passando os parametros
console.log(somando) // exibindo no console

// Arrow Functions - uma forma diferente de escrever funções

// Para essa função precisamos criar uma variavel ou constante
// depois vem o nome da função seguido de um igual e depois os parenteses que guardam os parametros
// por fim usamos o simbolo de flexa (=>) e abrimos os colchetes
const sumArrow = (a, b) => { 
    return a + b
} // essa função faz exatametne aquilo que a primeira vez

let somando2 = sumArrow(2, 2); // guardando resultado
console.log(somando2)

// Dando return de forma mais clean
const soma3 = (a, b) => a + b // Isso é a mesma coisa de colocar colchetes e dar um return dentro dos colchetes
let somando3 = soma3(2, 2)
console.log(somando3)