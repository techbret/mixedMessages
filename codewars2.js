
//This is the code I wrote//
function findNb(m) {
    let result = 1;
    let counter = 1;
    while (counter > 0) {
      let cube = 0;
      cube = counter * counter * counter;
      counter = counter + 1;
      result = cube + result;
      if (result === m) {
          console.log(cube)
      } else if (result > m) {
          break;
      }
    }
    if ((result - 1) === m) {
        return counter - 1
    } else {
        return -1
    }
}

console.log(findNb(40539911473216))


//this is a better version of my code, condensed)//
function findNb1(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }

console.log(findNb1(40539911473216))