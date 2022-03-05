//começando
//const são constantes que não mudanod de valor (Ecmascript 6)
const nome2 = "Glauber";
const idade2 = 34;

// não é possível reassociar um valor para uma const
//nome2 = "Josefa"

//let declara uma variável (Ecmascript 6)

// let a = 2;
// let b = 'abc'
// let endereco = `Rua K, 12`

// //Avaliar com base no principio do menor privilégio

// //var declara uma variável
// var c = 2 + 3
// var d = "abcd"

// // 1.1. Permite redefinição de variável a partir da declaração (dupla passagem)
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// // 1.2. Permite a utilização da variável antes do momento de sua declaração
// var idade = 18
// console.log ("Oi " + nome)
// if (idade >= 18){
//     var nome = "João"
//     console.log("Parabens, " + nome + ". Você pode dirigir.")
//     console.log(`Parabens, ${nome}. Você pode
//     dirigir`)
//     console.log('Parabéns ${GUSTAVO MONSTRO}')
// }
// console.log("Até mais, " + nome)

//Diferença entre == e ===. Em resumo, NUNCA USE == 
// console.log(null == null)
// console.log(1 == [1])
// console.log(true == 1)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log([] == false)
// console.log([] == null)
// console.log([] == [])
// const f = []
// const g = f
// console.log(f == g)
// console.log(NaN == NaN)
console.log('b' + 'a' + + 'a' + 'a') // <-------------------- Teste essa linha Gustavo

/* PARTE 2 DA AULA */
// v1 = []
// console.log(v1.length)

// v1[0] = 3.4
// v1[2] = true
// v1[10] = v1[2]
// v1[4] = v1[10]
// v1[2] = false
// console.log(v1.length)
// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }

// const numeros = [1, 2]
// numeros[0] = 2
// console.log(numeros)
// numeros = 2
// console.log(numeros)

// const num = [1, 2]
// num[100] = 2
// console.log(num)
// console.log(num.length)

// const arr = [1, 2, 3]

// arr[4124214124125125215125151252151] = 2
// console.log(arr)
// console.log(arr.length)


const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina", "alec"]

// const apenasA = nomes.filter((nome) => {
// //    console.log(nome.startsWith("A"))
//     return nome.startsWith("A")
// })

// O Map aplica o desejado para cada index do array
const res = nomes.map(nome => nome.length)

// O Every verifica se todos os elementos e retorna um booleano
const todosComecamComA = nomes.every(nome => nome.startsWith('A'))

console.log(res);

console.log(todosComecamComA);

const valores = [1, 2, 3, 4]

//Reduce reduz o vetor a um valor único
const soma = valores.reduce((ac, v) => ac + v)

console.log(soma);

// function hello (){
//     console.log('hello');
// }

// hello();

// function hello (nome){
//     console.log('hello ,', nome);
// }

// hello('Alec');

// function soma(a, b) {
//     return a + b;
// }

// soma(3, 2);

// const names = (nomes) =>  nomes.filter(nome => nome.startsWith('A'));

// console.log(names(nomes));

// let funcao = function (){
//     console.log("Fui referenciado por uma variavel");
// }

//higher-orde function
//função que recebe função é uma função de alta ordem
// function f (funcao){
//     funcao();
// }

//função de alta ordem

// function g(){
//     function outraFuncao(){
//         console.log('Fui produzida pela G');
//     }
//     return outraFuncao()
// }
// const resultadoDaG = g()
// console.log(resultadoDaG)

// f(g)
// f (function (){
//     console.log("Estou sendo chamada por f");
// })

// //vai dar erro pois o número 1 não é chamavel como função
// f(1)

// const v = [1, 2, 4]

// function x (v, f){
//     let aux = [];
//     v.forEach(value => {
//         const t = f(value)
//       if(t) aux.push((t)); 

//     })
//     console.log(aux)
// }
// x(v, f);

// function f (n){
//     if(n % 2 == 0)
//         return n
// }


// console.log(filter([1, 2], (n) => n % 2 == 0))

function map (v, f){
    let aux = [];
    v.forEach(element => {
        aux.push(f(element));        
    });
        console.log(aux)
}

const func = (s) => s.length

// map(["abc", "def"], (e) => e.charAt(0))
map(["abc", "OPaiÉBom"], func)
