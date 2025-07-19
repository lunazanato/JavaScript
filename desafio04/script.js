function gerar(){
    var num = document.getElementById('txtab')
    var tab = document.getElementById('seletab')
    var res = document.getElementById('res')


    if (num.value <= 0 ){
        res.innerHTML = 'Não foi possível realizar a tabuada. Por favor, revise os dados'
    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c<= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}