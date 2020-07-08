/*Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro.*/

let rs = require(`readline-sync`)
let primeiroUsuario = rs.questionInt(`Primeiro Usuario escreva um numero entre 0 a 100: `)
let segundoUsuario = rs.questionInt(`Segundo Usuario escreva um numero entre 0 a 100: `)
console.clear()

while(primeiroUsuario > 100 || primeiroUsuario < 0){
    primeiroUsuario = rs.questionInt(`Primeiro Usuario escreva um numero entre 0 a 100: `)
}
console.clear()

while(segundoUsuario > 100 || segundoUsuario < 0){
    segundoUsuario = rs.questionInt(`Segundo Usuario escreva um numero entre 0 a 100: `)
}
console.clear()

let maiorNumero
primeiroUsuario > segundoUsuario ? maiorNumero = primeiroUsuario : maiorNumero = segundoUsuario
let menorNumero
primeiroUsuario <= segundoUsuario ? menorNumero = primeiroUsuario : menorNumero = segundoUsuario

while(menorNumero <= maiorNumero){
    if(((menorNumero % 7) > 0) && ((menorNumero % 5) > 0)){
        console.log(menorNumero)
    }else if(((menorNumero % 7) <= 0) && ((menorNumero % 5) <= 0)){
        console.log('Ping Pong')
    }else if((menorNumero % 7) <= 0){
        console.log('Ping')
    }else if((menorNumero % 5) <= 0){
        console.log('Pong')
    }

    menorNumero++
}




