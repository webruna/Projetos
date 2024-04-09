function atualizarTempo() {
    var display = document.querySelector('.display'); //variavel display recebe o seletor .display
    var agora = new Date();
    var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());
    display.textContent = horario; //conteudo do display passa a ser horario    
}

function corrigirHorario(numero){
    if (numero <10) {
        numero = '0' + numero;
    }
    return numero;
}
atualizarTempo();
setInterval(atualizarTempo, 1000)
//função pronta que atualiza por intervalo, 1000ms = 1s
console.log(horario);