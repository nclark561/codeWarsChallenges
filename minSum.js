const arras = [[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]];

function sumOfMinimums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.min(...arr[i]);
    };
    return sum;
};

console.log(sumOfMinimums(arras));