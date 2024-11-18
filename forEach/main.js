// o forEach é especializado em percorrer arrays

// array
const familia = [
    {nome: 'nelson', idade: 23},
    {nome: 'maria', idade: 21},
    {nome: 'amelie', idade: 0},
    {nome: 'levi', idade: 0}
]

// o forEach fornece 3 informações, o item, o index (numero/posicao na array) e o array (que é a lista completa) e esses 3 são parametros para a função, independente do nome eles seguem essa ordem, sendo obrigatório apenas o parametro item
familia.forEach(function(item){
    if (item.idade === 0){
        console.log(`${item.nome} ainda não nasceu`)
    }
})