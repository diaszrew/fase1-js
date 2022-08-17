function relogio(){
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var mensagem = window.document.getElementById('mensagem')


    if (horas >= 0 && horas < 12){
        mensagem.innerHTML = 'Bom Dia'
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e6be70'
    } else if (horas >= 12 && horas < 18){
        mensagem.innerHTML = "Boa Tarde"
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#d5732a'
    } else {
        mensagem.innerHTML = 'Boa Noite'
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#342e5f'
    }

    if(horas < 10){
        horas = '0'+horas
    } else if(minutos < 10){
        minutos = '0'+minutos
    } else if(segundos < 10){
        segundos = '0'+segundos
    }
    document.querySelector('#relogio').innerHTML= horas+':'+minutos+':'+segundos

   
}    
 window.setInterval('relogio()', 1000)