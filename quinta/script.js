const produto1 = {
  id: "p001",
  preco: 50
}

const produto2 = {
  id: "p002",
  preco: 0
}

// regra de que todo produto nunca é negativo
// só que pode ser 0, e a gente tem que validar

// console.log(produto1.preco > 0)
// console.log(produto2.preco > 0)

console.log("O número 1 é :", Boolean(1)) // true ou false?
console.log("O número 0 é :", Boolean(0)) // true ou false?

/*

  Quais valores o JS faz coerção booleana para false:

    0
    -0
    null
    undefined
    NaN
    ""
    false

*/

const a = 5 // true
const b = 10 // true

console.log(5 && 10) // E (quando que o E é verdadeiro?)
console.log(5 || 10) // OU (quando que o OU é falso?)

const nome = "Yuzo"
console.log(`Oi, meu nome é ${nome}`)

console.log("bananinha".length)
console.log("bananinha".toUpperCase())
console.log("yuzoemail.com".includes("@"))

const numeros = [10, 20, 30]
const nomes = ["Hilbert", "Bianca", "Luan"]

numeros.push(40)
console.log(numeros)

const pessoas = [
  {
    id: "p001",
    nome: "Hilbert",
    seguidores: 1000
  },
  {
    nome: "Bianca"
  },
  {
    nome: "Luan"
  }
]

// key: value
const xicara = {
  cor: "azul",
  pesoEmKg: 0.5,
  material: "cerâmica",
  quebrar: () => {
    console.log("Crak!!!")
  },
  encher: () => {
    console.log("encheu de água")
  }
}

const key = "encher"

console.log(xicara.cor)
console.log(xicara.material)
console.log(xicara.quebrar())

console.log(xicara["cor"])
console.log(xicara["material"])
console.log(xicara["quebrar"]())

console.log(xicara[key]())
console.log(xicara[`${key}`]())

const arr = [] // ponteiro de memória X
const obj = {} // ponteiro de memória Y

arr.push(1) // arr [1]

// ponteiro de memória Z
const x = [0, ...arr, 1] // x [1] e arr [1]

console.log(x)

x.push(2) // x [1, 2] e arr[1]

console.log(arr, x) // [1], [1,2]

const produto = {
  id: "p001",
  nome: "notebook gamer",
  preco: 8000
}

const carrinho = []

carrinho.push({ ...produto, quantidade: 1 })

// catalogo
console.log(produto)

// carrinho
console.log(carrinho[0])

const pais = "Brasil"

switch (pais) {
  case "Brasil": // Caso pais seja IGUAL à Brasil
    console.log("Brasileiro(a)") // Ação executada se pais for Brasil
    break
  case "EUA":
    console.log("Estadunidense")
    break
  case "Canadá":
    console.log("Canadense")
    break
  default:
    // Ação a ser executada se pais for diferente de Brasil, EUA ou 
    // Canadá
    console.log("Nacionalidade não identificada")
    break
}

// let querContinuar = true

// while(querContinuar) {
//   console.log("round executado")
  
//   querContinuar = prompt("Quer continuar? Digite algo para sim, deixe vazio para não.")
// }

const array = ["azul", "vermelho", "amarelo"]


for(let i = 0; i < array.length; i++){
	console.log(`Item ${i}: ${array[i]}`)
}

// i = 0 ; 0 < 3 ; 0 + 1
console.log(`Item 0: "azul"`)

// i = 1 ; 1 < 3 ; 1 + 1
console.log(`Item 1: "vermelho"`)

// i = 2 ; 2 < 3 ; 2 + 1
console.log(`Item 2: "amarelo"`)

// i = 3 ; 3 < 3 

for (let item of array) {
  console.log(item)
}