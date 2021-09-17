//Loops de repetição
// Usa-se o if quando queremos que verifique todas as operaçoes, diferente de if else que já para na
//prmimeira operação verdadeira..

//loop while
var contador = 1;
while(contador <= 100){
    
    if(contador % 3 == 0){
        console.log(contador + ": Ping")
    }
     if(contador % 5 == 0){
        console.log(contador + ": Poing")
    }
     if(contador % 3 == 0 && contador % 5 == 0){
        console.log(contador + ": Ping Pong")
    }
    ++contador;
}

// loop for 
//incremento
for (let contador = 0; contador < 10 ; contador++){
    console.log(contador)
}

var numerosAleatorios = [3,5,7,8,6,45,7];
for(let contador = 0; contador < numerosAleatorios.length; contador++){
    console.log(`${contador} - ${numerosAleatorios[contador]}`)
}

//decremento

for(let i = numerosAleatorios.length - 1; i >= 0; i--){
    console.log(`Posição ${i} com decremento: ${numerosAleatorios[i]}`)
}

//for apenas com codiçao

 let codicao = true;
let contador = 1;

for(;codicao;){
    if(contador % 5 ==0){
        codicao = false;
    }
    console.log(`Condicão booleana: ${contador}`)
    ++contador;
} 

for (var i = 0; i < 10; i++){
    if(i ===5){
        break;
    }
    console.log(`utilizando break ${i}`)
}

for (var i = 0; i < 50; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(`utilizando continue`, i)
}

//usando for of e for in
 let numerosAleatorios = [12,4,5,6,7,3,];

for(let array of numerosAleatorios){
    console.log(array)
}

let fruta = {nome: "banana",preco: 10.00}
let iterable = new Map([["a",1],["b",2], ["c",3]])

for( let [key,chave] of iterable){
    console.log(`Chave - ${key} - valor - ${chave}`)
}

let paise = document.querySelectorAll('.pais');
for(let paises of paise){
    console.log(paises.innerHTML)
}

console.log(fruta)

for(let frutas in fruta){
    console.log(frutas[frutas])
}

for (var i = 0 ; i <= 5; i++){
    for(var j = 1; j <= 5; j++){
        console.log(`i: ${i}; j: ${j}`)
    }
} 

let paises = document.querySelectorAll('.pais');
for(let i = 0; i < paises.length; i++){
    console.log(paises[i].firstChild.nodeValue)
}
for(let i = 0; i < paises.length; i++){
    console.log(paises[i].innerHTML)
}

console.log("----------------")
 let i = 0
do{
    console.log(paises[i].innerHTML)
    i++;
}while(i < paises.length) 