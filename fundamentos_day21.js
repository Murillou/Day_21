/* Acessando o HTML com javaScript*/


//document.getElementByTagName('tagname')

const todosTitles = document.getElementsByTagName('h1')
console.log(todosTitles) // HTMLCOLLECTIONS
console.log(todosTitles.length) // 4

for (let i = 0; i < todosTitles.length; i++){
    console.log(todosTitles[i]) // exibirá cada elementor do h1
}

// document.getElementByClassName('classname')

const allTitles = document.getElementsByClassName('titles')
console.log(allTitles) // HTMLCOLLECTIONS
console.log(allTitles.length) // 4

for (let i = 0; i < todosTitles.length; i++){
    console.log(todosTitles[i]) // exibirá cada elementor do h1
}

// document.getElementById('idname')

const titulo = document.getElementById('primeiro-title')
console.log(titulo)

// document.querySelector('tagname; idname or classname')
// queryselector pode selecionar qualquer uma das 3 opções

let primeiroTituloTag = document.querySelector('h1') // tag
let primeiroTituloClass = document.querySelector('.titles') // classe
let primeiroTituloId = document.querySelector('#primeiro-title') // id

//documento.querySelectorAll('')
// pode manipular o DOM com tag ou classe, retorna valor como uma matriz, pode se utilziar metodos de array

//adicionando um atributo ao quarto h1

const title = document.querySelectorAll('h1')
title[3].className = 'title'
title[3].id = 'quarto-title'


/*adicionando atributo através do setAtributte()
leva 2 parametros o tipo do atributo e o nome do atributo
veja abaixo
*/

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'quarto-title')

/* adicionando classes utilizando o metodo classList*/

titles[3].classList.add('title', 'header-title')

// também podemos remover classes através do remove, veja abaixo

titles[3].classList.remove('title', 'header-title')

// para adicionarmos texto a uma tag HTML, podemos utilizar o textContent ou innerHTML
// veja abaixo um exemplo utilizando textContent

let title = document.querySelectorAll('h1')
title[3].textContent = 'Quarto Título'

// veja abaixo um exemplo utilizando innerHTML

let title = document.querySelectorAll('h1')
title[3].innerHTML = 'Quarto Título'

/* A Diferença entre os dois metódos, é que o textContent pode adicionar apenas textos a tag
já o innerHTML, pode adicionar textos, elementos e até elementos filhos*/

// adicionando estilo com javascript

//adicionando cor a fonte

let title = document.querySelectorAll('h1')
title.forEach((title, i) => { // criando a função para manipular os indices
    title.style.fontSize = '24px' // aumentar o tamanho da fonte
    if( i % 2 == 0){
        title.style.color = 'green' // caso o índice seja impar a será cor verde
    }else{
        title.style.color = 'red' // caso o índice seja par a será cor vermelha
    }
})

//adicionando cor ao background

let title = document.querySelectorAll('h1')
title.forEach((title, i) => { // criando a função para manipular os indices
    title.style.fontSize = '24px' // aumentar o tamanho da fonte
    if( i % 2 == 0){
        title.style.backgroundColor = 'green' // caso o índice seja impar a será cor verde
    }else{
        title.style.backgroundColor = 'red' // caso o índice seja par a será cor vermelha
    }
})