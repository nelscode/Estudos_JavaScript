// JSON - Usado para transitar objetos entre o front end e o backend (Mandar algo para uma API)
    // Passando nossa lista para JSON (JSON.stringify())

    const tarefasJSON = JSON.stringify(tarefas); // Usamos stringfy para converter uma array/objeto de javascript para JSON
    console.log(tarefasJSON); // Exibindo valor convertido, ele deixa de ser uma array, virou um texto, tudo passa a ter aspas
    console.log(tarefasJSON[tarefas.length - 1]) // Se tentarmos acessar o ultimo elemento de uma lista que foi convertida para JSON vamos ver que ele só exibira o ultimo cacartere, isso é a prova de que ele deixou de ser uma lista
    
    // Transformand o JSON em uma array novamente
    const tarefasList = JSON.parse(tarefasJSON);
    console.log(tarefasList[1].id); // exibindo id do primeiro objeto da lista
    
    /*
     enviar para o backend: JSON.stringify()
     receber do backend: JSON.parse()
    */