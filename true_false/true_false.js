// Invertendo truthy e false
    // Utilizar uma única exclamação inverte o valor booleano do elemento
    // Usar os dois sinais de exclamação checam o truthy ou falsy de um elemento

    console.log('\n')
 
    let invertendoStringVazia = !stringVazia // isso era false virou true
    let invertendoZero = !zero // isso era false virou true
    let invertendoUndefined = !undefined // isso era false virou true
    let invertendoNulo = !nulo // isso era false virou true
    let invertendoListaVazia = !listaVazia // isso era true virou false
    let invertendoObjetoVazio = !objetoVazio // isso era true virou false
    console.log(invertendoStringVazia) // isso era false virou true
    console.log(invertendoZero) // isso era false virou true
    console.log(invertendoNulo) // isso era false virou true
    console.log(invertendoListaVazia) // isso era true virou false
    console.log(invertendoObjetoVazio) // isso era true virou false