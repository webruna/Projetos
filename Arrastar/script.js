//currentTarget = indica quem tem o evento
//target = indica o elemento específico clicado
//draggable no html = propriedade que indica que pode ser arrastado

let areas = {
    a:'null',
    b:'null',
    c:'null'
}


document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral )
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral )
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral )

function dragStart(e){
    e.currentTarget.classList.add('dragging')//no css essa classe deixa menos opaco
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging')
}

//para colocar nas caixinhas 
function dragOver(e){
    if(e.currentTarget.querySelector('.item') === null){
    e.preventDefault() //transforma a area em drag
    e.currentTarget.classList.add('hover')//transforma a classe
}}
function dragLeave(e){
    e.currentTarget.classList.remove('hover')
}
function drop(e){
    e.currentTarget.classList.remove('hover')

    if(e.currentTarget.querySelector('.item') === null){
        let dragItem = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragItem)
        updateArea()
    }
}
//para liberar caixa inicial
function dragOverNeutral(e){
    
    e.preventDefault() //transforma a area em drag
    e.currentTarget.classList.add('hover')//transforma a classe
}
function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover')
}
function dropNeutral(e){
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
    updateArea()
    }
//para guardar o conteudo e comparar
function updateArea(){
document.querySelectorAll('.area').forEach(area=> {
    let name = area.getAttribute('data-name')
    if(area.querySelector('.item')!== null) {
        areas[name] = area.querySelector('.item').innerHTML
    } else{
        areas[name]= null
    }
})
console.log(areas)
if(areas.a ==='1' && areas.b ==='2' && areas.c ==='3'){
    document.querySelector('.areas').classList.add('correct')
} else {
    document.querySelector('.areas').classList.remove('correct')
}
}
document.getE