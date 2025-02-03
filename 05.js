function contarPosENeg(array) {
    let totalPositivos = []
    let totalNegativos = []

    for (let num of array) {
        if (num > 0) {
            totalPositivos.push(num)
        } else {
            totalNegativos.push(num)
        }
    }

    console.log(`Total positivos: ${totalPositivos.length}`)
    console.log(`Total negativos: ${totalNegativos.length}`)    
}

let array = [-5, -12, -5, 6, -52]
contarPosENeg(array)