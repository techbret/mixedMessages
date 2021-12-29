// let arr = [10, 20, 30, 40];
// let sum = arr.reduce(function (a, b) {
//   return a + b;
// }, 0);
// console.log(sum); // Output: 100

function rowSumOddNumbers(n) {
    let arr2 =[];
    let result = 0

    //this gives me how many rows there are all together
    while (n > 0) {
        arr2.push(n);
        n--
    }

    //total number of rows added together. ex.. 5 = 5 + 4 + 3 + 2 + 1 = 15
    //meaning HOW MANY NUMBERS TOTAL THERE ARE!
    let sum = arr2.reduce(function (a, b) {
        return a + b;
    }, 0);


    // REWRITE count adds up to sum while num adds to sume of num, and num +
let num = 1
let count = 0
while (num > 0) {
    if (num % 2 !== 0) {
        result = result + num;
        count++
    }
    num++
    if (count === sum) {
        break;
    }
}


    // //this should yield the total added together of array    
    // let sum2 = arr.reduce(function (a,b) {
    //     return a + b;
    // }, 0);
    // return sum2

    return result
}


console.log(rowSumOddNumbers(1000))



//while result + 