const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const alpha2 = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet2 = alpha2.map((x) => String.fromCharCode(x).toLowerCase());



let findMissingLetter = array => {
    let string = array.join("");
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i+ 1) - string.charCodeAt(i) != 1) {
        return String.fromCharCode(string.charCodeAt(i) + 1)
      }
    }
  }

console.log(findMissingLetter(["E","F","G","H","J"]))








// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
