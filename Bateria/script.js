document.body.addEventListener('keyup', (event)=>{//essa funçao pega a tecla digitada
    playSound(event.code.toLowerCase()) // quando pegar a tecla, toda a função playSound
//coloca textos em minusculo para coincidir com o mesmo nome dos sons salvos
})
document.querySelector('.composer button').addEventListener('click', ()=> {// quando clicar no botao, será executado a função
    let song = document.querySelector('#input').value //pega teclas digitadas no input
    if(song!==''){
        let songArray = song.split('');//gera um array com cada item sendo um elemento
        playComposition(songArray)
    }
})

function playSound(sound){
let audioElement = document.querySelector(`#s_${sound}`) 
//os ids foram salvos no formato 's_keyq', e os sons foram salvos no formado 'keyq'
// logo para selecionar os ids: #s_${sound}
let keyElement = document.querySelector(`div[data-key="${sound}"]`)
//procura uma div que tenha como atributo uma data-key='keyq', por exemplo


if(audioElement) {//se audio for true (for encontrado)
    audioElement.currentTime = 0;//toca novamente sem precisar acabar o audio
    audioElement.play()
}
if(keyElement){
    keyElement.classList.add('active');
    //altera a classe do botão, 'active' é uma classe criada no css 
    setTimeout(()=>{
        keyElement.classList.remove('active')},300)
        //apos 300ms, a classe é removida (para o botao voltar a cor normal)
    }
}
function playComposition (songArray){
    let wait = 0

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)//ao clicar no botao tocar, as teclas digitadas tocarâo
        }, wait)
        wait += 250 //toca cada som a cada 250ms
        
    
    }
}