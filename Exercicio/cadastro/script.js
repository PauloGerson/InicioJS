function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  var pessoas = [];

  //tirando comportamento padrão do botão submit
  /*   form.onsubmit = function(evento){
        evento.preventDefault();
        console.log("Ou")
    }; */

  //outra maneira de tirar o comportamento padrão do submit

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome1");
    const sobreNome = form.querySelector(".sobreNome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    /* pessoas.push({
        nome,
        sobreNome,
        peso,
        altura
    }); */
    console.log(this)

    resultado.innerHTML += `<p> ${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);

}

meuEscopo();
