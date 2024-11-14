// Selecionar apenas um elemento!

// capturando elemento pelo id
const addUserText = document.getElementById('add-user') // getElementById() retorna apenas um referencia do elemento

// capturando elemento por querySelector (é necessário colocar # para IDs e . para classes)
const addUserText2 = document.querySelector('#add-user') // querySelector retornar todo o elemento em si

console.log(addUserText)
console.log(addUserText2)

// mudando texto do elemento
addUserText.innerText = 'Adicionar usuário'
addUserText2.textContent = 'Adicionar usuário2'

// vantagens do querySelector 
// podemos capturar uma Id filho de uma classe
const myForm = document.querySelector('.container #my-form')
console.log(myForm)

// O querySelector só retorna o primeiro elemento, por isso existe o querySelectorAll
const itens = document.querySelectorAll('.item')
console.log(itens[2])

/*
// Isso não é bom, é melhor usar o querySelectorAll
const classItens = document.getElementsByClassName('item')
console.log(classItens)

// Isso é o mesmo de cima, não é bom!
const tagName = document.getElementsByTagName('li')
console.log(tagName)

Esqueça as formas acima pois eles não retornam listas

*/