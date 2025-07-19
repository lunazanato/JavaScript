function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial(n-1) /* fatorial possui uma chamada pra ela mesma, fatorial que chama fatorial, chamado de recursividade */
    }
}

console.log(fatorial(5))

/* 

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)
1! = 1

*/