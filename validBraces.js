function validBraces(braces){
    let arr = []
    for(let i=0;i < braces.length; i++){
      if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        arr.push(braces[i])
      } else{
        if(arr.length === 0) return false
        let lastValue = arr[arr.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
          arr.pop()
        } else {
          break;
        }
      }
    }
    return arr.length === 0
  }

console.log(validBraces('(){}[]'))