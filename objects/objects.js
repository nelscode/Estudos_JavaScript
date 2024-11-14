/* Objetos */
const Nelson = { // Um objeto possui várias propriedades e cada item abaixo é uma propriedade
    idade: 23,
    altura: 1.74, 
    peso: 61.00,
    profissao: 'Programador',
    amores: ['Renta', 'Nilberto', 'Maria', 'Jesus Cristo', 'Heavy Metal'], // Uma array pode ser adicionada como valor de uma propriedade
    namorada: {
        nome: 'Maria Eduarda',
        idade: 20
    } // Podemos adicionar um objeto dentro do objeto
}

// Exibindo propriedades
console.log(Nelson.idade); 
console.log(Nelson.altura); 
console.log(Nelson); // Exibindo tudo

// Acessando elemento de uma array de dentro do objeto
const amorMaior = Nelson.amores[3];
console.log(amorMaior);

// Adicionando propriedade ao objeto
Nelson.cachorro = 'Bolsonaro'; 
console.log(Nelson.cachorro); // Exibindo nova propriedade
console.log(Nelson); // Exibindo objeto inteiro

// Acessando objeto dentro do objeto
console.log(Nelson.namorada.nome);
const nomeNamorada = Nelson.namorada.nome; // Outra forma
console.log(nomeNamorada);

// Desconstruring é criar uma váriavel para guardar um valor de uma propriedade ou uma propriedade inteira de uma forma mais direta
const {namorada} = Nelson; // Guardando os valores da propriedade 'namorada'
console.log(namorada);

// Desconstruring do nome da namorada
const {namorada: {nome}} = Nelson; // Guardando apenas o valor nome
console.log(nome); 
// namorada e nome foram váriaveis criadas usando destrocturing

// Lista de objetos
const tarefas = [
   {
    id: 1,
    description: 'trabalhar',
    isCompleted: 'false'
   },

   {
    id: 2,
    description: 'estudar', 
    isCompleted: 'true'
   },

   {
    id: 3, 
    description: 'treinar',
    isCompleted: 'false'
   }
   // 3 objetos dentro da lista

]; // criando lista normal com []

// Acessando último objeto da lista
const lastObject = tarefas[tarefas.length - 1]; 
console.log(lastObject);

// Acessando somente o id do terceiro objeto
const idThird = tarefas[tarefas.length - 1].id; 
console.log(idThird);

// Acessando somente a description do segundo elemento
const descriptionSecond = tarefas[tarefas.length - 2].description; 
console.log(descriptionSecond);

// Adicionando objeto a lista com o push()
tarefas.push({
    id: 4,
    description: 'Biblia',
    isCompleted: false
}); 

// Acessando id do elemento que acabamos de adicionar
const idFour = tarefas[tarefas.length - 1].id
console.log(idFour);

// Removendo e exibindo
const removed = tarefas.pop(); // removendo ultimo elemento
console.log(removed); // mostrando objeto removido da array
console.log(tarefas); // exibindo array completa

// Desconstruring
const {description} = tarefas[tarefas.length -1]; // Acessando a descrição do ultimo elemento da tarefa
console.log(description); // exibindo nova variavel

const {id} = tarefas[0]; // acessando id do primeiro objeto da array
console.log(id);