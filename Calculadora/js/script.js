const opantTxt = document.querySelector("#op-ant")
const opatualTxt = document.querySelector("#op-atual")
const botoes = document.querySelectorAll("#botoes button")

class Calculator {
    constructor(opantTxt, opatualTxt){
        this.opantTxt = opantTxt //valores impressos na tela
        this.opatualTxt = opatualTxt
        this.opatual = ""
    }
//para adicionar o digito na tela
addDigit(digit){
    if (digit === "." && this.opatualTxt.innerText.includes(".")) {
        return; //para que se digite apenas um .
    }

    this.opatual = digit;
    this.updateScreen(); //atualiza a tela
}
processOperation(operation) {
    let operationValue = ''
    const anterior = +this.opantTxt.innerText;
    const atual = +this.opatualTxt.innerText;

    switch (operation){
        case "+":
            operationValue = anterior + atual
            this.updateScreen(operationValue, operation, anterior, atual)
            break;
        default:
            return;
    }

}


//muda o valor do digito na tela
updateScreen(){
    this.updateScreen(operationValue = null, operation = null, anterior = null, atual = null)
    this.opatualTxt.innerText += this.opatual;
}

}
const calc = new Calculator (opantTxt, opatualTxt)

botoes.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText; //nos buttons se pega innerText, nos input pega value = e.target.value
        console.log(value)
        //essa função recebe os valores clicados

        if(+value >=0 || value ===".") {
            calc.addDigit(value);}
            else {
                calc.processOperation(value) // diferencia num de operador
            }
    } ) 
})