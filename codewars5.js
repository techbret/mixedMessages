function solution(str, ending){
    let arr = str.split('');
    let arr2 = ending.split('');
    if (arr.pop() === arr2.pop() || arr2.length === 0) {
        return str.includes(ending)
    } else {
        return false
    }  
  }


  console.log(solution('abc', 'ab'))