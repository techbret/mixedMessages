let hat = ''
function toCamelCase(str){
    let camel = str.split('');
    let cased = [];
    for (let i in camel) {
        if (camel[i] === "_" || camel[i] === "-" ) {
        i = parseFloat(i) + 1;
        let bett = camel[i].toUpperCase();
        hat = i
        cased.push(bett);
      } else if (i != hat) {
        cased.push(camel[i])
      }
    }
    return cased.join('')
  }

  console.log(toCamelCase("test_underscore"))