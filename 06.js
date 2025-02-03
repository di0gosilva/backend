function soma(x, y) {
    console.log(`${x} + ${y} = ${x + y}`)
}

function subtracao(x, y) {
    console.log(`${x} - ${y} = ${x - y}`)
}

function multiplicacao(x, y) {
    console.log(`${x} * ${y} = ${x * y}`)
}

function divisao(x, y) {
    console.log(`${x} / ${y} = ${x / y}`)
}

function calcula(x, y) {
    soma(x, y)
    subtracao(x, y)
    multiplicacao(x, y)
    divisao(x, y)
}

calcula(10, 2)