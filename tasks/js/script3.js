function getRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function* getRandomQntOfEvenNumbers(qntOfNumbers) {
    let arr = []
    for (let i = 0; i < qntOfNumbers; i++) {
        const randomNum = getRandomNum(1, 100)
        if (randomNum % 2 === 0) arr.push(randomNum)
        else qntOfNumbers++
    }
    yield arr
}

for (const num of getRandomQntOfEvenNumbers(5)) {
    res1.innerText = `[${num}]`
}
