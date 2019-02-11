/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [5, 1, 7, 6, 3];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1];) // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arg, indice){
    return arg[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let newArray = ['Malcon', 7, true, [1, 8, 'Sayonara'],  {a:1, b:2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.console.log(newArray,0);
console.console.log(newArray,1);
console.console.log(newArray,2);
console.console.log(newArray,3);
console.console.log(newArray,4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/  
function book(bookName){
    let allBooks = {
        'Segredos do Ninja Javascript':{
          quantidadePaginas: 488,
          autor: 'Johm Resig & Bear Bibeault',
          editora: 'Novatec'
        },
        'Introdução ao HTML5':{
          quantidadePaginas: 220 ,
          autor: 'Bruce Lawson & Remy Sharp',
          editora: 'Alta Books'
        },
        'Smashing CSS':{
          quantidadePaginas: 283,
          autor: 'Erick A. Meyer',
          editora: 'Bookman'
        }
    };

    return (!bookName) ? allBooks : allBooks[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let name = 'Introdução ao HTML5';
console.log('O livro ' + name ' tem ' + book(name).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let name = 'Introdução ao HTML5';
console.log('O autor do ' + name + ' é ' + book(name).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let name = 'Introdução ao HTML5';
console.log('O livro '+  name + ' foi publicado pela editora ' + book(name).editora + '.');
