let paragrafo = document.getElementsByTagName('p')

console.log('=====OUTRA QUESTÃO=====')

let parUm = document.querySelector('#um')
let parDois = document.querySelector('#dois')
let parTres = document.querySelector('#tres')
let parQuatro = document.querySelector('#quatro')

console.log('=====OUTRA QUESTÃO=====')

let todosPar = document.querySelectorAll('p')

console.log('=====OUTRA QUESTÃO=====')

todosPar.forEach(texto => console.log(texto.textContent))

console.log('=====OUTRA QUESTÃO=====')

todosPar[3].textContent = 'Completando o exercício'
console.log(todosPar[3].textContent)

// ou

parQuatro.textContent = 'Completando o exercício'
console.log(parQuatro.textContent)

console.log('=====OUTRA QUESTÃO=====')

// metodo 1
todosPar.forEach( texto => texto.classList.add('paragrafo'))

// metodo 2
todosPar[3].setAttribute('id', 'quarto')
todosPar[3].setAttribute('clas', 'paragrafo')

// metodo 2
parQuatro.className('quarto')