// Condicionais

// if else
const soma = 1 + 1; 

if (soma === 2) { // == verifca somente o valor e === verifica também se o tipo é igual (o mais recomendado)
    console.log(soma);
} else {
    console.log("1 + 1 não é 2")
}

// else if
let nota = 7.0 // variavel

if (nota >= 7.0) { // se a nota for maior ou igual a 7, aprovado
    console.log('aprovado')
} else if (nota < 7 && nota >= 5){ // se a nota for menor do que 7 E maior ou igual a 5, recuperação
    console.log('recuperação')
} else if (nota < 5) { // se a nota for menor do que 5, reprovado
    console.log('reprovado')
} // Usamos o else if para alinhar várias condições

/* 
    && - Se algo for True && algo também for True
    || - Se algo for true OU/|| outro algo for true 
 */

// Operador ternario
const sum = 1 + 1;

// a variavel number pergunta: sum é igual a 2? Se for true ela exibe 'sum é igual a  2' se não for, ela exibe 'Sum não é igual a dois'
// usamos os operadores ternarios para isso: ? e :
// condição ? valor verdadeiro : valor falso
let number = sum === 2 ? 'Sum é igual a 2' : 'Sum não é igual a 2'

// Switch Case
const carro = 'Mercedes'

// Criamos um bloco de código que recebe a variavel dentro dos parenteses
switch(carro){
    case 'Mercedes': // se o valor da variavel for 'Mercedes'
        console.log('Mercedes é o ônibus') // ele exibe essa mensagem
        break // e sai do switch/condionais
    case 'Ferrari': // se não for acima ele verifica a segunda opção e faz o mesmo
        console.log('Ferrari é vermelho')
        break
    case 'Fusca': 
        console.log('Fusca é massa demais!')
        break
}

// truthy e falsy
let stringVazia = '' // uma string vazia sempre vai ter valor false
let zero = 0 // 0 também também sera false
let undefined; // undefined também sempre será false
let nulo = null // null também sempre será false

let listaVazia = [] // Uma lista vazia é true
let objetoVazio = {} // Um objeto vazio é true

if(stringVazia){
    console.log(stringVazia) // por isso, esse if nunca seria true para ser executado
}

// checando se valores são false de fato
    // Usar os dois sinais de exclamação checam o truthy ou falsy de um elemento
console.log(!!stringVazia) // false
console.log(!!zero) // false
console.log(!!undefined) // false
console.log(!!nulo) // false
console.log(!!listaVazia) // false
console.log(!!objetoVazio) // false

// Logo para verificar se listas e objetos são vazios precisamos do length (se algo é maior do que 0)
if (listaVazia.length > 0){
    console.log('Lista vazia!') // se nada aparecer no console é por que não existe nada na lista
}

if (objetoVazio > 0) {
    console.log('Objeto vazio') // se nada aparecer no console é por que não existe nada no objeto
}