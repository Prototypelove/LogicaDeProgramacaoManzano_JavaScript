/*Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^) */

let base
let expoente
let contadora = 0
let acumuladora = 1

base = prompt("insira o valor da base:")
expoente = prompt("insira o valor do expoente:")
if (expoente !=0){
    for (contadora = 0; contadora<=expoente ;contadora++){
      console.log(`${base}*${contadora} = ${acumuladora} `)
     acumuladora = base * acumuladora 
    }
}else {
    console.log(`Expoente Nulo`)
}
// Falta documentar detalhes