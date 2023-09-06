//1.  exibe o valor desde q seja menor q 5, adicionando 1 ao valor a cada vez q ele passa pelo loop
//no console
//2
//4

//2. exibe os números maiores que 18 na lista
//sim
/* for(let numero of listas){
console.log(i)

}

*/


//3. ****

//exercício de código

/*let perguntaBichos = Number(prompt("Quantos bichinhos de estimação você tem?"));
let animal = []

if(perguntaBichos === 0){
    console.log("Que pena! Você pode adotar um pet")
}else{
for(i = 0; i < perguntaBichos; i++){
    let nomesBichinhos = prompt("Insira o nome de cada um")
    animal.push(nomesBichinhos)
}
console.log(animal)
}
*/

let arrayOriginal = [1, 2, 3, 4]


imprimeNumero = () => {
for(let numero of arrayOriginal){
    console.log(numero)
}
}


imprimeNumero()

vezesDez = () => {
    for(let numero of arrayOriginal){
        console.log(numero * 10)
    }
}

vezesDez()

pares = () => {
    for(let numero of arrayOriginal){
        if(numero % 2 == 0){
            console.log(numero)
        }
    }
}

pares()

arrayMaker = () => {
    let elementoIndex = []
    for(let numero of arrayOriginal){
        let frase = `O elemento do index ${numero} é ${arrayOriginal.indexOf(numero)}`
        elementoIndex.push(frase)
    
    }
    console.log(elementoIndex)
}

arrayMaker()

const maiorValor = 4
for(let i = 1; i <arrayOriginal.length; i++){
  let valorAtual = arrayOriginal[i]
  
  if(valorAtual>= maiorValor) {
    maiorValor == valorAtual
  }
}

const menorValor = 1
for(let i = 4; i >arrayOriginal.length; i--){
  let valorAtual = arrayOriginal[i]
  
  if(valorAtual<= menorValor) {
    menorValor == valorAtual
  }
}

console.log("O maior valor é", maiorValor, "e o menor valor é", menorValor)