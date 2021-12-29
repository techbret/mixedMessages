const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const alpha2 = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet2 = alpha2.map((x) => String.fromCharCode(x).toLowerCase());



function findMissingLetter(array)
{
    if (array[1] === array[1].toUpperCase()) {
        let firstLetter = array[0]
        let newArr = []
        for (let i in array) {
            for (let j in alphabet) {
                if (array[i] === alphabet[j]) {
                    newArr.push(alphabet[j])
                }
                break
            }
            return newArr;
        }
    } else {
        console.log("Is Lowercase")
    }
  return ' ';
}


console.log(findMissingLetter(["E","F","G","H","J"]))








// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
