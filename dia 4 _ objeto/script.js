/*  const pessoa1 = {
 nome : 'joao',
 sobrenome: 'paulo',
 idade: 24,

    falaPessoa(){
        console.log(`${this.nome} disse: Ola mundo!` )
        console.log(this);
    }
};
pessoa1.falaPessoa() */

// outra menira de criar objeto com function

/* function criaPessoa(nome,sobrenome,idade){
    return {
       /*  nome: nome,
        sobrenome: sobrenome,
        idade: idade 

        //caso os parametros tenha o mesmo nome.
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Paulo','Gerson', 21)
console.log(pessoa1.sobrenome) */

//outros exemplos

var pessoa = {
    nome: 'Paulo',
    idade: 21
};

console.log(pessoa)
//adcionando um dado no objeto
    pessoa.ano = 2021;
    console.log(pessoa.ano)
//deletando um dado do objeto
delete pessoa.nome;
console.log(pessoa)

// valores primitivos copia determinados dados de variavel para varivel.
// Já valores de referêcia, passa apenas um endereço de onde se encontra tal valor.(Ex: array, object, function)
