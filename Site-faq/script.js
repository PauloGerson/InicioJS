/* let para = document.querySelector(".contM");
let para1 = document.querySelector(".contm");
let botao = document.querySelectorAll('.btn');


let contador = 0;
para.innerHTML = contador;

[...botao].forEach(btn =>{ //
  btn.addEventListener('click',function(){
    choice(this.innerHTML)
    para.innerHTML = contador;
  })
})

function choice(value){
  value == "+"? contador++ : contador-- ;
  if(value == "Reset"){
    contador = 0
  } */
 /*  switch(value){
    case "+":
      contador++;
    break;

    case "-":
      contador--;
    break; 

  }
}*/

let div = document.querySelector('.para');
document.querySelector('.some').onclick = () =>{  
    div.classList.toggle('active')

}
