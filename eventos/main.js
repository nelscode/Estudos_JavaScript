const myForm = document.querySelector('#my-form') 
const btnSubmit = document.querySelector('#submit-button')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const allItens = document.querySelectorAll('.item') // selecionando todos os elementos

// esse event exibe 'clicado' no console quando o botão é clicado
btnSubmit.addEventListener('click', function(event){
    event.preventDefault() // o preventDefault() impede o comportamento padrão e envio do formulário e recarregamento de pagina quando o botão é criado
    console.log('clicado!')
})

// esse event captura os valores do input quando alguma mudança ocorre nele
nameInput.addEventListener('change', function(event){
    console.log(event.target.value)
})

// outra forma de capturar os values
btnSubmit.addEventListener('click', function(event){
    event.preventDefault()

    const nameValue = nameInput.value // utilizando o .value
    const emailValue = emailInput.value

    if(nameValue.trim() === '' || emailValue.trim() === ''){
       return console.log('digite os dados!')
    } // quando colocamos o return, ao final da execução da condição ele encerra ela

    // atribuindo os valores do input para cada item selecionado
    allItens[0].textContent = nameValue
    allItens[1].textContent = emailValue
    allItens[allItens.length - 1] = ''
})

// mais eventos em mdn web docs