/* var nome = 'Luna'
var idade = '19'
var sexo = 'Feminino'
console.log(`Seu nome é ${nome}, sua idade é ${idade} e seu sexo é ${sexo}`) */

function finalizar(){
    var nome = document.getElementById('txtnome')
    var idade = document.getElementById('txtidade')
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('radsex')
    var genero = ''


    if (sexo[0].checked){
        genero = 'Masculino'
    } else if (sexo[1].checked){
        genero = 'Feminino'
    }


    if (idade.value <= 0 || nome.value == ''){
        res.innerHTML = '<br> ERRO. Verifique os dados e tente novamente'
    } else{
        res.innerHTML = `<br> Seu nome é ${nome.value}, sua idade é ${idade.value} e seu sexo é ${genero}`
    }

}