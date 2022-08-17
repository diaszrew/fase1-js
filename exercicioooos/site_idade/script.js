function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //criar o ano atual
    var mes = data.getMonth()+1 //criar o mês atual +1, pq Janeiro tem valor [0]
    var dia = data.getDate() //criar o dia do mês
    var fano = window.document.getElementById('txtano') //buscar o ano digitado dentro do box
    var fmes = window.document.getElementById('txtmes') //buscar o mês digitado dentro do box
    var fdia = window.document.getElementById('txtdia') //buscar o dia digitado dentro do box
    var res = window.document.getElementById('res') //alterar a DIV do resultado
    var maxAno = (ano - 130) //idade máxima permitida de 130 anos

    if (fano.value.length == 0 || Number(fano.value) < maxAno || Number(fano.value) > ano) { //se não comprimento do valor do ano é = 0, ou se o ano é maior que o ano atual
        window.alert('[ERRO] Verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        if (fmes.value > mes || fmes.value == mes && fdia.value > dia) {
            idade--
        }
        if (fdia.value > 31 || fmes.value > 12) {
            window.alert('[ERRO] Verifique seus dados e tente novamente!')
        }
        var genero = ''
        var img = document.createElement('img') //criar o elemento <img> do html
        img.setAttribute('id', 'foto') //cria a id="foto" dentro do elemento <img> do html (Ex no html: <img id="foto">)
        if (fsex[0].checked) {
            genero = 'um <strong>Men</strong>'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/criança.png')
            } else if (idade > 10 && idade < 21) { //é possível retirar o idade > 10 && pq no anterior ja está setado que vai apenas de 0 a 10... o restante é maior que 10.
                //Adolescente
                img.setAttribute('src', 'img/jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'uma <strong>Woman</strong>'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/criançaM.png')
            } else if (idade > 10 && idade < 21) {
                //Adolescente
                img.setAttribute('src', 'img/jovemM.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>You are a ${genero} whith ${idade} year.</p>`
        res.appendChild(img) //faz a imagem aparecer no HTML
    }
}