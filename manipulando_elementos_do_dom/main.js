/* const apenasUmItem = document.querySelector('.item') // captura apenas um item
console.log(apenasUmItem)

const meusItens = document.querySelectorAll('.item') // captura todos os .item
console.log(meusItens) // gera uma nodelist

apenasUmItem.remove() // deleta apenas o primeiro elemento
meusItens[meusItens.length - 1].remove() // removendo ultimo elemento
meusItens[meusItens.length - 2].remove() // removendo penultimo elemento

// Para cada item ele remove um dos itens
meusItens.forEach(item => item.remove()) // remove todos */

const meusItens = document.querySelectorAll('.item') // selecionando todos os itens
meusItens[0].innerHTML = 'ola mundo!' // adicionando textos
meusItens[meusItens.length - 1].innerHTML = 'Mudando texto do ultimo elemento!'
meusItens[1].innerHTML = '<h1>Eu sou um titulo</h1>' // quando usamos innerHTML podemos colocar HTML

const button = document.querySelector('.btn') // Selecionando o bota 
// o nome das propriedades css ficam em camelCase
button.style.backgroundColor = 'blue' // mudando a cor dele
button.style.borderRadius = '10px' // arredondando as bordas