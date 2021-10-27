let para = document.querySelector(".contM");
let para1 = document.querySelector(".contm");
let botao = document.querySelector('.btn');
let botao1 = document.querySelector('.btn1')

let contador = 0;
let contador1 = 0;
para.innerHTML = contador;

botao.addEventListener('click',function(){
  contador++;
  
  para.innerHTML = contador;
  contador1 = contador;

 
});
botao1.addEventListener('click',function(){
  contador = contador1 -1;
  if(contador1 <= 0){
    contador1 = 1;
  }
    contador1--;
    para.innerHTML = contador1;
  })

