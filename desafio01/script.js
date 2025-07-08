function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    //var data = new Date()
    //var hora = data.getHours()
    var hora = window.prompt('Que horas são?')
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#4A592A'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F28705'
    } else if (hora >= 18 && hora <= 23){
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#011126'
    } else{
        img.src = 'imagens/erro.jpg'
        msg.innerHTML = `Seu código deu erro. Talvez você tenha digitado um horário inexistente.`
       
    }
}