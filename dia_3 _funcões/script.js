//apredendo sobre funções

// tudo que está no escopo dá função, fica protejido lá dentro
// apos a palavra reservada "return", nada mais dá funçaõ é executado.
//

/* function saudação(nome){
    console.log(`Bom dia ${nome}`)
}
saudação('Luiz')
function soma(x,y){
    const resultado = x + y;
    return resultado;
}
const resultado = soma(3,5)
console.log(resultado)
*/

/* function somatudo(numeros){
    let numero = 0;
    for (let n of numeros){
        numero += n;
    }
    return numero
}
var arrayNumeros = [1,2,3,4,5,6,7];
var resultado = somatudo(arrayNumeros)
console.log(resultado) */


//função rest, usada quado não se sabe quantos funções serão passados,
/* function endereco(rua, cidade, pais, ...complementos){
    console.log(rua)
    console.log(cidade)
    console.log(pais)

    console.log(complementos)
}
const ende = endereco('Rua quadrada', 'palmas','Tocantins', 'avenida são joão', 'casa1'); */

//função auto inovacavel.
/* (function autoExecuta(nome){
    console.log("Executei", nome)
}('Paulo')) */


//funcao anonima
//Obs: quando passo uma funcao a uma variavel seu numo fica inutilizavel, fazendo assim com que a varievel
//assuma todo o papel de chamar a funcao, sendo assim é possivel usar um função anonima, ou seja uma
// função que não tem nome.
/* var subtraiNumeros = function(a,b){
    return a - b;
}
console.log(subtraiNumeros(7,3)) */


//função de Callback
/* function somaCallback(a,b, fnCallback){
    return fnCallback(a + b) ;
}
console.log(somaCallback(3,7, function(total){
    return total * 2;
}))
 */
// valores default
/* function nome(nome = 'Paulo',idade){
    console.log(nome)
    console.log(idade)
}
nome() */



function somaDoisNumeros(a,b){
    console.log( a + b);
}
somaDoisNumeros(2,4)

function array(numeros){
    let total = 0;
    for(var n of numeros){
        total += n;
    }

    return total
}

var arrayNumeros = [1,2,3,4,5,6,7,8,9,1]
console.log(array(arrayNumeros))

function endereco(rua, cidade, ...complementos){
    
}