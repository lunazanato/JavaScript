function ver(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('erro! verifique sua resposta e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/garotinho.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/garoto_jovem.jpg')
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
                
            }
        } else if (fsex [1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/garotinha.jpg')
                
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/garota_jovem.jpg')
                
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta.jpg')
                
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}