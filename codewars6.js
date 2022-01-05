//My Solution

function solution(str){
    let arr = []

    if (str.length % 2 === 0) {
        for (let i in str) {
            if (i % 2 === 0) {
                let second = i++
                arr.push(str[second] + str[i]);
            }
        }
        return arr

    } else {
        str = str + "_"
        for (let i in str) {
            if (i % 2 === 0) {
                let sec = i++;
                arr.push(str[sec] + str[i])
            }
        }
        return arr
    }

   
}




//Best Solution

function solution1(s){
    return (s+"_").match(/.{2}/g)||[]
 }

 console.log(solution('abcde'))