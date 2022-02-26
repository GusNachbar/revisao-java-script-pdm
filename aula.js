//começando
//const são constantes que não mudanod de valor (Ecmascript 6)
const nome2 = "Glauber";
const idade2 = 34;

// não é possível reassociar um valor para uma const
//nome2 = "Josefa"

//let declara uma variável (Ecmascript 6)

let a = 2;
let b = 'abc'
let endereco = `Rua K, 12`

//Avaliar com base no principio do menor privilégio

//var declara uma variável
var c = 2 + 3
var d = "abcd"

// 1.1. Permite redefinição de variável a partir da declaração (dupla passagem)
var linguagem = "Javascript"
console.log("Aprendendo " + linguagem)
var linguagem = "Java"
console.log("Aprendendo " + linguagem)

// 1.2. Permite a utilização da variável antes do momento de sua declaração
var idade = 18
console.log ("Oi " + nome)
if (idade >= 18){
    var nome = "João"
    console.log("Parabens, " + nome + ". Você pode dirigir.")
    console.log(`Parabens, ${nome}. Você pode
    dirigir`)
    console.log('Parabéns ${GUSTAVO MONSTRO}')
}
console.log("Até mais, " + nome)

//Diferença entre == e ===. Em resumo, NUNCA USE == 
console.log(null == null)
console.log(1 == [1])
console.log(true == 1)
console.log(1 == '1')
console.log(1 === '1')
console.log([] == false)
console.log([] == null)
console.log([] == [])
const f = []
const g = f
console.log(f == g)
console.log(NaN == NaN)
console.log('b' + 'a' + + 'a' + 'a') // <-------------------- Teste essa linha Gustavo