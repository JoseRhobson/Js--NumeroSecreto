

function verificaSeOChutePossuiValorrValido(chute) {

    const numero = + chute

console.log(numero)

if(gameOver(chute)){
    console.log('game over')
    document.body.innerHTML= ` <h2>Você encerrou o jogo!</h2>
    <h3>o número secreto era ${numeroSecreto}</h3> 
    <button id='jogar-novamente' class='btn-jogar'> Jogar novamente </button>  
    `
    document.body.classList.add('game-over')
}

if(chuteForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor Inválido</div>'
    return
}


if(numeroForMaior(numero)){
    elementoChute.innerHTML += `<div>Valor Inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`
    return
}
if(numero === numeroSecreto){
    document.body.innerHTML= ` <h2>Você acertou !</h2>
    <h3>O número secreto era ${numeroSecreto}</h3> 
    <button id='jogar-novamente' class='btn-jogar'> Jogar novamente </button>  
    `
}
else if( numero>numeroSecreto){
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>`
}
else{
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>`
}

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
    
}

function numeroForMaior(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

function gameOver(chute){
    return chute == 'game over'
}