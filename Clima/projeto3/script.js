document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault() //previne comportamento padrão (para nao perder o texto digitado)
    let input = document.querySelector('#searchInput').value

    if (input !== '') {
        clearInfo() 
        showWarning ('Carregando...')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=b8af1980308abd86ede5dc3f811eaa0a&units=metric&lang=pt_br`
    //como o nome nao pode ter espaco, deve ser convertido para um aceitavel na url, para isso usa o encodeURI
    //coloco a variavel que recebe o nome digitado
    //deve ser adicionado a API key, que tbm irá na url
    // apos a api key, adicionar &units=metric, para usar graus
    // adicionar tbm &lang=pt_br para receber dados em portugues

    let results = await fetch(url)
    let json = await results.json()
    
    if (json.cod === 200){//200 é o cod que retorna quando uma cidade é encontrarada
        showInfo({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp, 
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed, 
            windAngle: json.wind.deg

        })
    }else {
        clearInfo()
        showWarning('Não encontramos esta localização')
    }
} else {
    clearInfo();
}
})

function showInfo(json){
    showWarning('');
    
    
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`
    
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`

    document.querySelector('.resultado').style.display = 'block'

}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}

function clearInfo() {
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}