// Programação Orientada a Objetos (POO)

// Classes - Básciamente Impressoras de objetos 

// Uma classe é uma formula para criar um objeto posteriormente
class Pessoa {
    // usamos a função constructor para criar um objeto pessoa
    constructor(primeiroNome, segundoNome, idade){ // passamos os parametros para essa função
        this.primeiroNome = primeiroNome, // e cada propriedade recebe o parametro como valor
        this.segundoNome = segundoNome,
        this.idade = idade
    }

    // Método (a classe precisa ser instaciada)
    mensagem() {
       console.log(`${this.primeiroNome} ${this.segundoNome} possui ${this.idade} de idade`)
    }

    // Método estático (a classe não precisa ser instânciada)
    static pessoaFalando(){
        console.log('olá, eu sou um objeto')
    }
}

// Assim que instânciamos uma classe, ou seja, usamos ela como formula para criar o objeto nelson
const nelson = new Pessoa('Nelson', 'Martins', 23) // praticamente preenchemos os parametros

console.log(nelson) // ex

nelson.mensagem() // esse é um método que é basicamente funções criadas dentro de uma classe

Pessoa.pessoaFalando() // essa é a mesma coisa, porém, para esse método (estático) nós não precisamos instânciar a classe e por isso usamos o proprio nome da classe para executar

console.log('\n')

class Familia {
    constructor(pai, mae, primeiroFilho, segundoFilho){ // formulá da classe familia
        this.pai = pai, 
        this.mae = mae, 
        this.primeiroFilho = primeiroFilho,
        this.segundoFilho = segundoFilho
    }

    // método
    apresentacao() {
        console.log(`${this.pai} e ${this.mae} se casaram e tiveram dois filhos: ${this.primeiroFilho} e ${this.segundoFilho}`)
    }

    // método estático
    static familiaFalando(){
        console.log('Ainda não existimos mas em breve seremos reais!')
    }
}

// instânciamento da classe 
const familia = new Familia('Nelson', 'Maria', 'Levi', 'Amélie')

familia.apresentacao() // método
Familia.familiaFalando() // método estático

// Herança

console.log('\n')

// Criando uma classe normal com apenas um método
class Animal {
    constructor(name){
        this.name = name
    }

    speak() {
        console.log(`${this.name} fez um barulho!`)
    }
}

const leao = new Animal('Simba') // instânciando
leao.speak() // executando método


// Agora a classe cachorro extends a de Animal ou seja, A classe Cachorro é uma subclasse da classe Animal
class Cachorro extends Animal {
    constructor(name){
        super(name) // precisamos chamar o super(name) para podermos usar a propriedade name do cachorro
    }
}

// Instanciamos a classe
const dog = new Animal('Bob')
dog.speak() // executamos o método herdado da classe Animal


// classe de parentes herdando de familia
class ParentesPartePai extends Familia {
    constructor(mae, pai, primeiroFilho){  
        super(mae, pai, primeiroFilho) // usamos o super para pegar as propriedades da classe familia 
    }

    apresentacao() { // Mas a partir do momento em que reescrevemos o método dentro da classe dos parenteses ela vai sobrescrever a inicial
        console.log(`${this.pai} e ${this.mae} se casaram e tiveram um filho: ${this.primeiroFilho}`)
    }
}

// instanciando a classe
const parentes = new ParentesPartePai('Renata', 'Nilberto', 'Nelson')
parentes.apresentacao() // usando os métodos da classe familia 
