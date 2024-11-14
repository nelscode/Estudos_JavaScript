// Loops - Quando desejamos executar uma tarefa várias vezes

let resultado = '';

for(let i = 0; i < 10; i++){ // O i tem valor zero, e enquanto esse i for menor do que 10, iremos executar o loop mas iremos somar +1 ao valor de i a cada volta do loop, ou seja, quando o i for 9, ele para, pois no próximo ele já seria igual a 10
    // resultado = resultado + '\n' + i; // assim cada resultado vai ficar em uma linha 
    resultado+=i;  
    console.log(resultado); 
}

// Contagem regressiva 
for(let i = 10; i >= 0; i--){ // dessa vez o loop começa com 10 e vai diminuindo em 1 até o valor de i ser menor ou igual a 0
    console.log(i);
}

// Utilizando o for com listas
const bikes = ['Suzuki', 'Harley Davidson', 'Royal Enfield', 'Triumph']; 

for(let motos of bikes){ // esse for pega o primeiro valor de bikes, atribui a motos e exibe e faz com os outros valores até o fim
   console.log(motos);
}

console.log('\n')

// forEach 
bikes.forEach(function(bike, i){ // Esse for recebe uma função com uma parametro para cada item da lista e também recebeu uma função para o index de cada item da lista, logo, ele irá iterar sob cada item e mostrar seu index no console
    console.log(bike);
    console.log(i);
})

// Loop Whille

// Precisamos de uma variavel antes
let i = 0; 
console.log('\n')

while (i <= 10) { // isso significa: enquanto i for menor ou igual a 10 mostre i no console
    console.log(i); // mostrando

    // Porém, não a nada modificando o valor de i, o que significa que o loop sempre vai ser menor do que 10, então ele vai ser infinito, logo precisamos iterar:
    i++; // graças a essa linha o loop somara mais 1 ao i toda vez que o loop girar
}

// for in

// Precisamos de um objeto
const eu = {
    nome: 'Nelson', 
    idade: 23,
    altura: 1.74, 
    peso: 61.00, 
    namora: true
}

console.log('\n')

for (propriedade in eu) { // ele vai iterar toda propriedade do objeto 'eu'
    console.log(propriedade); // exibindo toda propriedade interada
    console.log(eu[propriedade]); // mostrando cada valor das propriedades
}