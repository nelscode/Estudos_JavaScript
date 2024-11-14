const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submitButton = document.querySelector('#submit-button')

const errorMensage = document.querySelector('.msg')
const items = document.querySelector('.items')

submitButton.addEventListener('click', function(event){
    event.preventDefault()

    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if(nameValue.trim() == '' || emailValue.trim() == ''){
        errorMensage.style.color = 'red'
        errorMensage.textContent = 'Por favor, preencha os campos!'
        return
    }

    const itemList = document.createElement('li')
    items.appendChild(itemList)
    itemList.innerHTML = `Nome: ${nameValue} <br> E-mail: ${emailValue}`

})