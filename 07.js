function numeroPrimo(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            console.log(`${i} é primo`)
        } else {
            console.log(`${i} não é primo`)
        }
    }
}

numeroPrimo(11)