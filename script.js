// const idadeDempendente = prompt("qual a idade do dependente?")
// if (idadeDempendente >= 13){
//     console.log("entrou no if de 13")
//     if(idadeDempendente<=17){
//         console.log("A pessoa dependente pode ter o cartao vinculado ao seu")
//     } else{
//         console.log("A pessoa dependente é maior do que 17, consulte as opções")
//     }
// } else {
//     console.log("A pessoa dependente é menor do que 12 anos e não pode ter o cartão")
// }

// if (idadeDempendente >= 13 && idadeDempendente <= 17){
//     console.log("A pessoa dependente pode ter o cartão vinculado ao seu")
// } else{
//     console.log("Consulte as outras opções do Labank")
// }

// const resposta = prompt("Possui uma conta no Labank?") 
// resposta.toLowerCase() === "sim" ? console.log("Bem-Vindo") : console.log("Abra já a sua conta")



// const respostaTelefone = Number( prompt("Escolha o seu cartão \n1 Para fácil \n2 Para Black \n3 Para Platinum \n4 Para Master Gold"))
// console.log(respostaTelefone)
// switch(respostaTelefone) {
//     case 1:
//         console.log("Cartao Facil")
//         break
//     case 2:
//         console.log("Cartao Black")
//         break
//     case 3:
//         console.log("Cartao Platinum")
//         break
//     case 4:
//         console.log("Cartao Master Gold")
//         break
//     default:
//         console.log("Escolha uma das opções disponíveis")
// }
const numero = Number(prompt("escolha um número"))
if (numero %2 ===0) {
    if (numero %3 ===0){
        console.log("o número é diivisivel por 2 e por 3")
    } else {
        console.log("O número não é divisivel por 3")
    }   
} else {
    console.log("O número não é divisivel por 2")
}



if (numero %2 === 0 && numero %3 ===0){
    // numero === 30 ? console.log("Você acertou") : console.log("Você errou")
    switch(numero){
        case 6:
            console.log("o número escolhido foi 6")
            break
        case 12:
            console.log("o número escolhido foi 12")
            break
        case 18:
            console.log("o número escolhido foi 18")
            break
        case 24:
            console.log("o número escolhido foi 24")
            break
        case 30:
            console.log("o número escolhido foi 30")
            break
        default :
            console.log("O numero escolhido foi maior do que 30 ou menor do que 6")
    }
    console.log("O número é divisivel por 2 e 3")
} else {
    console.log("O número não é divisível por 2 e por 3") 
}

