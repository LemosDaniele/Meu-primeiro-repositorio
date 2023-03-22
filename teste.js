// print hello world
var novoArray = [];

function gerarArray() {

    let qualquerNumero;

    // PARA uma variavel "i"
    // SENDO "i" igual a 0
    // ATÉ QUE "i" seja menor a 4
    // ONDE "i" incrementa em 1 unidade
    // REPITA ESSE PROCESSO

    for ( let i = 0 ;  i < 4  ; i = i + 1) {
    // <=======================================>
    qualquerNumero = Math.round((Math.random()*10));

    if ( qualquerNumero != 5 && qualquerNumero != 9) {
        novoArray[i] = qualquerNumero
    }
    // <=======================================>
    }

}

gerarArray() // Agora eu digo qual numero eu quero

console.log(novoArray)
