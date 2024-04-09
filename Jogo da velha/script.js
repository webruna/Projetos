// dados iniciais
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}
let player =''
let warning = ''
let playing = false

reset()

//eventos 
document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.item').forEach(item => {//seleciona o item que foi clicado
    item.addEventListener('click', itemClick)
})


//funções
function itemClick(event){
    let item = event.target.getAttribute('data-item')
    if(playing && square[item] === '') {
        square[item] = player
        renderSquare()
        togglePlayer()
    }
}
function togglePlayer(){
    player = (player === 'x')? 'o' : 'x'
    renderInfo()//para trocar a vez
}

function reset() {
warning = ''

let random = Math.floor(Math.random()*2)//pega um numero aleatorio entre 0-1, multiplica por 2, ja que arrendoda pra baixo
player = (random === 0) ? 'x': 'o'
//se 0, jogador x, se 1, jogador o


for (let i in square) { //zerar tabuleiro
    square[i] = '';//formas de acessaro elemento: square.a1 ou square['a1']
}
playing = true //reseta e inicia o jogo

renderSquare();
renderInfo();

}

function renderSquare(){
for(let i in square){
    let item = document.querySelector(`div[data-item=${i}]`)
    item.innerHTML = square[i]//preenche caso esteja vazio
}
checkGame();
}
function renderInfo(){
document.querySelector('.vez').innerHTML = player
document.querySelector('.resultado').innerHTML = warning
}
function checkGame(){
    if(checkWinnerFor('x')){
        warning = 'Jogador "x" venceu'
        playing = false //pausa o jogo se alguem ganhou
    } else if(checkWinnerFor('o')){
        warning = 'Jogador "o" venceu'
        playing = false
    } else if (isFull()){
        warning = 'Empate'
        playing = false
    }
}
function checkWinnerFor(player){
    let pos = [
        'a1,a2,a3',
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',
        'a1,b2,c3',
        'a3,b2,c1',
        'b1,b2,b3',
        'c1,c2,c3'
    ]
    for (let w in pos){
        let pArray = pos[w].split(','); 
        let hasWon = pArray.every(option => square[option] === player)
        if(hasWon) {
            return true;
        }    
    }
    return false
}
function isFull(){
    for(let i in square){
        if(square[i]===''){
            return false;
        }
    }
    return true
}