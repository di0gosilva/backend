let total = 0 
function somaTotalNumeros(num) {
    for (let i = 0; i <= num; i++) {    
        total += i
    }
    return total
}

console.log(somaTotalNumeros(5))