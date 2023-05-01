const betweenNegatives = (arr) => {
    while (arr[0] >= 0) {
        arr.shift()
    }

    while (arr[arr.length - 1] >= 0) {
        arr.pop()
    }

    if (arr.length <= 1) return -1

    let greatestSum = 0
    arr.reduce((acc, curr) => {
        if (curr >= 0) {
            if (acc + curr > greatestSum) {
                greatestSum = acc + curr
            }
            return acc + curr
        }
        if (curr < 0) {
            return 0
        }
    }, 0)
    return greatestSum
}

console.log(betweenNegatives([4, -1, 5, 3, 2, -2, 6, 7, 8, 9]))