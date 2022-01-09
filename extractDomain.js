/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
*/

function domainName(url){

//Depending on the domain type these three variables will split the url so that it returns a hostname and the top level domain//   
    let domain = url.replace(/^www\./,'').split('.').slice(0,-1).join('.');
    let domain2 = url.replace(/(^\w+:|^)\/\//, '');
    let domain3 = url.split('w.').pop()

    //this code removes the top level domain (ex .com, .org), by isolating the '.' and removing everything that comes after it    
    const regex = /\.(.*)/i
    domain = domain.replace(regex, '');
    domain2 = domain2.replace(regex, '');
    domain3 = domain3.replace(regex, '')
    
    //this code runs a statement to determing what type of domain string was passed throught the function and gives the proper variable
    if (domain2 === 'www' && domain !== 'http://www' && domain !== 'https://www') {
        return domain
    } else if (domain === 'http://www' || domain === 'https://www') {
        return domain3
    } else {
        return domain2
    }
  }



