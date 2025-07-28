/* function fatorial(n){
    let fat = 1
    let conta = ''

    for(let c = n; c > 1; c--){
        fat *= c
        conta += `${c} x `
    }

    conta += '1'
    
    return `${conta} = ${fat}`
}

console.log(fatorial(5)) */

function verificar(){
    var num = document.getElementById('txtfat') /* numero que o usuario digitar */
    var res = document.getElementById('res')

    if (num.value <= 0){
        window.alert('Não foi possível realizar o fatorial. Revise os dados e tente novamente')
    } else{
        function fatorial(num){
            let fat = 1
        let conta = ''

        for(let c = num.value; c > 1; c--){
            fat *= c
            conta += `${c} x `
        }

        conta += '1'

        return `${conta} = ${fat}`
        }
        
    }

    res.innerHTML = ` <br> ${fatorial(num)}`

    
}
    