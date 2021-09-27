/* function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  var pessoas = [];

  //tirando comportamento padrão do botão submit
  /*   form.onsubmit = function(evento){
        evento.preventDefault();
        console.log("Ou")
    }; */

  //outra maneira de tirar o comportamento padrão do submit

  /*function recebeEventoForm(evento) {
    evento.preventDefault(); // Tirar o comportamento padrão do submit
    const nome = form.querySelector(".nome1").value;
    const sobreNome = form.querySelector(".sobreNome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    console.log(this)
   /*  var paragrafo = document.createElement("p");
    resultado.appendChild(paragrafo)
    var conteudo = document.createTextNode(` ${pessoas[0].nome.value} 
    ${pessoas[0].sobreNome.value} ${pessoas[0].peso.value} ${pessoas[0].altura.value}`);
    paragrafo.appendChild(conteudo) */

    /*var paragrafo = document.createElement("p")
    var conteudo = document.createTextNode(`${nome}`)
    paragrafo.appendChild(conteudo);
    resultado.appendChild(paragrafo);
    

   
}
  form.addEventListener("submit", recebeEventoForm);

} */




document.querySelector('.form').addEventListener('submit', function(evento){
  evento.preventDefault(); // Tirar o comportamento padrão do submit
  const form = document.querySelector(".form")
  const resultado = document.querySelector(".resultado")
  const nome = form.querySelector(".nome1");
  const sobreNome = form.querySelector(".sobreNome");
  const peso = form.querySelector(".peso");
  const altura = form.querySelector(".altura");

  let paragrafo = document.createElement("p")
  let conteudo = document.createTextNode(`${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}`)
  paragrafo.appendChild(conteudo);
  resultado.appendChild(paragrafo);
  let btn = document.createElement("button");
  btn.createTextNode("remover");
  paragrafo.appendChild(btn);
  
  btn.addEventListener('click', function(){
  paragrafo.remove();
    
    
  })
});

