//**VARIAVEIS**
//variavel pra cor
let currentColor = 'black' 
//variavel para tela 
let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')
let canDraw = false
let mouseX = 0
let mouseY = 0

//**EVENTOS**
//evento para chamar função que irá alterar a cor
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click',colorClickEvent)
})
//evento para chamar funçao quando clicar na tela
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mouseup', mouseUpEvent)
//evento para chamar função de limpar quadro
document.querySelector('.clear').addEventListener('click', clearScreen)



//**FUNÇAO**
//função para alterar a cor selecionada
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    currentColor = color
    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}
//função para desenhar na tela
function mouseDownEvent (e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop
}
function mouseMoveEvent(e){
if(canDraw){
    draw(e.pageX, e.pageY)
}
}
function mouseUpEvent(){
 canDraw = false
}

function draw(x,y) {
//pegar posição
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop
//para desenhar
    ctx.beginPath(); 
    ctx.lineWidth = 5;
    ctx.lineJoin ="round"
    ctx.moveTo(mouseX,mouseY)
    ctx.lineTo(pointX, pointY)
    ctx.closePath();
    ctx.strokeStyle = currentColor
    ctx.stroke();
//dar continuidade no desenho
    mouseX = pointX
    mouseY = pointY
}
// função para limpar tela
function clearScreen(){
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}