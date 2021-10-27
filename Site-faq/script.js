let para = document.querySelector(".contM");
let para1 = document.querySelector(".contm");
let botao = document.querySelectorAll('.btn');


let contador = 0;
let contador1 = 0;
para.innerHTML = contador;

[...botao].forEach(btn =>{
  btn.addEventListener('click',function(){
    choice(this.innerHTML)
  })
})

function choice(value){
  switch(value){
    case "+":

    break;

    case "-":

    break;

  }
}
